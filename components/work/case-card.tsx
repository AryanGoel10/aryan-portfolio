import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { CaseStudy } from "@/lib/mdx";
import { TagLine } from "@/components/ui/primitives";
import { cn } from "@/lib/utils";

/** Case-study card: eyebrow (company · year), title, one-line outcome, 3 tags, arrow on hover. */
export function CaseCard({
  study,
  size = "default",
  headingLevel = "h3",
}: {
  study: Pick<CaseStudy, "slug" | "title" | "company" | "year" | "outcome" | "tags" | "metrics">;
  size?: "default" | "large";
  headingLevel?: "h2" | "h3";
}) {
  const Heading = headingLevel;
  const lead = study.metrics[0];

  return (
    <article
      className={cn(
        "card-hover group relative flex h-full flex-col rounded-card border border-line bg-surface p-6 shadow-card",
        size === "large" && "sm:p-8",
      )}
    >
      <p className="eyebrow text-subtle">
        {study.company} · {study.year}
      </p>
      <Heading
        className={cn(
          "mt-3 text-fg",
          size === "large" ? "text-h3 sm:text-[22px] sm:leading-tight" : "text-h3",
        )}
      >
        <Link
          href={`/work/${study.slug}`}
          prefetch
          className="outline-none after:absolute after:inset-0 after:rounded-card focus-visible:after:outline-2 focus-visible:after:outline-offset-2 focus-visible:after:outline-accent"
        >
          {study.title}
        </Link>
      </Heading>
      <p className="mt-2 text-[15px] leading-relaxed text-muted">{study.outcome}</p>

      {size === "large" && lead && lead.value !== "TODO" && (
        <p className="mt-6 flex items-baseline gap-3">
          <span className="font-mono text-[28px] leading-none font-medium tracking-[-0.02em] text-fg tabular-nums">
            {lead.value}
          </span>
          <span className="text-meta text-muted">{lead.label}</span>
        </p>
      )}

      <div className="mt-auto flex items-end justify-between gap-4 pt-6">
        <TagLine tags={study.tags.slice(0, 3)} />
        <ArrowRight size={18} strokeWidth={1.5} className="card-arrow shrink-0 text-subtle" aria-hidden />
      </div>
    </article>
  );
}
