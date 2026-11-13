import { ArrowRight, Mail } from "lucide-react";
import { site } from "@/content/site";
import { buttonVariants } from "@/components/ui/button";
import { LinkedInIcon } from "@/components/ui/brand-icons";
import { TrackedLink } from "@/components/layout/tracked-link";
import { ResumeMenu } from "@/components/layout/resume-menu";
import type { ResumeLocation } from "@/lib/analytics";

/** One contact block: recruiter actions first, then a line for founders who want GTM help. */
export function ContactCTA({
  headingId = "contact-title",
  location = "contact",
}: {
  headingId?: string;
  location?: ResumeLocation;
}) {
  return (
    <div className="rounded-card border border-line bg-surface p-6 shadow-card sm:p-8">
      <h2 id={headingId} className="text-h2 text-fg">
        {site.contactCta.heading}
      </h2>
      <p className="mt-2 max-w-[56ch] text-muted">{site.contactCta.subheading}</p>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <TrackedLink
          href={`mailto:${site.email}`}
          className={buttonVariants({ variant: "primary" })}
          tracking={{ event: "contact_click", channel: "email" }}
        >
          Email me <Mail aria-hidden strokeWidth={1.5} />
        </TrackedLink>
        <ResumeMenu location={location} variant="secondary" className="w-full sm:w-auto" />
        <TrackedLink
          href={site.links.linkedin}
          target="_blank"
          rel="noopener"
          className={buttonVariants({ variant: "secondary" })}
          tracking={{ event: "contact_click", channel: "linkedin" }}
        >
          LinkedIn <LinkedInIcon />
        </TrackedLink>
      </div>
      {site.links.booking && (
        <p className="mt-6 border-t border-line pt-5 text-[15px] text-muted">
          {site.contactCta.founderLine}{" "}
          <TrackedLink
            href={site.links.booking}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-1 link-underline font-medium"
            tracking={{ event: "contact_click", channel: "booking" }}
          >
            {site.links.bookingLabel}
            <ArrowRight size={14} strokeWidth={1.5} aria-hidden />
          </TrackedLink>
        </p>
      )}
    </div>
  );
}
