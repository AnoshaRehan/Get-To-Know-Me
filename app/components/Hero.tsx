"use client";

import { useEffect, useRef, useState } from "react";

const symbols = [
  "</>", "react","class", "import", "&&", "numpy", "django",
  "git", "def", "lambda", "pandas", "fit()", ";", "python"
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const interval = setInterval(() => {
      const isMobile = window.innerWidth < 768;
      const sizes = ["1rem", "1.4rem", "2rem", "2.8rem", "3.5rem"];
      const opacity = isMobile
        ? (0.03 + Math.random() * 0.07)
        : (0.05 + Math.random() * 0.15);
      const size = sizes[Math.floor(Math.random() * sizes.length)];
      const symbol = document.createElement("div");
      symbol.innerText = symbols[Math.floor(Math.random() * symbols.length)];
      symbol.style.cssText = `
        position: absolute;
        right: ${Math.random() * 30}%;
        top: 100%;
        font-size: ${size};
        color: rgba(200,169,110,${opacity});
        font-family: 'Courier New', monospace;
        letter-spacing: 2px;
        pointer-events: none;
        animation: floatUp ${4 + Math.random() * 4}s linear forwards;
      `;
      container.appendChild(symbol);

      setTimeout(() => symbol.remove(), 8000);
    }, 600);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" style={{
      scrollSnapAlign: "start",
      height: "100vh",
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
      paddingLeft: "8%",
      position: "relative",
      overflow: "hidden",
      background: "var(--navy)",
    }}>

      {/* Background glow */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: "radial-gradient(ellipse at 70% 50%, rgba(200,169,110,0.07) 0%, transparent 65%)",
        pointerEvents: "none",
      }} />

      {/* Floating symbols container */}
      <div ref={containerRef} style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        overflow: "hidden",
        zIndex: isMobile ? 1 : 3,
      }} />

      <div className="panel-inner" style={{
        position: "relative",
        zIndex: 2,
        maxWidth: "1000px",
        width: "100%",
        padding: "0 40px",
      }}>

        {/* Eyebrow */}
        <div style={{
          fontSize: "0.7rem",
          letterSpacing: "5px",
          textTransform: "uppercase",
          color: "var(--gold)",
          marginBottom: "24px",
          display: "flex",
          alignItems: "center",
          gap: "16px",
          textAlign: "left",
        }}>
          Software Engineer
        </div>

        {/* Name */}
        <h1 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(4rem, 10vw, 8rem)",
          fontWeight: 300,
          lineHeight: 0.95,
          letterSpacing: "-2px",
          marginBottom: "36px",
          textAlign: "left",
        }}>
          ANOSHA<br />
          <em style={{ fontStyle: "normal", color: "var(--gold)" }}>REHAN</em>
        </h1>

        {/* Bio */}
        <p style={{
          fontSize: "1rem",
          fontWeight: 400,
          color: "var(--muted)",
          maxWidth: "480px",
          lineHeight: 1.8,
          marginBottom: "48px",
        }}>
          Backend & full-stack engineer with 4+ years building production systems.
          Currently pursuing a Master's in Computer Science.
        </p>

        {/* Scroll hint */}
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          fontSize: "0.7rem",
          letterSpacing: "3px",
          textTransform: "uppercase",
          color: "var(--muted)",
        }}>
          <div style={{
            width: "1px",
            height: "48px",
            background: "linear-gradient(to bottom, var(--gold), transparent)",
          }} />
          Scroll to explore
        </div>

      </div>
    </section>
  );
}