import type { Project, Experience, Skill } from "@/types";

export const projects: Project[] = [
  {"id":"bank-deposit-ann","title":"Bank Term Deposit Prediction — ANN Comparison","description":"Co-authored academic ML study of 45,211 bank marketing records comparing shallow, deep and wide artificial neural networks for term-deposit subscription prediction.","stat":"AUC 0.9229","icon":"🧠","tags":["Python","TensorFlow","Keras","SMOTE","ROC-AUC"],"github":"","category":"ml","challenge":"Predict minority-class term deposit subscriptions from imbalanced bank marketing records.","solution":"Performed exploratory analysis, one-hot encoding, feature scaling and SMOTE, then evaluated three ANN architectures using classification metrics.","impact":["45,211 observations","Basic ANN selected with AUC-ROC 0.9229","Co-authored with Idowu Orukotan"]},
  {"id":"student-math-regression","title":"Student Math Achievement — Regression Study","description":"Co-authored academic comparison of linear, generalized, robust and regularized regression approaches to predict math scores from a 1,000-student dataset.","stat":"R² 0.878","icon":"📐","tags":["R","Regression","Ridge","Lasso","GLS","Model Selection"],"github":"","category":"ml","challenge":"Identify interpretable predictors of student math achievement and compare model performance.","solution":"Conducted EDA, assumption checks, regression diagnostics, robust estimation and AIC/BIC-based selection.","impact":["1,000 student records","GLS model reported R² ≈ 0.878","Co-authored with Ibrahim Olushola"]},
  {"id":"patient-pro-glm","title":"Patient-Reported Outcomes — GLM Analysis","description":"Academic analysis of simulated treatment outcomes across 1,000 patients and five weekly observations, comparing binary logistic, ordinal logistic and Poisson models.","stat":"5,000 records","icon":"🏥","tags":["R","GLM","Logistic Regression","Ordinal Regression","Poisson"],"github":"","category":"ml","challenge":"Compare statistical models for ordered patient-reported outcomes across treatment programs and time.","solution":"Evaluated three GLM formulations with fit statistics, classification measures and diagnostic tests; clearly identified simulated data.","impact":["5,000 simulated observations","1,000 patients over five checkpoints","Binary logistic model selected in report"]},

  {"id":"civicpulse-2026","demo":"https://civicpulse-2026.streamlit.app/","title":"CivicPulse — 2026 Election Dashboard","description":"Streamlit dashboard tracking congressional elections, with caching, health monitoring and automated tests.","stat":"97 tests","icon":"🗳️","tags":["Python","Streamlit","APIs","Caching"],"github":"https://github.com/Dav-lopez/mid-elections","category":"data","challenge":"Build reliable user-facing software for a real operational use case.","solution":"Developing and testing application workflows with modern web and data engineering tools.","impact":["Project repository available for technical review"]},
  {"id":"who-did-that","demo":"https://who-did-that-syo5.onrender.com/","title":"WHO DID THAT?! — Multiplayer Party Game","description":"Live room-based multiplayer browser game with Classic and Survival Squad modes.","stat":"Live demo","icon":"🎮","tags":["Python","Flask","Socket.IO","Render"],"github":"https://github.com/Dav-lopez/who-did-that","category":"devops","challenge":"Build reliable user-facing software for a real operational use case.","solution":"Developing and testing application workflows with modern web and data engineering tools.","impact":["Project repository available for technical review"]},
  {"id":"drugai","title":"DrugAI — Pharmacy Inventory Platform","description":"In-development pharmacy inventory application and database-backed workflows.","stat":"In development","icon":"💊","tags":["Next.js","TypeScript","Prisma","PostgreSQL"],"github":"https://github.com/Dav-lopez/drugai","category":"data","challenge":"Build reliable user-facing software for a real operational use case.","solution":"Developing and testing application workflows with modern web and data engineering tools.","impact":["Project repository available for technical review"]},

  {
    id: "predictive-maintenance",
    title: "Predictive Maintenance ML Platform",
    description:
      "Machine learning system that forecasts equipment failure before it occurs, reducing operational disruption through predictive scheduling and failure pattern recognition.",
    stat: "95% accuracy",
    icon: "🤖",
    tags: ["Python", "Scikit-Learn", "Predictive Analytics", "ML Pipeline"],
    github: "https://github.com/Dav-lopez",
    category: "ml",
    challenge:
      "Equipment failures caused unplanned operational disruptions and inefficient maintenance scheduling, leading to costly downtime.",
    solution:
      "Built end-to-end machine learning models using Scikit-Learn to forecast equipment failure probability, with feature engineering on sensor time-series data.",
    impact: [
      "95% prediction accuracy on test set",
      "Reduced unplanned downtime significantly",
      "Improved maintenance scheduling efficiency",
    ],
  },
  {
    id: "guardian-data-platform",
    title: "Guardian Life Data Engineering Platform",
    description:
      "End-to-end Databricks automation and SQL transformation pipelines for insurance data, achieving 40% faster processing and 99% job success across all production workflows.",
    stat: "40% faster",
    icon: "🏗️",
    tags: ["Databricks", "Python", "SQL", "dbt", "ETL"],
    github: "https://github.com/Dav-lopez",
    category: "data",
    challenge:
      "Legacy workflows and manual data processing increased operational effort and caused reporting inconsistencies across business units.",
    solution:
      "Developed Databricks automation pipelines and SQL transformation layers, standardizing raw data ingestion through to analytics-ready datasets.",
    impact: [
      "40% faster data processing",
      "99% successful workflow runs",
      "Improved cross-team reporting consistency",
    ],
  },
  {
    id: "enterprise-monitoring",
    title: "Enterprise Monitoring Platform",
    description:
      "Grafana + ELK Stack monitoring solution for critical banking applications. Automated dashboard deployment via Terraform, dramatically reducing mean time to resolution.",
    stat: "75% less downtime",
    icon: "📊",
    tags: ["Grafana", "Terraform", "ELK", "SQL", "Elasticsearch"],
    github: "https://github.com/Dav-lopez",
    category: "obs",
    challenge:
      "Banking application incidents had slow detection and resolution times due to lack of centralized observability across distributed services.",
    solution:
      "Built a full Grafana + ELK Stack monitoring solution with automated Terraform deployment, real-time alerting, and structured log pipelines.",
    impact: [
      "75% reduction in system downtime",
      "Automated dashboard deployment",
      "Faster incident response for operations teams",
    ],
  },
  {
    id: "cicd-automation",
    title: "CI/CD Automation Platform",
    description:
      "Unified Jenkins + Terraform + Ansible pipeline automating deployments for Java, Node.js, and .NET applications with GitHub repository automation.",
    stat: "3 stacks automated",
    icon: "⚙️",
    tags: ["Jenkins", "Terraform", "Ansible", "GitHub API", "CI/CD"],
    github: "https://github.com/Dav-lopez",
    category: "devops",
    challenge:
      "Multiple application stacks required separate, manual deployment processes with inconsistent branch protection and repository standards.",
    solution:
      "Designed a unified CI/CD platform using Jenkins, Terraform, and Ansible, with GitHub API automation for repository creation, branch protections, and standardized workflows.",
    impact: [
      "Automated Java, Node.js, and .NET deployments",
      "Standardized development workflows across teams",
      "Reduced deployment time and human error",
    ],
  },
  {
    id: "sales-analytics",
    title: "Sales Analytics Platform",
    description:
      "Power BI and Python analytics solution delivering 50+ executive dashboards with real-time KPI tracking, trend analysis, and automated reporting pipelines.",
    stat: "50+ dashboards",
    icon: "📈",
    tags: ["Power BI", "Python", "SQL", "Analytics", "Reporting"],
    github: "https://github.com/Dav-lopez",
    category: "sales",
    challenge:
      "Sales leadership lacked real-time visibility into KPIs and revenue trends, relying on manually compiled spreadsheet reports.",
    solution:
      "Built a Power BI analytics layer on top of SQL transformation pipelines, delivering 50+ live dashboards with automated data refresh and drill-down capabilities.",
    impact: [
      "50+ executive dashboards deployed",
      "Real-time KPI visibility for leadership",
      "Eliminated manual report compilation",
    ],
  },
  {
    id: "weather-prediction",
    title: "Australian Weather Prediction",
    description:
      "Statistical ML project analyzing Australian weather data to identify significant rainfall predictors using Fisher's Exact Test, Chi-Square testing, and feature selection methodology.",
    stat: "Chi-Square + Fisher",
    icon: "🌦️",
    tags: ["R", "Statistical Analysis", "ML", "Data Cleaning"],
    github: "https://github.com/Dav-lopez",
    category: "weather",
    challenge:
      "Identifying which weather variables were statistically significant predictors of rainfall in a large, messy real-world dataset.",
    solution:
      "Applied rigorous data cleaning, Fisher's Exact Test, and Chi-Square testing to surface the most predictive features, then validated with regression models.",
    impact: [
      "Identified key rainfall predictors",
      "Applied Fisher's Exact Test and Chi-Square testing",
      "Demonstrated statistical significance of weather variables",
    ],
  },
];

