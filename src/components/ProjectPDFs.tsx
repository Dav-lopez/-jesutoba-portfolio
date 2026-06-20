"use client";

const pdfs = [
  {
    id: "predictive-maintenance",
    title: "Predictive Maintenance ML Platform",
    description:
      "End-to-end machine learning system forecasting equipment failure with 95% accuracy. Covers data pipeline, feature engineering, model selection, and deployment architecture.",
    category: "Machine Learning",
    categoryColor: "rgba(108,99,255,.12)",
    categoryTextColor: "#A78BFA",
    icon: "🤖",
    file: "/projects/predictive-maintenance.pdf",
    tags: ["Python", "Scikit-Learn", "Predictive Analytics"],
    accentColor: "#6C63FF",
  },
  {
    id: "guardian-data-platform",
    title: "Guardian Life Data Engineering Platform",
    description:
      "Full case study of Databricks automation pipelines and SQL transformation layers built for Guardian Life, achieving 40% faster processing and 99% workflow success rate.",
    category: "Data Engineering",
    categoryColor: "rgba(16,185,129,.12)",
    categoryTextColor: "#34D399",
    icon: "🏗️",
    file: "/projects/guardian-data-platform.pdf",
    tags: ["Databricks", "Python", "SQL", "dbt"],
    accentColor: "#10B981",
  },
  {
    id: "grafana-monitoring",
    title: "Enterprise Monitoring Platform",
    description:
      "Architecture and implementation of Grafana + ELK Stack observability solution for NIBSS banking applications, reducing downtime by 75% through automated alerting.",
    category: "DevOps & SRE",
    categoryColor: "rgba(249,115,22,.12)",
    categoryTextColor: "#FB923C",
    icon: "📊",
    file: "/projects/grafana-monitoring.pdf",
    tags: ["Grafana", "Terraform", "ELK", "Elasticsearch"],
    accentColor: "#F97316",
  },
  {
    id: "cicd-automation",
    title: "CI/CD Automation Platform",
    description:
      "Deep-dive into unified Jenkins + Terraform + Ansible pipeline design automating deployments across Java, Node.js, and .NET application stacks at NIBSS.",
    category: "DevOps",
    categoryColor: "rgba(245,158,11,.12)",
    categoryTextColor: "#FCD34D",
    icon: "⚙️",
    file: "/projects/cicd-automation.pdf",
    tags: ["Jenkins", "Terraform", "Ansible", "GitHub API"],
    accentColor: "#F59E0B",
  },
  {
    id: "sales-analytics",
    title: "Sales Analytics Platform",
    description:
      "Case study detailing the design and delivery of 50+ Power BI executive dashboards with real-time KPI tracking and automated SQL reporting pipelines.",
    category: "Data Analytics",
    categoryColor: "rgba(139,92,246,.12)",
    categoryTextColor: "#C4B5FD",
    icon: "📈",
    file: "/projects/sales-analytics.pdf",
    tags: ["Power BI", "Python", "SQL"],
    accentColor: "#8B5CF6",
  },
  {
    id: "weather-prediction",
    title: "Australian Weather Prediction",
    description:
      "Statistical ML research paper applying Fisher's Exact Test, Chi-Square testing, and regression models to identify significant rainfall predictors in Australian weather data.",
    category: "Machine Learning",
    categoryColor: "rgba(52,211,153,.12)",
    categoryTextColor: "#34D399",
    icon: "🌦️",
    file: "/projects/weather-prediction.pdf",
    tags: ["R", "Statistical Analysis", "Chi-Square", "Fisher's Test"],
    accentColor: "#34D399",
  },
];

