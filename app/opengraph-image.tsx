import { site } from "@/content/site";
import { formatMetric } from "@/lib/utils";
import { renderOg, ogSize, ogContentType } from "@/lib/og";

export const alt = `${site.name}, ${site.role}`;
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  const { before, accent, after } = site.hero.headline;
  const m = site.metrics[0];
  return renderOg({
    eyebrow: site.hero.eyebrow,
    title: `${before}${accent}${after}`,
    metric: { value: formatMetric(m), label: m.label },
  });
}
