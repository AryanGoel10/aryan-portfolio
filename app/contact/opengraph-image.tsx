import { renderOg, ogSize, ogContentType } from "@/lib/og";

export const alt = "Contact Aryan Goel";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOg({ eyebrow: "Contact", title: "Say hello." });
}
