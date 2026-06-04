// ─────────────────────────────────────────────
//  PORTFOLIO DATA — edit this file to update
//  your portfolio. No code changes needed.
// ─────────────────────────────────────────────

export const meta = {
  name: "Saurav Singh",
  title: "Data Scientist & ML Engineer",
  tagline: "NIT Delhi Undergrad · Building Intelligent Systems",
  email: "sauravsingh1216@gmail.com",
  phone: "+91 73800 27961",
  location: "Delhi, India",
  github: "https://github.com/srv-0",
  linkedin: "https://linkedin.com/in/sauravsingh",   // ← update
  resumeUrl: "",                                       // ← paste Google Drive link
  formspreeId: "",                                     // ← paste Formspree ID
};

export const typingPhrases = [
  "Data Scientist",
  "ML Engineer",
  "Data Engineer",
  "AI Developer",
  "Analytics Engineer",
];

export const stats = [
  { label: "Projects Built",     value: 6,  suffix: "+" },
  { label: "Internship Months",  value: 3,  suffix: ""  },
  { label: "Technical Skills",   value: 25, suffix: "+" },
  { label: "ML Accuracy %",      value: 98, suffix: "%"  },
];

export const about = {
  paragraphs: [
    `I'm <strong>Saurav Singh</strong>, a pre-final year undergraduate at <strong>National Institute of Technology, Delhi</strong>. My engineering foundation gives me a systems-level lens — I think in pipelines, constraints, and optimization.`,
    `That mindset translates directly into <strong>machine learning and data engineering</strong>: building LSTM models with 98.48% accuracy, designing ETL pipelines, and architecting full-stack ML products that go from raw data to live deployment.`,
    `From <strong>LangChain RAG systems</strong> to Power BI dashboards to MERN applications — I build end-to-end. Every layer of the stack is a tool, and I use whichever ones best solve the problem.`,
  ],
  highlights: [
    { icon: "🎓", title: "B.Tech @ NIT Delhi", sub: "Mechanical Engineering · 2023–2027 · 7.4 CGPA" },
    { icon: "📍", title: "Delhi, India",        sub: "Open to remote & relocation"                  },
    { icon: "💡", title: "Actively Seeking",    sub: "Data Science · ML Engineering · Data Eng"     },
  ],
  cards: [
    { icon: "🔬", title: "Systems Thinker",    body: "Engineering training means I decompose problems — model evaluation, pipeline bottlenecks, data quality issues — the same way I'd approach a mechanical design failure." },
    { icon: "⚙️", title: "End-to-End Builder", body: "LSTM networks to React frontends to Node.js APIs. I architect complete systems: data ingestion → model → API → UI, without needing a separate team for each layer." },
    { icon: "📊", title: "Production-Minded",  body: "Achieving 98.48% ML accuracy matters. So does a 100/100 PageSpeed score. I care about metrics that actually show up in production, not just notebooks." },
    { icon: "🏆", title: "Award Winner",       body: "Finalist at TIFAN SAEINDIA (recognized by SAE India President). Shortlisted for Flipkart GRiD 7.0 Hackathon. Academic Excellence awardee, JNV Chandigarh." },
  ],
};

export const skills = [
  {
    category: "Languages",
    color: "cyan",
    icon: "🐍",
    items: [
      { name: "Python",           pct: 90 },
      { name: "SQL",              pct: 85 },
      { name: "JavaScript",       pct: 80 },
      { name: "Java (DSA+OOPs)",  pct: 75 },
      { name: "C",                pct: 65 },
    ],
  },
  {
    category: "Data & Analytics",
    color: "amber",
    icon: "📊",
    items: [
      { name: "Pandas / NumPy",       pct: 88 },
      { name: "Power BI / DAX",       pct: 82 },
      { name: "Excel / Sheets",       pct: 85 },
      { name: "Matplotlib / Seaborn", pct: 80 },
      { name: "Tableau",              pct: 70 },
    ],
  },
  {
    category: "Machine Learning",
    color: "violet",
    icon: "🤖",
    items: [
      { name: "Scikit-learn",           pct: 82 },
      { name: "LSTM / ANN",             pct: 80 },
      { name: "LangChain / RAG",        pct: 72 },
      { name: "Vector Embeddings",      pct: 68 },
      { name: "Classification / Reg.",  pct: 83 },
    ],
  },
  {
    category: "Backend & DB",
    color: "accent",
    icon: "🌐",
    tags: ["Node.js","Express.js","MongoDB","MySQL","PostgreSQL","REST APIs","JWT Auth","MERN"],
  },
  {
    category: "Frontend",
    color: "green",
    icon: "⚛️",
    tags: ["React.js","Next.js","HTML/CSS","Chakra UI","Context API","Firebase","Stripe","Tailwind"],
  },
  {
    category: "Tools & DevOps",
    color: "pink",
    icon: "🛠️",
    tags: ["Git/GitHub","Docker","Jupyter","VS Code","Spring Boot","BeautifulSoup","JUnit/TDD","Vercel"],
  },
];

