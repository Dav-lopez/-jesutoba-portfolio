"use client";

const links = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "GitHub", href: "https://github.com/Dav-lopez/-jesutoba-portfolio", external: true },
  { label: "LinkedIn", href: "https://linkedin.com/in/lopez-jesutoba", external: true },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--bg2)",
        borderTop: "1px solid var(--border)",
        padding: "2rem",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "1.5rem",
            marginBottom: "1rem",
            flexWrap: "wrap",
          }}
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              style={{
                fontSize: 13,
                color: "var(--text2)",
                transition: "color .2s",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = "var(--text)")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color = "var(--text2)")
              }
            >
              {link.label}
            </a>
          ))}
        </div>
        <p
          style={{
            fontSize: 12,
            color: "var(--text2)",
            opacity: 0.6,
          }}
        >
          © {new Date().getFullYear()} Jesutoba Lopez · ML Engineer · Data Engineer · Software Engineer
        </p>
      </div>
    </footer>
  );
}
