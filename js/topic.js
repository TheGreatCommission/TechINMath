const courseTopics = [
    { id: 1, title: "Theoretical Frameworks for Technology Integration", focus: "Constructivist Theory of Technology Integration", image: "assets/topic-images/topic1.png" },
  
    { id: 2, title: "Instructional Design Models", focus: "ADDIE Model, ASSURE Model", image: "assets/topic-images/topic2.png" },
    { id: 3, title: "Instructional Design Models", focus: "Backwards Design, Dick and Carey Model", image: "assets/topic-images/topic3.png" },
    { id: 4, title: "Instructional Design Models", focus: "TPACK Model, SAMR Model", image: "assets/topic-images/topic4.png" },
  
    { id: 5, title: "Distance Learning Modes", focus: "Blended Learning, Hybrid Learning, Open Learning", image: "assets/topic-images/topic5.png" },
    { id: 6, title: "Distance Learning Modes", focus: "Integration of Educational Technology to Distance Learning", image: "assets/topic-images/topic6.png" },
  
    { id: 7, title: "Ethical Considerations in Technology Use", focus: "", image: "assets/topic-images/topic7.png" },
    { id: 8, title: "Developing Technology Integrated Lesson Plans", focus: "", image: "assets/topic-images/topic8.png" },
    { id: 9, title: "Impact of Technology in Mathematics Instruction", focus: "", image: "assets/topic-images/topic9.png" },
    { id: 10, title: "Emerging Trends in Mathematics Technology", focus: "", image: "assets/topic-images/topic10.png" },
  
    { id: 11, title: "Learning Management Systems", focus: "Google Classroom", image: "assets/topic-images/topic11.png" },
    { id: 12, title: "Learning Management Systems", focus: "MS Teams / Pencil Spaces", image: "assets/topic-images/topic12.png" },
    { id: 13, title: "Learning Management Systems", focus: "Google Sites", image: "assets/topic-images/topic13.png" },
  
    { id: 14, title: "Dynamic Mathematics Software", focus: "Desmos", image: "assets/topic-images/topic14.png" },
    { id: 15, title: "Dynamic Mathematics Software", focus: "GeoGebra", image: "assets/topic-images/topic15.png" },
  
    { id: 16, title: "Spreadsheet Applications for Data Analysis", focus: "MS Excel / Google Sheets", image: "assets/topic-images/topic16.png" },
    { id: 17, title: "Spreadsheet Applications for Data Analysis", focus: "Mail Merging / Autocrat", image: "assets/topic-images/topic17.png" },
    { id: 18, title: "Spreadsheet Applications for Data Analysis", focus: "SPSS and similar applications", image: "assets/topic-images/topic18.png" },
  
    { id: 19, title: "Artificial Intelligence and Machine Learning in Mathematics Education", focus: "Prompt Engineering, ChatGPT, Gemini, Copilot", image: "assets/topic-images/topic19.png" },
  
    { id: 20, title: "Coding and Computational Thinking", focus: "VBA for Applications, Macros", image: "assets/topic-images/topic20.png" },
  
    { id: 21, title: "Technology-Based Assessments", focus: "", image: "assets/topic-images/topic21.png" },
  
    { id: 22, title: "Online Learning Platforms", focus: "Khan Academy, Coursera", image: "assets/topic-images/topic22.png" },
  
    { id: 23, title: "Virtual Manipulatives", focus: "Mathigon Polypad, Toy Theater, Didax", image: "assets/topic-images/topic23.png" },
  
    { id: 24, title: "AI in Education", focus: "", image: "assets/topic-images/topic24.png" }

  ];
  
  const container = document.getElementById("topicsContainer");
  
  courseTopics.forEach(topic => {
    const card = document.createElement("div");
    card.className = "topic-card";
    card.innerHTML = `
      <div class="topic-image">
        <img src="${topic.image}" alt="${topic.title}">
      </div>
      <span class="topic-number">Topic ${topic.id}</span>
      <h3>${topic.title}</h3>
      ${topic.focus ? `<p class="topic-focus"><strong>Focus:</strong> ${topic.focus}</p>` : ""}
      <button onclick="openTopic(${topic.id})">Open Topic</button>
    `;
    container.appendChild(card);
  });
  
  function openTopic(id) {
    window.location.href = `topic.html?id=${id}`;
  }