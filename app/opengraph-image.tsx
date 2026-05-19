import { ImageResponse } from "next/og";

export const alt = "Anosha Rehan — Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#11131a",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          color: "#fefcf7",
          fontFamily: "Georgia, serif",
          position: "relative",
        }}
      >
        {/* subtle coral glow */}
        <div
          style={{
            position: "absolute",
            top: "-200px",
            right: "-200px",
            width: "700px",
            height: "700px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(255,107,91,0.22) 0%, rgba(255,107,91,0) 70%)",
            display: "flex",
          }}
        />

        {/* Top: open-to-work pill */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            padding: "10px 20px 10px 18px",
            border: "1px solid rgba(254,252,247,0.18)",
            borderRadius: "100px",
            background: "rgba(254,252,247,0.03)",
            fontSize: "20px",
            letterSpacing: "4px",
            textTransform: "uppercase",
            color: "#fefcf7",
            fontFamily: "system-ui, sans-serif",
            fontWeight: 500,
            alignSelf: "flex-start",
          }}
        >
          <span
            style={{
              display: "block",
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              background: "#4ade80",
            }}
          />
          Open to Work · Texas, USA
        </div>

        {/* Center: name */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: "200px",
              fontWeight: 300,
              lineHeight: 0.95,
              letterSpacing: "-6px",
              color: "#ff6b5b",
              display: "flex",
            }}
          >
            ANOSHA
          </div>
          <div
            style={{
              fontSize: "200px",
              fontWeight: 300,
              lineHeight: 0.95,
              letterSpacing: "-6px",
              color: "#fefcf7",
              display: "flex",
            }}
          >
            REHAN
          </div>
        </div>

        {/* Bottom: tagline */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <div
            style={{
              width: "60px",
              height: "2px",
              background: "#ff6b5b",
              display: "flex",
            }}
          />
          <div
            style={{
              fontSize: "26px",
              color: "#fefcf7",
              fontFamily: "system-ui, sans-serif",
              fontWeight: 500,
              letterSpacing: "3px",
              textTransform: "uppercase",
            }}
          >
            Backend Engineer · Full-Stack Builder
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