export const experiences: Experience[] = [
  {
    period: "2025 ",
    role: "Data Engineering",
    company: "Guardian Life Insurance",
    description:
      "Built Databricks automation pipelines and SQL transformation workflows, reducing processing time by 40% and achieving 99% workflow success rates. Developed analytics-ready datasets and improved reporting consistency across the platform.",
    chips: ["Databricks", "Python", "SQL", "ETL", "Analytics"],
    accentColor: "#6C63FF",
  },
  {
    period: "2024 — 2025",
    role: "Graduate Teaching Assistant",
    company: "Austin Peay State University",
    description:
      "Mentored 15+ students weekly in data science and analytics coursework. Supported curriculum delivery, graded assessments, and provided individualized academic guidance throughout the semester.",
    chips: ["Teaching", "Data Science", "Mentorship", "Analytics"],
    accentColor: "#10B981",
  },
  {
    period: "2023 — 2024",
    role: "DevOps Engineer",
    company: "NIBSS (Nigeria Interbank Settlement System)",
    description:
      "Built and maintained CI/CD pipelines for Java, Node.js, and .NET applications. Deployed Grafana monitoring dashboards and automated repository management via Terraform, reducing troubleshooting time significantly across the engineering organization.",
    chips: ["Grafana", "Terraform", "Jenkins", "CI/CD", "ELK"],
    accentColor: "#F59E0B",
  },
  {
    period: "2022 — 2023",
    role: "Software Engineer",
    company: "NIBSS (Nigeria Interbank Settlement System)",
    description:
      "Supported enterprise banking payment systems processing national-scale transactions across Nigeria's interbank network. Developed and maintained backend services for critical financial infrastructure.",
    chips: ["C#", ".NET", "REST APIs", "Banking", "Java"],
    accentColor: "#F97316",
  },
];

