"use client";

import { experiences } from "@/data";

export default function Experience() {
  return (
    <section id="experience" style={{ padding: "5rem 2rem" }}>
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
          Career
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
          Experience
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
          From national banking infrastructure to enterprise data platforms and
          ML systems.
        </p>

        {/* Timeline */}
        <div style={{ position: "relative", paddingLeft: "2rem" }}>
          {/* Vertical line */}
          <div
            style={{
              position: "absolute",
              left: 0,
              top: 8,
              bottom: 0,
              width: 1,
              background: "var(--border2)",
            }}
          />

          {experiences.map((exp, i) => (
            <div
              key={i}
              style={{
                position: "relative",
                paddingBottom: i < experiences.length - 1 ? "2.5rem" : 0,
                paddingLeft: "1.5rem",
              }}
            >
              {/* Dot */}
              <div
                style={{
                  position: "absolute",
                  left: "-2.2rem",
                  top: 6,
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  background: exp.accentColor || "var(--accent)",
                  border: "2px solid var(--bg)",
                }}
              />

              <div
                style={{
                  fontSize: 11,
                  color: "var(--accent3)",
                  fontWeight: 600,
                  letterSpacing: 1,
                  marginBottom: "0.25rem",
                }}
              >
                {exp.period}
              </div>
              <div
                style={{
                  fontSize: 16,
                  fontWeight: 600,
                  color: "var(--text)",
                  marginBottom: 2,
                }}
              >
                {exp.role}
              </div>
              <div
                style={{
                  fontSize: 13,
                  color: "var(--teal)",
                  marginBottom: "0.75rem",
                  fontWeight: 500,
                }}
              >
                {exp.company}
              </div>
              <div
                style={{
                  fontSize: 14,
                  color: "var(--text2)",
                  lineHeight: 1.75,
                  maxWidth: 680,
                }}
              >
                {exp.description}
              </div>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 6,
                  marginTop: "0.75rem",
                }}
              >
                {exp.chips.map((chip) => (
                  <span
                    key={chip}
                    style={{
                      background: "var(--surface2)",
                      border: "1px solid var(--border)",
                      color: "var(--text2)",
                      padding: "2px 9px",
                      borderRadius: 4,
                      fontSize: 11,
                    }}
                  >
                    {chip}
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
