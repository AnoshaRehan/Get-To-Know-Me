"use client";

import { useEffect, useRef, useState } from "react";

const symbols = [
  "</>", "react","class", "import", "&&", "numpy", "django",
  "git", "def", "lambda", "pandas", "fit()", ";", "python"
];

const roles = [
  "Backend Engineer",
  "Full-Stack Builder",
  "Exploring AI",
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    const spotlight = spotlightRef.current;
    if (!section || !spotlight) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      spotlight.style.transform = `translate3d(${x - 300}px, ${y - 300}px, 0)`;
      spotlight.style.opacity = "1";
    };

    const handleMouseLeave = () => {
      spotlight.style.opacity = "0";
    };

    section.addEventListener("mousemove", handleMouseMove);
    section.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      section.removeEventListener("mousemove", handleMouseMove);
      section.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((i) => (i + 1) % roles.length);
    }, 2600);
    return () => clearInterval(interval);
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
        color: rgba(var(--gold-rgb),${opacity});
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
    <section ref={sectionRef} id="hero" style={{
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
        background: "radial-gradient(ellipse at 70% 50%, rgba(var(--gold-rgb),0.07) 0%, transparent 65%)",
        pointerEvents: "none",
      }} />

      {/* Cursor-following spotlight */}
      <div
        ref={spotlightRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(var(--gold-rgb), 0.18) 0%, rgba(var(--gold-rgb), 0.06) 35%, transparent 70%)",
          pointerEvents: "none",
          opacity: 0,
          transform: "translate3d(-9999px, -9999px, 0)",
          transition: "opacity 0.4s ease, transform 0.18s cubic-bezier(0.16, 1, 0.3, 1)",
          willChange: "transform, opacity",
          mixBlendMode: "screen",
          zIndex: 1,
        }}
      />

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

        {/* Eyebrow row: title + status pill */}
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          marginBottom: "28px",
          flexWrap: "wrap",
        }}>
          <div style={{
            fontSize: "0.7rem",
            letterSpacing: "5px",
            textTransform: "uppercase",
            color: "var(--gold)",
            fontWeight: 500,
          }}>
            Software Engineer
          </div>

          {/* Status pill */}
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            padding: "6px 13px 6px 11px",
            border: "1px solid rgba(var(--ink-rgb), 0.18)",
            borderRadius: "100px",
            background: "rgba(var(--ink-rgb), 0.03)",
            fontSize: "0.65rem",
            letterSpacing: "2px",
            textTransform: "uppercase",
            color: "var(--white)",
            fontWeight: 500,
          }}>
            <span style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: "#4ade80",
              animation: "pulseDot 2s ease-out infinite",
              display: "inline-block",
            }} />
            Open to Work
            <span style={{ color: "var(--muted)", margin: "0 2px" }}>·</span>
            <span style={{ color: "var(--muted)" }}>California, USA</span>
          </div>
        </div>

        {/* Name */}
        <h1 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(4rem, 10vw, 8rem)",
          fontWeight: 300,
          lineHeight: 0.95,
          letterSpacing: "-2px",
          marginBottom: "20px",
          textAlign: "left",
        }}>
          <em style={{ fontStyle: "normal", color: "var(--gold)" }}>ANOSHA</em><br />
          REHAN
        </h1>

        {/* Rotating subtitle */}
        <div style={{
          height: "1.2rem",
          marginBottom: "32px",
          display: "flex",
          alignItems: "center",
          gap: "14px",
        }}>
          <span style={{
            width: "32px",
            height: "1px",
            background: "var(--gold)",
            display: "inline-block",
          }} />
          <span
            key={roleIndex}
            style={{
              fontSize: "0.85rem",
              letterSpacing: "4px",
              textTransform: "uppercase",
              color: "var(--gold)",
              fontWeight: 500,
              animation: "roleFade 2.6s ease-in-out",
              display: "inline-block",
            }}
          >
            {roles[roleIndex]}
          </span>
        </div>

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
          Recently completed a Master's in Computer Science (AI concentration).
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