"use client";

const contactLinks = [
  {
    icon: "✉️",
    label: "Email",
    value: "jesutoba.lopez@apsu.edu",
    href: "mailto:jesutoba.lopez@apsu.edu",
  },
  {
    icon: "💼",
    label: "LinkedIn",
    value: "linkedin.com/in/lopez-jesutoba",
    href: "https://linkedin.com/in/lopez-jesutoba",
  },
  {
    icon: "🐙",
    label: "GitHub",
    value: "JesutobaLopezfilio",
    href: "https://github.com/JesutobaLopezfilio",
  },
  {
    icon: "📄",
    label: "Resume",
    value: "Download PDF",
    href: "/resume.pdf",
    download: true,
    accent: true,
  },
];

const availableRoles = [
  "ML Engineer",
  "Data Engineer",
  "Software Engineer",
  "Platform / SRE",
];

export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        padding: "5rem 2rem",
        background: "var(--bg2)",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Availability banner */}
        <div
          style={{
            background: "linear-gradient(135deg, rgba(108,99,255,.08), rgba(16,185,129,.08))",
            border: "1px solid rgba(108,99,255,.22)",
            borderRadius: 12,
            padding: "1.5rem 2rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
            marginBottom: "3rem",
            flexWrap: "wrap",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <span
              style={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                background: "var(--teal)",
                animation: "pulse-dot 2s infinite",
                display: "inline-block",
                flexShrink: 0,
              }}
            />
            <div>
              <strong style={{ display: "block", fontSize: 15, color: "var(--text)" }}>
                Available for full-time roles · Graduating May 2026
              </strong>
              <span style={{ fontSize: 13, color: "var(--text2)" }}>
                Based in Clarksville, TN · Open to remote &amp; relocation
              </span>
            </div>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
            {availableRoles.map((role) => (
              <span
                key={role}
                style={{
                  background: "rgba(108,99,255,.12)",
                  border: "1px solid rgba(108,99,255,.2)",
                  color: "var(--accent3)",
                  padding: "4px 13px",
                  borderRadius: 100,
                  fontSize: 12,
                  fontWeight: 500,
                }}
              >
                {role}
              </span>
            ))}
          </div>
        </div>

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
          Let&apos;s Talk
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
          Get in Touch
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
          Open to full-time opportunities, collaborations, and conversations
          about engineering.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1rem",
          }}
        >
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.download ? undefined : "_blank"}
              rel={link.download ? undefined : "noopener noreferrer"}
              download={link.download ? true : undefined}
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: 12,
                padding: "1.25rem",
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                transition: "border-color .2s, background .2s",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)";
                (e.currentTarget as HTMLElement).style.background = "var(--surface2)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                (e.currentTarget as HTMLElement).style.background = "var(--surface)";
              }}
            >
              <div
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: 8,
                  background: "rgba(108,99,255,.12)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.2rem",
                  flexShrink: 0,
                }}
              >
                {link.icon}
              </div>
              <div>
                <div
                  style={{
                    fontSize: 11,
                    color: "var(--text2)",
                    marginBottom: 2,
                  }}
                >
                  {link.label}
                </div>
                <div
                  style={{
                    fontSize: 14,
                    fontWeight: 600,
                    color: link.accent ? "var(--accent3)" : "var(--text)",
                  }}
                >
                  {link.value}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
