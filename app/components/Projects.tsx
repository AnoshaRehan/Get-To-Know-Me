"use client";

import { useState } from "react";

type Link = { label: string; href: string };

type Project = {
  title: string;
  subtitle: string;
  context: string;
  description: string;
  stack: string[];
  date: string;
  featured?: boolean;
  status?: string;
  links: Link[];
};

const projects: Project[] = [
  {
    title: "Faithful or Fabricated",
    subtitle: "Hallucination Analysis in LLMs",
    context: "Graduate Research",
    date: "Ongoing",
    status: "In Progress",
    description:
      "Compared GPT-4.1-mini, LLaMA 3.1:8b, and Claude Haiku 4.5 on SQuAD 1.1 / 2.0 with exact-match, F1, and NLI-based faithfulness scoring. Found 9–15% hallucination rates and distinct calibration patterns — GPT under-abstains on unanswerable questions while LLaMA and Claude over-abstain on answerable ones. Currently extending with consistency checks and additional analyses.",
    stack: ["Python", "HuggingFace", "NLI", "GPT", "LLaMA", "Claude", "Streamlit"],
    links: [
      { label: "Live Dashboard", href: "https://faithfulorfabricated.streamlit.app/" },
    ],
  },
  {
    title: "Insurance Bias Audit",
    subtitle: "Demographic Bias in AI-Driven Claim Denials",
    context: "Graduate Research",
    date: "Apr 2026",
    description:
      "NLP + structured-feature ML pipeline on the California DMHC IMR dataset predicting claim overturn outcomes. Trained AdaBoost, XGBoost, and LightGBM with SHAP-based interpretation to audit prediction behavior across demographic groups.",
    stack: ["Python", "scikit-learn", "XGBoost", "LightGBM", "AdaBoost", "SHAP", "pandas"],
    links: [
      { label: "GitHub", href: "https://github.com/AnoshaRehan/insurance-bias-analysis" },
    ],
  },
  {
    title: "IMR RAG Explorer",
    subtitle: "Production system over 42K+ California IMR Determinations",
    context: "Personal Project",
    date: "Ongoing",
    status: "In Progress",
    description:
      "End-to-end RAG built from scratch — ingestion, Qdrant vector search with metadata filtering, grounded LLM generation with source citations, and CI/CD deployment. Anti-hallucination prompting and a calibrated similarity threshold for abstention, informed by my prior SQuAD evaluation research.",
    stack: ["Python", "FastAPI", "Qdrant", "sentence-transformers", "Groq · Llama 3.1", "Docker", "GitHub Actions"],
    links: [
      { label: "GitHub", href: "https://github.com/AnoshaRehan/insurance-claim-denial-rag-imr-explorer" },
    ],
  },
];

