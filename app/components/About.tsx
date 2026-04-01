"use client";

export default function About() {
  return (
    <section id="about" style={{
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
        color: "rgba(200,169,110,0.08)",
        userSelect: "none",
        pointerEvents: "none",
      }}>01</div>

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
        }}>About Me</div>

        {/* Heading */}
        <h2 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(2.5rem, 5vw, 4rem)",
          fontWeight: 600,
          lineHeight: 1.1,
          marginBottom: "32px",
        }}>
          Turning complex<br />problems into<br />elegant systems.
        </h2>

        {/* Bio */}
        <p style={{
          fontSize: "1.05rem",
          lineHeight: 1.9,
          color: "var(--muted)",
          maxWidth: "620px",
          fontWeight: 400,
        }}>
          I'm a backend-focused engineer with a passion for building{" "}
          <strong style={{ color: "var(--white)", fontWeight: 700 }}>scalable, reliable systems</strong>.
          From migrating millions of images to redesigning search relevance with fuzzy matching -
          I thrive at the intersection of performance, data, and product impact. Currently deepening
          expertise through a{" "}
          <strong style={{ color: "var(--white)", fontWeight: 700 }}>Master's in Computer Science</strong>.
        </p>

        {/* Stats */}
        <div className="stats-row" style={{
            display: "flex",
            flexDirection: "row",
            gap: "48px",
            marginTop: "48px",
            flexWrap: "nowrap",
          }}>
          {[
            { num: "4+", label: "Years Experience" },
            { num: "3", label: "Companies" },
            { num: "10+", label: "Technologies" },
          ].map((stat) => (
            <div key={stat.label}>
              <div style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "3rem",
                fontWeight: 700,
                color: "var(--gold)",
                lineHeight: 1,
              }}>{stat.num}</div>
              <div style={{
                fontSize: "0.72rem",
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "var(--muted)",
                marginTop: "6px",
              }}>{stat.label}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}