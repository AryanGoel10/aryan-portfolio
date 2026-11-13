import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { site } from "@/content/site";
import { getAllCases } from "@/lib/mdx";
import { formatMetric } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { AvailabilityBadge, Callout, Kbd, Tag, TagLine, Todo } from "@/components/ui/primitives";
import { MetricTile } from "@/components/home/metric-tile";
import { CaseCard } from "@/components/work/case-card";
import { ThemeToggle } from "@/components/layout/theme-toggle";

export const metadata: Metadata = { title: "Styleguide", robots: { index: false, follow: false } };

const colours = [
  ["--bg", "bg-bg"],
  ["--surface", "bg-surface"],
  ["--surface-2", "bg-surface-2"],
  ["--border", "bg-line"],
  ["--text", "bg-fg"],
  ["--text-muted", "bg-muted"],
  ["--text-subtle", "bg-subtle"],
  ["--accent", "bg-accent"],
  ["--accent-soft", "bg-accent-soft"],
  ["--positive", "bg-positive"],
] as const;

/** Development-only page showing every token and component (404 in production). */
export default function Styleguide() {
  if (process.env.NODE_ENV === "production") notFound();
  const study = getAllCases()[0];

  return (
    <div className="space-y-16 py-16">
      <header className="flex items-center justify-between">
        <h1 className="text-display">Styleguide</h1>
        <ThemeToggle />
      </header>

      <section>
        <h2 className="mb-6 text-h2">Colour tokens</h2>
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-5">
          {colours.map(([name, cls]) => (
            <li key={name} className="rounded-card border border-line p-3">
              <div className={`h-12 rounded-button border border-line ${cls}`} />
              <p className="mt-2 font-mono text-[12px] text-muted">{name}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="mb-6 text-h2">Typography</h2>
        <p className="text-display">
          Display with <span className="serif-accent text-accent">serif</span>
        </p>
        <p className="text-h2">H2 section heading</p>
        <p className="text-h3">H3 card title</p>
        <p>Body text, 16px with 1.65 line height. Max reading width is 68ch.</p>
        <p className="text-meta text-muted">Small / meta text</p>
        <p className="eyebrow text-subtle">Eyebrow label</p>
        <p className="text-metric">52K+</p>
        <a href="#" className="link-underline">
          Body link
        </a>
      </section>

      <section className="space-y-6">
        <h2 className="mb-6 text-h2">Components</h2>
        <div className="flex flex-wrap items-center gap-3">
          <Button>
            Primary <ArrowRight />
          </Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <AvailabilityBadge label={site.availability.badge} />
          <Kbd>⌘</Kbd>
          <Kbd>K</Kbd>
          <Tag>Python</Tag>
        </div>
        <TagLine tags={["Google Ads", "SEO", "Python"]} />
        <>
          <div className="grid max-w-md grid-cols-2 gap-3">
            {site.metrics.slice(0, 2).map((m) => (
              <MetricTile key={m.label} display={formatMetric(m)} label={m.label} source={m.source} up />
            ))}
          </div>
        </>
        <div className="max-w-md">
          <CaseCard study={study} />
        </div>
        <Callout title="Impact">
          <p>Callout with a 2px amber rule.</p>
        </Callout>
        <Todo>Visible placeholder for missing content.</Todo>
      </section>
    </div>
  );
}
