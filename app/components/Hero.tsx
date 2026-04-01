"use client";

export default function Hero() {
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

      <div style={{
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
          Anosha<br />
          <em style={{ fontStyle: "normal", color: "var(--gold)" }}>Rehan</em>
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