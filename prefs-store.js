// 偏好設定儲存層：獨立封裝 localStorage 存取，畫面元件不要直接呼叫 localStorage。
// 只存字級、拼音顯示偏好與「已上過」勾選，不存文章內容（文章資料固定在 articles.js）。

(function (global) {
  const SIZE_KEY = "zhReadingLab:fontSize";
  const PINYIN_KEY = "zhReadingLab:pinyinVisible";
  const TAUGHT_KEY = "zhReadingLab:taughtIds";
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

  // 已上過的課文 id 清單（老師打勾標記用），存成 JSON 陣列。
  function getTaughtIds() {
    try {
      const parsed = JSON.parse(global.localStorage.getItem(TAUGHT_KEY) || "[]");
      return Array.isArray(parsed) ? parsed.filter((id) => typeof id === "string") : [];
    } catch (e) {
      return [];
    }
  }

  function saveTaughtIds(ids) {
    if (!Array.isArray(ids)) return false;
    try {
      const clean = Array.from(new Set(ids.filter((id) => typeof id === "string" && id)));
      if (clean.length) {
        global.localStorage.setItem(TAUGHT_KEY, JSON.stringify(clean));
      } else {
        global.localStorage.removeItem(TAUGHT_KEY);
      }
      return true;
    } catch (e) {
      return false;
    }
  }

  const ZhPrefs = {
    getFontSize,
    saveFontSize,
    getPinyinVisible,
    savePinyinVisible,
    getTaughtIds,
    saveTaughtIds,
  };

  if (typeof module !== "undefined" && module.exports) {
    module.exports = ZhPrefs;
  } else {
    global.ZhPrefs = ZhPrefs;
  }
})(typeof window !== "undefined" ? window : global);
