import { site } from "@/content/site";
import { renderOg, ogSize, ogContentType } from "@/lib/og";

export const alt = "Aryan Goel's case studies";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOg({
    eyebrow: "Work",
    title: site.pages.work.intro,
    metric: { value: "7", label: "case studies with measured results" },
  });
}
