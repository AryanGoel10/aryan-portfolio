import { CalendarDays, Mail } from "lucide-react";
import { site } from "@/content/site";
import { buttonVariants } from "@/components/ui/button";
import { LinkedInIcon } from "@/components/ui/brand-icons";
import { TrackedLink } from "@/components/layout/tracked-link";

/** Contact CTA: email, book a call (if a link exists), LinkedIn. */
export function ContactCTA({ headingId = "contact-title" }: { headingId?: string }) {
  return (
    <div>
      <h2 id={headingId} className="text-h2 text-fg">
        {site.contactCta.heading}
      </h2>
      <p className="mt-2 text-muted">{site.contactCta.subheading}</p>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <TrackedLink
          href={`mailto:${site.email}`}
          className={buttonVariants({ variant: "primary" })}
          tracking={{ event: "contact_click", channel: "email" }}
        >
          Email me <Mail aria-hidden strokeWidth={1.5} />
        </TrackedLink>
        {site.links.booking && (
          <TrackedLink
            href={site.links.booking}
            target="_blank"
            rel="noopener"
            className={buttonVariants({ variant: "secondary" })}
            tracking={{ event: "contact_click", channel: "booking" }}
          >
            {site.links.bookingLabel} <CalendarDays aria-hidden strokeWidth={1.5} />
          </TrackedLink>
        )}
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
    </div>
  );
}
