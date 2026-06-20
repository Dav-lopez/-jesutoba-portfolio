"use client";

import Link from "next/link";
import { caseStudyCategories } from "@/data/caseStudies";

export default function CaseStudies() {
  return (
    <section
      id="case-studies"
      style={{
        padding: "4.5rem 2rem",
        background: "var(--bg2)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <p style={{
          fontSize: 11, fontWeight: 600, color: "var(--accent3)",
          letterSpacing: 2, textTransform: "uppercase", marginBottom: ".6rem",
        }}>
          Case Studies
        </p>
        <h2 style={{
          fontSize: "clamp(1.4rem,3vw,2.1rem)", fontWeight: 700,
          letterSpacing: "-.8px", marginBottom: ".4rem", color: "var(--text)",
        }}>
          Project Reports &amp; PDFs
        </h2>
        <p style={{
          fontSize: 14, color: "var(--text2)", maxWidth: 520,
          marginBottom: "2.5rem", lineHeight: 1.65,
        }}>
          Browse detailed technical write-ups, research papers, and architecture
          breakdowns by category. Click a category to view all projects.
        </p>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "1.1rem",
        }}>
          {caseStudyCategories.map((cat) => {
            const uploaded = cat.projects.filter((p) => p.file !== null).length;
            const total = cat.projects.length;

            return (
              <Link
                key={cat.id}
                href={`/case-studies/${cat.slug}`}
                style={{ textDecoration: "none" }}
              >
                <div
                  style={{
                    background: "var(--surface)",
                    border: "1px solid var(--border)",
                    borderRadius: 14,
                    overflow: "hidden",
                    cursor: "pointer",
                    transition: "border-color .18s, transform .18s, background .25s",
                    height: "100%",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = cat.accentColor;
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  }}
                >
                  {/* Top bar */}
                  <div style={{ height: 3, background: cat.accentColor }} />

                  <div style={{ padding: "1.5rem" }}>
                    {/* Icon + badge */}
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem" }}>
                      <div style={{
                        width: 52, height: 52, borderRadius: 12,
                        background: cat.bgColor,
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontSize: "1.6rem",
                      }}>
                        {cat.icon}
                      </div>
                      <span style={{
                        background: cat.bgColor, color: cat.textColor,
                        fontSize: 11, fontWeight: 600,
                        padding: "4px 11px", borderRadius: 100,
                        border: `1px solid ${cat.accentColor}30`,
                      }}>
                        {uploaded}/{total} uploaded
                      </span>
                    </div>

                    {/* Title */}
                    <div style={{
                      fontSize: 17, fontWeight: 700, color: "var(--text)",
                      marginBottom: ".5rem", letterSpacing: "-.3px",
                    }}>
                      {cat.label}
                    </div>

                    {/* Description */}
                    <div style={{
                      fontSize: 13, color: "var(--text2)",
                      lineHeight: 1.7, marginBottom: "1.25rem",
                    }}>
                      {cat.description}
                    </div>

                    {/* Project list preview */}
                    <div style={{ display: "flex", flexDirection: "column", gap: 6, marginBottom: "1.25rem" }}>
                      {cat.projects.map((proj) => (
                        <div key={proj.id} style={{
                          display: "flex", alignItems: "center", gap: 8,
                          fontSize: 12, color: proj.file ? "var(--text)" : "var(--text2)",
                        }}>
                          <span style={{
                            width: 6, height: 6, borderRadius: "50%", flexShrink: 0,
                            background: proj.file ? cat.accentColor : "var(--border2)",
                          }} />
                          {proj.title}
                          {!proj.file && (
                            <span style={{
                              marginLeft: "auto", fontSize: 10,
                              color: "var(--text2)", background: "var(--bg3)",
                              padding: "1px 7px", borderRadius: 4,
                              border: "1px solid var(--border2)",
                            }}>
                              soon
                            </span>
                          )}
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <div style={{
                      display: "flex", alignItems: "center", justifyContent: "space-between",
                      paddingTop: "1rem", borderTop: "1px solid var(--border)",
                    }}>
                      <span style={{ fontSize: 13, color: "var(--text2)" }}>
                        {total} projects
                      </span>
                      <span style={{
                        fontSize: 13, fontWeight: 600, color: cat.accentColor,
                        display: "flex", alignItems: "center", gap: 5,
                      }}>
                        View all →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