export const projects = [
  {
    id: "agriproplus",
    featured: true,
    title: "Agri ProPlus",
    subtitle: "AI-Powered Agricultural Intelligence Platform",
    emoji: "🌾",
    tags: ["ml", "fullstack"],
    desc: "End-to-end agricultural platform combining ML crop recommendations, real-time news aggregation, and government scheme extraction — serving farmers with data-driven insights.",
    outcomes: [
      "LSTM-based ANN achieving 98.48% crop recommendation accuracy",
      "Python scraper (BeautifulSoup) extracting govt scheme data into MongoDB",
      "Real-time news & YouTube pipeline via Node.js/Express REST API",
      "Firebase auth + React + Chakra UI frontend",
    ],
    tech: ["Python","LSTM/ANN","BeautifulSoup","MongoDB","React","Node.js","Firebase","Chakra UI"],
    github: "",  // ← paste repo link
    live: "",
  },
  {
    id: "medcart",
    featured: false,
    title: "MedCart",
    subtitle: "Secure Healthcare Delivery Platform",
    emoji: "💊",
    tags: ["fullstack"],
    desc: "Full-stack medicine e-commerce platform. 100/100 Google PageSpeed accessibility score, JWT auth, Stripe payments, real-time cart.",
    outcomes: [
      "100/100 Google PageSpeed accessibility score",
      "5+ secure REST APIs with JWT authentication",
      "Stripe payment gateway + real-time notifications",
    ],
    tech: ["MERN Stack","Stripe API","JWT","Context API","React"],
    github: "",
    live: "",
  },
  {
    id: "delinquency",
    featured: false,
    title: "Delinquency Risk Analysis",
    subtitle: "Tata Group Data Analytics Simulation",
    emoji: "📈",
    tags: ["data"],
    desc: "EDA and credit risk modeling on 10,000+ customer records. DAX-powered Power BI dashboard with delinquency rates and risk matrices.",
    outcomes: [
      "EDA on 10,000+ records — GenAI-assisted, cut effort by 30%",
      "Power BI DAX measures: delinquency rate, utilization bands",
      "Business Requirement Document with risk minimization strategies",
    ],
    tech: ["Python","Pandas","NumPy","Power BI","DAX","EDA"],
    github: "",
    live: "",
  },
  {
    id: "library",
    featured: false,
    title: "Intelligent Library System",
    subtitle: "Document & Books Borrowing System",
    emoji: "📚",
    tags: ["backend"],
    desc: "Backend-first library system with indexed search, metadata automation, and schema-enforced data governance.",
    outcomes: [
      "Indexed search by title, author, category",
      "Schema validation enforcing borrowing constraints",
      "Automated metadata tracking for inventory",
    ],
    tech: ["Node.js","SQL","REST APIs","MySQL"],
    github: "",
    live: "",
  },
  {
    id: "atm",
    featured: false,
    title: "ATM Simulator",
    subtitle: "Bank Account Management System",
    emoji: "🏦",
    tags: ["backend"],
    desc: "Java banking system built TDD-first with JUnit — OOPs principles, atomic transfers, overdraft protection.",
    outcomes: [
      "OOPs: Encapsulation, Abstraction, State Management",
      "Test-Driven Development with JUnit + audit logging",
      "Overdraft protection and atomic transfers",
    ],
    tech: ["Java","OOPs","JUnit","TDD","SDLC"],
    github: "",
    live: "",
  },
  {
    id: "tnp",
    featured: false,
    title: "T&P Cell Database",
    subtitle: "NIT Delhi Placement Analytics",
    emoji: "🎓",
    tags: ["data", "fullstack"],
    desc: "Centralized database for 1,200+ students at NIT Delhi T&P Cell — eligibility tracking, cleaning, drive-wise reports.",
    outcomes: [
      "Reduced data inconsistencies by 30–40%",
      "Drive-wise reports for 25+ recruitment drives",
      "Coordinated with 10+ team members",
    ],
    tech: ["SQL","Excel","Data Cleaning","Reporting"],
    github: "",
    live: "",
  },
];

