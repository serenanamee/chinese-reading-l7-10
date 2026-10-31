// 課文資料：兩個程度分層，內容皆自寫、非課本或其他來源原文。
//
// tier: "basic" — 對應《當代中文課程》第一冊第 7-10 課程度（約 A2），含 grammar 與 pictureStory。
// tier: "culture" — 進階一階（約 A2+／B1-，銜接第二冊程度），主題是文化差異與生活習慣觀察，
//   格式參考 chinese-chat-grid（純敘述短文＋生字重點，不含 grammar／pictureStory）。
//
// 每篇文章包含：
// - text：短文本身（純短文，不含拼音，拼音由 pinyin.js 在畫面渲染時即時產生）
// - vocab：從該篇文章原文挑出的生字（word 必須是文章原文中真的出現的字詞，由 test/logic.test.js 檢查），
//   meaning 是簡明中文解釋，meaningEn 是英文對照，examples 是兩句另外新寫的範例句子（不是抄文章裡的句子）
// - grammar（僅 basic 層）：這篇文章對應的一個文法重點，pattern 是句型公式，examples 是另外新寫的例句
// - pictureStory（僅 basic 層）：看圖說故事引導問題，對應 illustrations.js 的插畫
// - speaking（選填，兩層都可用）：口語練習。phrases 是課文裡出現的口語說法（zh 去掉「……」與句尾標點後必須出現在原文中），
//   附中英文使用說明；rolePlay 是給學生兩兩練習的口說任務

