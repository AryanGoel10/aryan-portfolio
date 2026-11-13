import type { Metadata } from "next";
import { ArrowUpRight, CalendarDays, Mail } from "lucide-react";
import { site } from "@/content/site";
import { LinkedInIcon } from "@/components/ui/brand-icons";
import { TrackedLink } from "@/components/layout/tracked-link";
import { CopyEmailButton } from "@/components/contact/copy-email-button";

export const metadata: Metadata = {
  title: "Contact",
  description: site.pages.contact.description,
  alternates: { canonical: "/contact" },
  openGraph: {
    url: "/contact",
    title: `Contact · ${site.name}`,
    description: site.pages.contact.description,
  },
};

const card = "card-hover relative flex flex-col rounded-card border border-line bg-surface p-6 shadow-card";
const stretched =
  "outline-none after:absolute after:inset-0 after:rounded-card focus-visible:after:outline-2 focus-visible:after:outline-offset-2 focus-visible:after:outline-accent";

export default function ContactPage() {
  const linkedinHandle = site.links.linkedin.replace(/^https:\/\/(www\.)?/, "");
  return (
    <div className="pt-10 pb-16 sm:pt-14 lg:pt-20">
      <h1 className="text-display text-fg">{site.pages.contact.title}</h1>
      <p className="mt-4 max-w-[52ch] text-lg text-muted">{site.pages.contact.intro}</p>

      <ul className={`mt-10 grid gap-4 ${site.links.booking ? "md:grid-cols-3" : "md:grid-cols-2"}`}>
        <li className={card}>
          <Mail size={20} strokeWidth={1.5} className="text-accent" aria-hidden />
          <h2 className="mt-4 text-h3 text-fg">
            <TrackedLink
              href={`mailto:${site.email}`}
              className={stretched}
              tracking={{ event: "contact_click", channel: "email" }}
            >
              Email
            </TrackedLink>
          </h2>
          <p className="mt-1 text-[15px] break-all text-muted">{site.email}</p>
          <div className="mt-5">
            <CopyEmailButton />
          </div>
        </li>

        {site.links.booking && (
          <li className={card}>
            <CalendarDays size={20} strokeWidth={1.5} className="text-accent" aria-hidden />
            <h2 className="mt-4 text-h3 text-fg">
              <TrackedLink
                href={site.links.booking}
                target="_blank"
                rel="noopener"
                className={stretched}
                tracking={{ event: "contact_click", channel: "booking" }}
              >
                {site.links.bookingLabel}
              </TrackedLink>
            </h2>
            <p className="mt-1 mb-4 text-[15px] text-muted">Pick a time that works for you.</p>
            <ArrowUpRight
              size={18}
              strokeWidth={1.5}
              className="card-arrow mt-auto shrink-0 self-end text-subtle"
              aria-hidden
            />
          </li>
        )}

        <li className={card}>
          <LinkedInIcon width={20} height={20} className="text-accent" />
          <h2 className="mt-4 text-h3 text-fg">
            <TrackedLink
              href={site.links.linkedin}
              target="_blank"
              rel="noopener"
              className={stretched}
              tracking={{ event: "contact_click", channel: "linkedin" }}
            >
              LinkedIn
            </TrackedLink>
          </h2>
          <p className="mt-1 mb-4 text-[15px] text-muted">{linkedinHandle}</p>
          <ArrowUpRight
            size={18}
            strokeWidth={1.5}
            className="card-arrow mt-auto shrink-0 self-end text-subtle"
            aria-hidden
          />
        </li>
      </ul>

      <p className="mt-8 text-meta text-subtle">{site.contactCta.subheading}</p>
    </div>
  );
}
