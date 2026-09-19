// 拼音轉換 helper：封裝 pinyin-pro，提供「中文 + 上方帶聲調拼音」的 HTML 產生器。
// 所有畫面上的中文都應該透過 ZhPinyin.renderMarkup() 顯示，不要各自呼叫 pinyin-pro 或手刻 ruby HTML，
// 避免拼音規則各地不一致。
//
// 為什麼自己組 ruby HTML，而不是直接用 pinyin-pro 內建的 html()：
// pinyin-pro 的 html() 對「非中文片段」（英文、標點）不會做 HTML escape，直接塞進 innerHTML 有 XSS 風險。
// 這裡固定用 pinyin-pro 的 pinyin() 陣列模式（只取純中文片段做逐字比對），其餘片段一律走 escapeHtml。

(function (global) {
  const HAN_RUN = /[㐀-䶿一-鿿]+/;
  const HAN_OR_NOT = /[㐀-䶿一-鿿]+|[^㐀-䶿一-鿿]+/g;

  let initialized = false;

  // 固定題庫／常見詞的人工校正：pinyin-pro 內建字典在這些詞上的預設讀音不符合現代口語。
  const PINYIN_CORRECTIONS = {
    "什麼": "shén me",
    "怎麼": "zěn me",
    "這麼": "zhè me",
    "那麼": "nà me",
    "多麼": "duō me",
    "嗎": "ma",
    "還是": "hái shì",
    "為什麼": "wèi shén me",
    "因為": "yīn wèi",
    "銀行": "yín háng",
    // 「車」套件預設幾乎所有詞都讀成 jū（象棋棋子讀音），只有「火車」剛好對；
    // 這裡整字校正為 chē，「火車／火車票」保留明確條目方便閱讀，其實已經涵蓋在單字校正裡
    "車": "chē",
    "火車": "huǒ chē",
    "火車票": "huǒ chē piào",
    "有空": "yǒu kòng",
    "沒有空": "méi yǒu kòng",
    // 「還」在這裡的內容裡一律當「還是/也」的副詞用（hái），不是「歸還」的 huán
    "還": "hái",
    // 「得」在這裡的內容裡一律當結構助詞用（輕聲 de，如「玩得愉快」「覺得」），不是「得到」的 dé
    "得": "de",
    // 「只」在這裡的內容裡一律當「只是/只會/只要」的副詞用（zhǐ），不是量詞「一隻貓」的 zhī
    "只": "zhǐ",
    // 「幾」在這裡的內容裡一律當「幾件/這幾年」的疑問／約數用（jǐ），「幾乎」另外整詞校正為 jī，優先比對
    "幾": "jǐ",
    "幾乎": "jī hū",
    "勉強": "miǎn qiǎng",
    "長輩": "zhǎng bèi",
    // 「鞋子」的「子」應讀輕聲 zi（跟「筷子」「孩子」一樣），套件預設誤讀成第三聲 zǐ
    "鞋子": "xié zi",
  };

  // 常見的多字詞：讓這些詞的拼音在畫面上連在一起顯示（一個 <ruby> 一個 <rt>），
  // 而不是每個字分開各自的拼音。這裡先放最常見的代名詞／時間詞／招呼語／連接詞，
  // 課文裡的生字（articles.js／samples.js 的 vocab word）另外由 registerWords() 加進來，
  // 沒被登記的詞仍然會逐字顯示拼音（安全的預設行為，只是不會連在一起，不會有拼錯或黏字的問題）。
  const COMMON_WORDS = [
    "我們", "你們", "他們", "她們", "咱們", "人們",
    "台灣", "台北", "台南", "台中", "中國", "美國", "日本", "了解", "比較",
    "你好", "妳好", "早安", "午安", "晚安", "再見", "謝謝", "不客氣", "對不起", "沒關係",
    "現在", "已經", "馬上", "剛才", "今天", "明天", "昨天", "今年", "去年", "明年",
    "早上", "中午", "下午", "晚上", "週末", "星期",
    "覺得", "知道", "喜歡", "希望", "可以", "應該", "可能", "打算", "決定", "需要",
    "因為", "所以", "但是", "可是", "如果", "雖然", "不過", "而且", "還是", "或是",
    "朋友", "家人", "同學", "老師", "同事", "老闆",
    "地方", "時候", "東西", "事情", "問題",
    "一起", "一樣", "一定", "一直", "已經", "常常", "通常", "有時候", "不小心",
    "什麼", "怎麼", "為什麼", "多少", "哪裡", "哪個",
    "捷運", "捷運站", "高鐵", "火車", "公車", "計程車", "門口", "門票",
  ];

  const WORD_SET = new Set(COMMON_WORDS);
  let maxWordLen = 0;
  function addWord(word) {
    const len = Array.from(word).length;
    if (len < 2) return;
    WORD_SET.add(word);
    if (len > maxWordLen) maxWordLen = len;
  }
  COMMON_WORDS.forEach(addWord);
  Object.keys(PINYIN_CORRECTIONS).forEach(addWord);

  // 讓呼叫端（app.js）把課文生字表（vocab word）登記進來，這樣生字在課文內文裡出現時，
  // 拼音也會跟生字卡片一樣整詞連在一起顯示，不用每篇文章手動列一次。
  function registerWords(words) {
    (words || []).forEach(addWord);
  }

  // 在 chars（單一漢字陣列）的 start 位置，從已登記的詞表裡找「最長」的相符詞，
  // 找不到就回傳 1（退回單字顯示，安全預設值）。
  function longestWordMatchLength(chars, start) {
    const limit = Math.min(maxWordLen, chars.length - start);
    for (let len = limit; len >= 2; len--) {
      const candidate = chars.slice(start, start + len).join("");
      if (WORD_SET.has(candidate)) return len;
    }
    return 1;
  }

  function init() {
    if (initialized) return;
    if (!global.pinyinPro || typeof global.pinyinPro.customPinyin !== "function") {
      throw new Error("pinyin-pro 尚未載入，請確認 vendor/pinyin-pro.min.js 有在此檔案之前被引入");
    }
    global.pinyinPro.customPinyin(PINYIN_CORRECTIONS);
    initialized = true;
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  // 把一段純中文（不含英數標點）轉成多個 <ruby> 區塊。
  //
  // 每個「詞」（登記在 WORD_SET 裡的已知詞）用一個 <ruby> 包住整個詞、配一個合併的 <rt>
  // （例如「捷運站」→ <ruby>捷運站<rt>jié yùn zhàn</rt></ruby>），這樣同一個詞的拼音會連在一起顯示，
  // 符合漢語拼音正詞法「詞之間留空格、詞內部不留空格」的慣例，讀起來才會知道哪些字是一個詞。
  // 沒登記過的字（多數是還沒被收錄的詞）安全地退回每字一個 <ruby>——這正是之前修過的做法：
  // 多字共用一個 <ruby> 塞多個 <rt> 時，沒有 <rb> 告訴瀏覽器配對關係，猜錯了相鄰字拼音會黏在一起
  // 沒有間隔（例如「捷運站門口」曾經整段黏成一串）。每個 <ruby> 只包一個「已知詞」或一個單字，
  // 配對永遠明確、不會有歧義。
  function hanRunToRuby(run) {
    const pinyinArr = global.pinyinPro.pinyin(run, { type: "array" });
    const chars = Array.from(run);
    let out = "";
    let i = 0;
    while (i < chars.length) {
      const len = longestWordMatchLength(chars, i);
      const base = chars.slice(i, i + len).join("");
      const py = pinyinArr.slice(i, i + len).join(" ");
      out += "<ruby>" + escapeHtml(base) + "<rt>" + escapeHtml(py) + "</rt></ruby>";
      i += len;
    }
    return out;
  }

  // 產生「視覺上中文字＋上方拼音，但螢幕閱讀器只唸一次原始文字」的 HTML 片段。
  function buildVisualHtml(text) {
    if (!text) return "";
    const segments = text.match(HAN_OR_NOT) || [];
    let html = "";
    for (const seg of segments) {
      if (HAN_RUN.test(seg)) {
        html += hanRunToRuby(seg);
      } else {
        html += escapeHtml(seg);
      }
    }
    return html;
  }

  // 對外主要 API：回傳可直接塞進 innerHTML 的完整標記（含無障礙處理）。
  function renderMarkup(text) {
    init();
    const safeText = text == null ? "" : text;
    if (!HAN_RUN.test(safeText)) {
      return escapeHtml(safeText);
    }
    const visual = buildVisualHtml(safeText);
    const plain = escapeHtml(safeText);
    return (
      '<span class="zh-ruby-visual" aria-hidden="true">' + visual + "</span>" +
      '<span class="sr-only">' + plain + "</span>"
    );
  }

  // 純文字拼音（不含 HTML），用於 aria-label 等需要一整串拼音字串的情境。
  function toPlainPinyin(text) {
    init();
    if (!text) return "";
    return global.pinyinPro.pinyin(text, { nonZh: "consecutive" });
  }

  function debounce(fn, wait) {
    let timer = null;
    return function debounced(...args) {
      clearTimeout(timer);
      timer = setTimeout(() => fn.apply(this, args), wait);
    };
  }

  const ZhPinyin = { init, renderMarkup, toPlainPinyin, escapeHtml, debounce, registerWords };

  if (typeof module !== "undefined" && module.exports) {
    module.exports = ZhPinyin;
  } else {
    global.ZhPinyin = ZhPinyin;
  }
})(typeof window !== "undefined" ? window : global);
