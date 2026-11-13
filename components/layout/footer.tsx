import { ArrowUpRight, CalendarDays, Mail } from "lucide-react";
import { site } from "@/content/site";
import { buttonVariants } from "@/components/ui/button";
import { TrackedLink } from "./tracked-link";

/** Footer on every page: CTA + small print. */
export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="py-12">
        <p className="text-h2 text-fg">{site.footer.tagline}</p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
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
              Book a call <CalendarDays aria-hidden strokeWidth={1.5} />
            </TrackedLink>
          )}
        </div>
      </div>
      <p className="border-t border-line py-6 text-meta text-subtle">
        {site.footer.smallPrint} ·{" "}
        <a
          href={site.links.sourceRepo}
          target="_blank"
          rel="noopener"
          className="inline-flex items-center gap-0.5 hover:text-fg"
        >
          Source on GitHub
          <ArrowUpRight size={12} strokeWidth={1.5} aria-hidden />
        </a>
      </p>
    </footer>
  );
}
