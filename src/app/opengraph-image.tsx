import { ImageResponse } from "next/og";
import { SITE } from "@/constants/site";

export const runtime = "edge";
export const alt = `${SITE.name} - Custom Slack Apps & Automation`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    <div
      style={{
        background: "#ffffff",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        padding: "80px",
        fontFamily: "sans-serif",
      }}
    >
      {/* Logo mark */}
      <div
        style={{
          background: "#000000",
          borderRadius: "16px",
          width: "80px",
          height: "80px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "40px",
        }}
      >
        <div
          style={{
            color: "#FFD200",
            fontSize: "48px",
            fontWeight: 900,
            lineHeight: 1,
          }}
        >
          B
        </div>
      </div>

      {/* Headline */}
      <div
        style={{
          fontSize: "72px",
          fontWeight: 900,
          color: "#000000",
          lineHeight: 1.1,
          marginBottom: "24px",
          maxWidth: "800px",
        }}
      >
        Custom Slack Apps.{" "}
        <span style={{ color: "#FFD200", WebkitTextStroke: "2px #000" }}>
          Subscription simple.
        </span>
      </div>

      {/* Subtext */}
      <div
        style={{
          fontSize: "28px",
          color: "#6B7280",
          maxWidth: "700px",
          lineHeight: 1.4,
        }}
      >
        {SITE.description}
      </div>

      {/* Bottom bar */}
      <div
        style={{
          position: "absolute",
          bottom: "80px",
          left: "80px",
          right: "80px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ fontSize: "24px", fontWeight: 700, color: "#000000" }}>
          {SITE.name}
        </div>
        <div
          style={{
            background: "#FFD200",
            borderRadius: "999px",
            padding: "12px 32px",
            fontSize: "20px",
            fontWeight: 700,
            color: "#000000",
          }}
        >
          Get Started
        </div>
      </div>
    </div>,
    size,
  );
}
