"use client";

import { metrics } from "@/data";

export default function Metrics() {
  return (
    <div
      style={{
        background: "var(--surface)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        padding: "1.5rem 2rem",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
          gap: "1rem",
          textAlign: "center",
        }}
      >
        {metrics.map((m) => (
          <div key={m.label}>
            <div
              style={{
                fontSize: "1.9rem",
                fontWeight: 700,
                color: "var(--accent3)",
                letterSpacing: "-1px",
                lineHeight: 1.1,
              }}
            >
              {m.value}
            </div>
            <div
              style={{
                fontSize: 11,
                color: "var(--text2)",
                marginTop: 4,
                textTransform: "uppercase",
                letterSpacing: "0.5px",
              }}
            >
              {m.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
