"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#github", label: "GitHub" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "dark");
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.setAttribute(
      "data-theme",
      next ? "dark" : "light"
    );
  };

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: "var(--nav-bg)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderBottom: "1px solid var(--border)",
        padding: "0 2rem",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 60,
          gap: "1rem",
        }}
      >
        <Link
          href="/"
          style={{
            fontSize: 15,
            fontWeight: 700,
            letterSpacing: "-0.3px",
            color: "var(--text)",
            textDecoration: "none",
          }}
        >
          Jesutoba
          <span style={{ color: "var(--accent3)" }}>Lopez</span>
        </Link>

        {/* Desktop Navigation */}
        <ul
          className="desktop-nav"
          style={{
            display: "flex",
            gap: "1.5rem",
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
        >
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                style={{
                  fontSize: 13,
                  color: "var(--text2)",
                  textDecoration: "none",
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            flexShrink: 0,
          }}
        >
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            aria-label={
              isDark ? "Switch to light mode" : "Switch to dark mode"
            }
            title={isDark ? "Switch to light mode" : "Switch to dark mode"}
            style={{
              width: 36,
              height: 36,
              borderRadius: 8,
              border: "1px solid var(--border2)",
              background: "var(--surface)",
              cursor: "pointer",
              fontSize: 16,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--text)",
            }}
          >
            {isDark ? "🌙" : "☀️"}
          </button>

          {/* Hire Me Button */}
          <a
            href="#contact"
            style={{
              background: "var(--accent)",
              color: "#fff",
              padding: "6px 18px",
              borderRadius: 6,
              fontSize: 13,
              fontWeight: 600,
              whiteSpace: "nowrap",
              textDecoration: "none",
            }}
          >
            Hire Me
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              display: "none",
            }}
            className="mobile-menu-btn"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          style={{
            background: "var(--bg2)",
            borderTop: "1px solid var(--border)",
            padding: "1rem 2rem",
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: "block",
                padding: "10px 0",
                color: "var(--text2)",
                fontSize: 14,
                borderBottom: "1px solid var(--border)",
                textDecoration: "none",
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}

      <style jsx>{`
        @media (max-width: 640px) {
          .desktop-nav {
            display: none !important;
          }

          .mobile-menu-btn {
            display: block !important;
            background: transparent;
            border: none;
            color: var(--text);
            font-size: 20px;
            cursor: pointer;
          }
        }
      `}</style>
    </nav>
  );
}