const ARTICLES = [
  {
    id: "l7-ktv",
    tier: "basic",
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
        meaning: "有時間，可以做別的事。",
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
        meaning: "說好時間、地方，兩個人在一起。",
        meaningEn: "to meet up (with someone)",
        examples: ["我們明天在學校見面吧。", "好久沒見面了，我很想你。"],
      },
      {
        word: "開始",
        meaning: "一件事的第一步。",
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
        meaning: "我可以，我會做。",
        meaningEn: "no problem / sure",
        examples: ["明天幫你搬東西，沒問題！", "這件事交給我，沒問題的。"],
      },
    ],
    pictureStory: {
      questions: [
        {
          zh: "圖片裡有哪些人？他們在哪裡？",
          en: "Who is in the picture? Where are they?",
        },
        {
          zh: "現在是幾點？他們打算幾點見面？",
          en: "What time is it now? What time do they plan to meet?",
        },
        {
          zh: "用「要不要」問一問朋友，你們要不要一起做什麼？",
          en: "Use “要不要” to ask a friend if they want to do something together.",
        },
      ],
    },
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
    tier: "basic",
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
        meaning: "不貴、很好吃的東西，每個地方都不一樣。",
        meaningEn: "local snack food",
        examples: ["夜市裡有很多好吃的小吃。", "臺南的小吃在臺灣很有名。"],
      },
      {
        word: "老街",
        meaning: "有很多老房子的街。",
        meaningEn: "old street (historic shopping street)",
        examples: ["假日老街上有很多遊客。", "這條老街已經有一百多年的歷史。"],
      },
      {
        word: "夕陽",
        meaning: "晚上以前，太陽快要下山的時候。",
        meaningEn: "sunset",
        examples: ["海邊的夕陽很美。", "我們爬山去看夕陽吧。"],
      },
      {
        word: "好玩",
        meaning: "很有意思，做的時候很開心。",
        meaningEn: "fun / enjoyable",
        examples: ["這個遊戲很好玩，你也試試看。", "臺灣有很多好玩的地方。"],
      },
    ],
    pictureStory: {
      questions: [
        {
          zh: "他們要坐什麼交通工具去臺南？",
          en: "What transportation are they taking to Tainan?",
        },
        {
          zh: "高鐵和火車，哪一個比較快？哪一個比較便宜？用「比」說一句話。",
          en: "Which is faster, HSR or the train? Which is cheaper? Use “比” to make a sentence.",
        },
        {
          zh: "到了臺南以後，他們會先做什麼？再做什麼？",
          en: "After arriving in Tainan, what will they do first? What next?",
        },
      ],
    },
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
    tier: "basic",
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
        meaning: "夏天學校放假，不用上課的時候。",
        meaningEn: "summer vacation",
        examples: ["暑假有兩個月，你有什麼計畫？", "今年暑假我要打工賺錢。"],
      },
      {
        word: "除了",
        meaning: "這個以外，還有別的。",
        meaningEn: "besides / in addition to",
        examples: ["除了中文以外，他還會說日文。", "除了芒果以外，我也喜歡鳳梨。"],
      },
      {
        word: "決定",
        meaning: "想好了，選一個。",
        meaningEn: "to decide",
        examples: ["我還沒決定要買哪一件衣服。", "他決定明年去美國留學。"],
      },
      {
        word: "休息",
        meaning: "不工作，坐一下、睡一下。",
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
        examples: ["祝你週末愉快！", "今天大家都很愉快。"],
      },
    ],
    pictureStory: {
      questions: [
        {
          zh: "圖片裡的人在想什麼？他還沒決定什麼事？",
          en: "What is the person in the picture worrying about? What haven’t they decided yet?",
        },
        {
          zh: "除了圖片裡的地方以外，你還想去哪裡玩？",
          en: "Besides the places in the picture, where else would you like to go?",
        },
        {
          zh: "用「打算」說一說你的暑假計畫。",
          en: "Use “打算” to talk about your summer vacation plan.",
        },
      ],
    },
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
    tier: "basic",
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
        examples: ["這杯芒果冰看起來好好吃。", "夏天的芒果最好吃。"],
      },
      {
        word: "荔枝",
        meaning: "外面紅紅的、裡面白白的夏天水果。",
        meaningEn: "lychee",
        examples: ["荔枝只有夏天有。", "他一個人吃了十個荔枝。"],
      },
      {
        word: "鳳梨",
        meaning: "外面有刺、又酸又甜的水果。",
        meaningEn: "pineapple",
        examples: ["鳳梨酥是臺灣很有名的點心。", "這家店的鳳梨汁很受歡迎。"],
      },
      {
        word: "受歡迎",
        meaning: "很多人喜歡。",
        meaningEn: "popular / well-liked",
        examples: ["這家店很受歡迎，每天都有很多人。", "這個歌手很受歡迎。"],
      },
      {
        word: "水果店",
        meaning: "賣水果的店。",
        meaningEn: "fruit shop",
        examples: ["我家旁邊有一家水果店。", "我常去那家水果店買芒果。"],
      },
      {
        word: "香",
        meaning: "味道很好，很想吃。",
        meaningEn: "fragrant / aromatic",
        examples: ["這碗湯聞起來好香。", "剛煮好的白飯很香。"],
      },
    ],
    pictureStory: {
      questions: [
        {
          zh: "水果攤上有哪些水果？你認得幾種？",
          en: "What fruits are on the stand? How many can you recognize?",
        },
        {
          zh: "哪一種水果又甜又香？哪一種又酸又甜？",
          en: "Which fruit is sweet and fragrant? Which one is sour and sweet?",
        },
        {
          zh: "你最喜歡吃什麼水果？用「又...又...」形容它。",
          en: "What fruit do you like best? Use “又...又...” to describe it.",
        },
      ],
    },
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
  // ---------- tier: culture（文化探索，進階一階，銜接第二冊程度） ----------
  {
    id: "c1-greet-hug",
    tier: "culture",
    category: "文化探索．打招呼與稱呼",
    title: "見面要不要擁抱？",
    titleEn: "Should You Hug When You Meet?",
    text:
      "在有些國家，朋友見面的時候會擁抱，因為很高興看到朋友。" +
      "可是在台灣，很多人見面只點頭，說「你好」，他們覺得擁抱太親密了。" +
      "每個國家的習慣不一樣，沒有對，也沒有錯。知道別人的習慣，你就不會覺得奇怪了。",
    vocab: [
      {
        word: "擁抱",
        meaning: "兩個人用手抱在一起。",
        meaningEn: "to hug / to embrace",
        examples: ["在機場，媽媽給了我一個擁抱。", "好朋友見面，常常會擁抱。"],
      },
      {
        word: "親密",
        meaning: "兩個人很好、很近。",
        meaningEn: "intimate / close",
        examples: ["他們兩個是很親密的朋友。", "我跟姐姐很親密。"],
      },
      {
        word: "習慣",
        meaning: "常常做、每天都這樣做的事。",
        meaningEn: "habit / custom",
        examples: ["我習慣早上喝一杯咖啡。", "每個國家的習慣都不太一樣。"],
      },
      {
        word: "點頭",
        meaning: "頭往下動一下，意思是「好」或「你好」。",
        meaningEn: "to nod",
        examples: ["老師問「懂了嗎？」，他點頭。", "他看到我，就點頭說「你好」。"],
      },
    ],
  },
  {
    id: "c2-greet-title",
    tier: "culture",
    category: "文化探索．打招呼與稱呼",
    title: "怎麼稱呼比較禮貌？",
    titleEn: "What’s the Polite Way to Address Someone?",
    text:
      "在台灣，稱呼別人的時候，常常要說職稱，像是「王老師」、「陳經理」。" +
      "只叫名字，有人會覺得不禮貌。可是在有些國家，同事都叫老闆的名字，覺得這樣比較親近。" +
      "所以認識新朋友的時候，最好先問問看：「我應該怎麼稱呼您？」",
    vocab: [
      {
        word: "稱呼",
        meaning: "叫別人的方法，例如「王老師」。",
        meaningEn: "form of address / to address someone",
        examples: ["我不知道怎麼稱呼他。", "你可以稱呼我小王。"],
      },
      {
        word: "職稱",
        meaning: "工作的名字，例如經理、老師。",
        meaningEn: "job title",
        examples: ["名片上有他的名字和職稱。", "他的職稱是經理。"],
      },
      {
        word: "禮貌",
        meaning: "對別人很好，會說「請」、「謝謝」。",
        meaningEn: "polite / courteous",
        examples: ["跟老師說話要有禮貌。", "他是一個很有禮貌的學生。"],
      },
      {
        word: "親近",
        meaning: "兩個人很好，常常在一起。",
        meaningEn: "close / friendly",
        examples: ["她跟班上的同學都很親近。", "常常一起吃飯，我們就更親近了。"],
      },
    ],
  },
  {
    id: "c3-gift-number",
    tier: "culture",
    category: "文化探索．送禮與拜訪",
    title: "送禮物要注意什麼？",
    titleEn: "What to Watch Out for When Giving Gifts",
    text:
      "在台灣，送禮物的時候，數字也有意義。送禮物通常不送四個，因為「四」聽起來很像「死」。" +
      "也很少人送鐘，因為「送鐘」聽起來像「送終」，意思是人死了。" +
      "你可能覺得這些習慣很奇怪，可是知道了以後，就不會不小心送錯禮物了。",
    vocab: [
      {
        word: "意義",
        meaning: "一件事真正的意思。",
        meaningEn: "meaning / significance",
        examples: ["這個禮物對我有特別的意義。", "這個數字有什麼意義？"],
      },
      {
        word: "通常",
        meaning: "很多時候都是這樣。",
        meaningEn: "usually / normally",
        examples: ["他通常七點起床。", "台灣的夏天通常很熱。"],
      },
      {
        word: "奇怪",
        meaning: "跟平常不一樣，你不懂為什麼。",
        meaningEn: "strange / odd",
        examples: ["這件事很奇怪。", "他今天很奇怪，都不說話。"],
      },
      {
        word: "不小心",
        meaning: "不是想這樣做，可是做錯了。",
        meaningEn: "carelessly / by accident",
        examples: ["對不起，我不小心拿了你的筆。", "他不小心說錯了朋友的名字。"],
      },
    ],
  },
  {
    id: "c4-visit-shoes",
    tier: "culture",
    category: "文化探索．送禮與拜訪",
    title: "去朋友家作客",
    titleEn: "Visiting a Friend’s Home",
    text:
      "第一次去朋友家作客，可以帶一點小禮物，像是水果或點心。" +
      "進門以前，最好先問一下要不要脫鞋子，因為很多台灣人在家裡不穿鞋。" +
      "吃飯的時候，主人常常說「多吃一點！」。如果你已經吃飽了，可以說：「謝謝，我吃飽了。」這樣很客氣。",
    vocab: [
      {
        word: "作客",
        meaning: "去別人家，當客人。",
        meaningEn: "to be a guest (at someone’s home)",
        examples: ["週末我要去阿姨家作客。", "第一次去老師家作客，我有點緊張。"],
      },
      {
        word: "脫鞋子",
        meaning: "鞋子不穿了，放在門口。",
        meaningEn: "to take off one’s shoes",
        examples: ["進門以前，請脫鞋子。", "在日本，進門以前也要脫鞋子。"],
      },
      {
        word: "主人",
        meaning: "在家裡請大家吃飯的人。",
        meaningEn: "host",
        examples: ["主人做了很多好吃的菜。", "主人很高興我們來他家。"],
      },
      {
        word: "客氣",
        meaning: "對別人很有禮貌。",
        meaningEn: "polite / modest",
        examples: ["不用客氣，請多吃一點。", "他對每個人都很客氣。"],
      },
    ],
  },
  {
    id: "c5-food-chopsticks",
    tier: "culture",
    category: "文化探索．吃飯禮儀",
    title: "筷子不能怎麼用？",
    titleEn: "Chopstick Etiquette: What Not to Do",
    text:
      "用筷子吃飯的時候，有幾件事最好不要做。" +
      "第一，筷子不要插在飯上，因為這樣很像拜拜用的香。第二，不要用筷子指別人，這樣不禮貌。" +
      "如果你不小心做錯了，說一聲「對不起」就好，大家都會理解。",
    vocab: [
      {
        word: "筷子",
        meaning: "吃飯用的兩根長長的東西。",
        meaningEn: "chopsticks",
        examples: ["他還不太會用筷子。", "請給我一雙筷子。"],
      },
      {
        word: "插",
        meaning: "長長的東西放到裡面去。",
        meaningEn: "to insert / to stick into",
        examples: ["花插在杯子裡，很好看。", "牙刷插在杯子裡。"],
      },
      {
        word: "指",
        meaning: "用手對著一個人或一個地方。",
        meaningEn: "to point (at/toward)",
        examples: ["他指著地圖說：「我們在這裡。」", "不要用手指別人。"],
      },
      {
        word: "理解",
        meaning: "懂別人的意思。",
        meaningEn: "to understand",
        examples: ["謝謝你的理解。", "這句話我不太理解。"],
      },
    ],
  },
  {
    id: "c6-food-bill",
    tier: "culture",
    category: "文化探索．吃飯禮儀",
    title: "誰付錢？",
    titleEn: "Who Pays the Bill?",
    text:
      "在台灣，朋友一起吃飯，常常搶著付帳，大家都想請客。" +
      "在有些國家，大家吃完飯，常常自己付自己的。" +
      "如果這次朋友請客，下次你可以請他，這樣大家都不會不好意思。",
    vocab: [
      {
        word: "搶",
        meaning: "很快去做，想比別人先做。",
        meaningEn: "to rush to do / to compete for",
        examples: ["大家都搶著說話。", "他每次都搶著付錢。"],
      },
      {
        word: "付帳",
        meaning: "吃完飯以後給錢。",
        meaningEn: "to pay the bill",
        examples: ["吃完飯，他要付帳。", "可以用信用卡付帳嗎？"],
      },
      {
        word: "請客",
        meaning: "你給錢，朋友不用給錢。",
        meaningEn: "to treat someone (pay for them)",
        examples: ["今天我請客，你們不用付錢。", "謝謝你上次請客，下次我請你。"],
      },
      {
        word: "不好意思",
        meaning: "心裡有一點不舒服，不知道怎麼辦。",
        meaningEn: "embarrassed / to feel awkward",
        examples: ["不好意思，我來晚了。", "他不好意思在大家前面唱歌。"],
      },
    ],
  },
  {
    id: "c7-time-late",
    tier: "culture",
    category: "文化探索．時間觀念",
    title: "遲到算不算沒關係？",
    titleEn: "Is Being Late a Big Deal?",
    text:
      "有些人覺得，見面遲到五分鐘、十分鐘沒關係。" +
      "可是也有人覺得準時很重要，遲到就是不尊重別人。" +
      "所以跟不同國家的人約時間的時候，最好先問一下：「幾點到才算準時？」",
    vocab: [
      {
        word: "遲到",
        meaning: "比說好的時間晚到。",
        meaningEn: "to be late",
        examples: ["今天車很多，我上課遲到了。", "開會不可以遲到。"],
      },
      {
        word: "準時",
        meaning: "在說好的時間到，不早也不晚。",
        meaningEn: "on time / punctual",
        examples: ["火車會準時開，請不要遲到。", "他每天都準時上班。"],
      },
      {
        word: "尊重",
        meaning: "覺得別人很重要，對別人很好。",
        meaningEn: "to respect",
        examples: ["我們應該尊重別人的習慣。", "他很尊重他的老師。"],
      },
      {
        word: "約時間",
        meaning: "跟別人說好什麼時候見面。",
        meaningEn: "to make an appointment / arrange a time",
        examples: ["我們先約時間，再決定去哪裡。", "我想跟醫生約時間。"],
      },
    ],
  },
  {
    id: "c8-time-work",
    tier: "culture",
    category: "文化探索．時間觀念",
    title: "台灣人怎麼安排時間？",
    titleEn: "How Do Taiwanese People Manage Time?",
    text:
      "很多台灣人上班很早到公司，可是下班常常很晚才走。" +
      "因為主管還沒走，員工也不好意思先走，所以很難安排自己的時間。" +
      "這幾年，越來越多公司開始重視員工的休息時間，希望大家準時上班，也準時下班。",
    vocab: [
      {
        word: "安排",
        meaning: "先想好什麼時候做什麼。",
        meaningEn: "to arrange / to schedule",
        examples: ["這次旅行，我來安排。", "週末你有什麼安排？"],
      },
      {
        word: "主管",
        meaning: "公司裡告訴你要做什麼的人。",
        meaningEn: "supervisor / manager",
        examples: ["這件事要先問主管。", "我們的主管人很好。"],
      },
      {
        word: "員工",
        meaning: "在公司工作的人。",
        meaningEn: "employee",
        examples: ["這家公司有一百多個員工。", "員工都很喜歡這個老闆。"],
      },
      {
        word: "重視",
        meaning: "覺得很重要。",
        meaningEn: "to value / to attach importance to",
        examples: ["這家公司很重視員工的健康。", "他很重視家人。"],
      },
    ],
  },
  {
    id: "c9-festival-redenvelope",
    tier: "culture",
    category: "文化探索．節日與慶祝",
    title: "紅包裡的秘密",
    titleEn: "The Secret Behind Red Envelopes",
    text:
      "過年的時候，長輩會給晚輩紅包，紅包裡有錢，叫做「壓歲錢」。" +
      "紅包裡的錢最好是偶數，像是兩千、六百，因為偶數比較吉利。" +
      "拿到紅包的時候，別忘了說「謝謝」，這是很重要的禮貌。",
    vocab: [
      {
        word: "長輩",
        meaning: "家裡年紀比你大的人，例如爸爸、媽媽、爺爺。",
        meaningEn: "elders (in the family)",
        examples: ["過年要跟長輩說「新年快樂」。", "跟長輩說話要有禮貌。"],
      },
      {
        word: "晚輩",
        meaning: "家裡年紀比你小的人，例如孩子。",
        meaningEn: "younger generation (in the family)",
        examples: ["爺爺很喜歡家裡的晚輩。", "我是家裡最小的晚輩。"],
      },
      {
        word: "偶數",
        meaning: "二、四、六、八、十這樣的數字。",
        meaningEn: "even number",
        examples: ["二和四都是偶數。", "送禮物的時候，最好送偶數。"],
      },
      {
        word: "吉利",
        meaning: "很好，會有好事來。",
        meaningEn: "auspicious / lucky",
        examples: ["紅色是很吉利的顏色。", "大家都喜歡吉利的數字。"],
      },
    ],
  },
  {
    id: "c10-festival-birthday",
    tier: "culture",
    category: "文化探索．節日與慶祝",
    title: "生日怎麼慶祝？",
    titleEn: "How Do People Celebrate Birthdays?",
    text:
      "在台灣，過生日的時候，很多人會吃長壽麵。麵很長，代表可以活很久。" +
      "吃麵的時候，最好不要咬斷麵。" +
      "現在也有很多人買蛋糕、唱生日快樂歌，大家一起慶祝。",
    vocab: [
      {
        word: "慶祝",
        meaning: "有好事的時候，大家一起高興。",
        meaningEn: "to celebrate",
        examples: ["我們一起慶祝你的生日吧！", "全家人一起慶祝新年。"],
      },
      {
        word: "長壽",
        meaning: "活很久、年紀很大。",
        meaningEn: "longevity / long life",
        examples: ["祝爺爺身體健康、長壽。", "多運動可以長壽。"],
      },
      {
        word: "咬斷",
        meaning: "用牙齒咬，東西變成兩個。",
        meaningEn: "to bite through / bite in two",
        examples: ["小心，不要咬斷筷子。", "他一口就咬斷了餅乾。"],
      },
      {
        word: "代表",
        meaning: "一個東西有另外一個意思，例如紅色代表好事。",
        meaningEn: "to represent / to symbolize",
        examples: ["紅色代表快樂。", "這個數字代表什麼？"],
      },
    ],
  },
  {
    id: "c11-habit-queue",
    tier: "culture",
    category: "文化探索．生活習慣小觀察",
    title: "排隊的文化",
    titleEn: "The Culture of Queuing",
    text:
      "在台灣，等公車、買東西、等電梯的時候，大家都習慣排隊，一個一個照順序來，不喜歡別人插隊。" +
      "如果你不小心站到別人前面，說一聲「不好意思」就好，別人通常不會生氣。",
    vocab: [
      {
        word: "排隊",
        meaning: "大家一個一個站好，一個一個來。",
        meaningEn: "to queue / to line up",
        examples: ["買票的人很多，要排隊。", "我們排隊排了半個小時。"],
      },
      {
        word: "插隊",
        meaning: "不排隊，站到別人前面。",
        meaningEn: "to cut in line",
        examples: ["請不要插隊。", "他插隊，後面的人很生氣。"],
      },
      {
        word: "順序",
        meaning: "誰第一、誰第二、誰第三。",
        meaningEn: "order / sequence",
        examples: ["請照順序進去。", "我們照順序一個一個說。"],
      },
      {
        word: "生氣",
        meaning: "不高興。",
        meaningEn: "angry",
        examples: ["他今天很生氣。", "不要生氣，對不起。"],
      },
    ],
  },
  {
    id: "c12-habit-mrt",
    tier: "culture",
    category: "文化探索．生活習慣小觀察",
    title: "在捷運上不能做的事",
    titleEn: "Things You Shouldn’t Do on the MRT",
    text:
      "在台北搭捷運的時候，車廂裡不能吃東西、喝飲料，口香糖也不可以。" +
      "車廂裡有一些位子是給老人、孕婦和身體不舒服的人坐的。" +
      "車廂裡人很少的時候，很多人也不會隨便坐這些位子。",
    vocab: [
      {
        word: "車廂",
        meaning: "火車、捷運裡，人坐的地方。",
        meaningEn: "train car / carriage",
        examples: ["這個車廂人很多。", "我們在第三個車廂。"],
      },
      {
        word: "口香糖",
        meaning: "可以一直咬，可是不吃下去的糖。",
        meaningEn: "chewing gum",
        examples: ["你要吃口香糖嗎？", "捷運上不可以吃口香糖。"],
      },
      {
        word: "孕婦",
        meaning: "肚子裡有小孩的媽媽。",
        meaningEn: "pregnant woman",
        examples: ["這個位子是給孕婦坐的。", "那位孕婦快要生小孩了。"],
      },
      {
        word: "隨便",
        meaning: "不想很多，怎麼樣都可以。",
        meaningEn: "casually / carelessly / whatever",
        examples: ["晚餐吃什麼都可以，我隨便。", "不要隨便丟垃圾。"],
      },
    ],
  },
  {
    id: "c13-habit-jiayou",
    tier: "culture",
    category: "文化探索．生活習慣小觀察",
    title: "台灣人愛說「加油」",
    titleEn: "Why Taiwanese People Love Saying “Jiāyóu”",
    text:
      "台灣人幾乎每天都說「加油」。朋友考試以前，可以跟他說「加油」；" +
      "看比賽的時候，大家一起幫選手加油；朋友不開心的時候，也可以說「加油，你可以的！」。" +
      "「加油」不是「加汽油」，是「我支持你」的意思，很難翻譯成英文。",
    vocab: [
      {
        word: "加油",
        meaning: "朋友考試、比賽以前，你可以跟他說的話。",
        meaningEn: "to cheer someone on / “go for it”",
        examples: ["比賽開始了，大家一起加油！", "明天考試，加油！"],
      },
      {
        word: "幾乎",
        meaning: "差不多都是。",
        meaningEn: "almost / nearly",
        examples: ["他幾乎每天都運動。", "我幾乎都懂了。"],
      },
      {
        word: "翻譯",
        meaning: "中文說成英文，或英文說成中文。",
        meaningEn: "to translate",
        examples: ["這句話怎麼翻譯成英文？", "我的朋友是翻譯。"],
      },
      {
        word: "支持",
        meaning: "你想做的事，我覺得很好，我會幫你。",
        meaningEn: "to support",
        examples: ["我的家人很支持我。", "謝謝大家的支持。"],
      },
    ],
  },
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = { ARTICLES };
} else {
  window.ARTICLES = ARTICLES;
}
