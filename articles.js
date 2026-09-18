// 課文資料：對應《當代中文課程》第一冊第 7-10 課的主題與程度自寫的短文（不是課本原文），
// 供初級（約 A2）華語學生做「讀短文、學生字、學文法」的練習。
//
// 每篇文章包含：
// - text：短文本身（純短文，不含拼音，拼音由 pinyin.js 在畫面渲染時即時產生）
// - vocab：從該篇文章原文挑出的生字（word 必須是文章原文中真的出現的字詞，由 test/logic.test.js 檢查），
//   meaning 是簡明中文解釋，meaningEn 是英文對照，examples 是兩句另外新寫的範例句子（不是抄文章裡的句子）
// - grammar：這篇文章對應的一個文法重點（跟該課主題相關，非課本逐字內容），pattern 是句型公式，
//   examples 是另外新寫的例句（不是抄文章裡的句子）

const ARTICLES = [
  {
    id: "l7-ktv",
    lessonNumber: 7,
    lessonLabel: "第7課",
    category: "第7課．早上九點去KTV",
    title: "星期五晚上去KTV",
    titleEn: "Going to KTV on Friday Night",
    text:
      "小美，你星期五晚上有空嗎？我們幾個同學要去KTV唱歌，你要不要一起來？\n" +
      "好啊，幾點開始？\n" +
      "晚上七點半，我們約在捷運站門口見面，八點一起走進去。\n" +
      "沒問題，我七點二十就會到了。",
    vocab: [
      {
        word: "有空",
        meaning: "有空閒的時間，可以做別的事。",
        meaningEn: "to be free / to have time",
        examples: ["你明天下午有空嗎？", "我今天晚上沒有空，改天再約。"],
      },
      {
        word: "一起",
        meaning: "兩個人或很多人一起做同一件事。",
        meaningEn: "together",
        examples: ["我們一起去吃晚飯吧。", "他跟妹妹一起去上學。"],
      },
      {
        word: "見面",
        meaning: "約好時間、地點，兩個人碰面。",
        meaningEn: "to meet up (with someone)",
        examples: ["我們明天在學校見面吧。", "好久沒見面了，我很想你。"],
      },
      {
        word: "開始",
        meaning: "一件事情的第一步，事情要進行了。",
        meaningEn: "to begin / to start",
        examples: ["電影八點開始。", "我們下個星期開始上課。"],
      },
      {
        word: "捷運站",
        meaning: "搭捷運上車、下車的地方。",
        meaningEn: "MRT station",
        examples: ["我家附近就有捷運站，很方便。", "請問最近的捷運站怎麼走？"],
      },
      {
        word: "沒問題",
        meaning: "答應對方，表示自己可以做到。",
        meaningEn: "no problem / sure",
        examples: ["明天幫你搬東西，沒問題！", "這件事交給我，沒問題的。"],
      },
    ],
    grammar: {
      pattern: "要不要＋VP？",
      patternEn: "yào bu yào + VP? — invitation / yes-no question",
      explanation:
        "用「要不要」問對方願不願意一起做某件事，是很常用的邀約句型；回答可以說「好啊」或「不要」。",
      explanationEn:
        "Use “要不要 (want or not)” to invite someone, or to ask a yes/no question about doing something together. Answer with “好啊 (sure)” or “不要 (no thanks)”.",
      examples: [
        "你要不要一起去看電影？",
        "我們要不要先吃飯，再去看電影？",
        "晚上有空嗎？要不要一起去KTV唱歌？",
      ],
    },
  },
  {
    id: "l8-train",
    lessonNumber: 8,
    lessonLabel: "第8課",
    category: "第8課．坐火車去臺南",
    title: "坐火車去臺南玩",
    titleEn: "Taking the Train to Tainan",
    text:
      "這個週末我打算坐火車去臺南玩。高鐵比火車快，可是火車票比高鐵便宜很多，所以我還是坐火車去。\n" +
      "你打算怎麼玩？\n" +
      "我先去吃臺南小吃，再去老街走走，最後再去看夕陽，應該會很好玩。",
    vocab: [
      {
        word: "打算",
        meaning: "已經想好，還沒做，但是準備要做的事。",
        meaningEn: "to plan (to do something)",
        examples: ["你這個週末打算做什麼？", "我打算明年去日本旅行。"],
      },
      {
        word: "高鐵",
        meaning: "速度很快的火車，票價通常比較貴。",
        meaningEn: "high-speed rail (HSR)",
        examples: ["坐高鐵從臺北到高雄只要一個半小時。", "高鐵票比一般火車票貴一點。"],
      },
      {
        word: "小吃",
        meaning: "分量不大、價格不貴的地方特色食物。",
        meaningEn: "local snack food",
        examples: ["夜市裡有很多好吃的小吃。", "臺南的小吃在臺灣很有名。"],
      },
      {
        word: "老街",
        meaning: "有很多老房子、有歷史的街道。",
        meaningEn: "old street (historic shopping street)",
        examples: ["假日老街上有很多遊客。", "這條老街已經有一百多年的歷史。"],
      },
      {
        word: "夕陽",
        meaning: "傍晚時，太陽快要下山的樣子。",
        meaningEn: "sunset",
        examples: ["海邊的夕陽很美。", "我們爬山去看夕陽吧。"],
      },
      {
        word: "好玩",
        meaning: "做這件事讓人覺得開心、有趣。",
        meaningEn: "fun / enjoyable",
        examples: ["這個遊戲很好玩，你也試試看。", "臺灣有很多好玩的地方。"],
      },
    ],
    grammar: {
      pattern: "A 比 B＋形容詞",
      patternEn: "A bǐ B + adjective — A is more [adj] than B",
      explanation:
        "用「比」比較兩件事物，「比」後面接被比較的對象，最後加形容詞，說明 A 在這個方面比 B 更怎麼樣。",
      explanationEn:
        "Use “比 (bǐ)” to compare two things. Put the thing being compared after 比, then add an adjective to say A is more [adjective] than B.",
      examples: [
        "高鐵比火車快，可是也比火車貴。",
        "今天比昨天冷一點。",
        "弟弟比哥哥高。",
      ],
    },
  },
  {
    id: "l9-vacation",
    lessonNumber: 9,
    lessonLabel: "第9課",
    category: "第9課．放假去哪裡玩？",
    title: "放假打算去哪裡？",
    titleEn: "Where Are You Going on Vacation?",
    text:
      "暑假你打算去哪裡玩？\n" +
      "我打算去日本玩五天，除了東京以外，還想去京都看看。你呢？\n" +
      "我還沒決定，可能會留在家裡休息，也可能跟朋友一起去海邊。\n" +
      "放假去玩真開心，希望你也玩得愉快！",
    vocab: [
      {
        word: "暑假",
        meaning: "夏天學校放假、不用上課的期間。",
        meaningEn: "summer vacation",
        examples: ["暑假有兩個月，你有什麼計畫？", "今年暑假我要打工賺錢。"],
      },
      {
        word: "除了",
        meaning: "不算某個東西或情況以外，另外還有別的。",
        meaningEn: "besides / in addition to",
        examples: ["除了中文以外，他還會說日文。", "除了下雨以外，什麼都不能阻止我們出門。"],
      },
      {
        word: "決定",
        meaning: "經過考慮以後，選出一個答案。",
        meaningEn: "to decide",
        examples: ["我還沒決定要買哪一件衣服。", "他決定明年去美國留學。"],
      },
      {
        word: "休息",
        meaning: "停下手邊的事，讓身體或心情放鬆一下。",
        meaningEn: "to rest",
        examples: ["工作了一整天，我需要好好休息。", "醫生說感冒的時候要多休息。"],
      },
      {
        word: "海邊",
        meaning: "靠近海的地方。",
        meaningEn: "seaside / beach",
        examples: ["夏天很多人喜歡去海邊玩水。", "海邊的風景很漂亮。"],
      },
      {
        word: "愉快",
        meaning: "心情很好、很開心的樣子。",
        meaningEn: "pleasant / happy",
        examples: ["祝你旅途愉快！", "今天的聚會大家都玩得很愉快。"],
      },
    ],
    grammar: {
      pattern: "Subject＋打算＋VP",
      patternEn: "Subject + dǎsuàn (plan to) + VP",
      explanation:
        "「打算」用來說明還沒發生、但已經想好要做的事，後面直接加動詞或動詞短語，不需要再加別的助詞。",
      explanationEn:
        "“打算” expresses something you have already decided to do in the future, but haven’t done yet. Put a verb (phrase) directly after it.",
      examples: [
        "我打算下個月搬家。",
        "你這個週末打算做什麼？",
        "他打算學中文，以後去臺灣工作。",
      ],
    },
  },
  {
    id: "l10-fruit",
    lessonNumber: 10,
    lessonLabel: "第10課",
    category: "第10課．臺灣的水果很好吃",
    title: "臺灣的水果真好吃",
    titleEn: "Taiwanese Fruit Is Really Delicious",
    text:
      "臺灣的水果又多又好吃，夏天的芒果又甜又香，很多人都喜歡。\n" +
      "荔枝也很受歡迎，可是荔枝比芒果貴一點。\n" +
      "我覺得鳳梨是臺灣最好吃的水果，又酸又甜，吃完還會想再吃。\n" +
      "下次去水果店，我們一起買一些回家吧！",
    vocab: [
      {
        word: "芒果",
        meaning: "夏天常見的黃色水果，味道很甜。",
        meaningEn: "mango",
        examples: ["這杯芒果冰看起來好好吃。", "芒果盛產的季節在夏天。"],
      },
      {
        word: "荔枝",
        meaning: "外皮紅紅的、裡面是白色果肉的夏天水果。",
        meaningEn: "lychee",
        examples: ["荔枝的產季不長，大概只有一個多月。", "他一口氣吃了十顆荔枝。"],
      },
      {
        word: "鳳梨",
        meaning: "外皮有刺、味道又酸又甜的水果。",
        meaningEn: "pineapple",
        examples: ["鳳梨酥是臺灣很有名的伴手禮。", "這家店的鳳梨汁很受歡迎。"],
      },
      {
        word: "受歡迎",
        meaning: "很多人喜歡。",
        meaningEn: "popular / well-liked",
        examples: ["這位老師教得很好，在學生中很受歡迎。", "這款手機很新，一上市就很受歡迎。"],
      },
      {
        word: "水果店",
        meaning: "專門賣水果的商店。",
        meaningEn: "fruit shop",
        examples: ["巷口新開了一家水果店。", "我常去那家水果店買當季水果。"],
      },
      {
        word: "香",
        meaning: "聞起來或吃起來的味道很好聞、很誘人。",
        meaningEn: "fragrant / aromatic",
        examples: ["這碗湯聞起來好香。", "剛煮好的白飯很香。"],
      },
    ],
    grammar: {
      pattern: "Subject＋又＋形容詞1＋又＋形容詞2",
      patternEn: "Subject + yòu + adj1 + yòu + adj2 — both [adj1] and [adj2]",
      explanation:
        "用「又...又...」同時形容一樣東西的兩種特色，兩個形容詞通常意思相關或可以並列。",
      explanationEn:
        "Use “又...又...” to describe two qualities of the same thing at the same time. The two adjectives are usually related or can naturally go together.",
      examples: [
        "這家餐廳的菜又便宜又好吃。",
        "今天天氣又熱又濕。",
        "這隻小狗又可愛又聰明。",
      ],
    },
  },
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = { ARTICLES };
} else {
  window.ARTICLES = ARTICLES;
}
