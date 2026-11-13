import Link from "next/link";
import { site } from "@/content/site";
import { experience } from "@/content/experience";
import { leadership } from "@/content/leadership";
import { getAllCases } from "@/lib/mdx";
import { formatDate, formatMetric } from "@/lib/utils";
import { PlaceholderPage } from "@/components/layout/placeholder-page";

/**
 * Phase 0 content check: renders everything in /content so it can be reviewed.
 * Replaced by the real Home page in Phase 2.
 */
export default function Home() {
  const cases = getAllCases();
  const { headline } = site.hero;

  return (
    <PlaceholderPage title={`${headline.before}${headline.accent}${headline.after}`} phase="Phase 2">
      <section className="space-y-2">
        <p className="font-mono text-xs tracking-[0.08em] text-subtle uppercase">{site.hero.eyebrow}</p>
        <p className="text-lg">
          {site.name} — {site.positioning}
        </p>
        <p className="text-muted">{site.availability.long}</p>
        <p className="max-w-[68ch] text-muted">{site.hero.bio}</p>
      </section>

      <h2 className="mt-12 text-2xl font-semibold">Impact strip</h2>
      <ul className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {site.metrics.map((m) => (
          <li key={m.label} className="rounded-card border border-line bg-surface-2 p-4">
            <p className="font-mono text-3xl tabular-nums">{formatMetric(m)}</p>
            <p className="mt-2 text-[13px] text-muted">{m.label}</p>
            <p className="mt-1 text-xs text-subtle">Source: {m.source}</p>
          </li>
        ))}
      </ul>

      <h2 className="mt-12 text-2xl font-semibold">Case studies ({cases.length})</h2>
      <ul className="mt-4 space-y-3">
        {cases.map((c) => (
          <li key={c.slug} className="rounded-card border border-line bg-surface p-4">
            <p className="font-mono text-xs tracking-[0.08em] text-subtle uppercase">
              {c.company} · {c.year} · {c.category}
              {c.featured ? " · featured" : ""}
            </p>
            <Link href={`/work/${c.slug}`} className="mt-1 block font-semibold hover:text-accent">
              {c.title}
            </Link>
            <p className="text-sm text-muted">{c.outcome}</p>
            <p className="mt-2 font-mono text-xs text-subtle uppercase">{c.tags.join(" · ")}</p>
          </li>
        ))}
      </ul>

      <h2 className="mt-12 text-2xl font-semibold">Experience</h2>
      <ul className="mt-4 space-y-2">
        {experience.map((e) => (
          <li key={`${e.org}-${e.dates}`} className="text-sm">
            <span className="font-mono text-subtle">{e.dates}</span> — {e.role}, {e.org}:{" "}
            <span className="text-muted">{e.line}</span>
          </li>
        ))}
      </ul>

      <h2 className="mt-12 text-2xl font-semibold">Leadership</h2>
      <ul className="mt-4 space-y-2">
        {leadership.map((l) => (
          <li key={l.org} className="text-sm">
            {l.title}, {l.org} ({l.tenure}): <span className="text-muted">{l.description}</span>
          </li>
        ))}
      </ul>

      <h2 className="mt-12 text-2xl font-semibold">Now</h2>
      <p className="mt-2 text-sm text-muted">
        {site.now.text} <span className="text-subtle">(updated {formatDate(site.now.updated)})</span>
      </p>
    </PlaceholderPage>
  );
}
