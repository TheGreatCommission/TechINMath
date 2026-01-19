const topicData = [
    {
      id: 1,
      title: "Theoretical Frameworks for Technology Integration",
      focus: "Constructivist Theory of Technology Integration",
      image: "assets/topic-images/topic1.png",
      overview: "This topic introduces the theoretical foundations that support the integration of technology in education.",
      module: "The constructivist theory emphasizes that learners actively construct knowledge through experience and interaction. Technology supports constructivism by providing interactive, student‑centered learning environments.",
      video: "",
      questions: []
    },
  
    {
      id: 2,
      title: "Instructional Design Models",
      focus: "ADDIE Model, ASSURE Model",
      image: "assets/topic-images/topic2.png",
      overview: "Instructional design models provide systematic approaches to planning effective instruction.",
      module: "The ADDIE model consists of Analysis, Design, Development, Implementation, and Evaluation. The ASSURE model focuses on learner analysis and the use of media and technology to enhance instruction.",
      video: "",
      questions: []
    },
  
    {
      id: 3,
      title: "Instructional Design Models",
      focus: "Backwards Design, Dick and Carey Model",
      image: "assets/topic-images/topic3.png",
      overview: "This topic discusses outcome‑based instructional planning.",
      module: "Backward Design begins with identifying learning outcomes before planning instruction. The Dick and Carey Model views instruction as a system with interrelated components.",
      video: "",
      questions: []
    },
  
    {
      id: 4,
      title: "Instructional Design Models",
      focus: "TPACK Model, SAMR Model",
      image: "assets/topic-images/topic4.png",
      overview: "Technology integration models guide teachers in effective technology use.",
      module: "TPACK highlights the relationship between content, pedagogy, and technology. The SAMR model categorizes technology use into Substitution, Augmentation, Modification, and Redefinition.",
      video: "",
      questions: []
    },
  
    {
      id: 5,
      title: "Distance Learning Modes",
      focus: "Blended Learning, Hybrid Learning, Open Learning",
      image: "assets/topic-images/topic5.png",
      overview: "Distance learning offers flexible educational opportunities through various modes.",
      module: "Blended learning combines face‑to‑face and online instruction. Hybrid learning allows partial in‑person engagement, while open learning promotes flexible access to education.",
      video: "",
      questions: []
    },
  
    {
      id: 6,
      title: "Distance Learning Modes",
      focus: "Integration of Educational Technology to Distance Learning",
      image: "assets/topic-images/topic6.png",
      overview: "Technology plays a critical role in supporting distance education.",
      module: "Educational technology enables communication, collaboration, content delivery, and assessment in distance learning environments.",
      video: "",
      questions: []
    },
  
    {
      id: 7,
      title: "Ethical Considerations in Technology Use",
      focus: "",
      image: "assets/topic-images/topic7.png",
      overview: "Ethical issues arise when using technology in education.",
      module: "This topic covers digital citizenship, data privacy, intellectual property, responsible technology use, and online safety.",
      video: "",
      questions: []
    },
  
    {
      id: 8,
      title: "Developing Technology Integrated Lesson Plans",
      focus: "",
      image: "assets/topic-images/topic8.png",
      overview: "Lesson planning ensures effective technology integration.",
      module: "Teachers must align objectives, tools, strategies, and assessments when designing technology‑integrated lessons.",
      video: "",
      questions: []
    },
  
    {
      id: 9,
      title: "Impact of Technology in Mathematics Instruction",
      focus: "",
      image: "assets/topic-images/topic9.png",
      overview: "Technology significantly influences mathematics teaching and learning.",
      module: "Digital tools improve visualization, problem‑solving skills, engagement, and conceptual understanding in mathematics.",
      video: "",
      questions: []
    },
  
    {
      id: 10,
      title: "Emerging Trends in Mathematics Technology",
      focus: "",
      image: "assets/topic-images/topic10.png",
      overview: "New technologies continuously reshape mathematics education.",
      module: "Emerging trends include artificial intelligence, adaptive learning systems, virtual reality, and data‑driven instruction.",
      video: "",
      questions: []
    },
  
    {
      id: 11,
      title: "Learning Management Systems",
      focus: "Google Classroom",
      image: "assets/topic-images/topic11.png",
      overview: "Learning Management Systems organize digital instruction.",
      module: "Google Classroom allows teachers to manage classes, distribute assignments, communicate, and assess student work efficiently.",
      video: "",
      questions: []
    },
  
    {
      id: 12,
      title: "Learning Management Systems",
      focus: "MS Teams / Pencil Spaces",
      image: "assets/topic-images/topic12.png",
      overview: "Different platforms support online collaboration.",
      module: "Microsoft Teams and Pencil Spaces provide tools for virtual classrooms, communication, collaboration, and content sharing.",
      video: "",
      questions: []
    },
  
    {
      id: 13,
      title: "Learning Management Systems",
      focus: "Google Sites",
      image: "assets/topic-images/topic13.png",
      overview: "Web‑based tools can support instructional delivery.",
      module: "Google Sites enables educators to create instructional websites for resources, activities, and communication.",
      video: "",
      questions: []
    },
  
    {
      id: 14,
      title: "Dynamic Mathematics Software",
      focus: "Desmos",
      image: "assets/topic-images/topic14.png",
      overview: "Dynamic software enhances mathematical visualization.",
      module: "Desmos allows interactive graphing and exploration of mathematical relationships.",
      video: "",
      questions: []
    },
  
    {
      id: 15,
      title: "Dynamic Mathematics Software",
      focus: "GeoGebra",
      image: "assets/topic-images/topic15.png",
      overview: "Mathematical concepts can be explored dynamically.",
      module: "GeoGebra integrates algebra, geometry, statistics, and calculus in an interactive learning environment.",
      video: "",
      questions: []
    },
  
    {
      id: 16,
      title: "Spreadsheet Applications for Data Analysis",
      focus: "MS Excel / Google Sheets",
      image: "assets/topic-images/topic16.png",
      overview: "Spreadsheets are powerful tools for data analysis.",
      module: "Excel and Google Sheets support calculations, charts, formulas, and data organization for mathematical analysis.",
      video: "",
      questions: []
    },
  
    {
      id: 17,
      title: "Spreadsheet Applications for Data Analysis",
      focus: "Mail Merging / Autocrat",
      image: "assets/topic-images/topic17.png",
      overview: "Automation tools improve efficiency.",
      module: "Mail Merge and Autocrat automate document generation using spreadsheet data.",
      video: "",
      questions: []
    },
  
    {
      id: 18,
      title: "Spreadsheet Applications for Data Analysis",
      focus: "SPSS and similar applications",
      image: "assets/topic-images/topic18.png",
      overview: "Advanced tools support statistical analysis.",
      module: "SPSS and similar software analyze complex datasets and perform statistical computations.",
      video: "",
      questions: []
    },
  
    {
      id: 19,
      title: "Artificial Intelligence and Machine Learning in Mathematics Education",
      focus: "Prompt Engineering and AI Tools",
      image: "assets/topic-images/topic19.png",
      overview: "AI is transforming education.",
      module: "AI tools such as ChatGPT, Gemini, and Copilot assist with content generation, feedback, and personalized learning.",
      video: "",
      questions: []
    },
  
    {
      id: 20,
      title: "Coding and Computational Thinking",
      focus: "VBA for Applications / Macros",
      image: "assets/topic-images/topic20.png",
      overview: "Computational thinking develops problem‑solving skills.",
      module: "VBA and macros automate tasks and introduce algorithmic thinking.",
      video: "",
      questions: []
    },
  
    {
      id: 21,
      title: "Technology-Based Assessments",
      focus: "",
      image: "assets/topic-images/topic21.png",
      overview: "Assessment methods evolve with technology.",
      module: "Technology‑based assessments include online quizzes, automated grading, and digital feedback tools.",
      video: "",
      questions: []
    },
  
    {
      id: 22,
      title: "Online Learning Platforms",
      focus: "Khan Academy, Coursera",
      image: "assets/topic-images/topic22.png",
      overview: "Online platforms support self‑paced learning.",
      module: "Khan Academy and Coursera provide structured courses, videos, and practice activities.",
      video: "",
      questions: []
    },
  
    {
      id: 23,
      title: "Virtual Manipulatives",
      focus: "Mathigon Polypad, Toy Theater, Didax",
      image: "assets/topic-images/topic23.png",
      overview: "Virtual tools support conceptual understanding.",
      module: "Virtual manipulatives help learners explore mathematical ideas interactively.",
      video: "",
      questions: []
    },
  
    {
      id: 24,
      title: "AI in Education",
      focus: "",
      image: "assets/topic-images/topic24.png",
      overview: "Artificial intelligence plays an expanding role in education.",
      module: "AI supports personalized learning, intelligent tutoring systems, data analytics, and instructional decision‑making.",
      video: "",
      questions: []
    }
  ];