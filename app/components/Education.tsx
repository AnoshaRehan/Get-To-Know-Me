"use client";

export default function Education() {
  return (
    <section id="education" style={{
      scrollSnapAlign: "start",
      height: "100vh",
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      overflow: "hidden",
      background: "var(--navy)",
    }}>

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
      }}>06</div>

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
        }}>Academic Background</div>

        {/* Heading */}
        <h2 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(2.5rem, 5vw, 4rem)",
          fontWeight: 600,
          lineHeight: 1.1,
          marginBottom: "48px",
        }}>Education</h2>

        {/* Cards */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "60px",
        }}>
          {[
            { status: "In Progress", degree: "Master of Science", school: "East Texas A&M University (formerly Texas A&M University-Commerce)", field: "Computer Science" },
            { status: "Completed · 2020", degree: "Bachelor of Science", school: "National University of Computer and Emerging Sciences (NUCES - FAST)", field: "Computer Science" },
          ].map((edu) => (
            <div key={edu.degree} style={{
              borderLeft: "2px solid rgba(200,169,110,0.3)",
              paddingLeft: "32px",
            }}>
              <div style={{
                fontSize: "0.65rem",
                letterSpacing: "3px",
                textTransform: "uppercase",
                color: "var(--gold)",
                marginBottom: "12px",
              }}>{edu.status}</div>

              <div style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "2rem",
                fontWeight: 600,
                marginBottom: "8px",
                lineHeight: 1.2,
              }}>{edu.degree}</div>

              <div style={{
                fontSize: "0.85rem",
                color: "var(--muted)",
                marginBottom: "6px",
              }}>{edu.school}</div>

              <div style={{
                fontSize: "0.78rem",
                color: "rgba(200,169,110,0.6)",
                letterSpacing: "1px",
              }}>{edu.field}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}