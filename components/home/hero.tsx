import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { site } from "@/content/site";
import { buttonVariants } from "@/components/ui/button";
import { AvailabilityBadge } from "@/components/ui/primitives";
import { ResumeMenu } from "@/components/layout/resume-menu";
import { CompanyLogo } from "@/components/ui/company-logo";

/** Who I am, where I work right now (current roles), and the two main actions. */
export function Hero() {
  const { hero, currently } = site;
  return (
    <section aria-labelledby="hero-title" className="pt-8 pb-10 sm:pt-12 lg:pt-16 lg:pb-12">
      {site.availability.open && (
        <AvailabilityBadge label={site.availability.badge} className="mb-5 lg:hidden" />
      )}
      <p className="eyebrow text-subtle">{hero.eyebrow}</p>
      <h1 id="hero-title" className="mt-4 max-w-[18ch] text-display text-fg">
        {hero.headline.before}
        <span className="serif-accent text-accent">{hero.headline.accent}</span>
        {hero.headline.after}
      </h1>
      <p className="mt-4 max-w-[52ch] text-[17px] leading-relaxed text-muted sm:text-lg">{hero.subline}</p>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <ResumeMenu location="hero" className="w-full sm:w-auto" />
        <Link
          href={hero.secondaryCta.href}
          className={buttonVariants({ variant: "secondary", className: "w-full sm:w-auto" })}
        >
          {hero.secondaryCta.label}
          <ArrowRight aria-hidden strokeWidth={1.5} />
        </Link>
      </div>

      <div className="mt-7">
        <h2 className="flex items-center gap-2 eyebrow text-subtle">
          <span className="pulse-dot size-1.5 rounded-full bg-positive" aria-hidden />
          Currently
        </h2>
        <ul className="mt-3 grid gap-3 sm:grid-cols-2">
          {currently.map((c) => (
            <li key={c.company}>
              <Link
                href={c.href}
                prefetch
                className="card-hover group flex h-full flex-col rounded-card border border-line bg-surface p-4 shadow-card sm:p-5"
              >
                <span className="flex items-center justify-between gap-3">
                  <span className="flex items-center gap-2.5">
                    <CompanyLogo company={c.company} size={32} />
                    <span className="text-[17px] font-semibold text-fg">{c.company}</span>
                  </span>
                  <span className="font-mono text-[12px] whitespace-nowrap text-subtle">since {c.since}</span>
                </span>
                <span className="mt-0.5 text-meta text-subtle">{c.about}</span>
                <span className="mt-2 text-[14px] font-medium text-fg">{c.role}</span>
                <span className="mt-1 text-[14px] leading-snug text-muted">{c.line}</span>
                <span className="mt-3 inline-flex items-center gap-1 text-meta text-subtle group-hover:text-accent">
                  See the work
                  <ArrowUpRight size={14} strokeWidth={1.5} className="card-arrow" aria-hidden />
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-3 text-meta font-normal text-muted">{hero.previously}</p>
      </div>
    </section>
  );
}
