const roadmaps = {
  // ---------------- IT Roles yaha se ----------------
  "frontend developer": {
    category: "IT",
    steps: [
      "Learn HTML & CSS",
      "JavaScript basics",
      "Responsive design & Flexbox/Grid",
      "Version control (Git & GitHub)",
      "Frameworks (React, Vue, Angular)",
      "APIs & AJAX / Fetch",
      "Testing (Jest, Cypress)",
      "Performance optimization",
      "Accessibility (a11y)",
      "Build projects & portfolio"
    ]
  },
  "backend developer": {
    category: "IT",
    steps: [
      "Learn a programming language (Java, Python, Node.js, Go)",
      "Databases (SQL - MySQL/PostgreSQL, NoSQL - MongoDB)",
      "REST APIs and GraphQL",
      "Authentication & Authorization (JWT, OAuth2)",
      "Server deployment (Docker, Kubernetes)",
      "CI/CD pipelines",
      "Scalability & Performance tuning",
      "Error handling & Logging",
      "Caching (Redis, Memcached)",
      "Monitoring tools (Prometheus, Grafana)"
    ]
  },
  "full stack developer": {
    category: "IT",
    steps: [
      "Frontend basics (HTML, CSS, JavaScript)",
      "Backend basics (Node.js, Django, Spring Boot)",
      "Databases (SQL & NoSQL)",
      "REST APIs & GraphQL",
      "Authentication & Security",
      "Frontend frameworks (React, Vue)",
      "DevOps basics (Docker, CI/CD)",
      "Testing (Unit, Integration, E2E)",
      "Cloud hosting (AWS, Azure, Vercel, Netlify)",
      "Build & deploy full-stack projects"
    ]
  },
  "data entry operator": {
    category: "IT",
    steps: [
      "Typing skills & speed improvement",
      "MS Office (Excel, Word, PowerPoint)",
      "Basic computer operations",
      "Database entry tools",
      "Accuracy and attention to detail",
      "Basic data validation",
      "Spreadsheet formulas",
      "Using CRM/ERP systems",
      "Cloud storage tools (Google Drive, OneDrive)",
      "Time management"
    ]
  },
  "data analyst": {
    category: "IT",
    steps: [
      "Excel & spreadsheets",
      "SQL queries",
      "Data visualization (Tableau, Power BI)",
      "Python / R basics",
      "Statistics & Probability",
      "ETL (Extract, Transform, Load)",
      "Exploratory Data Analysis (EDA)",
      "Predictive analytics basics",
      "Big Data tools",
      "Business reporting"
    ]
  },
  "data engineer": {
    category: "IT",
    steps: [
      "Python / Java / Scala",
      "Databases (SQL & NoSQL)",
      "Data pipelines (ETL)",
      "Big Data frameworks (Hadoop, Spark, Kafka)",
      "Cloud platforms (AWS, GCP, Azure)",
      "Data warehousing (Snowflake, Redshift)",
      "Data lake concepts",
      "Workflow orchestration (Airflow, Luigi)",
      "Streaming data systems",
      "Monitoring & scaling pipelines"
    ]
  },
  "software engineer": {
    category: "IT",
    steps: [
      "Programming fundamentals (C, C++, Java, Python)",
      "Data structures & algorithms",
      "OOP concepts",
      "Version control (Git)",
      "Database management",
      "Software design patterns",
      "Agile/Scrum methodologies",
      "Testing (Unit, Integration, System)",
      "System design & architecture",
      "Build software projects"
    ]
  },
  "mobile app developer": {
    category: "IT",
    steps: [
      "Programming languages (Java, Kotlin, Swift, Dart)",
      "Mobile UI/UX design",
      "Android/iOS SDKs",
      "Cross-platform frameworks (Flutter, React Native)",
      "Databases (SQLite, Firebase, Realm)",
      "REST APIs & GraphQL",
      "App security best practices",
      "Publishing apps (Google Play, App Store)",
      "Testing & debugging tools",
      "Continuous updates & maintenance"
    ]
  },
  "database administrator": {
    category: "IT",
    steps: [
      "Database fundamentals (SQL, NoSQL)",
      "RDBMS systems (MySQL, PostgreSQL, Oracle)",
      "Database design & normalization",
      "Backup & recovery strategies",
      "Performance tuning & optimization",
      "Security & encryption",
      "Replication & clustering",
      "Stored procedures & triggers",
      "Monitoring tools",
      "High availability & disaster recovery"
    ]
  },
  "network engineer": {
    category: "IT",
    steps: [
      "Networking fundamentals (TCP/IP, OSI model)",
      "Routing & switching (Cisco, Juniper)",
      "LAN, WAN, WLAN",
      "Firewalls & VPNs",
      "VoIP & network services",
      "Cloud networking (AWS VPC, Azure VNets)",
      "Network monitoring tools (Wireshark, Nagios)",
      "IPv6, DNS, DHCP",
      "Load balancing & QoS",
      "Network automation (Python, Ansible)"
    ]
  },
  "system administrator": {
    category: "IT",
    steps: [
      "Operating systems (Linux, Windows Server)",
      "Networking basics",
      "User & access management",
      "System security & firewalls",
      "Virtualization (VMware, Hyper-V)",
      "Cloud services administration",
      "Backup & recovery",
      "Monitoring & troubleshooting",
      "Automation with scripts (Bash, PowerShell)",
      "Documentation & reporting"
    ]
  },
  "product manager": {
    category: "IT",
    steps: [
      "Understand product lifecycle",
      "Market research & analysis",
      "Agile & Scrum methodologies",
      "Roadmap planning",
      "Stakeholder communication",
      "Wireframing & prototyping",
      "Basic data analytics",
      "Business models & KPIs",
      "A/B testing",
      "Product launch & iteration"
    ]
  },
  "technical writer": {
    category: "IT",
    steps: [
      "Strong writing & grammar skills",
      "Understand technical concepts",
      "Documentation tools (MS Word, Google Docs)",
      "Markdown & HTML basics",
      "API documentation",
      "Version control (Git)",
      "Diagramming tools (Lucidchart, Draw.io)",
      "Writing user manuals & guides",
      "Content organization & indexing",
      "Collaboration with engineers"
    ]
  },

  // ---------------- IoT Roles yaha se hue ----------------
  "iot developer": {
    category: "IoT",
    steps: [
      "Learn C / C++ or Python",
      "Microcontrollers (Arduino, ESP32, STM32)",
      "Sensors & actuators",
      "IoT protocols (MQTT, CoAP, HTTP)",
      "IoT operating systems (FreeRTOS, Zephyr)",
      "Cloud platforms (AWS IoT, Azure IoT, GCP)",
      "IoT gateways & edge devices",
      "IoT security basics",
      "IoT project prototyping",
      "Deployment of IoT solutions"
    ]
  },
  "iot tester": {
    category: "IoT",
    steps: [
      "Manual & automation testing basics",
      "IoT device testing methodologies",
      "Connectivity & protocol testing",
      "Security testing for IoT devices",
      "Performance testing under load",
      "Embedded testing tools",
      "Test automation frameworks",
      "Compliance & certification testing",
      "Cloud IoT testing",
      "End-to-end IoT system testing"
    ]
  },
  "robotics engineer": {
    category: "IoT",
    steps: [
      "Programming (C++, Python, ROS)",
      "Electronics & embedded systems",
      "Robotics kinematics & dynamics",
      "Microcontrollers & sensors",
      "Path planning algorithms",
      "Computer Vision & AI",
      "Robotic operating system (ROS)",
      "Simulation tools (Gazebo, MATLAB)",
      "Autonomous navigation",
      "Building real-world robots"
    ]
  },
  "automotive iot engineer": {
    category: "IoT",
    steps: [
      "Automotive electronics basics",
      "CAN bus communication",
      "Embedded programming",
      "Vehicle sensors & actuators",
      "Telematics systems",
      "ADAS (Advanced Driver Assistance Systems)",
      "V2X communication",
      "Automotive cybersecurity",
      "Testing automotive IoT",
      "EV & smart car integration"
    ]
  },
  "drone systems engineer": {
    category: "IoT",
    steps: [
      "Drone design & aerodynamics",
      "Flight controllers",
      "Embedded programming (C++, Python)",
      "Communication systems",
      "GPS & navigation",
      "Computer vision for drones",
      "Autonomous flight algorithms",
      "Regulations & compliance",
      "Drone data analytics",
      "Drone fleet management"
    ]
  },
  "smart city engineer": {
    category: "IoT",
    steps: [
      "Urban IoT infrastructure",
      "Smart lighting & traffic systems",
      "IoT protocols & communication",
      "Cloud integration for cities",
      "Smart grids & energy management",
      "Public safety IoT systems",
      "Big Data in urban IoT",
      "Citizen engagement platforms",
      "Sustainability solutions",
      "Deploying smart city projects"
    ]
  },
  "industrial iot engineer": {
    category: "IoT",
    steps: [
      "Industrial protocols (Modbus, OPC-UA)",
      "SCADA systems",
      "Edge computing for industry",
      "Sensor networks for factories",
      "Predictive maintenance models",
      "Industrial cybersecurity",
      "Digital twins",
      "Integration with ERP systems",
      "Big data & AI in manufacturing",
      "Deploying IIoT solutions"
    ]
  },
  "healthcare iot engineer": {
    category: "IoT",
    steps: [
      "Medical device standards",
      "Wearable health sensors",
      "Wireless health protocols (BLE, Zigbee)",
      "Patient data security",
      "Healthcare cloud platforms",
      "IoT for telemedicine",
      "AI in healthcare IoT",
      "Regulatory compliance (HIPAA, GDPR)",
      "Data analytics in healthcare",
      "Smart hospital systems"
    ]
  },
  "agricultural iot engineer": {
    category: "IoT",
    steps: [
      "Smart farming basics",
      "IoT sensors for soil & crops",
      "Wireless protocols for agriculture",
      "Data analytics for yield prediction",
      "Automated irrigation systems",
      "Drones in agriculture",
      "Livestock monitoring",
      "Agri-robotics",
      "AI in agriculture",
      "Smart greenhouse automation"
    ]
  },
  "iot ai/ml engineer": {
    category: "IoT",
    steps: [
      "IoT data pipelines",
      "Machine learning basics",
      "Deep learning models",
      "Edge AI deployment",
      "Computer Vision in IoT",
      "Anomaly detection in IoT data",
      "Predictive maintenance",
      "AI frameworks (TensorFlow Lite, PyTorch Mobile)",
      "Cloud AI integration",
      "Deploy AI-enabled IoT projects"
    ]
  },
  "edge computing specialist": {
    category: "IoT",
    steps: [
      "Basics of cloud vs edge computing",
      "Microcontrollers & gateways",
      "IoT edge frameworks (EdgeX Foundry, Azure IoT Edge)",
      "Data preprocessing at the edge",
      "Security in edge devices",
      "Low-latency networking",
      "Integration with cloud IoT platforms",
      "Monitoring & management tools",
      "AI/ML at the edge",
      "Scalable edge computing solutions"
    ]
  }
};
