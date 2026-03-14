import { ImageResponse } from "next/og";

export const alt = "Janak Khadka · Film, Strategy & Public Platform | Nepal";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0a0a0f",
          color: "#f5f3eb",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 16,
          }}
        >
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: "50%",
              background: "linear-gradient(135deg, #f5b048, transparent)",
              border: "2px solid rgba(255,255,255,0.2)",
            }}
          />
          <div
            style={{
              fontSize: 56,
              fontWeight: 800,
              letterSpacing: "-0.02em",
            }}
          >
            Janak Khadka
          </div>
          <div
            style={{
              fontSize: 24,
              color: "#9b9aa5",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
            }}
          >
            Director · Civic Strategist · Cultural Architect
          </div>
          <div
            style={{
              fontSize: 18,
              color: "#71717a",
              marginTop: 8,
            }}
          >
            Film, Strategy, Media & AI · Nepal
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
