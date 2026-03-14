import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "50%",
          background: "linear-gradient(135deg, #1A2A6C 0%, #5A2EA6 100%)",
          border: "2px solid #D4AF37",
          color: "white",
          fontSize: 14,
          fontWeight: 700,
          fontFamily: "system-ui, sans-serif",
        }}
      >
        JK
      </div>
    ),
    { ...size }
  );
}
