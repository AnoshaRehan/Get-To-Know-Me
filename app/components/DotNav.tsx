"use client";

import { useState, useEffect } from "react";

const sections = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "cxc", label: "CXC Global" },
  { id: "dubizzle", label: "Dubizzle" },
  { id: "lfd", label: "Love for Data" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export default function DotNav() {
  const [active, setActive] = useState("hero");
  const [hoveredDot, setHoveredDot] = useState<string | null>(null);

    useEffect(() => {
  const handleScroll = () => {
    
    const scrollPosition = document.documentElement.scrollTop + window.innerHeight / 2;

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const top = el.offsetTop;
      const bottom = top + el.offsetHeight;

      if (scrollPosition >= top && scrollPosition < bottom) {
        setActive(id);
      }
    });
  };

  document.addEventListener("scroll", handleScroll);
  handleScroll();

  return () => document.removeEventListener("scroll", handleScroll);
}, []);

  return (
    <nav style={{
      position: "fixed",
      right: "32px",
      top: "50%",
      transform: "translateY(-50%)",
      zIndex: 1000,
      display: "flex",
      flexDirection: "column",
      gap: "14px",
    }}>
      {sections.map(({ id, label }) => (
        <a
          key={id}
          href={`#${id}`}
          onMouseEnter={() => setHoveredDot(id)}
          onMouseLeave={() => setHoveredDot(null)}
          onClick={(e) => {
            e.preventDefault();
            document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
          }}
          style={{
            width: "8px",
            height: "8px",
            borderRadius: "50%",
            background: active === id ? "var(--gold)" : "rgba(var(--gold-rgb),0.3)",
            border: "1px solid var(--gold)",
            display: "block",
            transform: active === id ? "scale(1.4)" : "scale(1)",
            transition: "all 0.3s",
            position: "relative",
          }}
        >
          {/* Label on hover */}
          {hoveredDot === id && (
            <span style={{
              position: "absolute",
              right: "18px",
              top: "50%",
              transform: "translateY(-50%)",
              fontSize: "0.65rem",
              letterSpacing: "2px",
              textTransform: "uppercase",
              color: "var(--gold)",
              whiteSpace: "nowrap",
              fontFamily: "'Syne', sans-serif",
              pointerEvents: "none",
            }}>{label}</span>
          )}
        </a>
      ))}
    </nav>
  );
}