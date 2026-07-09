// ─────────────────────────────────────────────
//  PORTFOLIO DATA — edit this file to update
//  your portfolio. No code changes needed.
// ─────────────────────────────────────────────

export const meta = {
  name: "Saurav Singh",
  title: "Data Engineer",
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
    { icon: "🏆", title: "Award Winner",  body: ["Finalist at TIFAN SAEINDIA (recognized by SAE India President)",
												" Shortlisted for Flipkart GRiD 7.0 Hackathon",
												"Academic Excellence awardee, JNV Chandigarh"] },
  ],
};

export const skills = [
  {
    category: "Languages",
    color: "cyan",
    icon: "🐍",
    items: [
      { name: "Python",           pct: 80 },
      { name: "SQL",              pct: 95 },
      { name: "JavaScript",       pct: 80 },
      { name: "Java (DSA+OOPs)",  pct: 85 },
      { name: "HTML/CSS",         pct: 90 },
    ],
  },
  {
    category: "Data & Analytics",
    color: "amber",
    icon: "📊",
    items: [
      { name: "Pandas / NumPy",       pct: 90 },
      { name: "Power BI / Tableau",   pct: 95 },
      { name: "Excel / Sheets",       pct: 95 },
    ],
  },
  {
    category: "Machine Learning",
    color: "violet",
    icon: "🤖",
    items: [
      { name: "Scikit-learn",           pct: 82 },
      { name: "Feature Engineering",    pct: 80 },
      { name: "ML/DL Model Training",         pct: 83 },
    ],
  },
  {
    category: "Backend & DB",
    color: "accent",
    icon: "🌐",
    tags: ["Node.js","Express.js","MongoDB","MySQL","REST APIs","MERN"],
  },
  {
    category: "Frontend",
    color: "green",
    icon: "⚛️",
    tags: ["React.js","Next.js","HTML/CSS","Tailwind"],
  },
  {
    category: "Tools",
    color: "pink",
    icon: "🛠️",
    tags: ["Google Collab","Git/GitHub","Jupyter","VS Code"],
  },
];

