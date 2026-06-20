"use client";
import Image from "next/image";


const tags = [
  "Machine Learning",
  "Data Engineering",
  "Cloud & DevOps",
  "Observability",
  "Distributed Systems",
];

export default function About() {
  return (
    <section
      id="about"
      style={{ padding: "5rem 2rem" }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1.4fr",
          gap: "3.5rem",
          alignItems: "start",
        }}
        className="about-grid"
      >
        {/* Photo */}
        <div
          style={{
            borderRadius: 16,
            overflow: "hidden",
            border: "1px solid var(--border2)",
            position: "relative",
            aspectRatio: "1 / 1",
            background: "var(--surface)",
          }}
        >
          <Image
            src="/images/profile.jpg"
            alt="Jesutoba Lopez — Machine Learning and Data Engineering professional"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 400px"
            style={{ objectFit: "cover", objectPosition: "center top" }}
          />
          {/* Subtle overlay gradient at bottom */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "30%",
              background:
                "linear-gradient(to top, rgba(10,10,15,0.5), transparent)",
            }}
          />
        </div>

        {/* Text */}
        <div>
          <p
            style={{
              fontSize: 11,
              fontWeight: 600,
              color: "var(--accent3)",
              letterSpacing: 2,
              textTransform: "uppercase",
              marginBottom: "0.75rem",
            }}
          >
            About
          </p>
          <h2
            style={{
              fontSize: "clamp(1.6rem,4vw,2.4rem)",
              fontWeight: 700,
              letterSpacing: "-0.8px",
              marginBottom: "1.25rem",
              color: "var(--text)",
            }}
          >
            Hi, I&apos;m Jesutoba
          </h2>

          <p
            style={{
              fontSize: 15,
              color: "var(--text2)",
              lineHeight: 1.8,
              marginBottom: "1rem",
            }}
          >
            I hold a Master of Science in Computer Science & Quantitative Methods; Major in Predictive Analytics at{" "}
            <strong style={{ color: "var(--text)", fontWeight: 600 }}>
              Austin Peay State University
            </strong>{" "}
            (GPA 4.0), with enterprise engineering experience spanning machine
            learning, data engineering, software development, and platform
            reliability.
          </p>

          <p
            style={{
              fontSize: 15,
              color: "var(--text2)",
              lineHeight: 1.8,
              marginBottom: "1rem",
            }}
          >
            At{" "}
            <strong style={{ color: "var(--text)", fontWeight: 600 }}>
              NIBSS
            </strong>{" "}
            I engineered and maintained critical payment infrastructure for
            Nigeria&apos;s national banking switch. At{" "}
            <strong style={{ color: "var(--text)", fontWeight: 600 }}>
              Guardian Life Insurance
            </strong>{" "}
            I built Databricks automation pipelines cutting data processing time
            by 40%. I thrive at the intersection of intelligent systems and
            scalable infrastructure.
          </p>

          <p
            style={{
              fontSize: 15,
              color: "var(--text2)",
              lineHeight: 1.8,
              marginBottom: "1.75rem",
            }}
          >
            Based in United State of America. Available for ML Engineer, Data
            Engineer, Software Engineer, DevOps and SRE roles — remote or on-site.
          </p>

          {/* Tags */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {tags.map((tag) => (
              <span
                key={tag}
                style={{
                  background: "rgba(108,99,255,.1)",
                  border: "1px solid rgba(108,99,255,.2)",
                  color: "var(--accent3)",
                  padding: "4px 13px",
                  borderRadius: 6,
                  fontSize: 12,
                  fontWeight: 500,
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .about-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
