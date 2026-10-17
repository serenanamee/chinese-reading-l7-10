// 初級中文閱讀教室：讀短文、看生字、學文法，對應《當代中文課程》第一冊第 7-10 課程度。
// 短文與生字、文法資料在 articles.js，拼音由 pinyin.js 即時產生，字級／拼音顯示偏好與「已上過」勾選由 prefs-store.js 存取。
// 這裡只負責 DOM 渲染與事件綁定。

(function () {
  "use strict";

  const picker = document.getElementById("picker");
  const pickerBtn = document.getElementById("picker-btn");
  const pickerBtnText = document.getElementById("picker-btn-text");
  const pickerPanel = document.getElementById("picker-panel");
  const pickerList = document.getElementById("picker-list");
  const taughtProgress = document.getElementById("taught-progress");
  const taughtReset = document.getElementById("taught-reset");
  const currentTaught = document.getElementById("current-taught");
  const currentTaughtBox = document.getElementById("current-taught-box");
  const currentTaughtText = document.getElementById("current-taught-text");
  const lessonBadge = document.getElementById("lesson-badge");
  const articleTitle = document.getElementById("article-title");
  const output = document.getElementById("article-output");
  const outputPlaceholder = document.getElementById("output-placeholder");
  const sizeBtns = Array.from(document.querySelectorAll(".size-btn"));
  const btnPinyinToggle = document.getElementById("btn-pinyin-toggle");
  const vocabList = document.getElementById("vocab-list");
  const pictureSection = document.getElementById("picture-section");
  const pictureIllustration = document.getElementById("picture-illustration");
  const pictureQuestions = document.getElementById("picture-questions");
  const grammarSection = document.getElementById("grammar-section");
  const grammarPattern = document.getElementById("grammar-pattern");
  const grammarPatternEn = document.getElementById("grammar-pattern-en");
  const grammarExplanation = document.getElementById("grammar-explanation");
  const grammarExplanationEn = document.getElementById("grammar-explanation-en");
  const grammarExampleList = document.getElementById("grammar-example-list");

  let currentArticle = null;
  let taughtIds = new Set(ZhPrefs.getTaughtIds());
  const PICKER_PLACEHOLDER = "— 選擇課文 —";

  function setZh(el, text) {
    el.innerHTML = ZhPinyin.renderMarkup(text);
  }

  function setEn(el, text) {
    el.textContent = text;
  }

  // ---------- 靜態文字（標題、標籤） ----------
  function renderStaticText() {
    setZh(document.getElementById("page-title"), "中文閱讀教室");
    setZh(
      document.getElementById("page-subtitle"),
      "對應《當代中文課程》第一冊第 7-10 課程度：讀短文、學生字、練文法。"
    );
    setZh(document.getElementById("article-label"), "選擇課文");
    setZh(document.getElementById("size-label"), "字級");
    setZh(document.getElementById("vocab-label"), "生字重點");
    setZh(document.getElementById("picture-label"), "看圖說故事");
    setZh(document.getElementById("grammar-label"), "文法重點");
    setZh(document.getElementById("grammar-example-label"), "例句");
    setZh(outputPlaceholder, "請從上方選擇一篇課文。");
  }

  // ---------- 課文選單（可打勾標記「已上過」） ----------
  // 原生 <select> 無法放勾選框、也不能可靠地替選項換顏色（macOS 會忽略 option 樣式），
  // 所以改成自訂的下拉面板：點標題載入課文，點左邊勾選框標記已上過。
  function renderArticleOptions() {
    pickerList.innerHTML = "";
    let groupEl = null;
    let currentCategory = null;
    ARTICLES.forEach((a) => {
      if (a.category !== currentCategory) {
        currentCategory = a.category;
        groupEl = document.createElement("div");
        groupEl.className = "picker-group";
        groupEl.setAttribute("role", "group");
        groupEl.setAttribute("aria-label", a.category);
        const head = document.createElement("div");
        head.className = "picker-group-head";
        head.dataset.category = a.category;
        groupEl.appendChild(head);
        pickerList.appendChild(groupEl);
      }
      const row = document.createElement("div");
      row.className = "picker-row";
      row.dataset.id = a.id;

      const box = document.createElement("input");
      box.type = "checkbox";
      box.className = "picker-check";
      box.dataset.id = a.id;
      box.setAttribute("aria-label", "標記「" + a.title + "」已上過");

      const item = document.createElement("button");
      item.type = "button";
      item.className = "picker-item";
      item.dataset.id = a.id;
      item.textContent = a.title;

      row.appendChild(box);
      row.appendChild(item);
      groupEl.appendChild(row);
    });
    refreshTaughtUI();
  }

  function refreshTaughtUI() {
    pickerList.querySelectorAll(".picker-row").forEach((row) => {
      const taught = taughtIds.has(row.dataset.id);
      row.classList.toggle("is-taught", taught);
      row.classList.toggle("is-current", !!currentArticle && row.dataset.id === currentArticle.id);
      row.querySelector(".picker-check").checked = taught;
    });
    pickerList.querySelectorAll(".picker-group").forEach((groupEl) => {
      const rows = groupEl.querySelectorAll(".picker-row");
      const done = groupEl.querySelectorAll(".picker-row.is-taught").length;
      const head = groupEl.querySelector(".picker-group-head");
      head.textContent = head.dataset.category + "　" + done + "/" + rows.length;
      groupEl.classList.toggle("is-all-taught", done === rows.length);
    });

    const total = ARTICLES.length;
    const done = ARTICLES.filter((a) => taughtIds.has(a.id)).length;
    taughtProgress.textContent = "已上過 " + done + " / " + total;
    taughtReset.hidden = done === 0;

    if (currentArticle) {
      const taught = taughtIds.has(currentArticle.id);
      currentTaught.hidden = false;
      currentTaught.classList.toggle("is-taught", taught);
      currentTaughtBox.checked = taught;
      currentTaughtText.textContent = taught ? "這課已上過 ✓" : "這課已上過";
      pickerBtnText.textContent = currentArticle.title;
      pickerBtn.classList.toggle("is-taught", taught);
    } else {
      currentTaught.hidden = true;
      pickerBtnText.textContent = PICKER_PLACEHOLDER;
      pickerBtn.classList.remove("is-taught");
    }
  }

  function setTaught(id, taught) {
    if (taught) taughtIds.add(id);
    else taughtIds.delete(id);
    ZhPrefs.saveTaughtIds(Array.from(taughtIds));
    refreshTaughtUI();
  }

  function openPicker() {
    pickerPanel.hidden = false;
    pickerBtn.setAttribute("aria-expanded", "true");
    const target =
      (currentArticle && pickerList.querySelector('.picker-item[data-id="' + currentArticle.id + '"]')) ||
      pickerList.querySelector(".picker-item");
    if (target) {
      target.scrollIntoView({ block: "nearest" });
      target.focus();
    }
  }

  function closePicker(returnFocus) {
    if (pickerPanel.hidden) return;
    pickerPanel.hidden = true;
    pickerBtn.setAttribute("aria-expanded", "false");
    if (returnFocus) pickerBtn.focus();
  }

  // ---------- 課文內容 ----------
  function renderArticle(article) {
    currentArticle = article || null;
    refreshTaughtUI();
    if (!article) {
      lessonBadge.textContent = "";
      articleTitle.innerHTML = "";
      output.innerHTML = "";
      outputPlaceholder.hidden = false;
      vocabList.innerHTML = "";
      pictureSection.hidden = true;
      grammarSection.hidden = true;
      return;
    }
    outputPlaceholder.hidden = true;
    lessonBadge.textContent = article.lessonLabel;
    setZh(articleTitle, article.title);
    output.innerHTML = ZhPinyin.renderMarkup(article.text);
    renderVocab(article.vocab);
    renderPictureStory(article.id, article.pictureStory);
    renderGrammar(article.grammar);
  }

  // ---------- 看圖說故事 ----------
  function renderPictureStory(articleId, pictureStory) {
    if (!pictureStory) {
      pictureSection.hidden = true;
      return;
    }
    pictureSection.hidden = false;
    // 插畫是本檔案固定提供的信任內容（非使用者輸入），可直接塞 innerHTML
    pictureIllustration.innerHTML = ILLUSTRATIONS[articleId] || "";
    pictureQuestions.innerHTML = "";
    pictureStory.questions.forEach((q) => {
      const li = document.createElement("li");
      const zhEl = document.createElement("div");
      zhEl.className = "question-zh";
      setZh(zhEl, q.zh);
      const enEl = document.createElement("div");
      enEl.className = "question-en";
      setEn(enEl, q.en);
      li.appendChild(zhEl);
      li.appendChild(enEl);
      pictureQuestions.appendChild(li);
    });
  }

  function renderVocab(vocab) {
    vocabList.innerHTML = "";
    if (!vocab || !vocab.length) return;
    vocab.forEach((v) => {
      const item = document.createElement("div");
      item.className = "vocab-item";

      const wordEl = document.createElement("div");
      wordEl.className = "vocab-word";
      setZh(wordEl, v.word);

      const meaningEl = document.createElement("div");
      meaningEl.className = "vocab-meaning";
      setZh(meaningEl, v.meaning);

      const meaningEnEl = document.createElement("div");
      meaningEnEl.className = "vocab-meaning-en";
      setEn(meaningEnEl, v.meaningEn);

      const exampleWrap = document.createElement("div");
      exampleWrap.className = "vocab-example";
      const exampleLabel = document.createElement("div");
      exampleLabel.className = "vocab-example-label";
      setZh(exampleLabel, "例句");
      const exampleList = document.createElement("ol");
      exampleList.className = "vocab-example-list";
      v.examples.forEach((ex) => {
        const li = document.createElement("li");
        setZh(li, ex);
        exampleList.appendChild(li);
      });
      exampleWrap.appendChild(exampleLabel);
      exampleWrap.appendChild(exampleList);

      item.appendChild(wordEl);
      item.appendChild(meaningEl);
      item.appendChild(meaningEnEl);
      item.appendChild(exampleWrap);
      vocabList.appendChild(item);
    });
  }

  function renderGrammar(grammar) {
    if (!grammar) {
      grammarSection.hidden = true;
      return;
    }
    grammarSection.hidden = false;
    setZh(grammarPattern, grammar.pattern);
    setEn(grammarPatternEn, grammar.patternEn);
    setZh(grammarExplanation, grammar.explanation);
    setEn(grammarExplanationEn, grammar.explanationEn);
    grammarExampleList.innerHTML = "";
    grammar.examples.forEach((ex) => {
      const li = document.createElement("li");
      setZh(li, ex);
      grammarExampleList.appendChild(li);
    });
  }

  pickerBtn.addEventListener("click", function () {
    if (pickerPanel.hidden) openPicker();
    else closePicker(false);
  });

  pickerList.addEventListener("click", function (e) {
    const item = e.target.closest(".picker-item");
    if (!item) return;
    const article = ARTICLES.find((a) => a.id === item.dataset.id);
    if (!article) return;
    renderArticle(article);
    closePicker(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  pickerList.addEventListener("change", function (e) {
    if (!e.target.classList.contains("picker-check")) return;
    setTaught(e.target.dataset.id, e.target.checked);
  });

  currentTaughtBox.addEventListener("change", function () {
    if (currentArticle) setTaught(currentArticle.id, currentTaughtBox.checked);
  });

  taughtReset.addEventListener("click", function () {
    const ok = window.confirm("確定要清除所有「已上過」的勾選嗎？");
    if (!ok) return;
    taughtIds = new Set();
    ZhPrefs.saveTaughtIds([]);
    refreshTaughtUI();
  });

  document.addEventListener("click", function (e) {
    if (!picker.contains(e.target)) closePicker(false);
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !pickerPanel.hidden) closePicker(true);
  });

  // ---------- 字級切換 ----------
  function applyFontSize(size) {
    document.body.classList.remove("size-sm", "size-md", "size-lg");
    document.body.classList.add("size-" + size);
    sizeBtns.forEach((b) => {
      const active = b.dataset.size === size;
      b.classList.toggle("is-active", active);
      b.setAttribute("aria-pressed", String(active));
    });
  }

  sizeBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const size = btn.dataset.size;
      applyFontSize(size);
      ZhPrefs.saveFontSize(size);
    });
  });

  // ---------- 拼音顯示切換 ----------
  function applyPinyinVisible(visible) {
    document.body.classList.toggle("pinyin-hidden", !visible);
    btnPinyinToggle.setAttribute("aria-pressed", String(visible));
    setZh(btnPinyinToggle, visible ? "隱藏拼音" : "顯示拼音");
  }

  btnPinyinToggle.addEventListener("click", function () {
    const next = !ZhPrefs.getPinyinVisible();
    ZhPrefs.savePinyinVisible(next);
    applyPinyinVisible(next);
  });

  // ---------- 初始化 ----------
  ZhPinyin.init();
  // 把每篇課文的生字都登記成「詞」，這樣它們在課文內文裡出現時，拼音也會整詞連在一起顯示
  // （不只是在生字卡片裡），例如「捷運站」不會被拆成「捷／運／站」三個獨立音節顯示。
  ZhPinyin.registerWords(ARTICLES.flatMap((a) => (a.vocab || []).map((v) => v.word)));
  renderStaticText();
  renderArticleOptions();
  applyFontSize(ZhPrefs.getFontSize());
  applyPinyinVisible(ZhPrefs.getPinyinVisible());

  const firstArticle = ARTICLES[0];
  if (firstArticle) renderArticle(firstArticle);
})();
