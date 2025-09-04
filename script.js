const roadmaps = {
  // IT Roles
  "frontend developer": {
    category: "IT",
    steps: [
      "Learn HTML & CSS",
      "JavaScript basics",
      "Responsive design",
      "Version control (Git)",
      "Frameworks (React, Vue, Angular)",
      "APIs & AJAX",
      "Build projects & portfolio"
    ]
  },
  "backend developer": {
    category: "IT",
    steps: [
      "Learn a programming language (Java, Python, Node.js)",
      "Databases (SQL, NoSQL)",
      "APIs and REST",
      "Authentication & Security",
      "Server deployment",
      "Scalability & Performance"
    ]
  },
  "data scientist": {
    category: "IT",
    steps: [
      "Python / R basics",
      "Statistics & Probability",
      "Data visualization",
      "Machine learning algorithms",
      "Deep learning",
      "Big Data tools",
      "Deploy ML models"
    ]
  },

  // IoT Roles
  "iot developer": {
    category: "IoT",
    steps: [
      "Learn C / C++ or Python",
      "Understand microcontrollers (Arduino, ESP32)",
      "Learn sensors & actuators",
      "IoT communication protocols (MQTT, CoAP, HTTP)",
      "Cloud platforms (AWS IoT, Azure IoT, Google IoT Core)",
      "Data security in IoT",
      "Build IoT projects"
    ]
  },
  "iot security engineer": {
    category: "IoT",
    steps: [
      "Networking fundamentals",
      "Cryptography basics",
      "IoT device vulnerabilities",
      "Secure communication protocols",
      "Cloud & edge security",
      "Penetration testing for IoT",
      "Compliance & standards (ISO/IEC, NIST)"
    ]
  },
  "embedded systems engineer": {
    category: "IoT",
    steps: [
      "C programming for embedded systems",
      "Microcontrollers & microprocessors",
      "Real-time operating systems (RTOS)",
      "Memory management",
      "Low-level drivers & interfacing",
      "Testing & debugging embedded devices"
    ]
  }
};

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
