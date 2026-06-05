// ─────────────────────────────────────────────
//  PORTFOLIO DATA — edit this file to update
//  your portfolio. No code changes needed.
// ─────────────────────────────────────────────

export const meta = {
  name: "Saurav Singh",
  title: "Data Scientist",
  tagline: "NIT Delhi Undergrad · Building Intelligent Systems",
  email: "sauravsingh1216@gmail.com",
  phone: "+91 73800 27961",
  location: "Delhi, India",
  github: "https://github.com/srv-0",
  linkedin: "https://www.linkedin.com/in/saurav-singh-srv16/",   // ← update
  resumeUrl: "https://drive.google.com/file/d/1_Yy-7J8hERItCKPn9suktramS3R8AmsI/view?usp=drive_link",                                       // ← paste Google Drive link
  formspreeId: "",                                     // ← paste Formspree ID
};

export const typingPhrases = [
  "Data Scientist",
  "Data Analyst",
  "Data Engineer",
  "Full Stack Developer",
];

export const stats = [
  { label: "Projects Built",     value: 6,  suffix: "+" },
  { label: "Internship",  value: 2,  suffix: ""  },
  { label: "Technical Skills",   value: 25, suffix: "+" },
];

export const about = {
  paragraphs: [
    `I'm <strong>Saurav Singh</strong>, a final year undergraduate at <strong>National Institute of Technology Delhi</strong>. My engineering foundation gives me a systems level lens and I think in pipelines, constraints, and optimization.`,
    `That mindset translates directly into <strong>machine learning and data engineering</strong>: building LSTM models with accuracy, designing ETL pipelines, and architecting full stack ML products that go from raw data to live deployment.`,
    `From <strong>RAG systems</strong> to Power BI dashboards to MERN applications, I build end-to-end. Every layer of the stack is a tool, and I use whichever ones best solve the problem.`,
  ],
  highlights: [
    { icon: "🎓", title: "Bachelors of Technology @ NIT Delhi", sub: "2023–2027 · 7.6 CGPA" },
    { icon: "📍", title: "Delhi, India",        sub: "Open to remote & relocation"                  },
    { icon: "💡", title: "Actively Seeking",    sub: "Data Science · Data Analytics · Data Eng"     },
  ],
  cards: [
    { icon: "🏆", title: "Award Winner",       body: "Finalist at TIFAN SAEINDIA (recognized by SAE India President).</br> Shortlisted for Flipkart GRiD 7.0 Hackathon.</br> Academic Excellence awardee, JNV Chandigarh." },
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
    tags: ["Node.js","Express.js","MongoDB","MySQL","REST APIs","JWT Auth","MERN"],
  },
  {
    category: "Frontend",
    color: "green",
    icon: "⚛️",
    tags: ["React.js","Next.js","HTML/CSS","Tailwind"],
  },
  {
    category: "Tools & DevOps",
    color: "pink",
    icon: "🛠️",
    tags: ["Git/GitHub","Docker","Jupyter","VS Code","JUnit/TDD","Vercel"],
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
    desc: "End-to-end agricultural platform combining ML crop recommendations, real-time news aggregation, and government scheme extraction, serving farmers with data-driven insights.",
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
    desc: "Java banking system built TDD-first with JUnit, OOPs principles, atomic transfers, overdraft protection.",
    outcomes: [
      "OOPs: Encapsulation, Abstraction, State Management",
      "Test-Driven Development with JUnit + audit logging",
      "Overdraft protection and atomic transfers",
    ],
    tech: ["Java","OOPs","JUnit","TDD","SDLC"],
    github: "",
    live: "",
  },
];

export const experience = [
  {
    role: "Internship",
    company: "Bansal Engineers",
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
];

export const education = [
  {
    degree: "Bachelors of Technology",
    institution: "National Institute of Technology Delhi",
    period: "2023 – 2027",
    score: "7.6 CGPA",
    icon: "🏛️",
    main: true,
    courses: ["Statistics","DSA","DBMS","Machine Learning","Data Analytics","Mathematics","Operations Research","Probability"],
  },
  {
    degree: "12th Science",
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
  { icon: "👥", title: "T&P Cell Coordinator",         desc: "Database Coordinator managing 1,200+ student records and 25+ placement drives at NIT Delhi.", year: "2024–Now" },
];

export const certifications = [
  { org: "Tata Group · Forage", orgColor: "cyan",   name: "Data Analytics & Business Insights Simulation", date: "Jun–Dec 2025", desc: "EDA on 10K+ records, Power BI DAX dashboards, credit risk BRD." },
  { org: "Bansal Engineers",    orgColor: "amber",   name: "Assistant Engineer Internship",                  date: "May–Jun 2025",  desc: "Web development and cross-functional collaboration." },
  { org: "SAEINDIA",            orgColor: "green",   name: "TIFAN National Engineering Finalist",            date: "2025",          desc: "National-level engineering competition, recognized by SAE India." },
  { org: "Flipkart",            orgColor: "violet",  name: "GRiD 7.0 Coding Round Certificate",             date: "2025",          desc: "Shortlisted for Flipkart's flagship engineering hackathon." },
  { org: "JNV Chandigarh",           orgColor: "pink",    name: "Academic Excellence Award",                      date: "2023",          desc: "Honored by Principal of JNV Chandigarh." },
];
