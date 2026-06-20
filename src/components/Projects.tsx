"use client";

import { projects } from "@/data";

const categoryColors: Record<string, string> = {
  ml: "rgba(108,99,255,.15)",
  data: "rgba(16,185,129,.15)",
  obs: "rgba(249,115,22,.15)",
  devops: "rgba(245,158,11,.15)",
  sales: "rgba(139,92,246,.15)",
  weather: "rgba(52,211,153,.15)",
};

export default function Projects() {
  return (
    <section
      id="projects"
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
          Work
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
          Featured Projects
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
          From ML platforms to enterprise infrastructure — built to
          production-quality standards.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "1.25rem",
          }}
        >
          {projects.map((proj) => (
            <div
              key={proj.id}
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: 12,
                padding: "1.5rem",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 2,
                  background:
                    "linear-gradient(90deg, var(--accent), var(--teal))",
                }}
              />

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: "0.75rem",
                  marginTop: "0.25rem",
                }}
              >
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 8,
                    background:
                      categoryColors[proj.category] ??
                      "rgba(108,99,255,.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.3rem",
                  }}
                >
                  {proj.icon}
                </div>

                <span
                  style={{
                    background: "rgba(16,185,129,.1)",
                    color: "var(--teal2)",
                    fontSize: 11,
                    fontWeight: 600,
                    padding: "3px 10px",
                    borderRadius: 100,
                    border: "1px solid rgba(52,211,153,.2)",
                  }}
                >
                  {proj.stat}
                </span>
              </div>

              <div
                style={{
                  fontSize: 15,
                  fontWeight: 600,
                  color: "var(--text)",
                  marginBottom: "0.4rem",
                }}
              >
                {proj.title}
              </div>

              <div
                style={{
                  fontSize: 13,
                  color: "var(--text2)",
                  lineHeight: 1.65,
                  marginBottom: "1rem",
                }}
              >
                {proj.description}
              </div>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 5,
                  marginBottom: "1rem",
                }}
              >
                {proj.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      background: "var(--bg3)",
                      color: "var(--text2)",
                      padding: "2px 8px",
                      borderRadius: 4,
                      fontSize: 11,
                      border: "1px solid var(--border)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={proj.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: 12,
                  color: "var(--accent3)",
                  fontWeight: 500,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 4,
                  textDecoration: "none",
                }}
              >
                GitHub ↗
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}