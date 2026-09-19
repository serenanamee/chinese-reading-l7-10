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

  // 把一段純中文（不含英數標點）轉成多個 <ruby> 區塊，每個字各自獨立一個 <ruby>，
  // 而不是共用一個 <ruby> 塞很多個 <rt>。
  // 為什麼要每字一個 <ruby>：多字共用一個 <ruby>、裡面塞多個 <rt> 時，沒有明確的 <rb> 告訴瀏覽器
  // 「這個 <rt> 對應哪個字」，瀏覽器只能用內建規則去猜配對，猜錯的時候相鄰兩個字的拼音會黏在一起、
  // 中間沒有間隔（例如「捷運站門口」曾經渲染成 zhànmén 黏成一串，即使拼音資料本身是對的）。
  // 每個字各自一個 <ruby> 之後，配對永遠是一對一、不會有歧義，瀏覽器排版時每個 <ruby> 也會各自
  // 保留足夠寬度容納自己的拼音，相鄰字的拼音就不會互相覆蓋。
  function hanRunToRuby(run) {
    const pinyinArr = global.pinyinPro.pinyin(run, { type: "array" });
    const chars = Array.from(run);
    let out = "";
    for (let i = 0; i < chars.length; i++) {
      const py = pinyinArr[i] || "";
      out += "<ruby>" + escapeHtml(chars[i]) + "<rt>" + escapeHtml(py) + "</rt></ruby>";
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

  const ZhPinyin = { init, renderMarkup, toPlainPinyin, escapeHtml, debounce };

  if (typeof module !== "undefined" && module.exports) {
    module.exports = ZhPinyin;
  } else {
    global.ZhPinyin = ZhPinyin;
  }
})(typeof window !== "undefined" ? window : global);
