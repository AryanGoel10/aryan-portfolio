import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/** 180px apple-touch icon: amber "AG" monogram on #0A0A0B. */
export default function AppleIcon() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#0A0A0B",
        color: "#F5A524",
        fontSize: 84,
        fontWeight: 700,
        letterSpacing: -4,
      }}
    >
      AG
    </div>,
    size,
  );
}
