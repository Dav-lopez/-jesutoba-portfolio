"use client";

import { skills } from "@/data";

export default function Skills() {
  return (
    <section
      id="skills"
      style={{
        padding: "5rem 2rem",
        background: "var(--bg2)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
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
          Capabilities
        </p>
        <h2
          style={{
            fontSize: "clamp(1.6rem,4vw,2.4rem)",
            fontWeight: 700,
            letterSpacing: "-0.8px",
            marginBottom: "0.5rem",
            color: "var(--text)",
          }}
        >
          Technology Stack
        </h2>
        <p
          style={{
            fontSize: 15,
            color: "var(--text2)",
            maxWidth: 540,
            marginBottom: "3rem",
            lineHeight: 1.65,
          }}
        >
          Spanning the full lifecycle, from model training and data pipelines
          to production deployment and observability.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "1rem",
          }}
        >
          {skills.map((group) => (
            <div
              key={group.category}
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: 12,
                padding: "1.25rem",
              }}
            >
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  color: "var(--teal)",
                  letterSpacing: 1,
                  textTransform: "uppercase",
                  marginBottom: "0.75rem",
                }}
              >
                {group.category}
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    style={{
                      background: "var(--bg3)",
                      border: "1px solid var(--border2)",
                      color: "var(--text2)",
                      padding: "3px 10px",
                      borderRadius: 4,
                      fontSize: 11,
                      fontWeight: 500,
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