export default function Projects() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section id="projects" style={{
      scrollSnapAlign: "start",
      minHeight: "100vh",
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      overflow: "hidden",
      background: "var(--navy2)",
      padding: "80px 0",
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
      }}>02</div>

      <div className="panel-inner" style={{
        position: "relative",
        zIndex: 2,
        maxWidth: "1200px",
        width: "100%",
        padding: "0 60px",
      }}>

        {/* Heading + subtitle */}
        <div style={{
          display: "flex",
          alignItems: "flex-end",
          flexWrap: "wrap",
          gap: "32px",
          marginBottom: "44px",
        }}>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
            fontWeight: 600,
            lineHeight: 1.1,
          }}>Projects</h2>
          <p style={{
            fontSize: "0.85rem",
            color: "var(--muted)",
            maxWidth: "380px",
            lineHeight: 1.6,
            paddingBottom: "12px",
          }}>Research and applied AI work from my Master's concentration, plus an ongoing personal build.</p>
        </div>

        {/* Grid */}
        <div className="projects-grid" style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "24px",
        }}>
          {projects.map((project, i) => (
            <article
              key={project.title}
              onMouseEnter={() => setHoveredCard(i)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                border: `1px solid ${hoveredCard === i ? "rgba(var(--gold-rgb),0.45)" : "rgba(var(--gold-rgb),0.15)"}`,
                padding: "26px 24px 22px",
                borderRadius: "4px",
                background: hoveredCard === i ? "rgba(var(--gold-rgb),0.04)" : "transparent",
                transition: "all 0.3s ease",
                display: "flex",
                flexDirection: "column",
                transform: hoveredCard === i ? "translateY(-4px)" : "translateY(0)",
              }}
            >
              {/* Top row: context + status/date */}
              <div style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "16px",
                gap: "8px",
              }}>
                <div style={{
                  fontSize: "0.6rem",
                  letterSpacing: "2.5px",
                  textTransform: "uppercase",
                  color: "var(--gold)",
                  fontWeight: 500,
                }}>{project.context}</div>

                {project.status ? (
                  <span style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    fontSize: "0.55rem",
                    letterSpacing: "1.5px",
                    textTransform: "uppercase",
                    color: "#4ade80",
                    border: "1px solid rgba(74, 222, 128, 0.4)",
                    padding: "3px 8px",
                    borderRadius: "100px",
                    fontWeight: 500,
                  }}>
                    <span style={{
                      width: "5px",
                      height: "5px",
                      borderRadius: "50%",
                      background: "#4ade80",
                      animation: "pulseDot 2s ease-out infinite",
                      display: "inline-block",
                    }} />
                    {project.status}
                  </span>
                ) : project.featured ? (
                  <span style={{
                    fontSize: "0.55rem",
                    letterSpacing: "1.5px",
                    textTransform: "uppercase",
                    color: "var(--gold)",
                    border: "1px solid rgba(var(--gold-rgb),0.4)",
                    padding: "3px 8px",
                    borderRadius: "100px",
                    fontWeight: 500,
                  }}>★ Featured</span>
                ) : (
                  <span style={{
                    fontSize: "0.7rem",
                    color: "rgba(var(--gold-rgb),0.55)",
                    fontFamily: "'Cormorant Garamond', serif",
                    fontStyle: "italic",
                  }}>{project.date}</span>
                )}
              </div>

              {/* Title */}
              <h3 style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "1.5rem",
                fontWeight: 700,
                lineHeight: 1.15,
                marginBottom: "4px",
              }}>{project.title}</h3>

              {/* Subtitle */}
              <div style={{
                fontSize: "0.72rem",
                letterSpacing: "1px",
                color: "var(--muted)",
                marginBottom: "14px",
                lineHeight: 1.4,
              }}>{project.subtitle}</div>

              {/* Date (if featured or status takes the corner) */}
              {(project.featured || project.status) && (
                <div style={{
                  fontSize: "0.65rem",
                  color: "rgba(var(--gold-rgb),0.55)",
                  fontFamily: "'Cormorant Garamond', serif",
                  fontStyle: "italic",
                  marginBottom: "14px",
                }}>{project.date}</div>
              )}

              {/* Description */}
              <p style={{
                fontSize: "0.8rem",
                color: "var(--muted)",
                lineHeight: 1.7,
                marginBottom: "18px",
                flexGrow: 1,
              }}>{project.description}</p>

              {/* Stack chips */}
              <div style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "6px",
                marginBottom: "18px",
              }}>
                {project.stack.map((tech) => (
                  <span key={tech} style={{
                    fontSize: "0.65rem",
                    padding: "3px 9px",
                    border: "1px solid rgba(var(--ink-rgb),0.12)",
                    borderRadius: "100px",
                    color: "rgba(var(--ink-rgb),0.72)",
                    fontWeight: 500,
                  }}>{tech}</span>
                ))}
              </div>

              {/* CTAs */}
              <div style={{
                display: "flex",
                gap: "10px",
                flexWrap: "wrap",
                paddingTop: "16px",
                borderTop: "1px solid rgba(var(--gold-rgb),0.12)",
              }}>
                {project.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      fontSize: "0.7rem",
                      letterSpacing: "2px",
                      textTransform: "uppercase",
                      color: "var(--gold)",
                      textDecoration: "none",
                      padding: "7px 12px",
                      border: "1px solid rgba(var(--gold-rgb),0.35)",
                      borderRadius: "2px",
                      fontWeight: 500,
                      transition: "all 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "var(--gold)";
                      e.currentTarget.style.color = "var(--navy)";
                      e.currentTarget.style.borderColor = "var(--gold)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "transparent";
                      e.currentTarget.style.color = "var(--gold)";
                      e.currentTarget.style.borderColor = "rgba(var(--gold-rgb),0.35)";
                    }}
                  >
                    {link.label}
                    <span style={{ fontSize: "0.85rem", lineHeight: 1 }}>↗</span>
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
