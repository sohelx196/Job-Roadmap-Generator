const searchInput = document.getElementById("searchInput");
const suggestionsBox = document.getElementById("suggestions");
const roadmapDiv = document.getElementById("roadmap");

searchInput.addEventListener("input", () => {
  let query = searchInput.value.toLowerCase();
  suggestionsBox.innerHTML = "";

  let matches = Object.keys(roadmaps).filter(role =>
    role.toLowerCase().includes(query) &&
    roadmaps[role].category === "hardware"
  );

  if (matches.length > 0) {
    matches.forEach(match => {
      let div = document.createElement("div");
      div.textContent = match;
      div.classList.add("suggestion-item");
      div.onclick = () => {
        searchInput.value = match;
        suggestionsBox.innerHTML = "";
        showRoadmap(match);
      };
      suggestionsBox.appendChild(div);
    });
  } else if (query.length > 0) {
    let noMatch = document.createElement("div");
    noMatch.textContent = "No Hardware role found";
    noMatch.classList.add("suggestion-item");
    noMatch.style.color = "red";
    suggestionsBox.appendChild(noMatch);
  }
});

function showRoadmap(role) {
  roadmapDiv.innerHTML = "";

  let data = roadmaps[role.toLowerCase()];
  if (!data || data.category !== "hardware") {
    roadmapDiv.style.display = "block";
    roadmapDiv.innerHTML = `<p style="color:red;">Not available in Hardware</p>`;
    return;
  }

  roadmapDiv.innerHTML = `
    <h2>${role.toUpperCase()} Roadmap</h2>
    <div class="timeline">
      ${data.steps.map(step => `<div class="step"><p>${step}</p></div>`).join("")}
    </div>
  `;
}
