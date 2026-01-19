const topics = [
    "Theoretical Frameworks for Technology Integration",
    "Instructional Design Models",
    "Distance Learning Modes",
    "Ethical Considerations in Technology Use",
    "Developing Technology-Integrated Lesson Plans",
    "Impact of Technology in Mathematics Instruction",
    "Emerging Trends in Mathematics Technology",
    "Learning Management Systems (LMS)",
    "Dynamic Mathematics Software",
    "Spreadsheet Applications for Data Analysis",
    "Artificial Intelligence & Machine Learning in Math Education",
    "Coding and Computational Thinking",
    "Technology-Based Assessments",
    "Online Learning Platforms",
    "Virtual Manipulatives",
    "AI in Education"
  ];
  
  const dropdown = document.getElementById("topicsDropdown");
  
  topics.forEach((topic, index) => {
    const li = document.createElement("li");
    li.innerHTML = `<a href="topic.html?id=${index + 1}">${index + 1}. ${topic}</a>`;
    dropdown.appendChild(li);
  });