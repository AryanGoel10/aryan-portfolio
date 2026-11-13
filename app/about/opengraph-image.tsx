import { site } from "@/content/site";
import { renderOg, ogSize, ogContentType } from "@/lib/og";

export const alt = "About Aryan Goel";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOg({ eyebrow: "About", title: site.positioning });
}