export default function ProjectPDFs() {
  return (
    <section
      id="project-pdfs"
      style={{ padding: "4.5rem 2rem" }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Header */}
        <p
          style={{
            fontSize: 11,
            fontWeight: 600,
            color: "var(--accent3)",
            letterSpacing: 2,
            textTransform: "uppercase",
            marginBottom: "0.6rem",
          }}
        >
          Case Studies
        </p>
        <h2
          style={{
            fontSize: "clamp(1.4rem,3vw,2.1rem)",
            fontWeight: 700,
            letterSpacing: "-.8px",
            marginBottom: ".4rem",
            color: "var(--text)",
          }}
        >
          Project Reports &amp; PDFs
        </h2>
        <p
          style={{
            fontSize: 14,
            color: "var(--text2)",
            maxWidth: 520,
            marginBottom: "2.5rem",
            lineHeight: 1.65,
          }}
        >
          Detailed technical write-ups, architecture breakdowns, and research
          papers for each project — available to view or download.
        </p>

        {/* Upload hint banner */}
        <div
          style={{
            background: "rgba(108,99,255,.06)",
            border: "1px dashed rgba(108,99,255,.3)",
            borderRadius: 10,
            padding: "1rem 1.4rem",
            marginBottom: "2rem",
            display: "flex",
            alignItems: "center",
            gap: 12,
            fontSize: 13,
            color: "var(--text2)",
          }}
        >
          <span style={{ fontSize: "1.2rem" }}>📁</span>
          <span>
            To add a PDF, drop the file in{" "}
            <code
              style={{
                background: "var(--surface2)",
                border: "1px solid var(--border2)",
                borderRadius: 4,
                padding: "1px 7px",
                fontSize: 12,
                color: "var(--accent3)",
              }}
            >
              public/projects/
            </code>{" "}
            using the exact filename shown on each card below, then redeploy.
          </span>
        </div>

        {/* PDF Cards grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "1.1rem",
          }}
        >
          {pdfs.map((pdf) => (
            <PDFCard key={pdf.id} pdf={pdf} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PDFCard({ pdf }: { pdf: (typeof pdfs)[0] }) {
  const handleOpen = () => {
    window.open(pdf.file, "_blank");
  };

  const handleDownload = (e: React.MouseEvent) => {
    e.stopPropagation();
    const a = document.createElement("a");
    a.href = pdf.file;
    a.download = pdf.file.split("/").pop() || "project.pdf";
    a.click();
  };

  return (
    <div
      style={{
        background: "var(--surface)",
        border: "1px solid var(--border)",
        borderRadius: 12,
        overflow: "hidden",
        transition: "border-color .18s, transform .18s, background .25s",
        position: "relative",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = pdf.accentColor;
        (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
        (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
      }}
    >
      {/* Top accent bar */}
      <div
        style={{
          height: 3,
          background: pdf.accentColor,
        }}
      />

      <div style={{ padding: "1.3rem" }}>
        {/* Icon + category */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: ".75rem",
          }}
        >
          <div
            style={{
              width: 42,
              height: 42,
              borderRadius: 9,
              background: pdf.categoryColor,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1.35rem",
            }}
          >
            {pdf.icon}
          </div>
          <span
            style={{
              background: pdf.categoryColor,
              color: pdf.categoryTextColor,
              fontSize: 10,
              fontWeight: 600,
              padding: "3px 10px",
              borderRadius: 100,
              letterSpacing: ".5px",
              textTransform: "uppercase",
            }}
          >
            {pdf.category}
          </span>
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: 14,
            fontWeight: 600,
            color: "var(--text)",
            marginBottom: ".4rem",
            lineHeight: 1.35,
          }}
        >
          {pdf.title}
        </div>

        {/* Description */}
        <div
          style={{
            fontSize: 12,
            color: "var(--text2)",
            lineHeight: 1.65,
            marginBottom: ".9rem",
          }}
        >
          {pdf.description}
        </div>

        {/* Tags */}
        <div
          style={{ display: "flex", flexWrap: "wrap", gap: 4, marginBottom: "1.1rem" }}
        >
          {pdf.tags.map((tag) => (
            <span
              key={tag}
              style={{
                background: "var(--bg3)",
                color: "var(--text2)",
                padding: "2px 7px",
                borderRadius: 3,
                fontSize: 10,
                border: "1px solid var(--border)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Filename hint */}
        <div
          style={{
            background: "var(--bg3)",
            border: "1px solid var(--border2)",
            borderRadius: 6,
            padding: "6px 10px",
            marginBottom: "1rem",
            display: "flex",
            alignItems: "center",
            gap: 7,
          }}
        >
          <span style={{ fontSize: "0.85rem" }}>📄</span>
          <code
            style={{
              fontSize: 11,
              color: "var(--accent3)",
              fontFamily: "monospace",
            }}
          >
            {pdf.file.replace("/projects/", "public/projects/")}
          </code>
        </div>

        {/* Action buttons */}
        <div style={{ display: "flex", gap: 8 }}>
          <button
            onClick={handleOpen}
            style={{
              flex: 1,
              background: pdf.accentColor,
              color: "#fff",
              border: "none",
              padding: "8px 0",
              borderRadius: 7,
              fontSize: 12,
              fontWeight: 600,
              cursor: "pointer",
              transition: "opacity .18s",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.opacity = ".85")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.opacity = "1")
            }
          >
            View PDF
          </button>
          <button
            onClick={handleDownload}
            style={{
              flex: 1,
              background: "transparent",
              color: "var(--text)",
              border: "1px solid var(--border2)",
              padding: "8px 0",
              borderRadius: 7,
              fontSize: 12,
              fontWeight: 500,
              cursor: "pointer",
              transition: "background .18s, border-color .18s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "var(--surface2)";
              (e.currentTarget as HTMLElement).style.borderColor = pdf.accentColor;
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "transparent";
              (e.currentTarget as HTMLElement).style.borderColor = "var(--border2)";
            }}
          >
            Download
          </button>
        </div>
      </div>
    </div>
  );
}
