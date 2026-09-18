// 輕量邏輯測試（純 Node，不引入測試框架，與專案「無 build 流程」的慣例一致）。
// 執行方式：node test/logic.test.js
// 涵蓋：拼音轉換、課文資料（生字對得上原文、文法欄位完整）、偏好設定儲存層。

const assert = require("assert");
const path = require("path");

let failures = 0;
let passed = 0;

function check(name, fn) {
  try {
    fn();
    passed++;
    console.log("  ok - " + name);
  } catch (err) {
    failures++;
    console.error("  FAIL - " + name);
    console.error("    " + err.message);
  }
}

class MemoryStorage {
  constructor() {
    this.store = new Map();
  }
  getItem(key) {
    return this.store.has(key) ? this.store.get(key) : null;
  }
  setItem(key, value) {
    this.store.set(key, String(value));
  }
  removeItem(key) {
    this.store.delete(key);
  }
  clear() {
    this.store.clear();
  }
}

global.window = global;
global.localStorage = new MemoryStorage();
global.pinyinPro = require(path.join(__dirname, "..", "vendor", "pinyin-pro.min.js"));

const ZhPinyin = require(path.join(__dirname, "..", "pinyin.js"));
const ZhPrefs = require(path.join(__dirname, "..", "prefs-store.js"));
const { ARTICLES } = require(path.join(__dirname, "..", "articles.js"));
const { ILLUSTRATIONS } = require(path.join(__dirname, "..", "illustrations.js"));

console.log("== 拼音轉換 ==");

check("一般詞語轉換正確且帶聲調符號", () => {
  assert.strictEqual(ZhPinyin.toPlainPinyin("打算"), "dǎ suàn");
  assert.strictEqual(ZhPinyin.toPlainPinyin("水果"), "shuǐ guǒ");
});

check("多音字校正：火車 讀 huǒ chē，不是 huǒ jū", () => {
  assert.strictEqual(ZhPinyin.toPlainPinyin("火車"), "huǒ chē");
  assert.strictEqual(ZhPinyin.toPlainPinyin("火車票"), "huǒ chē piào");
});

check("多音字校正：有空 讀 yǒu kòng，不是 yǒu kōng", () => {
  assert.strictEqual(ZhPinyin.toPlainPinyin("有空"), "yǒu kòng");
});

check("多音字校正：還（還/也的意思）讀 hái，不是 huán", () => {
  assert.strictEqual(ZhPinyin.toPlainPinyin("我還沒決定"), "wǒ hái méi jué dìng");
  assert.strictEqual(ZhPinyin.toPlainPinyin("還想去"), "hái xiǎng qù");
});

check("多音字校正：得（結構助詞）讀輕聲 de，不是 dé", () => {
  assert.strictEqual(ZhPinyin.toPlainPinyin("玩得愉快"), "wán de yú kuài");
  assert.strictEqual(ZhPinyin.toPlainPinyin("覺得"), "jué de");
});

check("renderMarkup 對中文逐字輸出 ruby/rt", () => {
  const html = ZhPinyin.renderMarkup("水果");
  assert.ok(html.includes("<ruby>"));
  assert.ok(html.includes('aria-hidden="true"'));
});

console.log("== 課文資料 ==");

check("課文剛好對應 4 課（第7-10課），id／title 唯一、非空", () => {
  assert.strictEqual(ARTICLES.length, 4);
  const ids = new Set();
  const lessons = new Set();
  ARTICLES.forEach((a) => {
    assert.ok(!ids.has(a.id), "重複的 id: " + a.id);
    ids.add(a.id);
    assert.ok(!lessons.has(a.lessonNumber), "重複的課別: " + a.lessonNumber);
    lessons.add(a.lessonNumber);
    assert.ok(a.title && a.title.trim(), "缺少 title: " + a.id);
    assert.ok(a.text && a.text.trim(), "缺少課文內容: " + a.id);
    assert.ok(a.lessonNumber >= 7 && a.lessonNumber <= 10, "課別應在第7-10課: " + a.id);
  });
});

check("每篇課文至少有 4 個生字，word／meaning／meaningEn／examples 皆非空，examples 剛好 2 句", () => {
  ARTICLES.forEach((a) => {
    assert.ok(a.vocab && a.vocab.length >= 4, "生字太少: " + a.id);
    a.vocab.forEach((v) => {
      assert.ok(v.word && v.word.trim(), "缺少 word: " + a.id);
      assert.ok(v.meaning && v.meaning.trim(), "缺少 meaning: " + a.id);
      assert.ok(v.meaningEn && v.meaningEn.trim(), "缺少 meaningEn: " + a.id);
      assert.strictEqual(v.examples.length, 2, "examples 應該剛好 2 句: " + a.id + " / " + v.word);
      v.examples.forEach((ex) => assert.ok(ex && ex.trim(), "缺少 example 內容: " + a.id + " / " + v.word));
    });
  });
});

check("生字必須真的出現在該篇課文原文裡", () => {
  ARTICLES.forEach((a) => {
    a.vocab.forEach((v) => {
      assert.ok(
        a.text.includes(v.word),
        "生字「" + v.word + "」沒有出現在課文「" + a.id + "」的原文中"
      );
    });
  });
});

