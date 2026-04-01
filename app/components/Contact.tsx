"use client";

import { useState } from "react";

type ContactLink = {
  label: string;
  value: string;
  href: string;
};

const links: ContactLink[] = [
  { label: "Email", value: "anosha.rehan15@gmail.com", href: "mailto:anosha.rehan15@gmail.com" },
  { label: "LinkedIn", value: "linkedin.com/in/anosha-rehan", href: "https://www.linkedin.com/in/anosha-rehan" },
  { label: "GitHub", value: "github.com/AnoshaRehan", href: "https://github.com/AnoshaRehan" },
];

export default function Contact() {
  const [hoveredLink, setHoveredLink] = useState<number | null>(null);

  return (
    <section id="contact" style={{
      scrollSnapAlign: "start",
      height: "100vh",
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      overflow: "hidden",
      background: "var(--navy2)",
    }}>

      {/* Background glow */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: "radial-gradient(ellipse at 30% 60%, rgba(200,169,110,0.06) 0%, transparent 60%)",
        pointerEvents: "none",
      }} />

      {/* Big background number */}
      <div style={{
        position: "absolute",
        top: "40px",
        right: "60px",
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: "7rem",
        fontWeight: 700,
        color: "rgba(200,169,110,0.08)",
        userSelect: "none",
        pointerEvents: "none",
      }}>07</div>

      <div style={{
        position: "relative",
        zIndex: 2,
        maxWidth: "1000px",
        width: "100%",
        padding: "0 60px",
      }}>

        {/* Tag */}
        <div style={{
          fontSize: "0.68rem",
          letterSpacing: "4px",
          textTransform: "uppercase",
          color: "var(--gold)",
          marginBottom: "16px",
        }}>Let's Connect</div>

        {/* Heading */}
        <h2 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(3rem, 8vw, 7rem)",
          fontWeight: 300,
          lineHeight: 0.95,
          marginBottom: "48px",
          letterSpacing: "-2px",
        }}>
          Get in<br />
          <em style={{ fontStyle: "normal", color: "var(--gold)" }}>touch.</em>
        </h2>

        {/* Links */}
        <div style={{ display: "flex", gap: "40px", flexWrap: "wrap" }}>
          {links.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              target={link.label !== "Email" ? "_blank" : undefined}
              rel="noreferrer"
              onMouseEnter={() => setHoveredLink(i)}
              onMouseLeave={() => setHoveredLink(null)}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "6px",
                textDecoration: "none",
                color: hoveredLink === i ? "var(--gold)" : "var(--white)",
                transition: "color 0.2s",
                borderBottom: `1px solid ${hoveredLink === i ? "var(--gold)" : "transparent"}`,
                paddingBottom: "4px",
              }}
            >
              <span style={{
                fontSize: "0.62rem",
                letterSpacing: "3px",
                textTransform: "uppercase",
                color: "var(--muted)",
              }}>{link.label}</span>
              <span style={{
                fontSize: "0.95rem",
                fontWeight: 500,
              }}>{link.value}</span>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}