import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

/**
 * Shared OG image (1200×630): dark background, amber accent bar, name, page title, one metric.
 * Colours are fixed (not tokens) because OG images render outside the site's CSS.
 */
export function renderOg({
  eyebrow,
  title,
  metric,
}: {
  eyebrow: string;
  title: string;
  metric?: { value: string; label: string };
}) {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        background: "#0A0A0B",
        color: "#EDEDEF",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ width: 16, height: "100%", background: "#F5A524" }} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          flex: 1,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              border: "2px solid #26262B",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#F5A524",
              fontSize: 24,
              fontWeight: 700,
            }}
          >
            AG
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 28, fontWeight: 600 }}>{site.name}</div>
            <div style={{ fontSize: 20, color: "#A1A1AA" }}>{site.role}</div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 22, letterSpacing: 3, textTransform: "uppercase", color: "#888892" }}>
            {eyebrow}
          </div>
          <div
            style={{
              fontSize: title.length > 48 ? 54 : 64,
              fontWeight: 700,
              lineHeight: 1.08,
              letterSpacing: -1.5,
              maxWidth: 980,
            }}
          >
            {title}
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
          {metric ? (
            <div style={{ display: "flex", alignItems: "baseline", gap: 18 }}>
              <div style={{ fontSize: 56, fontWeight: 700, color: "#F5A524" }}>{metric.value}</div>
              <div style={{ fontSize: 24, color: "#A1A1AA" }}>{metric.label}</div>
            </div>
          ) : (
            <div style={{ display: "flex" }} />
          )}
          <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 20, color: "#A1A1AA" }}>
            <div style={{ width: 10, height: 10, borderRadius: 999, background: "#4ADE80" }} />
            {site.availability.badge}
          </div>
        </div>
      </div>
    </div>,
    ogSize,
  );
}
