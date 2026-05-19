"use client";

import { useState } from "react";

type SkillGroup = {
  title: string;
  skills: string[];
};

const skillGroups: SkillGroup[] = [
  { title: "Languages", skills: ["Python", "TypeScript", "JavaScript"] },
  { title: "Backend", skills: ["Django", "REST APIs", "Django REST Framework"] },
  { title: "Cloud & CDN", skills: ["Amazon S3", "Akamai CDN"] },
  { title: "Testing", skills: ["Pytest", "Jest", "Moto"] },
  { title: "ML & Data", skills: ["scikit-learn", "pandas", "NumPy", "Scrapy", "Alteryx"] },
  { title: "Tooling", skills: ["Git", "Linux", "PagerDuty", "New Relic", "Algolia"] },
];

export default function Skills() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section id="skills" style={{
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

      {/* Big background number */}
      <div className="section-num" style={{
        position: "absolute",
        top: "40px",
        right: "60px",
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: "7rem",
        fontWeight: 700,
        color: "rgba(var(--gold-rgb),0.08)",
        userSelect: "none",
        pointerEvents: "none",
      }}>06</div>

      <div className="panel-inner" style={{
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
        }}>Technical Expertise</div>

        {/* Heading */}
        <h2 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(2.5rem, 5vw, 4rem)",
          fontWeight: 600,
          lineHeight: 1.1,
          marginBottom: "40px",
        }}>Skills &<br />Technologies</h2>

        {/* Grid */}
        <div className="skills-grid" style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
        }}>
          {skillGroups.map((group, i) => (
            <div
              key={group.title}
              onMouseEnter={() => setHoveredCard(i)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                border: `1px solid ${hoveredCard === i ? "rgba(var(--gold-rgb),0.4)" : "rgba(var(--gold-rgb),0.15)"}`,
                padding: "24px",
                borderRadius: "2px",
                background: hoveredCard === i ? "rgba(var(--gold-rgb),0.03)" : "transparent",
                transition: "all 0.3s",
                cursor: "default",
              }}
            >
              <div style={{
                fontSize: "0.65rem",
                letterSpacing: "3px",
                textTransform: "uppercase",
                color: "var(--gold)",
                marginBottom: "14px",
              }}>{group.title}</div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {group.skills.map((skill) => (
                  <span key={skill} style={{
                    fontSize: "0.75rem",
                    padding: "5px 12px",
                    border: "1px solid rgba(var(--ink-rgb),0.12)",
                    borderRadius: "100px",
                    color: "rgba(var(--ink-rgb),0.7)",
                    fontWeight: 500,
                  }}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}