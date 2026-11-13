import { getAllCases, getCase } from "@/lib/mdx";
import { renderOg, ogSize, ogContentType } from "@/lib/og";

export const alt = "Case study by Aryan Goel";
export const size = ogSize;
export const contentType = ogContentType;

export function generateStaticParams() {
  return getAllCases().map((c) => ({ slug: c.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const c = getCase((await params).slug);
  if (!c) return renderOg({ eyebrow: "Work", title: "Case study" });
  const lead = c.metrics.find((m) => m.value !== "TODO");
  return renderOg({
    eyebrow: `${c.company} · ${c.year}`,
    title: c.title,
    metric: lead ? { value: lead.value, label: lead.label } : undefined,
  });
}