check("同一篇課文的生字彼此不重複", () => {
  ARTICLES.forEach((a) => {
    const words = new Set();
    a.vocab.forEach((v) => {
      assert.ok(!words.has(v.word), "重複的生字「" + v.word + "」在課文: " + a.id);
      words.add(v.word);
    });
  });
});

check("生字例句不是照抄課文原句，兩句例句也不重複", () => {
  ARTICLES.forEach((a) => {
    a.vocab.forEach((v) => {
      assert.notStrictEqual(v.examples[0], v.examples[1], "兩句範例句子重複，生字「" + v.word + "」在課文: " + a.id);
      v.examples.forEach((ex) => {
        assert.ok(
          !a.text.includes(ex),
          "範例句子跟課文原句重複，生字「" + v.word + "」在課文: " + a.id
        );
      });
    });
  });
});

check("每篇課文都有完整的文法重點（pattern／explanation／至少 2 句例句），例句不照抄課文原句", () => {
  ARTICLES.forEach((a) => {
    const g = a.grammar;
    assert.ok(g, "缺少 grammar: " + a.id);
    assert.ok(g.pattern && g.pattern.trim(), "缺少 grammar.pattern: " + a.id);
    assert.ok(g.explanation && g.explanation.trim(), "缺少 grammar.explanation: " + a.id);
    assert.ok(g.explanationEn && g.explanationEn.trim(), "缺少 grammar.explanationEn: " + a.id);
    assert.ok(Array.isArray(g.examples) && g.examples.length >= 2, "文法例句至少要 2 句: " + a.id);
    g.examples.forEach((ex) => {
      assert.ok(ex && ex.trim(), "文法例句內容不能空: " + a.id);
      assert.ok(!a.text.includes(ex), "文法例句跟課文原句重複: " + a.id);
    });
  });
});

check("生字與例句、文法例句都能安全轉成拼音 HTML（不噴錯）", () => {
  ARTICLES.forEach((a) => {
    a.vocab.forEach((v) => {
      assert.ok(ZhPinyin.renderMarkup(v.word).length > 0);
      v.examples.forEach((ex) => assert.ok(ZhPinyin.renderMarkup(ex).length > 0));
    });
    a.grammar.examples.forEach((ex) => assert.ok(ZhPinyin.renderMarkup(ex).length > 0));
  });
});

console.log("== 看圖說故事 ==");

check("每篇課文都有看圖說故事，至少 3 個引導問題，zh／en 皆非空", () => {
  ARTICLES.forEach((a) => {
    assert.ok(a.pictureStory && Array.isArray(a.pictureStory.questions), "缺少 pictureStory: " + a.id);
    assert.ok(a.pictureStory.questions.length >= 3, "引導問題太少: " + a.id);
    a.pictureStory.questions.forEach((q) => {
      assert.ok(q.zh && q.zh.trim(), "缺少問題中文: " + a.id);
      assert.ok(q.en && q.en.trim(), "缺少問題英文: " + a.id);
    });
  });
});

check("每篇課文都對應一張插畫，且插畫是合法的 <svg> 標記", () => {
  ARTICLES.forEach((a) => {
    const svg = ILLUSTRATIONS[a.id];
    assert.ok(svg && svg.trim(), "缺少插畫: " + a.id);
    assert.ok(svg.includes("<svg"), "插畫內容不是 svg: " + a.id);
    assert.ok(svg.includes("</svg>"), "插畫內容缺少結尾標籤: " + a.id);
  });
});

check("引導問題都能安全轉成拼音 HTML（不噴錯）", () => {
  ARTICLES.forEach((a) => {
    a.pictureStory.questions.forEach((q) => {
      assert.ok(ZhPinyin.renderMarkup(q.zh).length > 0);
    });
  });
});

console.log("== 偏好設定儲存層 ==");

check("字級預設為 md，儲存後可正確讀回", () => {
  assert.strictEqual(ZhPrefs.getFontSize(), "md");
  ZhPrefs.saveFontSize("lg");
  assert.strictEqual(ZhPrefs.getFontSize(), "lg");
  ZhPrefs.saveFontSize("sm");
  assert.strictEqual(ZhPrefs.getFontSize(), "sm");
});

check("字級只接受 sm／md／lg，其餘值不寫入", () => {
  ZhPrefs.saveFontSize("sm");
  const before = ZhPrefs.getFontSize();
  const ok = ZhPrefs.saveFontSize("huge");
  assert.strictEqual(ok, false);
  assert.strictEqual(ZhPrefs.getFontSize(), before);
});

check("拼音顯示預設為 true，儲存後可正確讀回", () => {
  assert.strictEqual(ZhPrefs.getPinyinVisible(), true);
  ZhPrefs.savePinyinVisible(false);
  assert.strictEqual(ZhPrefs.getPinyinVisible(), false);
  ZhPrefs.savePinyinVisible(true);
  assert.strictEqual(ZhPrefs.getPinyinVisible(), true);
});

console.log("\n" + passed + " passed, " + failures + " failed");
process.exit(failures > 0 ? 1 : 0);
