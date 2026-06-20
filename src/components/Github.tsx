"use client";

import { useEffect, useState } from "react";
import type { GithubUser } from "@/types";

const GITHUB_USERNAME = "Dav-lopez";

function ContribGrid() {
  const weights = [0, 0, 0, 0, 1, 1, 1, 2, 2, 3];
  const colors = [
    "var(--border)",
    "rgba(108,99,255,.2)",
    "rgba(108,99,255,.45)",
    "rgba(108,99,255,.75)",
    "var(--accent)",
  ];
  const cells = Array.from({ length: 364 }, (_, i) => {
    const w = weights[Math.floor((i * 7 + i * 3) % 10)];
    return colors[w];
  });

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(52, 1fr)",
        gap: 2,
        marginTop: "0.75rem",
      }}
    >
      {cells.map((color, i) => (
        <div
          key={i}
          style={{
            aspectRatio: "1",
            borderRadius: 2,
            background: color,
          }}
        />
      ))}
    </div>
  );
}

export default function Github() {
  const [user, setUser] = useState<GithubUser | null>(null);
  const [stars, setStars] = useState<number | null>(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${GITHUB_USERNAME}`)
      .then((r) => r.json())
      .then((d) => setUser(d))
      .catch(() => {});

    fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100`)
      .then((r) => r.json())
      .then((repos) => {
        if (Array.isArray(repos)) {
          const total = repos.reduce(
            (acc: number, r: { stargazers_count?: number }) =>
              acc + (r.stargazers_count || 0),
            0
          );
          setStars(total);
        }
      })
      .catch(() => {});
  }, []);

  const stats = [
    { value: user?.public_repos ?? "—", label: "Public Repos" },
    { value: stars ?? "—", label: "Stars Earned" },
    { value: user?.followers ?? "—", label: "Followers" },
    { value: 6, label: "Featured Projects" },
  ];

  return (
    <section id="github" style={{ padding: "5rem 2rem" }}>
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
          Open Source
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
          GitHub Activity
        </h2>
        <p
          style={{
            fontSize: 15,
            color: "var(--text2)",
            maxWidth: 540,
            marginBottom: "2.5rem",
            lineHeight: 1.65,
          }}
        >
          Consistent contributions across ML, data engineering, and
          infrastructure repositories.
        </p>

        {/* Stats */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
            gap: "1rem",
            marginBottom: "2rem",
          }}
        >
          {stats.map((s) => (
            <div
              key={s.label}
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: 12,
                padding: "1.25rem",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontSize: "1.8rem",
                  fontWeight: 700,
                  color: s.label === "Featured Projects" ? "var(--teal)" : "var(--text)",
                }}
              >
                {s.value}
              </div>
              <div style={{ fontSize: 11, color: "var(--text2)", marginTop: 3 }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* Contribution viz */}
        <div
          style={{
            background: "var(--surface)",
            border: "1px solid var(--border)",
            borderRadius: 12,
            padding: "1.25rem",
          }}
        >
          <div style={{ fontSize: 12, color: "var(--text2)" }}>
            Contribution activity · 2024–2025
          </div>
          <ContribGrid />
        </div>

        {/* Links */}
        <div style={{ marginTop: "1.5rem", display: "flex", gap: 12, flexWrap: "wrap" }}>
          <a
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "transparent",
              color: "var(--text)",
              padding: "9px 22px",
              borderRadius: 8,
              fontSize: 13,
              fontWeight: 500,
              border: "1px solid var(--border2)",
              display: "inline-block",
              transition: "all .2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "var(--surface)";
              (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "transparent";
              (e.currentTarget as HTMLElement).style.borderColor = "var(--border2)";
            }}
          >
            View GitHub Profile ↗
          </a>
          <a
            href="https://linkedin.com/in/lopez-jesutoba"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "transparent",
              color: "var(--text)",
              padding: "9px 22px",
              borderRadius: 8,
              fontSize: 13,
              fontWeight: 500,
              border: "1px solid var(--border2)",
              display: "inline-block",
              transition: "all .2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "var(--surface)";
              (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "transparent";
              (e.currentTarget as HTMLElement).style.borderColor = "var(--border2)";
            }}
          >
            LinkedIn ↗
          </a>
        </div>
      </div>
    </section>
  );
}
