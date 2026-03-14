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
          flexDirection: "row",
          backgroundColor: "#0a0a0f",
          color: "#f5f3eb",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Portrait area - add og-share.jpg for custom image */}
        <div
          style={{
            width: 400,
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "linear-gradient(135deg, #1A2A6C 0%, #5A2EA6 50%, #0a0a0f 100%)",
          }}
        >
          <div
            style={{
              width: 180,
              height: 180,
              borderRadius: "50%",
              background: "linear-gradient(135deg, #D4AF37 20%, rgba(255,255,255,0.1))",
              border: "4px solid rgba(255,255,255,0.2)",
            }}
          />
        </div>
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: 48,
          }}
        >
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
              marginTop: 12,
            }}
          >
            Film · Strategy · Civic
          </div>
          <div
            style={{
              fontSize: 18,
              color: "#71717a",
              marginTop: 16,
            }}
          >
            Director, writer, artist, astrologer — Nepal
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
