export interface PDFProject {
  id: string;
  title: string;
  description: string;
  file: string | null; // null = not uploaded yet
  tags: string[];
  pages?: string;
}

export interface CaseStudyCategory {
  id: string;
  slug: string;
  label: string;
  icon: string;
  description: string;
  accentColor: string;
  bgColor: string;
  textColor: string;
  projects: PDFProject[];
}

export const caseStudyCategories: CaseStudyCategory[] = [
  {
    id: "ml",
    slug: "ml",
    label: "Machine Learning",
    icon: "🤖",
    description:
      "Predictive models, classification systems, and statistical analysis projects spanning equipment maintenance, weather forecasting, and sports analytics.",
    accentColor: "#6C63FF",
    bgColor: "rgba(108,99,255,.12)",
    textColor: "#A78BFA",
    projects: [
      {
        id: "Final_Project_Predictive",
        title: "Predictive Maintenance ML Platform",
        description:
          "End-to-end ML system forecasting equipment failure with 95% accuracy using Scikit-Learn. Covers data pipeline, feature engineering, model selection, validation, and deployment architecture.",
        file: "/projects/ml/Final_Project_Predictive",
        tags: ["Python", "Scikit-Learn", "Feature Engineering", "Model Validation"],
        pages: "18 pages",
      },
      {
        id: "weather-prediction",
        title: "Australian Weather Prediction",
        description:
          "Statistical ML research applying Fisher's Exact Test and Chi-Square testing to identify significant rainfall predictors across Australian weather stations.",
        file: "/projects/ml/weather-prediction.pdf",
        tags: ["R", "Fisher's Exact Test", "Chi-Square", "Regression"],
        pages: "12 pages",
      },
      {
        id: "baseball-salary",
        title: "Baseball Salary Prediction",
        description:
          "Comparative study of Lasso, Ridge, and Elastic Net regression models for predicting MLB player salaries from performance statistics.",
        file: null, // not uploaded yet
        tags: ["R", "Lasso", "Ridge", "Elastic Net"],
        pages: "10 pages",
      },
      {
        id: "classification-model",
        title: "Customer Churn Classification",
        description:
          "Binary classification model predicting customer churn using ensemble methods. Includes hyperparameter tuning, confusion matrix analysis, and ROC curve evaluation.",
        file: null,
        tags: ["Python", "XGBoost", "Random Forest", "Classification"],
        pages: "Coming soon",
      },
    ],
  },
  {
    id: "data-engineering",
    slug: "data-engineering",
    label: "Data Engineering",
    icon: "🏗️",
    description:
      "ETL pipelines, data transformation workflows, cloud data platforms, and analytics infrastructure built for enterprise-scale operations.",
    accentColor: "#10B981",
    bgColor: "rgba(16,185,129,.12)",
    textColor: "#34D399",
    projects: [
      {
        id: "guardian-platform",
        title: "Guardian Life Data Engineering Platform",
        description:
          "Full case study of Databricks automation pipelines and SQL transformation layers achieving 40% faster processing and 99% workflow success rate.",
        file: "/projects/data-engineering/guardian-platform.pdf",
        tags: ["Databricks", "Python", "SQL", "dbt"],
        pages: "15 pages",
      },
      {
        id: "snowflake-dbt",
        title: "Snowflake & dbt Data Engineering Project",
        description:
          "Built transformation pipelines, metadata tables, and analytics-ready datasets in Snowflake using dbt for modular, version-controlled SQL transformations.",
        file: null,
        tags: ["Snowflake", "dbt", "SQL", "Data Modeling"],
        pages: "Coming soon",
      },
      {
        id: "sales-analytics",
        title: "Sales Analytics Platform",
        description:
          "Design and delivery of 50+ Power BI executive dashboards backed by automated SQL transformation pipelines and real-time KPI tracking.",
        file: null,
        tags: ["Power BI", "Python", "SQL", "ETL"],
        pages: "Coming soon",
      },
    ],
  },
  {
    id: "devops",
    slug: "devops",
    label: "DevOps & SRE",
    icon: "⚙️",
    description:
      "Infrastructure automation, CI/CD pipelines, observability platforms, and cloud infrastructure built for reliability and scale.",
    accentColor: "#F59E0B",
    bgColor: "rgba(245,158,11,.12)",
    textColor: "#FCD34D",
    projects: [
      {
        id: "grafana-monitoring",
        title: "Enterprise Monitoring Platform",
        description:
          "Grafana + ELK Stack observability solution for NIBSS banking applications, reducing downtime by 75% through automated alerting and Terraform-managed dashboards.",
        file: "/projects/devops/grafana-monitoring.pdf",
        tags: ["Grafana", "Terraform", "ELK", "Elasticsearch"],
        pages: "14 pages",
      },
      {
        id: "cicd-automation",
        title: "CI/CD Automation Platform",
        description:
          "Unified Jenkins + Terraform + Ansible pipeline automating deployments across Java, Node.js, and .NET stacks with GitHub repository automation.",
        file: null,
        tags: ["Jenkins", "Terraform", "Ansible", "GitHub API"],
        pages: "Coming soon",
      },
      {
        id: "github-automation",
        title: "GitHub Repository Automation",
        description:
          "Terraform + GitHub API solution for automated repository creation, branch protection rules, and standardized development workflow configuration at scale.",
        file: null,
        tags: ["Terraform", "GitHub API", "IaC", "Automation"],
        pages: "Coming soon",
      },
    ],
  },
];
