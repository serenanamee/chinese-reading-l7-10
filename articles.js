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
    pictureStory: {
      questions: [
        {
          zh: "圖片裡的人正在煩惱什麼？他還沒決定什麼事？",
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
      "在有些地方，朋友見面會擁抱，或是親一下臉頰，表示很高興看到對方；可是在另外一些地方，" +
      "人們見面只會點頭或握手，覺得擁抱太親密了。其實，打招呼的方式沒有對錯，只是每個地方的習慣不一樣，" +
      "了解對方的習慣，才不會覺得奇怪。",
    vocab: [
      {
        word: "擁抱",
        meaning: "用手臂抱住對方，表示親近或高興。",
        meaningEn: "to hug / to embrace",
        examples: ["久別重逢，他們緊緊擁抱了一下。", "在機場，媽媽給了我一個擁抱。"],
      },
      {
        word: "親密",
        meaning: "關係很近、很熟悉。",
        meaningEn: "intimate / close",
        examples: ["他們兩個從小一起長大，感情很親密。", "這是我最親密的朋友。"],
      },
      {
        word: "習慣",
        meaning: "長期養成、很自然就會做的行為。",
        meaningEn: "habit / custom",
        examples: ["每個國家的飲食習慣都不太一樣。", "我習慣早上喝一杯咖啡。"],
      },
      {
        word: "點頭",
        meaning: "頭往下再往上動一下，表示同意或打招呼。",
        meaningEn: "to nod",
        examples: ["老師說完，他點頭表示明白了。", "他對我笑了笑，點了點頭。"],
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
      "在中文裡，稱呼別人常常要加上職稱，像是「王老師」、「陳經理」，直接叫名字會覺得不禮貌；" +
      "可是在有些國家，就算是老闆，同事也可以直接叫他的名字，覺得這樣比較親近。所以剛認識新朋友的時候，" +
      "最好先問問看，應該怎麼稱呼對方。",
    vocab: [
      {
        word: "稱呼",
        meaning: "叫別人的方式，例如加上姓氏或職稱。",
        meaningEn: "form of address / to address someone",
        examples: ["我不知道該怎麼稱呼他。", "同事之間，稱呼可以隨便一點。"],
      },
      {
        word: "職稱",
        meaning: "工作上的頭銜，例如經理、老師。",
        meaningEn: "job title",
        examples: ["名片上通常會寫姓名跟職稱。", "他升職以後，職稱也改變了。"],
      },
      {
        word: "禮貌",
        meaning: "尊重別人、得體的行為。",
        meaningEn: "polite / courteous",
        examples: ["跟長輩說話要有禮貌。", "他是一個很有禮貌的年輕人。"],
      },
      {
        word: "親近",
        meaning: "關係很好、感覺很近。",
        meaningEn: "close / friendly",
        examples: ["她跟班上同學都很親近。", "多聊聊天，會讓彼此更親近。"],
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
      "在台灣，送禮物的時候，數字也有意義：送禮通常不送四個，因為「四」聽起來很像「死」；" +
      "送禮物也很少送鐘，因為「送鐘」聽起來像「送終」。這些習慣聽起來有點奇怪，但是了解以後，" +
      "你就不會不小心送錯禮物了。",
    vocab: [
      {
        word: "意義",
        meaning: "一件事情或東西所代表的意思。",
        meaningEn: "meaning / significance",
        examples: ["這份禮物對他來說有特別的意義。", "了解節日的意義，才知道為什麼要慶祝。"],
      },
      {
        word: "通常",
        meaning: "大部分的情況下、一般來說。",
        meaningEn: "usually / normally",
        examples: ["他通常七點就起床了。", "台灣的夏天通常很熱。"],
      },
      {
        word: "奇怪",
        meaning: "跟平常不一樣，讓人覺得不容易理解。",
        meaningEn: "strange / odd",
        examples: ["這件事聽起來很奇怪。", "他今天怪怪的，好像有什麼奇怪的事發生了。"],
      },
      {
        word: "不小心",
        meaning: "沒有特別注意，做錯了事。",
        meaningEn: "carelessly / by accident",
        examples: ["我不小心把水打翻了。", "他不小心說錯了朋友的名字。"],
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
      "第一次去朋友家作客，帶一點小禮物是不錯的選擇，像是水果或是點心。進門以前，" +
      "最好先問一下要不要脫鞋子，因為很多台灣人在家裡是不穿鞋的。吃飯的時候，主人請你多吃一點，" +
      "你可以客氣地說「我吃飽了」，不用勉強自己。",
    vocab: [
      {
        word: "作客",
        meaning: "到別人家裡拜訪、當客人。",
        meaningEn: "to be a guest (at someone’s home)",
        examples: ["週末我要去阿姨家作客。", "第一次去老師家作客，覺得有點緊張。"],
      },
      {
        word: "脫鞋子",
        meaning: "把鞋子從腳上拿下來。",
        meaningEn: "to take off one’s shoes",
        examples: ["進屋前記得脫鞋子。", "他習慣一進門就脫鞋子。"],
      },
      {
        word: "主人",
        meaning: "邀請客人、招待大家的人。",
        meaningEn: "host",
        examples: ["主人準備了很多好吃的菜招待我們。", "身為主人，他很照顧每一位客人。"],
      },
      {
        word: "客氣",
        meaning: "說話或做事很有禮貌、不隨便。",
        meaningEn: "polite / modest",
        examples: ["不用這麼客氣，就像在自己家一樣。", "他對每個人都很客氣。"],
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
      "用筷子吃飯的時候，有幾件事最好不要做：不要把筷子直直地插在飯中間，因為那讓人想到拜拜用的香；" +
      "也不要用筷子指著別人，這樣不太禮貌。如果不小心做錯了，只要笑一笑，說聲對不起，大家都會理解的。",
    vocab: [
      {
        word: "筷子",
        meaning: "吃飯用的兩根細長棍子。",
        meaningEn: "chopsticks",
        examples: ["他還不太會用筷子。", "請幫我拿一雙筷子。"],
      },
      {
        word: "插",
        meaning: "把細長的東西放進另一個東西裡面。",
        meaningEn: "to insert / to stick into",
        examples: ["她把花插進花瓶裡。", "路口插了一支新的路牌。"],
      },
      {
        word: "指",
        meaning: "用手指向某個方向或某個人。",
        meaningEn: "to point (at/toward)",
        examples: ["他指著地圖，說明怎麼走。", "用手指著別人不太禮貌。"],
      },
      {
        word: "理解",
        meaning: "明白對方的想法或原因。",
        meaningEn: "to understand",
        examples: ["謝謝你理解我的困難。", "這件事有點複雜，我需要時間理解。"],
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
      "在台灣，朋友一起吃飯，常常會搶著付錢，這叫做「搶著付帳」；比較少像有些國家一樣，各付各的。" +
      "如果你是被請客的人，下次可以換你請客，這樣才不會覺得不好意思。",
    vocab: [
      {
        word: "搶",
        meaning: "很快地去做，怕被別人先做了。",
        meaningEn: "to rush to do / to compete for",
        examples: ["大家都搶著幫忙搬東西。", "他每次都搶著發言。"],
      },
      {
        word: "付帳",
        meaning: "付錢，結清消費的金額。",
        meaningEn: "to pay the bill",
        examples: ["吃完飯，他堅持要付帳。", "請問可以用信用卡付帳嗎？"],
      },
      {
        word: "請客",
        meaning: "自己出錢招待別人吃飯或消費。",
        meaningEn: "to treat someone (pay for them)",
        examples: ["今天算我請客，你們不用付錢。", "謝謝你上次請客，下次換我。"],
      },
      {
        word: "不好意思",
        meaning: "覺得有點難為情、不自在。",
        meaningEn: "embarrassed / to feel awkward",
        examples: ["讓你破費，真不好意思。", "他不好意思在大家面前唱歌。"],
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
      "對某些人來說，約會遲到五分鐘、十分鐘沒什麼關係；可是對另外一些人來說，準時非常重要，" +
      "遲到就是不尊重別人。所以出國旅行，或是跟不同地方的人約時間，最好先問清楚，" +
      "對方覺得幾點才算「準時」。",
    vocab: [
      {
        word: "遲到",
        meaning: "比約定的時間晚到。",
        meaningEn: "to be late",
        examples: ["今天塞車，我上班遲到了。", "開會不可以遲到。"],
      },
      {
        word: "準時",
        meaning: "在約定的時間到，不早也不晚。",
        meaningEn: "on time / punctual",
        examples: ["火車會準時出發，請不要遲到。", "他做事一向很準時。"],
      },
      {
        word: "尊重",
        meaning: "重視、不隨便對待別人的想法或感受。",
        meaningEn: "to respect",
        examples: ["我們應該尊重不同的文化。", "他很尊重每一位同事的意見。"],
      },
      {
        word: "約時間",
        meaning: "跟別人約定見面的時間。",
        meaningEn: "to make an appointment / arrange a time",
        examples: ["我們先約時間，再決定地點。", "跟醫生約時間看診。"],
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
      "台灣人上班常常很早到公司，可是下班卻常常晚走，因為主管還沒走，員工也不好意思先走，" +
      "沒辦法安排自己的時間。這幾年，越來越多公司開始重視員工的休息時間，希望大家準時上班，也能準時下班。",
    vocab: [
      {
        word: "安排",
        meaning: "事先計畫、決定怎麼做。",
        meaningEn: "to arrange / to schedule",
        examples: ["這次旅行的行程由我來安排。", "老師幫我們安排了新的座位。"],
      },
      {
        word: "主管",
        meaning: "負責帶領部門或團隊的上級。",
        meaningEn: "supervisor / manager",
        examples: ["這件事要先問過主管。", "新來的主管人很好。"],
      },
      {
        word: "員工",
        meaning: "在公司裡工作的人。",
        meaningEn: "employee",
        examples: ["這家公司有一百多位員工。", "公司很重視員工的意見。"],
      },
      {
        word: "重視",
        meaning: "很在意、覺得很重要。",
        meaningEn: "to value / to attach importance to",
        examples: ["這家公司很重視員工的健康。", "他非常重視跟家人相處的時間。"],
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
      "過年的時候，長輩會給晚輩紅包，裡面裝的是「壓歲錢」，希望晚輩平平安安長大。" +
      "紅包的錢最好是偶數，不要是奇數，因為偶數比較吉利。收到紅包的時候，別忘了說聲「謝謝」，" +
      "這是最基本的禮貌。",
    vocab: [
      {
        word: "長輩",
        meaning: "年紀比較大、輩分比較高的親人。",
        meaningEn: "elders (in the family)",
        examples: ["過年要跟長輩拜年。", "跟長輩說話要有禮貌。"],
      },
      {
        word: "晚輩",
        meaning: "年紀比較小、輩分比較低的親人。",
        meaningEn: "younger generation (in the family)",
        examples: ["長輩很疼愛家裡的晚輩。", "身為晚輩，要尊敬長輩。"],
      },
      {
        word: "偶數",
        meaning: "可以被二整除的數字，例如二、四、六。",
        meaningEn: "even number",
        examples: ["二和四都是偶數。", "送禮的數量最好是偶數。"],
      },
      {
        word: "吉利",
        meaning: "帶來好運、順利的意思。",
        meaningEn: "auspicious / lucky",
        examples: ["紅色在華人文化裡代表吉利。", "大家都喜歡吉利的數字。"],
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
      "在台灣，過生日常常會吃長壽麵，因為麵條長長的，代表長命百歲；吃麵的時候，" +
      "最好不要把麵條咬斷。除了長壽麵以外，現在也有很多人跟西方一樣，買蛋糕、唱生日快樂歌，一起慶祝。",
    vocab: [
      {
        word: "慶祝",
        meaning: "為了值得高興的事，舉辦活動或聚會。",
        meaningEn: "to celebrate",
        examples: ["我們一起慶祝畢業吧！", "全家人一起慶祝新年。"],
      },
      {
        word: "長壽",
        meaning: "活得很久、壽命很長。",
        meaningEn: "longevity / long life",
        examples: ["祝爺爺身體健康、長壽。", "多運動有助於長壽。"],
      },
      {
        word: "咬斷",
        meaning: "用牙齒把東西咬成兩段。",
        meaningEn: "to bite through / bite in two",
        examples: ["小心，不要咬斷筷子。", "他一口就把餅乾咬斷了。"],
      },
      {
        word: "代表",
        meaning: "表示某種意義。",
        meaningEn: "to represent / to symbolize",
        examples: ["紅色在這裡代表喜氣。", "白鴿代表和平。"],
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
      "在台灣，不管是等公車、買東西，還是等電梯，大家都習慣排隊，按照順序一個接著一個，不喜歡插隊。" +
      "如果你不小心插到別人前面，最好說一聲「不好意思」，對方通常也不會生氣。",
    vocab: [
      {
        word: "排隊",
        meaning: "一個接著一個站好，依照順序等待。",
        meaningEn: "to queue / to line up",
        examples: ["買票的人很多，要排隊等一下。", "他們排隊排了半個小時。"],
      },
      {
        word: "插隊",
        meaning: "不按順序，直接排到別人前面。",
        meaningEn: "to cut in line",
        examples: ["請不要插隊，大家都在排隊。", "他插隊被後面的人提醒了。"],
      },
      {
        word: "順序",
        meaning: "事情先後的次序、排列方式。",
        meaningEn: "order / sequence",
        examples: ["請照順序進場。", "這些步驟的順序不能弄錯。"],
      },
      {
        word: "生氣",
        meaning: "心情不好、感到不高興。",
        meaningEn: "angry",
        examples: ["他因為遲到而生氣。", "不要生氣，這只是誤會。"],
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
      "搭捷運的時候，車廂裡不能吃東西、喝飲料，連口香糖也不行；博愛座是留給老人、孕婦、" +
      "行動不方便的人坐的，就算車廂很空，很多人也不會隨便坐上去。",
    vocab: [
      {
        word: "車廂",
        meaning: "火車、捷運裡載客人的一節車體。",
        meaningEn: "train car / carriage",
        examples: ["這節車廂人很多。", "請往車廂中間走。"],
      },
      {
        word: "口香糖",
        meaning: "可以一直嚼、不吞下去的糖。",
        meaningEn: "chewing gum",
        examples: ["他嘴裡一直嚼著口香糖。", "捷運上不可以嚼口香糖。"],
      },
      {
        word: "孕婦",
        meaning: "懷孕、肚子裡有小孩的女性。",
        meaningEn: "pregnant woman",
        examples: ["博愛座要讓給孕婦坐。", "這位孕婦快要生了。"],
      },
      {
        word: "隨便",
        meaning: "沒有特別考慮、不太在意地做。",
        meaningEn: "casually / carelessly / whatever",
        examples: ["不要隨便亂丟垃圾。", "晚餐吃什麼都可以，我隨便。"],
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
      "「加油」這兩個字，台灣人幾乎每天都會用到：考試前跟朋友說「加油」，比賽的時候幫選手加油，" +
      "難過的時候也可以說「加油，你可以的」。這句話不需要翻譯成「加汽油」，" +
      "而是表示「你可以做到，我支持你」的意思。",
    vocab: [
      {
        word: "加油",
        meaning: "為別人打氣、鼓勵對方的話。",
        meaningEn: "to cheer someone on / “go for it”",
        examples: ["比賽開始了，大家一起幫他加油！", "考試前，媽媽跟我說「加油」。"],
      },
      {
        word: "幾乎",
        meaning: "差不多、接近全部的意思。",
        meaningEn: "almost / nearly",
        examples: ["他幾乎每天都運動。", "這件事幾乎沒有人知道。"],
      },
      {
        word: "翻譯",
        meaning: "把一種語言換成另一種語言。",
        meaningEn: "to translate",
        examples: ["請幫我把這句話翻譯成英文。", "他是專業的翻譯人員。"],
      },
      {
        word: "支持",
        meaning: "站在對方那一邊、給予鼓勵或幫助。",
        meaningEn: "to support",
        examples: ["家人一直很支持我的決定。", "謝謝大家的支持。"],
      },
    ],
  },
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = { ARTICLES };
} else {
  window.ARTICLES = ARTICLES;
}
