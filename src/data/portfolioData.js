// ============================================================
// portfolioData.js
// This one file controls ALL the text and links on the website.
// ============================================================

export const personalInfo = {
  name: "Siripuram Lavanya",
  firstName: "Siripuram Lavanya",
  brandName: "Siripuram Lavanya", // shown in the preloader, navbar and footer
  title: "Data Analyst",
  location: "Tirupati, India",
  phone: "9030658282",
  emails: {
    primary: "siripuramlavanya17@gmail.com",
    secondary: "",
  },
  summary:
    "Motivated and detail-oriented B.Sc. Statistics graduate seeking an entry-level Data Analyst position to apply my analytical and problem-solving skills. Familiar with MySQL, Microsoft Excel, Power BI, Python, and Tableau. Eager to learn new technologies, analyze data, identify trends, and contribute to data-driven decision-making.",
  resumeUrl: "/Data Analyst Resume.pdf", // put the PDF inside /public
};

// TAP Academy — the academy you trained with. Used in the footer credit.
export const academy = {
  name: "TAP Academy",
  url: "https://thetapacademy.com/",
};

export const socialLinks = {
  github: "https://github.com/siripuramlavanya",
  linkedin: "https://www.linkedin.com/in/siripuramlavanya",
  instagram: "",
};

export const heroContent = {
  greeting: "Hi, I'm Siripuram Lavanya",
  titleHighlight: "Data Analyst",
  subtitle:
    "Transforming complex raw data into actionable business intelligence through statistical modeling, SQL analytics, and interactive dashboards.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "mailto:siripuramlavanya17@gmail.com?subject=Hiring Inquiry – Portfolio&body=Hello,%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ABest Regards,",
  },
  ctaResume: { text: "Download Resume", href: "/Data Analyst Resume.pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  // HTML is allowed here (it is rendered with dangerouslySetInnerHTML)
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Siripuram Lavanya</span>, an aspiring Data Analyst based in Tirupati, India. With a strong background in Statistics and practical expertise in MySQL, Microsoft Excel, Power BI, Python, and Tableau, I specialize in analyzing data patterns, extracting meaningful trends, and designing dashboards to drive data-informed decisions, further sharpening my skills through the placement training program at TAP Academy.`,
  techStack: ["MySQL", "Microsoft Excel", "Power BI", "Python", "Tableau"],
};

export const skillsContent = {
  badge: "My Process",
  heading: "Here's how I turn raw data into actionable business insights",
  description:
    "A structured, end-to-end data analytics workflow bridging statistical rigor and strategic business value.",
  cards: [
    {
      number: "01",
      title: "Data Gathering",
      text: "Identify data requirements and extract structured datasets from SQL databases, spreadsheets, and business APIs.",
    },
    {
      number: "02",
      title: "Cleaning & Modeling",
      text: "Handle missing values, normalize schemas, validate data integrity, and build efficient relational models.",
    },
    {
      number: "03",
      title: "Exploratory Analysis",
      text: "Apply statistical methods and Python analytics to discover hidden trends, correlations, and performance bottlenecks.",
    },
    {
      number: "04",
      title: "Dashboards & Insights",
      text: "Design dynamic, intuitive Power BI and Tableau dashboards to deliver data-driven recommendations to stakeholders.",
    },
  ],
  endText: "Insights delivered!",
};

export const technicalSkills = {
  categories: [
    {
      title: "Data Analytics & BI",
      skills: [
        { name: "Power BI" },
        { name: "Tableau" },
        { name: "Microsoft Excel" },
        { name: "Business Intelligence" },
        { name: "Data Visualization" },
      ],
    },
    {
      title: "Databases & SQL",
      skills: [
        { name: "MySQL" },
        { name: "SQL Queries" },
        { name: "Relational Modeling" },
        { name: "Database Design" },
      ],
    },
    {
      title: "Programming & Stats",
      skills: [
        { name: "Python" },
        { name: "Pandas & NumPy" },
        { name: "Statistical Analysis" },
        { name: "Exploratory Data Analysis" },
      ],
    },
    {
      title: "Tools & Workflow",
      skills: [
        { name: "Git & GitHub" },
        { name: "Jupyter Notebook" },
        { name: "VS Code" },
        { name: "Spreadsheet Modeling" },
      ],
    },
  ],
};

export const leadershipList = [];

export const internshipsList = [
  {
    organization: "Taxdot Service Pvt. Ltd.",
    role: "Data Analytics Intern",
    duration: "6 Months",
    skills: ["Data Analytics", "Dashboard Design", "Statistical Modeling", "Insight Delivery"],
    tech: ["Python", "Tableau", "Power BI", "MySQL", "Microsoft Excel"],
  },
  {
    organization: "Jagathi Network India Pvt. Ltd.",
    role: "Data Analytics Intern",
    duration: "3 Months",
    skills: ["Data Analytics", "Data Extraction", "Report Generation", "Trend Analysis"],
    tech: ["MySQL", "Power BI", "Microsoft Excel"],
  },
];

export const softSkillsList = [
  {
    name: "Problem Solving",
    icon: "🧩",
    desc: "Breaking down intricate analytical challenges into structured, solvable components with data-backed solutions.",
  },
  {
    name: "Analytical Thinking",
    icon: "📈",
    desc: "Examining datasets with statistical discipline to uncover subtle patterns, anomalies, and actionable drivers.",
  },
  {
    name: "Communication",
    icon: "💬",
    desc: "Translating technical data metrics and dashboard findings into clear, persuasive narratives for non-technical stakeholders.",
  },
  {
    name: "Time Management",
    icon: "⏱️",
    desc: "Prioritizing analytical deliverables, automating repetitive reporting tasks, and consistently meeting sprint deadlines.",
  },
];

export const projects = [
  {
    id: "ecommerce-sales-analytics",
    number: "01",
    badge: "🚀 Flagship Project",
    title: "E-Commerce Sales Performance & Customer Cohort Dashboard",
    description:
      "Designed an interactive end-to-end analytics dashboard tracking 50,000+ sales transactions in MySQL, uncovering revenue trends, seasonal spikes, and customer retention metrics. Implemented Python RFM segmentation and interactive Power BI drill-downs for executive decision-making.",
    techTags: ["Power BI", "MySQL", "Python", "Microsoft Excel"],
    links: {
      github: "https://github.com/siripuramlavanya/ecommerce-sales-analytics",
      demo: "",
    },
    isFlagship: true,
  },
  {
    id: "healthcare-operations-analysis",
    number: "02",
    badge: null,
    title: "Healthcare Operations & Patient Readmission Analysis",
    description:
      "Conducted exploratory statistical analysis on healthcare records to identify key factors impacting patient wait times and readmission rates. Created dynamic Tableau dashboards highlighting department capacity, bed utilization, and cost distributions.",
    techTags: ["Tableau", "Python", "Pandas", "MySQL"],
    links: {
      github: "https://github.com/siripuramlavanya/healthcare-operations-analysis",
      demo: "",
    },
    isFlagship: false,
  },
  {
    id: "financial-risk-analysis",
    number: "03",
    badge: null,
    title: "Financial Credit Risk & Loan Default Analysis",
    description:
      "Analyzed historical retail banking portfolios using SQL queries and Python statistical regression to isolate primary indicators driving loan defaults. Formulated automated Excel executive summary KPI reports and risk distribution matrices.",
    techTags: ["Python", "MySQL", "Microsoft Excel", "Statistical Modeling"],
    links: {
      github: "https://github.com/siripuramlavanya/financial-risk-analysis",
      demo: "",
    },
    isFlagship: false,
  },
];

// Used only by the optional Certificates component (bonus step)
export const certificates = {
  featured: [
    { name: "Data Analytics Placement Training", issuer: "TAP Academy", icon: "🏅" },
  ],
  viewAllUrl: "https://www.linkedin.com/in/siripuramlavanya",
};

export const education = {
  degree: "B.Sc. Statistics",
  institution: "Sri Venkateswara University",
  cgpa: "2023 - 2026",
  graduation: "2026",
  twelfth: "",
  tenth: "",
};

export const footerContent = {
  taglines: ["Data Analyst", "MySQL · Power BI · Python · Tableau", "Turning Data into Decisions"],
  credential: "B.Sc. Statistics — Sri Venkateswara University",
  copyright: `© ${new Date().getFullYear()} Siripuram Lavanya | Built with React`,
};

// EmailJS — read from .env.local (variables must start with VITE_)
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};
