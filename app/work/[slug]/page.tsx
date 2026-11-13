import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllCases, getCase } from "@/lib/mdx";
import { PlaceholderPage } from "@/components/layout/placeholder-page";

// Placeholder: opt out of instant-navigation validation until the real template
// lands in Phase 3 (which will cache case content so client navigation is instant).
export const instant = false;

export function generateStaticParams() {
  return getAllCases().map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps<"/work/[slug]">): Promise<Metadata> {
  const c = getCase((await params).slug);
  return c ? { title: c.title, description: c.description } : {};
}

export default async function CaseStudyPage({ params }: PageProps<"/work/[slug]">) {
  const c = getCase((await params).slug);
  if (!c) notFound();

  return (
    <PlaceholderPage title={c.title} phase="Phase 3">
      <p className="font-mono text-xs tracking-[0.08em] text-subtle uppercase">
        {c.company} · {c.dates} · {c.role}
      </p>
      <p className="mt-3 text-muted">{c.outcome}</p>
      <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {c.metrics.map((m) => (
          <li key={m.label} className="rounded-card border border-line bg-surface-2 p-4">
            <p className="font-mono text-2xl">{m.value}</p>
            <p className="mt-1 text-[13px] text-muted">{m.label}</p>
          </li>
        ))}
      </ul>
      <pre className="mt-8 font-sans text-sm whitespace-pre-wrap text-muted">
        {c.body.replace(/\{\/\*.*?\*\/\}\n*/gs, "").trim()}
      </pre>
    </PlaceholderPage>
  );
}
