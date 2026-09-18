// 偏好設定儲存層：獨立封裝 localStorage 存取，畫面元件不要直接呼叫 localStorage。
// 只存字級與拼音顯示偏好，不存文章內容（文章資料固定在 articles.js）。

(function (global) {
  const SIZE_KEY = "zhReadingLab:fontSize";
  const PINYIN_KEY = "zhReadingLab:pinyinVisible";
  const VALID_SIZES = ["sm", "md", "lg"];

  function getFontSize() {
    try {
      const v = global.localStorage.getItem(SIZE_KEY);
      return VALID_SIZES.includes(v) ? v : "md";
    } catch (e) {
      return "md";
    }
  }

  function saveFontSize(size) {
    if (!VALID_SIZES.includes(size)) return false;
    try {
      global.localStorage.setItem(SIZE_KEY, size);
      return true;
    } catch (e) {
      return false;
    }
  }

  function getPinyinVisible() {
    try {
      const v = global.localStorage.getItem(PINYIN_KEY);
      return v === null ? true : v === "1";
    } catch (e) {
      return true;
    }
  }

  function savePinyinVisible(visible) {
    try {
      global.localStorage.setItem(PINYIN_KEY, visible ? "1" : "0");
      return true;
    } catch (e) {
      return false;
    }
  }

  const ZhPrefs = { getFontSize, saveFontSize, getPinyinVisible, savePinyinVisible };

  if (typeof module !== "undefined" && module.exports) {
    module.exports = ZhPrefs;
  } else {
    global.ZhPrefs = ZhPrefs;
  }
})(typeof window !== "undefined" ? window : global);
