

const searchInput = document.getElementById("searchInput");
const suggestionsBox = document.getElementById("suggestions");
const roadmapDiv = document.getElementById("roadmap");

searchInput.addEventListener("input", () => {
  let query = searchInput.value.toLowerCase();
  suggestionsBox.innerHTML = "";

  if (query.length > 0) {
    let matches = Object.keys(roadmaps).filter(role =>
      role.toLowerCase().includes(query)
    );

    if (matches.length > 0) {
      matches.forEach(match => {
        let div = document.createElement("div");
        div.textContent = match;
        let span = document.createElement("span");
        span.textContent = `(${roadmaps[match].category})`;
        span.classList.add("category");
        div.appendChild(span);

        div.classList.add("suggestion-item");
        div.onclick = () => {
          searchInput.value = match;
          suggestionsBox.innerHTML = "";
          showRoadmap(match);
        };
        suggestionsBox.appendChild(div);
      });
    } else {
      let noMatch = document.createElement("div");
      noMatch.textContent = "Roadmap Not Available For this role";
      noMatch.classList.add("suggestion-item");
      noMatch.style.color = "red";
      suggestionsBox.appendChild(noMatch);
    }
  }
});

function showRoadmap(role) {
  roadmapDiv.innerHTML = "";
  let data = roadmaps[role.toLowerCase()];
  if (!data) {
    roadmapDiv.innerHTML = `<p>Roadmap not available for "${role}"</p>`;
    return;
  }

  let title = document.createElement("h2");
  title.textContent = `${role.charAt(0).toUpperCase() + role.slice(1)} Roadmap`;
  roadmapDiv.appendChild(title);

  let timeline = document.createElement("div");
  timeline.classList.add("timeline");

  data.steps.forEach(step => {
    let div = document.createElement("div");
    div.classList.add("step");
    let p = document.createElement("p");
    p.textContent = step;
    div.appendChild(p);
    timeline.appendChild(div);
  });

  roadmapDiv.appendChild(timeline);
}
