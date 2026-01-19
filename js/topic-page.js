const params = new URLSearchParams(window.location.search);
const topicId = parseInt(params.get("id"));

const topic = topicData.find(t => t.id === topicId);

// ✅ SET BACKGROUND IMAGE
document.querySelector(".topic-page-bg").style.backgroundImage =
  `url(${topic.image})`;

document.getElementById("topicTitle").innerText = topic.title;
document.getElementById("topicFocus").innerText = topic.focus || "";

function showTab(tab) {
  const content = document.getElementById("tabContent");

  if (tab === "overview") {
    content.innerHTML = `<p>${topic.overview}</p>`;
  }

  if (tab === "module") {
    content.innerHTML = `<p>${topic.module}</p>`;
  }

  if (tab === "video") {
    content.innerHTML = topic.video
      ? `<iframe width="100%" height="400" src="${topic.video}" frameborder="0" allowfullscreen></iframe>`
      : `<p>No video available.</p>`;
  }

  if (tab === "assessment") {
    content.innerHTML = topic.questions.length
      ? "Assessment coming soon."
      : "<p>No assessment available.</p>";
  }
}

const objectivesList = document.getElementById("topicObjectives");
objectivesList.innerHTML = "";

if (topic.objectives && topic.objectives.length > 0) {
  topic.objectives.forEach(obj => {
    const li = document.createElement("li");
    li.textContent = obj;
    objectivesList.appendChild(li);
  });
}

showTab("overview");