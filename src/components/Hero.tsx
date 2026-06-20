"use client";

export default function Hero() {
  return (
    <section
      id="top"
      style={{
        minHeight: "88vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "5rem 2rem 4rem",
      }}
    >
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          background: "rgba(108,99,255,.12)",
          border: "1px solid rgba(108,99,255,.3)",
          color: "var(--accent3)",
          padding: "5px 16px",
          borderRadius: 100,
          fontSize: 12,
          fontWeight: 500,
          marginBottom: "1.5rem",
        }}
      >
        <span
          style={{
            width: 7,
            height: 7,
            borderRadius: "50%",
            background: "var(--teal)",
            display: "inline-block",
          }}
        />
        Open to opportunities · 
      </div>

      <h1
        style={{
          fontSize: "clamp(2.4rem,6vw,4.2rem)",
          fontWeight: 700,
          lineHeight: 1.08,
          letterSpacing: "-1.5px",
          color: "var(--text)",
          marginBottom: "0.75rem",
          maxWidth: 780,
        }}
      >
        Building{" "}
        <span className="gradient-text">Intelligent Systems</span>
        <br />
        &amp; Scalable Platforms
      </h1>

      <p
        style={{
          fontSize: "clamp(1rem,2.5vw,1.2rem)",
          color: "var(--text2)",
          maxWidth: 560,
          margin: "0 auto 1rem",
          lineHeight: 1.65,
        }}
      >
        Machine Learning · Data Engineering · Software Engineering · SRE &amp;
        Platform
      </p>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 8,
          margin: "1.25rem 0 2rem",
        }}
      >
        {[
          "ML Engineer",
          "Data Engineer",
          "Software Engineer",
          "Platform / SRE",
        ].map((role) => (
          <span
            key={role}
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border2)",
              color: "var(--text2)",
              padding: "5px 14px",
              borderRadius: 100,
              fontSize: 12,
              fontWeight: 500,
            }}
          >
            {role}
          </span>
        ))}
      </div>

      <div
        style={{
          display: "flex",
          gap: 12,
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <a
          href="#projects"
          style={{
            background: "var(--accent)",
            color: "#fff",
            padding: "12px 30px",
            borderRadius: 8,
            fontSize: 14,
            fontWeight: 600,
            display: "inline-block",
            textDecoration: "none",
          }}
        >
          View Projects
        </a>

        <a
          href="/resume.pdf"
          download
          style={{
            background: "transparent",
            color: "var(--text)",
            padding: "11px 30px",
            borderRadius: 8,
            fontSize: 14,
            fontWeight: 500,
            border: "1px solid var(--border2)",
            display: "inline-block",
            textDecoration: "none",
          }}
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}