export const skills: Skill[] = [
  {
    category: "AI & Machine Learning",
    skills: ["Python", "TensorFlow", "Scikit-Learn", "Pandas", "NumPy", "Predictive Modeling"],
  },
  {
    category: "Data Engineering",
    skills: ["Snowflake", "Databricks", "dbt", "SQL", "Power BI", "ETL Pipelines"],
  },
  {
    category: "Software Engineering",
    skills: ["C#", ".NET", "Java", "REST APIs", "R", "Node.js", "TypeScript", "Next.js", "React"],
  },
  {
    category: "Cloud & Platform",
    skills: ["Terraform", "Docker", "Kubernetes", "AWS", "Jenkins", "Ansible", "Vercel", "Render"],
  },
  {
    category: "Observability",
    skills: ["Grafana", "Elasticsearch", "Kibana", "Logstash", "ELK Stack"],
  },
  {
    category: "Statistical Analysis",
    skills: ["R", "Fisher's Exact Test", "Chi-Square", "Lasso/Ridge", "Elastic Net"],
  },
];

export const metrics = [
  { value: "4.0", label: "Master's GPA" },
  { value: "95%", label: "ML Prediction Accuracy" },
  { value: "75%", label: "Downtime Reduction" },
  { value: "40%", label: "Faster Data Processing" },
  { value: "99%", label: "Workflow Success Rate" },
  { value: "5+", label: "Years Experience" },
];