export const projects = [
  {
    id: "Machine Learning",
    featured: true,
    title: "Machine Learning & Deep Learning",
    subtitle: "Predictive maintenance model for Industrial machines",
    emoji: "",
    tags: ["ml", "dl", "python"],
    desc: "Building a predictive maintenance pipeline of machine failure alerts before occurrence, to save maintenance cost",
    outcomes: [
      "Improved reliability on imbalanced data by applying SMOTE resampling to prevent misleading accuracy metrics.",
      "Enabled root cause specific maintenance action by extending failure detection to a 6-category classification model",
      "Increased model transparency for non-technical members by implementing multi-class classification (SHAP explainability), allowing engineers to understand why a machine was flagged at risk",
    ],
    tech: ["Python","LSTM/CNN","Regeression","Scikit-learn"],
    github: "",  // ← paste repo link
    live: "",
  },
  {
    id: "Buisness Analytics",
    featured: false,
    title: "Retail Customer Intelligence Dashboard",
    subtitle: "Real time customer churn predtiction dashboard",
    emoji: "",
    tags: ["Business intelligence"],
    desc: "Deployed a Flask web application with live customer search and churn risk filter connected to SQLite backend.",
    outcomes: [
      "Queried a relational SQL database of 10,000+ retail transactions & performed RFM customer segmentation using Python, identifying 4 distinct customer tiers; high value segment (top 18%) contributed 62% of total revenue"
      "Built a churn risk prediction model using scikit-learn (Random Forest) achieving 84% accuracy, flagged top 15% at risk customers whose retention could recover an estimated ₹3.2L in projected monthly revenue",
    ],
    tech: ["Excel", "Python", "SQL", "Power BI", "Flask"],
    github: "https://github.com/srv-0/Retail-Customer-Intelligence-Dashboard",
    live: "https://retail-customer-intelligence-dashboard.onrender.com/",
  },
  {
    id: "Data Analytics",
    featured: false,
    title: "Delinquency Risk Analysis",
    subtitle: "Tata Group Data Analytics Simulation",
    emoji: "📈",
    tags: ["data"],
    desc: "EDA and credit risk modeling on 10,000+ customer records. DAX-powered Power BI dashboard with delinquency rates and risk matrices",
    outcomes: [
      "EDA on 10,000+ records — GenAI-assisted, cut effort by 30%",
      "Power BI DAX measures: delinquency rate, utilization bands",
      "Business Requirement Document with risk minimization strategies",
    ],
    tech: ["Python","Pandas","NumPy","Power BI","DAX","EDA"],
    github: "https://github.com/srv-0/Customer_Behavior_Analysis",
  },
  {
    id: "DBMS",
    featured: false,
    title: "Intelligent Library System",
    subtitle: "Document & Books Borrowing System",
    emoji: "📚",
    tags: ["Database Management"],
    desc: "Backend-first library system with indexed search, metadata automation, and schema-enforced data governance.",
    outcomes: [
      "Indexed search by title, author, category",
      "Schema validation enforcing borrowing constraints",
      "Automated metadata tracking for inventory",
    ],
    tech: ["Node.js","SQL","REST APIs","MySQL"],
    github: "https://github.com/srv-0/Library",
  },
  {
    id: "Data Engineering",
    featured: false,
    title: "Data Analytics Platform",
    subtitle: "DataLens — ML-Powered Data Analytics Platform",
    emoji: "🏦",
    tags: ["Data Engineering"],
    desc: "Upload any CSV & get instant charts, statistics, auto-generated insights, and ML predictions (regression, classification, clustering) — all in a polished dark-themed web app.",
    outcomes: [
      "Built a Data Analytics app where users upload CSV datasets and get instant statistical, correlation, chart analysis",
      "A Python FastAPI backend with a scikit-learn supporting Random Forest regression, classification, and clustering",
      "Designed an end-to-end ML pipeline with label encoding, standard scaling, and stratified train/test splits served",
      "Developed a statistical outlier detection and data quality engine using IQR method, missing value analysis, and cardinality checks and generating automated plain English insights to guide preprocessing decisions",
    ],
    tech: ["React", "Recharts", "Python", "FastAPI", "Pandas", "NumPy", "scikit-learn", "REST API"],
    github: "https://github.com/srv-0/Data-Analytics-Platform",
    live: "https://data-analytics-platform-six.vercel.app/",
  },
];

export const experience = [
  {
    role: "AI/ML Reasearch Intern",
    company: "National Institute of Technology Delhi",
    period: "May 2026 – Jul 2026",
    color: "accent",
    achievements: [
      "Building a predictive maintenance pipeline of machine failure alerts before occurrence, to save maintenance cost",
  	  "Improved reliability on imbalanced data by applying SMOTE resampling to prevent misleading accuracy metrics",
      "Enabled root cause specific maintenance action by extending failure detection to a 6-category classification model",
      "Increased model transparency for non-technical members by implementing multi-class classification (SHAP explainability), allowing engineers to understand why a machine was flagged at risk",
    ],
    skills: ["Python","EDA", "Machine Learning", "Deep Learning", "Model Training"],
  },
  {
    role: "Data Analyst Intern",
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
    role: "Data Analyst Intern (Virtual Internship)",
    company: "Forage - Tata iQ",
    period: "May 2025 – Jul 2025",
    color: "accent",
    achievements: [
      "Conduct end to end EDA on 10,000+ user records using (Pandas, NumPy) to analyse credit behaviour", 
      "Used Gen AI assisted analysis to accelerate dataset understanding, reducing manual EDA effort by 30%",
	    "Created DAX measures in Power BI to calculate delinquency rate, utilization bands, and risk matrices",
      "Generated report recommending strategies to minimize credit risk, as Business Requirement Document",
    ],
    skills: ["GenAI","Excel","Power BI","Python","EDA","Documentation"],
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
    skills: ["Excel","Data Management","Reporting"],
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
    score: "91%",
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