export const experience = [
  {
    role: "Data Analytics & Business Insights Intern",
    company: "Bansal Engineers Pvt. Ltd",
    period: "May 2025 – Jul 2025",
    color: "accent",
    achievements: [
      "Collected, cleaned and analysed business data on sales, leads and customer behaviour",
      "Built Power BI reports on conversion rates, sales performance & KPIs for stakeholders",
      "Performed EDA to identify patterns, opportunities and areas for improvement",
      "Delivered KPI presentations aligning business goals with measurable data outcomes",
    ],
    skills: ["Excel","Power BI","Python","EDA","KPI Reporting"],
  },
  {
    role: "Database Coordinator",
    company: "Training & Placement Cell, NIT Delhi",
    period: "2024 – Present",
    color: "cyan",
    achievements: [
      "Managed centralized database of 1,200+ students including academic & placement eligibility",
      "Cleaned and standardized records, reducing data inconsistencies by 30–40%",
      "Prepared drive-wise reports for eligibility tracking across 25+ recruitments",
      "Coordinated with 10+ T&P members during active recruitment drives",
    ],
    skills: ["SQL","Excel","Data Management","Reporting"],
  },
  {
    role: "Assistant Engineer (Intern)",
    company: "Bansal Engineers",
    period: "May 2025 – Jun 2025",
    color: "violet",
    achievements: [
      "Collaborated with dev and content teams to translate designs into functional websites",
      "Delivered client-specific engineering solutions via cross-functional coordination",
      "Coordinated with clients and senior engineers to align product outcomes",
    ],
    skills: ["Web Development","Client Communication","Cross-functional Teams"],
  },
];

export const education = [
  {
    degree: "B.Tech — Mechanical Engineering",
    institution: "National Institute of Technology, Delhi",
    period: "2023 – 2027",
    score: "7.4 CGPA",
    icon: "🏛️",
    main: true,
    courses: ["Statistics","DSA","DBMS","Machine Learning","Data Analytics","Mathematics","Operations Research","Probability"],
  },
  {
    degree: "12th Grade — Science",
    institution: "Jawahar Navodaya Vidyalaya, Chandigarh",
    period: "2022",
    score: "90%",
    icon: "📗",
  },
  {
    degree: "10th Grade",
    institution: "Jawahar Navodaya Vidyalaya, Chandigarh",
    period: "2020",
    score: "91%",
    icon: "📘",
  },
];

export const achievements = [
  { icon: "🏆", title: "Flipkart GRiD 7.0 Hackathon", desc: "Shortlisted to the Coding Round of India's largest engineering hackathon, competing against thousands nationwide.", year: "2025" },
  { icon: "🚀", title: "Finalist — TIFAN SAEINDIA",   desc: "National finalist recognized by the President of Society of Automotive Engineers India for engineering innovation.", year: "2025" },
  { icon: "🎖️", title: "Academic Excellence Award",   desc: "Honored by the Principal of JNV Chandigarh for outstanding performance across science and mathematics.", year: "2023" },
  { icon: "🌱", title: "Automated Vegetable Transplanter", desc: "Designed an automated transplanting robot combining mechanical engineering, embedded systems, and precision automation.", year: "2025" },
  { icon: "🕷️", title: "Spider Agri Robot",           desc: "Multi-legged autonomous machine designed for field operations — robotics meets smart farming applications.", year: "2025" },
  { icon: "👥", title: "T&P Cell Leadership",         desc: "Database Coordinator managing 1,200+ student records and 25+ placement drives at NIT Delhi.", year: "2024–Now" },
];

export const certifications = [
  { org: "Tata Group · Forage", orgColor: "cyan",   name: "Data Analytics & Business Insights Simulation", date: "Jun–Dec 2025", desc: "EDA on 10K+ records, Power BI DAX dashboards, credit risk BRD." },
  { org: "Bansal Engineers",    orgColor: "accent",  name: "Data Analytics Internship Certificate",          date: "May–Jul 2025",  desc: "Business data analysis, EDA, Power BI reporting." },
  { org: "Bansal Engineers",    orgColor: "amber",   name: "Assistant Engineer Internship",                  date: "May–Jun 2025",  desc: "Web development and cross-functional collaboration." },
  { org: "SAEINDIA",            orgColor: "green",   name: "TIFAN National Engineering Finalist",            date: "2025",          desc: "National-level engineering competition, recognized by SAE India." },
  { org: "Flipkart",            orgColor: "violet",  name: "GRiD 7.0 Coding Round Certificate",             date: "2025",          desc: "Shortlisted for Flipkart's flagship engineering hackathon." },
  { org: "NIT Delhi",           orgColor: "pink",    name: "Academic Excellence Award",                      date: "2023",          desc: "Honored by Principal of JNV Chandigarh." },
];
