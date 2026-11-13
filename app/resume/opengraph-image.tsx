import { renderOg, ogSize, ogContentType } from "@/lib/og";

export const alt = "Aryan Goel's resumes";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOg({ eyebrow: "Resume", title: "GTM & Growth and Analyst resumes" });
}
