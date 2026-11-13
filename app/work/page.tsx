import type { Metadata } from "next";
import { site } from "@/content/site";
import { getAllCases } from "@/lib/mdx";
import { CaseCard } from "@/components/work/case-card";
import { WorkGrid } from "@/components/work/work-grid";

export const metadata: Metadata = {
  title: site.pages.work.title,
  description: site.pages.work.description,
  alternates: { canonical: "/work" },
  openGraph: {
    url: "/work",
    title: `${site.pages.work.title} · ${site.name}`,
    description: site.pages.work.description,
  },
};

export default function WorkPage() {
  const cases = getAllCases();
  return (
    <div className="pt-10 pb-16 sm:pt-14 lg:pt-20 lg:pb-24">
      <h1 className="text-display text-fg">{site.pages.work.title}</h1>
      <p className="mt-4 max-w-[60ch] text-lg text-muted">{site.pages.work.intro}</p>
      <div className="mt-10">
        <WorkGrid
          items={cases.map((c) => ({
            slug: c.slug,
            category: c.category,
            card: <CaseCard study={c} headingLevel="h2" />,
          }))}
        />
      </div>
    </div>
  );
}
