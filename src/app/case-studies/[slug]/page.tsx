"use client"; 

import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { caseStudyCategories, PDFProject } from "@/data/caseStudies";

export default function CategoryPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const cat = caseStudyCategories.find((c) => c.slug === slug);

  if (!cat) {
    return (
      <div style={{ minHeight: "100vh", background: "var(--bg)", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: "1rem" }}>
        <div style={{ fontSize: "3rem" }}>🔍</div>
        <p style={{ color: "var(--text2)", fontSize: 15 }}>Category not found.</p>
        <Link href="/#case-studies" style={{ color: "var(--accent3)", fontSize: 14 }}>← Back to portfolio</Link>
      </div>
    );
  }

  const uploaded = cat.projects.filter((p) => p.file !== null);
  const coming = cat.projects.filter((p) => p.file === null);

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)", color: "var(--text)" }}>

      {/* Back nav */}
      <div style={{ background: "var(--bg2)", borderBottom: "1px solid var(--border)", padding: "0 2rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", height: 56, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Link href="/" style={{ fontSize: 15, fontWeight: 700, color: "var(--text)", letterSpacing: "-.3px" }}>
            J<span style={{ color: "var(--accent3)" }}>L</span>
          </Link>
          <Link
            href="/#case-studies"
            style={{ fontSize: 13, color: "var(--text2)", display: "flex", alignItems: "center", gap: 6, transition: "color .18s" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text)")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text2)")}
          >
            ← Back to portfolio
          </Link>
        </div>
      </div>

      {/* Hero */}
      <div style={{
        background: `linear-gradient(135deg, ${cat.accentColor}10, transparent)`,
        borderBottom: "1px solid var(--border)",
        padding: "3.5rem 2rem 3rem",
      }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.25rem" }}>
            <div style={{
              width: 60, height: 60, borderRadius: 14, background: cat.bgColor,
              display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.8rem",
            }}>
              {cat.icon}
            </div>
            <div>
              <p style={{ fontSize: 11, color: cat.textColor, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", marginBottom: 4 }}>
                Case Studies
              </p>
              <h1 style={{ fontSize: "clamp(1.6rem,4vw,2.4rem)", fontWeight: 700, letterSpacing: "-.8px", color: "var(--text)" }}>
                {cat.label}
              </h1>
            </div>
          </div>
          <p style={{ fontSize: 15, color: "var(--text2)", maxWidth: 580, lineHeight: 1.7 }}>
            {cat.description}
          </p>
          <div style={{ display: "flex", gap: 12, marginTop: "1.5rem", flexWrap: "wrap" }}>
            <span style={{ background: cat.bgColor, color: cat.textColor, fontSize: 12, fontWeight: 600, padding: "5px 14px", borderRadius: 100 }}>
              {uploaded.length} available
            </span>
            <span style={{ background: "var(--surface)", color: "var(--text2)", fontSize: 12, padding: "5px 14px", borderRadius: 100, border: "1px solid var(--border)" }}>
              {coming.length} coming soon
            </span>
          </div>
        </div>
      </div>

      {/* Available PDFs */}
      <div style={{ padding: "3rem 2rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>

          {uploaded.length > 0 && (
            <>
              <p style={{ fontSize: 11, fontWeight: 600, color: "var(--accent3)", letterSpacing: 2, textTransform: "uppercase", marginBottom: "1.25rem" }}>
                Available to view
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1rem", marginBottom: "3rem" }}>
                {uploaded.map((proj) => (
                  <ProjectCard key={proj.id} proj={proj} accentColor={cat.accentColor} bgColor={cat.bgColor} />
                ))}
              </div>
            </>
          )}

          {coming.length > 0 && (
            <>
              <p style={{ fontSize: 11, fontWeight: 600, color: "var(--text2)", letterSpacing: 2, textTransform: "uppercase", marginBottom: "1.25rem" }}>
                Coming soon
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1rem" }}>
                {coming.map((proj) => (
                  <ComingSoonCard key={proj.id} proj={proj} />
                ))}
              </div>
            </>
          )}

        </div>
      </div>

      {/* Upload instructions */}
      {/* <div style={{ padding: "0 2rem 4rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{
            background: "var(--surface)", border: "1px dashed var(--border2)",
            borderRadius: 12, padding: "1.5rem 2rem",
          }}>
            <p style={{ fontSize: 13, fontWeight: 600, color: "var(--text)", marginBottom: ".5rem" }}>
              📁 How to add PDFs to this page
            </p>
            <p style={{ fontSize: 13, color: "var(--text2)", lineHeight: 1.7 }}>
              Drop your PDF files into{" "}
              <code style={{ background: "var(--bg3)", border: "1px solid var(--border2)", borderRadius: 4, padding: "1px 7px", fontSize: 12, color: "var(--accent3)" }}>
                public/projects/{cat.slug}/
              </code>
              {" "}then update the filename in{" "}
              <code style={{ background: "var(--bg3)", border: "1px solid var(--border2)", borderRadius: 4, padding: "1px 7px", fontSize: 12, color: "var(--accent3)" }}>
                src/data/caseStudies.ts
              </code>
              {" "}to match. Commit and push — Vercel redeploys automatically.
            </p>
            <div style={{ marginTop: "1rem", display: "flex", flexDirection: "column", gap: 6 }}>
              {cat.projects.map((proj) => (
                <div key={proj.id} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ fontSize: 10, color: proj.file ? "var(--teal)" : "var(--text2)" }}>
                    {proj.file ? "✅" : "⬜"}
                  </span>
                  <code style={{ fontSize: 12, color: proj.file ? "var(--teal)" : "var(--text2)" }}>
                    {proj.file ? proj.file : `public/projects/${cat.slug}/${proj.id}.pdf`}
                  </code>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

function ProjectCard({ proj, accentColor, bgColor }: { proj: PDFProject; accentColor: string; bgColor: string }) {
  const [viewing, setViewing] = useState(false);

  return (
    <div
      style={{
        background: "var(--surface)",
        border: "1px solid var(--border)",
        borderRadius: 12,
        overflow: "hidden",
        transition: "border-color .18s, transform .18s",
      }}
      onMouseEnter={(e) => {
        if (!viewing) {
          (e.currentTarget as HTMLElement).style.borderColor = accentColor;
          (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
        }
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
        (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
      }}
    >
      <div style={{ height: 3, background: accentColor }} />
      <div style={{ padding: "1.3rem" }}>

        {/* Inline preview iframe */}
        {viewing ? (
          <div style={{ marginBottom: "1rem" }}>
            <iframe
              src={proj.file!}
              style={{
                width: "100%",
                height: 480,
                border: "1px solid var(--border)",
                borderRadius: 8,
                background: "#fff",
                display: "block",
              }}
              title={proj.title}
            />
            <button
              onClick={() => setViewing(false)}
              style={{
                marginTop: 8,
                fontSize: 12,
                color: "var(--text2)",
                background: "none",
                border: "none",
                cursor: "pointer",
                textDecoration: "underline",
                padding: 0,
              }}
            >
              ✕ Close preview
            </button>
          </div>
        ) : (
          <div style={{
            background: bgColor,
            borderRadius: 10,
            padding: "1.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "1rem",
            fontSize: "2.5rem",
          }}>
            📄
          </div>
        )}

        <div style={{ fontSize: 14, fontWeight: 600, color: "var(--text)", marginBottom: ".4rem", lineHeight: 1.35 }}>
          {proj.title}
        </div>
        <div style={{ fontSize: 12, color: "var(--text2)", lineHeight: 1.65, marginBottom: ".85rem" }}>
          {proj.description}
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 4, marginBottom: ".85rem" }}>
          {proj.tags.map((tag) => (
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

        {proj.pages && (
          <div style={{ fontSize: 11, color: "var(--text2)", marginBottom: "1rem" }}>
            📖 {proj.pages}
          </div>
        )}

        {/* Two buttons: quick preview + open full in new tab */}
        <div style={{ display: "flex", gap: 8 }}>
          <button
            onClick={() => setViewing(!viewing)}
            style={{
              flex: 1,
              textAlign: "center",
              background: viewing ? "var(--surface2)" : accentColor,
              color: viewing ? "var(--text)" : "#fff",
              border: viewing ? "1px solid var(--border2)" : "none",
              padding: "9px 0",
              borderRadius: 7,
              fontSize: 12,
              fontWeight: 600,
              cursor: "pointer",
              transition: "opacity .18s",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = ".85")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
          >
            {viewing ? "Close Preview" : "Quick Preview"}
          </button>

          <a
            href={proj.file!}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              flex: 1,
              textAlign: "center",
              background: "transparent",
              color: "var(--text)",
              border: "1px solid var(--border2)",
              padding: "9px 0",
              borderRadius: 7,
              fontSize: 12,
              fontWeight: 500,
              transition: "background .18s, border-color .18s",
              textDecoration: "none",
              display: "block",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "var(--surface2)";
              (e.currentTarget as HTMLElement).style.borderColor = accentColor;
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "transparent";
              (e.currentTarget as HTMLElement).style.borderColor = "var(--border2)";
            }}
          >
            Open Full ↗
          </a>
        </div>
      </div>
    </div>
  );
}

function ComingSoonCard({ proj }: { proj: PDFProject }) {
  return (
    <div style={{
      background: "var(--surface)",
      border: "1px dashed var(--border2)",
      borderRadius: 12,
      padding: "1.3rem",
      opacity: 0.7,
    }}>
      <div style={{
        background: "var(--bg3)",
        borderRadius: 10,
        padding: "1.5rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "1rem",
        fontSize: "2.5rem",
        opacity: 0.4,
      }}>
        📄
      </div>
      <div style={{ fontSize: 14, fontWeight: 600, color: "var(--text)", marginBottom: ".4rem" }}>
        {proj.title}
      </div>
      <div style={{ fontSize: 12, color: "var(--text2)", lineHeight: 1.65, marginBottom: ".85rem" }}>
        {proj.description}
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 4, marginBottom: "1rem" }}>
        {proj.tags.map((tag) => (
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
      <div style={{
        display: "block",
        width: "100%",
        textAlign: "center",
        background: "var(--bg3)",
        color: "var(--text2)",
        padding: "9px 0",
        borderRadius: 7,
        fontSize: 13,
        fontWeight: 500,
        border: "1px solid var(--border2)",
      }}>
        Coming Soon
      </div>
    </div>
  );
}
