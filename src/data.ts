import { Activity, Category } from "./types";

export const categories: Category[] = [
  { id: "warmup", name: "1. Warm-up & Idea Generation", jpName: "ウォーミングアップとアイデア出し", iconName: "Lightbulb" },
  { id: "problemsolving", name: "2. Problem Solving & Role-Play", jpName: "課題解決とロールプレイ", iconName: "Puzzle" },
  { id: "debate", name: "3. Debate & Decision Making", jpName: "討論と意思決定", iconName: "MessageSquare" }
];

export const activities: Activity[] = [
  // 1. Warm-up & Idea Generation
  {
    id: "warmup-1",
    categoryId: "warmup",
    category: "1. Warm-up & Idea Generation",
    jpCategory: "ウォーミングアップとアイデア出し",
    title: "(1) Icebreaker with Personal Story",
    jpTitle: "テーマに関連した自分の経験",
    description: "Tell a short story about your life related to the topic. Example: Sharing a time you used English in a foreign country.",
    jpDescription: "テーマに関連した自分の経験を短く話します。例：海外で英語を使った時の話。",
    steps: [
      "The facilitator gives a prompt based on pre-class work.",
      "Think of a relevant personal memory for 2 minutes.",
      "Share your story in pairs or small groups.",
      "Select one story to share with the whole class."
    ],
    roles: [
      {
        name: "Storyteller",
        jpName: "語り手",
        phrases: [
          "This reminds me of a time when...",
          "Actually, I once experienced...",
          "In my daily life, I often..."
        ]
      },
      {
        name: "Listener",
        jpName: "聞き手",
        phrases: [
          "That sounds really interesting!",
          "How did you handle that situation?",
          "Can you tell me more about...?"
        ]
      }
    ]
  },
  {
    id: "warmup-2",
    categoryId: "warmup",
    category: "1. Warm-up & Idea Generation",
    jpCategory: "ウォーミングアップとアイデア出し",
    title: "(2) Gallery Walk",
    jpTitle: "ギャラリーウォーク",
    description: "Walk around the room to look at posters made by other students. Example: Viewing posters about different holiday traditions.",
    jpDescription: "他の学生が作ったポスターを見て回ります。例：各国の祝日の伝統に関するポスター。",
    steps: [
      "Groups display their work on the classroom walls.",
      "Walk around freely to observe other groups' work.",
      "Write questions or positive feedback on sticky notes.",
      "Return to your poster and read the comments from others."
    ],
    roles: [
      {
        name: "Exhibitor",
        jpName: "展示者",
        phrases: [
          "Our main idea is shown here...",
          "We chose this example because...",
          "We would love to hear your feedback."
        ]
      },
      {
        name: "Visitor",
        jpName: "見学者",
        phrases: [
          "I really like the way you explained...",
          "Could you clarify what this part means?",
          "This is a very creative approach."
        ]
      }
    ]
  },
  {
    id: "warmup-3",
    categoryId: "warmup",
    category: "1. Warm-up & Idea Generation",
    jpCategory: "ウォーミングアップとアイデア出し",
    title: "(3) Affinity Mapping",
    jpTitle: "親和図法/KJ法",
    description: "Group similar ideas together to find patterns. Example: Organizing brainstormed ideas for a school event.",
    jpDescription: "似たアイデアをグループにまとめ、傾向を探ります。例：学校行事のアイデアを整理する。",
    steps: [
      "Write each individual idea on a separate sticky note.",
      "Place all notes on a board or table without speaking.",
      "Move similar notes into groups to form categories.",
      "Discuss each group and give it a clear title."
    ],
    roles: [
      {
        name: "Idea Generator",
        jpName: "アイデア創出者",
        phrases: [
          "Here is another thought regarding...",
          "I think we should write down...",
          "Let's put this on the board."
        ]
      },
      {
        name: "Categorizer",
        jpName: "分類者",
        phrases: [
          "These two notes seem to belong together.",
          "Let's call this category '...' ",
          "Does this note fit better over here?"
        ]
      }
    ]
  },
  {
    id: "warmup-4",
    categoryId: "warmup",
    category: "1. Warm-up & Idea Generation",
    jpCategory: "ウォーミングアップとアイデア出し",
    title: "(4) Think-Pair-Share",
    jpTitle: "シンク・ペア・シェア",
    description: "Think alone first, then discuss with a partner before sharing. Example: Thinking of a solution for plastic pollution.",
    jpDescription: "まず一人で考え、次にペアで話し、最後に全体で共有します。例：プラスチック汚染の解決策を考える。",
    steps: [
      "The facilitator poses a specific question.",
      "Think quietly and write down your thoughts for 1 minute.",
      "Share and compare your ideas with a partner.",
      "One person from the pair shares the findings with the class."
    ],
    roles: [
      {
        name: "Speaker",
        jpName: "話し手",
        phrases: [
          "My initial thought was that...",
          "From my point of view...",
          "We both agreed that..."
        ]
      },
      {
        name: "Listener",
        jpName: "聞き手",
        phrases: [
          "That's a very good point.",
          "I had a similar idea about...",
          "Can you explain why you think that?"
        ]
      }
    ]
  },
  {
    id: "warmup-5",
    categoryId: "warmup",
    category: "1. Warm-up & Idea Generation",
    jpCategory: "ウォーミングアップとアイデア出し",
    title: "(5) Question Formulation (QFT)",
    jpTitle: "質問づくり",
    description: "Create many questions and choose the most important ones. Example: Making questions about a news article on climate change.",
    jpDescription: "たくさんの質問を作り、重要なものを選びます。例：気候変動に関する記事について質問を作る。",
    steps: [
      "Write down as many questions as possible without answering them.",
      "Categorize each question as \"Closed\" (Yes/No) or \"Open\".",
      "Change one closed question to open and vice versa.",
      "Prioritize the top three questions for the group."
    ],
    roles: [
      {
        name: "Scribe",
        jpName: "記録係",
        phrases: [
          "How should I word this question?",
          "Is there another question for the list?",
          "Let me read the list back to you."
        ]
      },
      {
        name: "Refiner",
        jpName: "洗練係",
        phrases: [
          "How can we make this question more open?",
          "Let's change this 'Why' question to 'What'...",
          "Is this question clear to everyone?"
        ]
      },
      {
        name: "Priority Selector",
        jpName: "優先順位選定者",
        phrases: [
          "Which question is most interesting?",
          "Let's choose these top three.",
          "Why do we want to answer this one first?"
        ]
      }
    ]
  },
  {
    id: "warmup-6",
    categoryId: "warmup",
    category: "1. Warm-up & Idea Generation",
    jpCategory: "ウォーミングアップとアイデア出し",
    title: "(6) Concept-Mapping",
    jpTitle: "コンセプトマッピング",
    description: "Draw a visual map to show how different ideas connect. Example: Mapping the causes and effects of a healthy diet.",
    jpDescription: "アイデアのつながりを示す図を描きます。例：健康的な食生活の原因と結果をまとめる。",
    steps: [
      "Place the main topic in the center of the workspace.",
      "Add related concepts or keywords around it.",
      "Draw lines connecting concepts that are related.",
      "Write a connecting word on the line to describe the link."
    ],
    roles: [
      {
        name: "Mapper",
        jpName: "制作者",
        phrases: [
          "Should we place this term near the center?",
          "How are these two ideas related?",
          "Let's draw a line from X to Y."
        ]
      },
      {
        name: "Connector",
        jpName: "論理連結者",
        phrases: [
          "This concept leads directly to...",
          "These two points are closely linked.",
          "This is a good example of..."
        ]
      }
    ]
  },

  // 2. Problem Solving & Role-Play
  {
    id: "prob-1",
    categoryId: "problemsolving",
    category: "2. Problem Solving & Role-Play",
    jpCategory: "課題解決とロールプレイ",
    title: "(7) Learning Stations",
    jpTitle: "ステーション活動",
    description: "Move through different stations to complete various small tasks. Example: Practicing grammar, reading, and listening at different tables.",
    jpDescription: "部屋を移動し、エリアごとに異なるタスクを行います。例：文法、読解、聴解を別のテーブルで練習する。",
    steps: [
      "Start at your assigned station and read the instructions.",
      "Complete the task with your group within the time limit.",
      "Rotate to the next station when the signal sounds.",
      "Finish all stations and compare your results."
    ],
    roles: [
      {
        name: "Leader",
        jpName: "リーダー",
        phrases: [
          "Let's follow the instructions carefully.",
          "We have only three minutes left.",
          "Is everyone finished with this task?"
        ]
      },
      {
        name: "Participant",
        jpName: "参加者",
        phrases: [
          "What should we do at this station?",
          "I will help with the writing.",
          "Let's move quickly to the next area."
        ]
      }
    ]
  },
  {
    id: "prob-2",
    categoryId: "problemsolving",
    category: "2. Problem Solving & Role-Play",
    jpCategory: "課題解決とロールプレイ",
    title: "(8) Constraint-Based Creative Task",
    jpTitle: "制限付きクリエイティブタスク",
    description: "Create a solution or product using very limited resources. Example: Planning a trip using only $100 and no cars.",
    jpDescription: "制限の中で解決策を考えます。例：100ドル以下で車を使わずに旅行の計画を立てる。",
    steps: [
      "Review the task and the list of specific constraints.",
      "Brainstorm creative ideas that follow all the rules.",
      "Draft your final plan or build your prototype.",
      "Present your result and explain how you managed the limits."
    ],
    roles: [
      {
        name: "Designer",
        jpName: "デザイナー",
        phrases: [
          "We cannot use X, so let's try Y.",
          "How can we solve this within the budget?",
          "This idea fits perfectly with the rules."
        ]
      },
      {
        name: "Reviewer",
        jpName: "審査員",
        phrases: [
          "Did you follow all the limitations?",
          "This is a very clever solution.",
          "How did you manage to save time/money?"
        ]
      }
    ]
  },
  {
    id: "prob-3",
    categoryId: "problemsolving",
    category: "2. Problem Solving & Role-Play",
    jpCategory: "課題解決とロールプレイ",
    title: "(9) Peer Interview",
    jpTitle: "ピア・インタビュー",
    description: "Interview each other to gather opinions or information. Example: Interviewing a classmate about their learning habits.",
    jpDescription: "パートナーに質問して意見や情報を集めます。例：クラスメイトの学習習慣について聞く。",
    steps: [
      "Prepare a list of open questions about the topic.",
      "Partner A interviews Partner B for 5 minutes.",
      "Switch roles and repeat the interview process.",
      "Summarize the most interesting information you gathered."
    ],
    roles: [
      {
        name: "Interviewer",
        jpName: "インタビュアー",
        phrases: [
          "What is your opinion on...?",
          "Can you tell me more about...?",
          "How do you usually handle...?"
        ]
      },
      {
        name: "Interviewee",
        jpName: "回答者",
        phrases: [
          "That is an interesting question.",
          "In my experience, I usually...",
          "I believe that the most important thing is..."
        ]
      }
    ]
  },
  {
    id: "prob-4",
    categoryId: "problemsolving",
    category: "2. Problem Solving & Role-Play",
    jpCategory: "課題解決とロールプレイ",
    title: "(10) Role-Play",
    jpTitle: "ロールプレイ",
    description: "Act out a specific situation from different perspectives. Example: A customer complaining to a hotel manager.",
    jpDescription: "特定の状況で別の人になりきって演じます。例：ホテルのマネージャーに苦情を言う客。",
    steps: [
      "Assign roles and read the scenario description.",
      "Prepare your arguments and phrases for 5 minutes.",
      "Perform the role-play with your group.",
      "Reflect on what went well and what was difficult."
    ],
    roles: [
      {
        name: "Actor A",
        jpName: "演者A",
        phrases: [
          "I would like to discuss...",
          "I'm not happy with...",
          "What can you do for me?"
        ]
      },
      {
        name: "Actor B",
        jpName: "演者B",
        phrases: [
          "I understand your concern.",
          "Let me see how I can help.",
          "I recommend that we..."
        ]
      },
      {
        name: "Observer",
        jpName: "観察者",
        phrases: [
          "I noticed that you used...",
          "The communication was very clear.",
          "Maybe you could try to say..."
        ]
      }
    ]
  },
  {
    id: "prob-5",
    categoryId: "problemsolving",
    category: "2. Problem Solving & Role-Play",
    jpCategory: "課題解決とロールプレイ",
    title: "(11) Quick Problem-Solving",
    jpTitle: "短期課題解決",
    description: "Find a practical solution to a sudden challenge very fast. Example: Deciding what to do if the school power goes out.",
    jpDescription: "突然の課題に素早く解決策を出します。例：学校が停電した時の対応を考える。",
    steps: [
      "Identify the core problem presented by the facilitator.",
      "Brainstorm possible solutions with your group immediately.",
      "Choose the best solution and prepare to explain it.",
      "Share your group's answer with the class in under 1 minute."
    ],
    roles: [
      {
        name: "Facilitator",
        jpName: "進行役",
        phrases: [
          "We need an answer in five minutes!",
          "What is the best way to...?",
          "Which group is ready to share?"
        ]
      },
      {
        name: "Contributor",
        jpName: "提供者",
        phrases: [
          "I suggest that we...",
          "This seems like the best idea.",
          "Let's go with this plan."
        ]
      }
    ]
  },
  {
    id: "prob-6",
    categoryId: "problemsolving",
    category: "2. Problem Solving & Role-Play",
    jpCategory: "課題解決とロールプレイ",
    title: "(12) Jigsaw",
    jpTitle: "ジグソー法",
    description: "Learn one part of a topic and teach it to your friends. Example: Each group learning one different chapter of a history book.",
    jpDescription: "トピックの一部を学び、それを仲間に教えます。例：歴史の本の別々の章を分担して学ぶ。",
    steps: [
      "Meet in an \"expert group\" to study your specific section.",
      "Prepare a simple way to teach your section to others.",
      "Return to your original \"home group\".",
      "Each expert takes turns teaching their part to the group."
    ],
    roles: [
      {
        name: "Expert",
        jpName: "エキスパート",
        phrases: [
          "My section is about...",
          "The most important point to remember is...",
          "Does anyone have a question about this part?"
        ]
      },
      {
        name: "Learner",
        jpName: "学習者",
        phrases: [
          "Can you repeat that last point?",
          "So, what you mean is...?",
          "How does this link to what I learned?"
        ]
      }
    ]
  },
  {
    id: "prob-7",
    categoryId: "problemsolving",
    category: "2. Problem Solving & Role-Play",
    jpCategory: "課題解決とロールプレイ",
    title: "(13) Case Study",
    jpTitle: "ケーススタディ",
    description: "Analyze a real-life problem and decide on the best solution. Example: Helping a failing company improve its sales.",
    jpDescription: "実際の問題を分析し、解決策を決めます。例：売り上げが落ちている会社の改善策。",
    steps: [
      "Read the case report and identify the main issues.",
      "Discuss the possible reasons for the problem.",
      "Compare different solutions and their risks.",
      "Write down a final recommendation for the case."
    ],
    roles: [
      {
        name: "Analyst",
        jpName: "分析者",
        phrases: [
          "The main problem seems to be...",
          "The evidence shows that...",
          "We should consider the cause of..."
        ]
      },
      {
        name: "Strategist",
        jpName: "戦略立案者",
        phrases: [
          "I recommend that we...",
          "This plan will help because...",
          "Our best option is to..."
        ]
      }
    ]
  },
  {
    id: "prob-8",
    categoryId: "problemsolving",
    category: "2. Problem Solving & Role-Play",
    jpCategory: "課題解決とロールプレイ",
    title: "(14) Simulation",
    jpTitle: "シミュレーション",
    description: "Act out a complex real-world process with rules and goals. Example: Simulating a busy restaurant or a small market.",
    jpDescription: "ルールや目標がある現実のプロセスを体験します。例：忙しいレストランや市場の体験。",
    steps: [
      "Learn your assigned role and the specific rules of the simulation.",
      "Interact with others to reach your goals (e.g., selling, voting).",
      "Keep track of your results or points.",
      "Discuss what you learned about the real process at the end."
    ],
    roles: [
      {
        name: "Delegate",
        jpName: "代表者",
        phrases: [
          "On behalf of my group, I want to...",
          "We are looking for a partner who...",
          "Our goal for today is to..."
        ]
      },
      {
        name: "Mediator",
        jpName: "仲裁者",
        phrases: [
          "Let's find a common solution.",
          "What are the needs of both sides?",
          "Can we agree on this price/plan?"
        ]
      }
    ]
  },

  // 3. Debate & Decision Making
  {
    id: "debate-1",
    categoryId: "debate",
    category: "3. Debate & Decision Making",
    jpCategory: "討論と意思決定",
    title: "(15) Four Corners",
    jpTitle: "フォーコーナーズ",
    description: "Show your opinion by moving to a corner of the room. Example: Choosing your stance on \"Homework should be banned.\"",
    jpDescription: "意見に合った部屋の隅に移動します。例：「宿題は禁止すべきだ」への賛否。",
    steps: [
      "Listen to a statement and choose your stance (Agree, Disagree, etc.).",
      "Move to the corner that represents your opinion.",
      "Discuss your reasons with the other people in your corner.",
      "One person from each corner presents their group's main argument."
    ],
    roles: [
      {
        name: "Advocate",
        jpName: "擁護者",
        phrases: [
          "We chose this corner because...",
          "The most important reason is...",
          "We strongly believe that..."
        ]
      },
      {
        name: "Challenger",
        jpName: "挑戦者",
        phrases: [
          "But what about...?",
          "I don't think that's always true.",
          "Can you explain your reason for...?"
        ]
      }
    ]
  },
  {
    id: "debate-2",
    categoryId: "debate",
    category: "3. Debate & Decision Making",
    jpCategory: "討論と意思決定",
    title: "(16) Forced Ranking",
    jpTitle: "順位付け",
    description: "Put a list of items in order of their importance. Example: Ranking the best features of a new smartphone.",
    jpDescription: "リストを重要な順に並べ替えます。例：スマホの機能の重要度。",
    steps: [
      "Read the list of items and rank them personally from 1 to 5.",
      "Compare your list with your group members.",
      "Negotiate until everyone agrees on one group ranking.",
      "Share your group's final order and your reasons."
    ],
    roles: [
      {
        name: "Moderator",
        jpName: "進行役",
        phrases: [
          "Let's start with the first item.",
          "Does everyone agree on this order?",
          "Let's finalize our top choice."
        ]
      },
      {
        name: "Advocate",
        jpName: "擁護者",
        phrases: [
          "I think X is more important than Y because...",
          "In my opinion, this should be at the bottom.",
          "Let's move this to number one."
        ]
      }
    ]
  },
  {
    id: "debate-3",
    categoryId: "debate",
    category: "3. Debate & Decision Making",
    jpCategory: "討論と意思決定",
    title: "(17) Consensus Building",
    jpTitle: "合意形成",
    description: "Talk until everyone in the group supports the same plan. Example: Deciding on one movie to watch together.",
    jpDescription: "全員が1つの計画に納得するまで話し合います。例：一緒に見る映画を1つ決める。",
    steps: [
      "Everyone shares their personal choice and their reasons.",
      "Discuss the positive and negative points of each choice.",
      "Find a plan that everyone can accept, even if it's not their first choice.",
      "Confirm that every member supports the final decision."
    ],
    roles: [
      {
        name: "Facilitator",
        jpName: "進行役",
        phrases: [
          "Can everyone live with this choice?",
          "What is our common ground?",
          "Is there any strong objection?"
        ]
      },
      {
        name: "Contributor",
        jpName: "提供者",
        phrases: [
          "I can support this if we...",
          "I am willing to change my mind.",
          "Let's agree on this point."
        ]
      },
      {
        name: "Secretary",
        jpName: "記録係",
        phrases: [
          "I will write down our final agreement.",
          "Let me confirm the points we agreed on.",
          "Is this what everyone decided?"
        ]
      }
    ]
  },
  {
    id: "debate-4",
    categoryId: "debate",
    category: "3. Debate & Decision Making",
    jpCategory: "討論と意思決定",
    title: "(18) Snowball Discussion",
    jpTitle: "スノーボール式討論",
    description: "Start talking in small groups and slowly join together. Example: Discussing school lunch ideas in groups of 2, then 4, then 8.",
    jpDescription: "2人、4人、8人と議論を大きくしていきます。例：給食のアイデアを話し合う。",
    steps: [
      "Talk about the topic in pairs for 3 minutes.",
      "Join another pair to share your main points.",
      "Join more people until the whole class is talking together.",
      "Summarize the final ideas that most people agree with."
    ],
    roles: [
      {
        name: "Initiator",
        jpName: "発起者",
        phrases: [
          "In our small group, we talked about...",
          "What did your pair decide?",
          "Let's combine our points."
        ]
      },
      {
        name: "Synthesizer",
        jpName: "統合者",
        phrases: [
          "The main theme across all groups is...",
          "We all seem to agree that...",
          "In conclusion, our class thinks..."
        ]
      }
    ]
  },
  {
    id: "debate-5",
    categoryId: "debate",
    category: "3. Debate & Decision Making",
    jpCategory: "討論と意思決定",
    title: "(19) Mini-Presentation",
    jpTitle: "ミニプレゼンテーション",
    description: "Give a short, clear report about a topic to the class. Example: Presenting three facts about a famous scientist.",
    jpDescription: "トピックについて短く明確に報告します。例：有名な科学者の3つの事実。",
    steps: [
      "Prepare 3-5 main points and clear visual aids (if needed).",
      "Practice speaking loudly and clearly for 2-3 minutes.",
      "Deliver your presentation and look at the audience.",
      "Answer one or two questions from your classmates."
    ],
    roles: [
      {
        name: "Presenter",
        jpName: "発表者",
        phrases: [
          "Today, I will talk about...",
          "The first main point is...",
          "Thank you for listening. Do you have any questions?"
        ]
      },
      {
        name: "Audience",
        jpName: "聴衆",
        phrases: [
          "Can you explain more about...?",
          "What was the most surprising thing you found?",
          "Thank you for the clear presentation."
        ]
      }
    ]
  },
  {
    id: "debate-6",
    categoryId: "debate",
    category: "3. Debate & Decision Making",
    jpCategory: "討論と意思決定",
    title: "(20) World Café",
    jpTitle: "ワールド・カフェ",
    description: "Move between tables to discuss different parts of a topic. Example: Discussing different ways to save energy at different tables.",
    jpDescription: "テーブルを移動してトピックの各部を話し合います。例：省エネの方法をテーブルごとに議論。",
    steps: [
      "Discuss the question at your first table for 10 minutes.",
      "Move to a new table. One \"Host\" stays to explain previous ideas.",
      "Add your own ideas to the discussion at the new table.",
      "Collect and share the best ideas from all tables at the end."
    ],
    roles: [
      {
        name: "Table Host",
        jpName: "ホスト",
        phrases: [
          "Welcome to our table. We talked about...",
          "What are your initial thoughts on this?",
          "Let me add your point to the map."
        ]
      },
      {
        name: "Traveler",
        jpName: "旅人",
        phrases: [
          "At my previous table, we discussed...",
          "I think this idea links well to...",
          "Can you tell me more about what the last group said?"
        ]
      }
    ]
  },
  {
    id: "debate-7",
    categoryId: "debate",
    category: "3. Debate & Decision Making",
    jpCategory: "討論と意思決定",
    title: "(21) Debate",
    jpTitle: "ディベート",
    description: "Argue for or against a topic using formal rules. Example: Arguing whether schools should use paper books or tablets.",
    jpDescription: "トピックに賛成か反対かルールに沿って議論します。例：紙の本かタブレットか。",
    steps: [
      "Research your assigned side (Agree or Disagree) using pre-class data.",
      "Prepare three strong reasons and possible counter-arguments.",
      "Present your side's opening statement clearly.",
      "Respond to the other side's points and finish with a summary."
    ],
    roles: [
      {
        name: "Affirmative",
        jpName: "賛成側",
        phrases: [
          "We strongly believe that...",
          "Our primary reason is...",
          "This will lead to a better..."
        ]
      },
      {
        name: "Negative",
        jpName: "反対側",
        phrases: [
          "We respectfully disagree because...",
          "That point is not always correct.",
          "On the other hand, we think that..."
        ]
      }
    ]
  },
  {
    id: "debate-8",
    categoryId: "debate",
    category: "3. Debate & Decision Making",
    jpCategory: "討論と意思決定",
    title: "(22) Fishbowl",
    jpTitle: "フィッシュボウル",
    description: "Watch a small group talk about a topic to learn how to discuss. Example: Watching five students discuss a poem while others take notes.",
    jpDescription: "中心の小グループの議論を他の人が観察して学びます。例：詩についての議論を観察。",
    steps: [
      "Sit in a big circle. Five students sit in a small circle in the center.",
      "The center group discusses the topic for 15 minutes.",
      "The outer group takes notes on the ideas and the way they talk.",
      "Switch roles so everyone can experience the center discussion."
    ],
    roles: [
      {
        name: "Inner Circle",
        jpName: "討論者",
        phrases: [
          "I think that...",
          "What do you think about...?",
          "I want to add another point to that."
        ]
      },
      {
        name: "Outer Circle",
        jpName: "観察者",
        phrases: [
          "I noticed that they used...",
          "One point that was very strong was...",
          "I learned that..."
        ]
      }
    ]
  },
  {
    id: "debate-9",
    categoryId: "debate",
    category: "3. Debate & Decision Making",
    jpCategory: "討論と意思決定",
    title: "(23) Mock Press Conference",
    jpTitle: "模擬記者会見",
    description: "One group answers difficult questions from student \"journalists.\" Example: A company answering questions about a new product.",
    jpDescription: "広報担当が記者からの質問に答えます。例：新製品についての記者会見。",
    steps: [
      "Choose your role: Organization Member or Journalist.",
      "Journalists write 3 tough questions. Members prepare a short speech.",
      "The organization gives an opening statement.",
      "Journalists ask questions and members answer them professionally."
    ],
    roles: [
      {
        name: "Spokesperson",
        jpName: "広報担当",
        phrases: [
          "Thank you for that question.",
          "We are working hard to...",
          "Our official position is..."
        ]
      },
      {
        name: "Journalist",
        jpName: "記者",
        phrases: [
          "Is it true that...?",
          "Why did the organization decide to...?",
          "When will the results be ready?"
        ]
      },
      {
        name: "Moderator",
        jpName: "進行役",
        phrases: [
          "Please ask only one question.",
          "Who is the next journalist?",
          "This is the final question for today."
        ]
      }
    ]
  },
  {
    id: "debate-10",
    categoryId: "debate",
    category: "3. Debate & Decision Making",
    jpCategory: "討論と意思決定",
    title: "(24) Socratic Seminar",
    jpTitle: "ソクラテス式セミナー",
    description: "Discuss a text deeply by asking each other questions. Example: Discussing the hidden meaning of a story about space.",
    jpDescription: "質問し合い、テキストの深い意味を話し合います。例：宇宙の物語に隠された意味。",
    steps: [
      "Bring your pre-class notes and the text to the circle.",
      "The facilitator asks one big, open-ended question to start.",
      "Participants share ideas and ask each other clarifying questions.",
      "Reference specific page numbers or lines from the text often."
    ],
    roles: [
      {
        name: "Facilitator",
        jpName: "進行役",
        phrases: [
          "What is the main message of the text?",
          "Can anyone find a quote to support that?",
          "How does this relate to...?"
        ]
      },
      {
        name: "Participant",
        jpName: "参加者",
        phrases: [
          "On page 5, the author says...",
          "I have a question about X's point.",
          "This suggests that the character is..."
        ]
      },
      {
        name: "Summarizer",
        jpName: "総括者",
        phrases: [
          "Today we explored...",
          "The most important theme was...",
          "We still have questions about..."
        ]
      }
    ]
  }
];
