"use client";

type ExperienceProps = {
    id: string;
    number: string;
    period: string;
    company: string;
    role: string;
    location: string;
    bullets: string[];
    dark?: boolean;
};

export default function Experience({
    id,
    number,
    period,
    company,
    role,
    location,
    bullets,
    dark = false,
}: ExperienceProps) {
  return (
    <section id={id} style={{
      scrollSnapAlign: "start",
      minHeight: "100vh",
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      background: dark ? "var(--navy2)" : "var(--navy)",
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
      }}>{number}</div>

      <div className="exp-grid panel-inner" style={{
        position: "relative",
        zIndex: 2,
        maxWidth: "1000px",
        width: "100%",
        padding: "0 60px",
        display: "grid",
        gridTemplateColumns: "1fr 1.5fr",
        gap: "80px",
        alignItems: "center",
      }}>

        {/* Left */}
        <div>
          <div style={{
            fontSize: "0.68rem",
            letterSpacing: "3px",
            color: "var(--gold)",
            textTransform: "uppercase",
            marginBottom: "12px",
          }}>{period}</div>

          <div style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "3rem",
            fontWeight: 700,
            lineHeight: 1.1,
            marginBottom: "10px",
          }}>{company}</div>

          <div style={{
            fontSize: "0.8rem",
            letterSpacing: "2px",
            textTransform: "uppercase",
            color: "var(--muted)",
            marginBottom: "6px",
          }}>{role}</div>

          <div style={{
            fontSize: "0.78rem",
            color: "rgba(var(--gold-rgb),0.5)",
          }}>{location}</div>

          <div style={{
            width: "40px",
            height: "2px",
            background: "var(--gold)",
            margin: "28px 0",
          }} />
        </div>

        {/* Right — bullets */}
        <ul className="exp-bullets" style={{ 
          listStyle: "none", 
          display: "flex", 
          flexDirection: "column", 
          gap: "14px" 
          }}>
          {bullets.map((bullet, i) => (
            <li key={i} style={{
              fontSize: "1rem",
              color: "var(--muted)",
              paddingLeft: "20px",
              position: "relative",
              lineHeight: 1.8,
            }}>
              <span style={{
                position: "absolute",
                left: 0,
                top: "9px",
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "var(--gold)",
                opacity: 0.6,
                display: "block",
              }} />
              {bullet}
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
}