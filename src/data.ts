import { Activity, Category } from "./types";

export const categories: Category[] = [
  { id: "discussion", name: "Discussion & Dialogue", jpName: "討論と対話", iconName: "MessageCircle" },
  { id: "application", name: "Application & Simulation", jpName: "応用とシミュレーション", iconName: "Briefcase" },
  { id: "collaboration", name: "Collaboration & Problem Solving", jpName: "協働と課題解決", iconName: "Users" },
  { id: "presentation", name: "Presentation & Feedback", jpName: "発表とフィードバック", iconName: "Mic" }
];

export const activities: Activity[] = [
  // I. Discussion & Dialogue
  {
    id: "think-pair-share",
    categoryId: "discussion",
    category: "Discussion & Dialogue",
    jpCategory: "討論と対話",
    title: "Think-Pair-Share",
    jpTitle: "シンク・ペア・シェア",
    description: "Students think individually, pair up to discuss, and then share with the class.",
    jpDescription: "学生は個別に考え、ペアで話し合い、その後クラス全体で共有します。",
    steps: [
      "Pose an open-ended question based on pre-class material.",
      "Give students 1-2 minutes to think and write down answers silently.",
      "Pair students up to compare and combine their thoughts.",
      "Randomly call on pairs to share their conclusions with the class."
    ],
    roles: [
      {
        name: "Speaker",
        jpName: "話し手",
        phrases: [
          "From my perspective, the topic actually...",
          "One key point from our pre-class reading was...",
          "I'm still wondering about how it affects..."
        ]
      },
      {
        name: "Listener",
        jpName: "聞き手",
        phrases: [
          "So what you're saying is...",
          "I agree, and I'd like to add that...",
          "Could you clarify what you mean by..."
        ]
      }
    ]
  },
  {
    id: "fishbowl",
    categoryId: "discussion",
    category: "Discussion & Dialogue",
    jpCategory: "討論と対話",
    title: "Fishbowl Discussion",
    jpTitle: "フィッシュボウル討論",
    description: "A small inner circle discusses while the outer circle observes, with roles occasionally swapping.",
    jpDescription: "少数の内側の円が議論し、外側の円が観察し、時折役割を交代します。",
    steps: [
      "Arrange seating in two concentric circles (inner and outer).",
      "Provide a complex discussion prompt to the inner circle.",
      "Inner circle discusses for 10-15 minutes while the outer takes notes.",
      "Allow the outer circle to provide feedback or share observations.",
      "Swap the students between the inner and outer circles."
    ],
    roles: [
      {
        name: "Inner Circle",
        jpName: "内側の討論者",
        phrases: [
          "Building on that idea, we should also consider...",
          "I respectfully disagree because...",
          "What are the long-term implications of..."
        ]
      },
      {
        name: "Outer Circle",
        jpName: "外側の観察者",
        phrases: [
          "I noticed that [Name] made a great point about...",
          "One aspect that the inner circle missed was...",
          "If I were in the inner circle, I would have added..."
        ]
      }
    ]
  },
  {
    id: "world-cafe",
    categoryId: "discussion",
    category: "Discussion & Dialogue",
    jpCategory: "討論と対話",
    title: "World Café Session",
    jpTitle: "ワールド・カフェ",
    description: "Small groups discuss topics at tables, rotating to cross-pollinate ideas.",
    jpDescription: "小グループが各テーブルでテーマについて議論し、席を移動してアイデアを交差させます。",
    steps: [
      "Set up tables, each with a specific sub-topic and a designated Table Host.",
      "Travelers discuss the topic at their table for 10 minutes.",
      "Travelers rotate to a new table; the Host remains.",
      "The Host summarizes previous points for the new arrivals.",
      "Conclude with a whole-class synthesis of the main insights."
    ],
    roles: [
      {
        name: "Table Host",
        jpName: "ホスト",
        phrases: [
          "Welcome! Previously, our table discussed...",
          "What new perspectives can you bring to this?",
          "Let's summarize our findings before you move on."
        ]
      },
      {
        name: "Traveler",
        jpName: "旅人/移動者",
        phrases: [
          "At my previous table, we found that...",
          "I see a connection between your point and...",
          "Have you considered...?"
        ]
      }
    ]
  },
  {
    id: "snowball",
    categoryId: "discussion",
    category: "Discussion & Dialogue",
    jpCategory: "討論と対話",
    title: "Snowball Discussion",
    jpTitle: "スノーボール式討論",
    description: "Discussions start in pairs, then merge into larger groups to build consensus.",
    jpDescription: "ペアでの議論から始まり、より大きなグループに合流して合意を形成します。",
    steps: [
      "Start with pairs discussing a prompt to reach an initial agreement.",
      "Merge two pairs into a group of four to combine their ideas.",
      "Merge groups of four into groups of eight.",
      "Finalize a collective consensus or top priority list.",
      "Share the final snowball conclusions with the whole class."
    ],
    roles: [
      {
        name: "Initiator",
        jpName: "発起者",
        phrases: [
          "My top priority is... because...",
          "Do you share a similar view on...?",
          "Let's try to combine our top choices."
        ]
      },
      {
        name: "Synthesizer",
        jpName: "統合者",
        phrases: [
          "When our groups merged, we noticed a common theme...",
          "We differed on..., but agreed on...",
          "Our combined list now includes..."
        ]
      }
    ]
  },
  {
    id: "socratic",
    categoryId: "discussion",
    category: "Discussion & Dialogue",
    jpCategory: "討論と対話",
    title: "Socratic Seminar",
    jpTitle: "ソクラテス式セミナー",
    description: "A student-led dialogue focusing on analyzing a text through rigorous questioning.",
    jpDescription: "厳密な質問を通じてテキストの分析に焦点を当てた、学生主導の対話。",
    steps: [
      "Ensure students have read and annotated the pre-class text.",
      "Sit in a circle to facilitate open communication.",
      "The instructor provides a broad, open-ended starting question.",
      "Students lead the conversation, requiring evidence for all claims.",
      "Debrief on the quality of the dialogue, not just the content."
    ],
    roles: [
      {
        name: "Text Referencer",
        jpName: "テキスト引用者",
        phrases: [
          "According to the second paragraph...",
          "The author implies that...",
          "This directly relates to the quote on page..."
        ]
      },
      {
        name: "Clarifier",
        jpName: "明快化者",
        phrases: [
          "Let's pause and define what we mean by...",
          "Are we assuming that...?",
          "How does this connect back to our main question?"
        ]
      }
    ]
  },

  // II. Application & Simulation
  {
    id: "case-study",
    categoryId: "application",
    category: "Application & Simulation",
    jpCategory: "応用とシミュレーション",
    title: "Case Study",
    jpTitle: "ケーススタディ",
    description: "Students analyze a real-world scenario and propose solutions based on theory.",
    jpDescription: "学生は現実のシナリオを分析し、理論に基づいて解決策を提案します。",
    steps: [
      "Present a complex, real-world business or social scenario.",
      "Groups identify the core problems using pre-class knowledge.",
      "Brainstorm and develop strategic, actionable solutions.",
      "Prepare a brief presentation of the proposed strategy.",
      "Class critiques and votes on the most viable solution."
    ],
    roles: [
      {
        name: "Analyst",
        jpName: "分析者",
        phrases: [
          "The core problem identified in the case is...",
          "The data clearly suggests that...",
          "A major weakness in their current model is..."
        ]
      },
      {
        name: "Strategist",
        jpName: "戦略立案者",
        phrases: [
          "I propose we implement...",
          "The first step to recovery should be...",
          "If we do this, the potential risk is..."
        ]
      }
    ]
  },
  {
    id: "role-play",
    categoryId: "application",
    category: "Application & Simulation",
    jpCategory: "応用とシミュレーション",
    title: "Role-Play",
    jpTitle: "ロールプレイ",
    description: "Students act out specific roles in a simulated situation to practice skills.",
    jpDescription: "シミュレーションされた状況で特定の役割を演じ、スキルを練習します。",
    steps: [
      "Provide the scenario and detailed role cards to pairs.",
      "Give students 5 minutes to plan their communication strategy.",
      "Students act out the scenario in real-time.",
      "Peers or the instructor observe and use a rubric to assess.",
      "Conduct a feedback session highlighting strengths and areas for growth."
    ],
    roles: [
      {
        name: "Professional",
        jpName: "専門家/担当者",
        phrases: [
          "I sincerely apologize for the inconvenience.",
          "Let me see how I can make this right for you.",
          "Would it be acceptable if I offered you...?"
        ]
      },
      {
        name: "Customer",
        jpName: "顧客/クライアント",
        phrases: [
          "I'm extremely disappointed because...",
          "I expect this issue to be resolved by...",
          "This is unacceptable; I demand..."
        ]
      }
    ]
  },
  {
    id: "mock-press",
    categoryId: "application",
    category: "Application & Simulation",
    jpCategory: "応用とシミュレーション",
    title: "Mock Press Conference",
    jpTitle: "模擬記者会見",
    description: "One group acts as spokespersons, answering challenging questions from student journalists.",
    jpDescription: "一方のグループがスポークスパーソンとして、厳しい質問に答えます。",
    steps: [
      "Assign spokesperson and journalist roles.",
      "Spokespersons draft an official statement; journalists draft tough questions.",
      "Spokespersons deliver the opening statement.",
      "Journalists interrogate; spokespersons must defend their position using facts.",
      "Evaluate the spokespersons' crisis management and poise."
    ],
    roles: [
      {
        name: "Spokesperson",
        jpName: "スポークスパーソン",
        phrases: [
          "Today, we are thrilled to announce...",
          "To address your question, our main focus is...",
          "We assure the public that..."
        ]
      },
      {
        name: "Journalist",
        jpName: "ジャーナリスト",
        phrases: [
          "Can you comment on the rumors about...?",
          "Some critics say... How do you respond?",
          "What is the exact timeline for...?"
        ]
      }
    ]
  },
  {
    id: "simulation",
    categoryId: "application",
    category: "Application & Simulation",
    jpCategory: "応用とシミュレーション",
    title: "Simulation",
    jpTitle: "シミュレーション",
    description: "A structured environment where students navigate complex rules to achieve an objective.",
    jpDescription: "学生が目的を達成するために複雑なルールをナビゲートする構造化された環境。",
    steps: [
      "Explain the rules, objectives, and constraints of the simulation (e.g., UN Summit).",
      "Assign specific countries, companies, or factions to groups.",
      "Run the simulation, allowing time for negotiations and alliances.",
      "Announce the final outcomes based on student decisions.",
      "Debrief to connect the simulation experience back to theoretical concepts."
    ],
    roles: [
      {
        name: "Delegate",
        jpName: "代表者",
        phrases: [
          "My organization's top priority is...",
          "We cannot agree to this target unless...",
          "We are willing to compromise on..."
        ]
      },
      {
        name: "Moderator",
        jpName: "司会者",
        phrases: [
          "Let's hear from the delegate of...",
          "We need to reach a consensus on...",
          "Please keep your remarks under one minute."
        ]
      }
    ]
  },
  {
    id: "stations",
    categoryId: "application",
    category: "Application & Simulation",
    jpCategory: "応用とシミュレーション",
    title: "Stations / Learning Centers",
    jpTitle: "ステーション活動",
    description: "Students rotate through different activity stations to practice various skills.",
    jpDescription: "学生は様々なスキルを練習するために、異なる活動ステーションを巡回します。",
    steps: [
      "Set up 3-4 physical stations in the room, each with a distinct task.",
      "Divide the class into small groups and assign a starting station.",
      "Groups work on the station's task for a strict time limit (e.g., 10 mins).",
      "Sound a timer, and groups rotate to the next station.",
      "Review answers and clear up common misconceptions together."
    ],
    roles: [
      {
        name: "Station Leader",
        jpName: "リーダー",
        phrases: [
          "At this station, our objective is to...",
          "Let's review the instructions first.",
          "Time is almost up; let's check our answers."
        ]
      },
      {
        name: "Participant",
        jpName: "参加者",
        phrases: [
          "I think the most appropriate phrase is...",
          "Could you explain why this option is better?",
          "Let's move on to the next task quickly."
        ]
      }
    ]
  },

  // III. Collaboration & Problem Solving
  {
    id: "jigsaw",
    categoryId: "collaboration",
    category: "Collaboration & Problem Solving",
    jpCategory: "協働と課題解決",
    title: "Jigsaw",
    jpTitle: "ジグソー法",
    description: "Students become experts on one piece of content, then teach it to their home group.",
    jpDescription: "学生は内容の一部について専門家になり、それを元のグループに教えます。",
    steps: [
      "Divide the learning material into 4 distinct segments (A, B, C, D).",
      "Form Expert Groups where students study the same segment together.",
      "Students return to their Home Groups (containing one A, B, C, and D).",
      "Each expert teaches their segment to the rest of the home group.",
      "Assign a group task that requires knowledge from all four segments to solve."
    ],
    roles: [
      {
        name: "Expert",
        jpName: "エキスパート",
        phrases: [
          "My section focused on...",
          "The most important takeaway from my reading is...",
          "Make sure you take notes on this specific term..."
        ]
      },
      {
        name: "Learner",
        jpName: "学習者",
        phrases: [
          "Could you repeat that last point?",
          "How does this compare to my topic?",
          "Let me make sure I understood: you mean..."
        ]
      }
    ]
  },
  {
    id: "quick-problem",
    categoryId: "collaboration",
    category: "Collaboration & Problem Solving",
    jpCategory: "協働と課題解決",
    title: "Quick Problem-Solving",
    jpTitle: "短期課題解決型プロジェクト",
    description: "A rapid, time-constrained challenge requiring teamwork and quick decisions.",
    jpDescription: "チームワークと迅速な決断を必要とする、時間制限のある課題。",
    steps: [
      "Introduce a specific problem with strict constraints (budget, time, materials).",
      "Start a countdown timer to create a sense of urgency.",
      "Groups frantically brainstorm, filter ideas, and select the best solution.",
      "Groups finalize their output (e.g., a sketch, a plan, a structural build).",
      "Each group quickly presents their solution for peer evaluation."
    ],
    roles: [
      {
        name: "Project Manager",
        jpName: "マネージャー",
        phrases: [
          "We only have 10 minutes left to decide.",
          "Let's stay focused on the budget/limit.",
          "We need to finalize our plan now."
        ]
      },
      {
        name: "Researcher",
        jpName: "リサーチャー",
        phrases: [
          "I found a practical option for...",
          "What if we try this alternative route?",
          "This fits perfectly into our requirements."
        ]
      }
    ]
  },
  {
    id: "concept-mapping",
    categoryId: "collaboration",
    category: "Collaboration & Problem Solving",
    jpCategory: "協働と課題解決",
    title: "Concept-Mapping",
    jpTitle: "コンセプトマッピング",
    description: "Collaborative creation of visual diagrams connecting various ideas and terms.",
    jpDescription: "様々なアイデアや用語を結びつける視覚的な図の協働作成。",
    steps: [
      "Provide a list of key concepts, theories, and terms from the pre-class reading.",
      "Provide large poster paper or digital whiteboard access.",
      "Groups arrange the terms and draw connecting arrows.",
      "Crucially, require students to write a verb or phrase on the arrows explaining the relationship.",
      "Conduct a gallery walk to compare different structural interpretations."
    ],
    roles: [
      {
        name: "Mapper",
        jpName: "制作者",
        phrases: [
          "Where should I position this concept?",
          "Should this be a main branch or a sub-branch?",
          "Let's use a different color for this category."
        ]
      },
      {
        name: "Connector",
        jpName: "論理連結者",
        phrases: [
          "This point is a direct result of...",
          "We should draw an arrow linking X and Y.",
          "These two concepts are closely related because..."
        ]
      }
    ]
  },
  {
    id: "qft",
    categoryId: "collaboration",
    category: "Collaboration & Problem Solving",
    jpCategory: "協働と課題解決",
    title: "Question Formulation (QFT)",
    jpTitle: "質問づくり",
    description: "A structured process for generating, refining, and prioritizing questions.",
    jpDescription: "質問を生成、洗練、優先順位付けするための構造化されたプロセス。",
    steps: [
      "Teacher presents a Question Focus (a statement, image, or video, not a question).",
      "Students brainstorm as many questions as possible without stopping to judge or answer them.",
      "Students categorize questions as closed-ended or open-ended.",
      "Students practice changing closed to open, and vice-versa.",
      "The group selects their top 3 priority questions for further research."
    ],
    roles: [
      {
        name: "Scribe",
        jpName: "記録係",
        phrases: [
          "Let me get that down exactly as you said it.",
          "Give me a second to finish writing.",
          "What's our next question?"
        ]
      },
      {
        name: "Refiner",
        jpName: "洗練係",
        phrases: [
          "Let's turn that yes/no question into an open-ended one.",
          "How can we rephrase this to be more specific?",
          "This question seems to be our priority."
        ]
      }
    ]
  },
  {
    id: "affinity",
    categoryId: "collaboration",
    category: "Collaboration & Problem Solving",
    jpCategory: "協働と課題解決",
    title: "Affinity Mapping",
    jpTitle: "親和図法/KJ法",
    description: "Grouping brainstormed ideas into categories to find patterns.",
    jpDescription: "ブレインストーミングしたアイデアをカテゴリーに分類し、パターンを見つけます。",
    steps: [
      "Students independently write ideas on sticky notes (one idea per note).",
      "Place all sticky notes randomly on a wall or whiteboard.",
      "Without speaking, group members physically move notes into related clusters.",
      "Once settled, the group discusses and writes a Header name for each cluster.",
      "Analyze the patterns to draw conclusions about the main issue."
    ],
    roles: [
      {
        name: "Idea Generator",
        jpName: "アイデア創出者",
        phrases: [
          "I'll write down...",
          "Another idea that comes to mind is...",
          "Let's brain-dump everything first."
        ]
      },
      {
        name: "Categorizer",
        jpName: "分類者",
        phrases: [
          "These three notes belong together.",
          "Let's name this category...",
          "Does this note fit better here or there?"
        ]
      }
    ]
  },

  // IV. Presentation & Feedback
  {
    id: "peer-review",
    categoryId: "presentation",
    category: "Presentation & Feedback",
    jpCategory: "発表とフィードバック",
    title: "Peer Review",
    jpTitle: "ピア・レビュー",
    description: "Students evaluate each other's work using a rubric and provide constructive feedback.",
    jpDescription: "ルーブリックを使用して互いの作品を評価し、建設的なフィードバックを提供します。",
    steps: [
      "Students complete a draft assignment before or during the first half of class.",
      "Distribute a clear grading rubric.",
      "Students exchange work and silently evaluate using the rubric.",
      "Reviewers write specific, actionable feedback (e.g., Two stars and a wish).",
      "Partners discuss the feedback face-to-face."
    ],
    roles: [
      {
        name: "Reviewer",
        jpName: "評価者",
        phrases: [
          "I really liked how you structured...",
          "One area for improvement might be...",
          "Have you considered adding a specific example here?"
        ]
      },
      {
        name: "Author",
        jpName: "執筆者",
        phrases: [
          "Thank you for the constructive feedback.",
          "What did you mean exactly when you said...?",
          "I'll definitely revise that paragraph."
        ]
      }
    ]
  },
  {
    id: "mini-presentation",
    categoryId: "presentation",
    category: "Presentation & Feedback",
    jpCategory: "発表とフィードバック",
    title: "Mini-Presentation",
    jpTitle: "ミニプレゼンテーション",
    description: "Short, focused presentations to share findings or pitch ideas.",
    jpDescription: "発見を共有したりアイデアを売り込んだりするための、短く焦点を絞ったプレゼンテーション。",
    steps: [
      "Assign groups a topic to synthesize into a pitch.",
      "Set strict parameters (e.g., exactly 3 minutes, max 3 slides).",
      "Groups finalize their talking points and practice.",
      "Deliver presentations to the class.",
      "Host a brief Q&A session after each pitch."
    ],
    roles: [
      {
        name: "Presenter",
        jpName: "発表者",
        phrases: [
          "The main problem our project solves is...",
          "As you can see on this slide...",
          "To conclude, we firmly believe that..."
        ]
      },
      {
        name: "Audience",
        jpName: "聴衆",
        phrases: [
          "Could you elaborate on this part?",
          "Who do you consider your main target audience?",
          "I loved the presentation, but I'm curious about..."
        ]
      }
    ]
  },
  {
    id: "debate",
    categoryId: "presentation",
    category: "Presentation & Feedback",
    jpCategory: "発表とフィードバック",
    title: "Debate",
    jpTitle: "ディベート",
    description: "Formal argumentation on a controversial topic using evidence.",
    jpDescription: "証拠を用いた、議論を呼ぶテーマに関する正式な議論。",
    steps: [
      "Present a debatable resolution and assign Affirmative and Negative sides.",
      "Give teams time to compile evidence from pre-class readings.",
      "Teams deliver opening constructive speeches.",
      "Conduct cross-examination where sides ask each other direct questions.",
      "Deliver closing rebuttals and have the class vote on the winner."
    ],
    roles: [
      {
        name: "Affirmative",
        jpName: "正方",
        phrases: [
          "We strongly advocate that...",
          "The primary benefit of this is...",
          "To counter my opponent's argument..."
        ]
      },
      {
        name: "Negative",
        jpName: "反方",
        phrases: [
          "On the contrary, this would lead to...",
          "The fatal flaw in that logic is...",
          "While that sounds ideal, realistically..."
        ]
      }
    ]
  },
  {
    id: "gallery-walk",
    categoryId: "presentation",
    category: "Presentation & Feedback",
    jpCategory: "発表とフィードバック",
    title: "Gallery Walk",
    jpTitle: "ギャラリーウォーク",
    description: "Students walk around the room to view, discuss, and leave feedback on peers' displayed work.",
    jpDescription: "部屋を歩き回り、展示された仲間の作品を見て議論し、フィードバックを残します。",
    steps: [
      "Groups display their completed work (posters, charts) around the room.",
      "One member stays with the poster as the Exhibitor to explain it.",
      "Other members (Visitors) rotate around the room to examine other works.",
      "Visitors ask questions and leave feedback via sticky notes.",
      "Groups reconvene to review the feedback left on their poster."
    ],
    roles: [
      {
        name: "Exhibitor",
        jpName: "展示者",
        phrases: [
          "Welcome to our exhibit. Our focus is...",
          "Let me walk you through this section.",
          "Do you have any questions about our work?"
        ]
      },
      {
        name: "Visitor",
        jpName: "見学者",
        phrases: [
          "I find this part particularly insightful.",
          "How did your group decide on this format?",
          "I'm going to leave a comment here about..."
        ]
      }
    ]
  },
  {
    id: "four-corners",
    categoryId: "presentation",
    category: "Presentation & Feedback",
    jpCategory: "発表とフィードバック",
    title: "Four Corners",
    jpTitle: "フォーコーナーズ",
    description: "Students choose a corner representing their stance on an issue and debate with other corners.",
    jpDescription: "学生は問題に対する自分の立場を表すコーナーを選び、他のコーナーと議論します。",
    steps: [
      "Label the 4 corners of the room: Strongly Agree, Agree, Disagree, Strongly Disagree.",
      "Read a controversial statement related to the lesson.",
      "Students physically move to the corner that matches their opinion.",
      "Students in each corner confer to build their strongest arguments.",
      "A representative from each corner debates the other corners."
    ],
    roles: [
      {
        name: "Advocate",
        jpName: "擁護者",
        phrases: [
          "We chose this corner because...",
          "The strongest evidence for our position is...",
          "We stand firm on the belief that..."
        ]
      },
      {
        name: "Challenger",
        jpName: "挑戦者",
        phrases: [
          "How do you respond to the fact that...?",
          "Isn't it also true that...?",
          "Your argument doesn't seem to account for..."
        ]
      }
    ]
  }
];
