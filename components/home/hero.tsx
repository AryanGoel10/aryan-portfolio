import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { site } from "@/content/site";
import { buttonVariants } from "@/components/ui/button";
import { AvailabilityBadge } from "@/components/ui/primitives";
import { ResumeMenu } from "@/components/layout/resume-menu";

/** Eyebrow, headline with one serif-italic word, bio, meta row and the two CTAs. */
export function Hero() {
  const { hero } = site;
  return (
    <section aria-labelledby="hero-title" className="pt-8 pb-10 sm:pt-14 lg:pt-20 lg:pb-12">
      {site.availability.open && (
        <AvailabilityBadge label={site.availability.badge} className="mb-5 lg:hidden" />
      )}
      <p className="eyebrow text-subtle">{hero.eyebrow}</p>
      <h1 id="hero-title" className="mt-4 max-w-[16ch] text-display text-fg sm:mt-5">
        {hero.headline.before}
        <span className="serif-accent text-accent">{hero.headline.accent}</span>
        {hero.headline.after}
      </h1>
      <p className="mt-5 max-w-[68ch] text-[15px] leading-[1.6] text-muted sm:mt-6 sm:text-base sm:leading-[1.65]">
        {hero.bio}
      </p>

      <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-meta text-muted sm:flex-nowrap">
        <span className="inline-flex items-center gap-1.5 whitespace-nowrap">
          <MapPin size={14} strokeWidth={1.5} className="text-subtle" aria-hidden />
          {site.location}
        </span>
        <span className="dotted-rule hidden sm:block" aria-hidden />
        <span className="text-subtle sm:hidden" aria-hidden>
          ·
        </span>
        <span className="whitespace-nowrap">{site.educationShort}</span>
      </div>

      <div className="mt-7 flex flex-col gap-3 sm:flex-row">
        <ResumeMenu location="hero" className="w-full sm:w-auto" />
        <Link
          href={hero.secondaryCta.href}
          className={buttonVariants({ variant: "secondary", className: "w-full sm:w-auto" })}
        >
          {hero.secondaryCta.label}
          <ArrowRight aria-hidden strokeWidth={1.5} />
        </Link>
      </div>
    </section>
  );
}
