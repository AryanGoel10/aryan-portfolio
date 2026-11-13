import { ArrowUpRight } from "lucide-react";
import { site } from "@/content/site";
import { TrackedLink } from "./tracked-link";

/** Slim footer on every page. Each page ends with its own contact block, so no CTA here. */
export function Footer() {
  const link = "inline-flex min-h-11 min-w-11 items-center justify-center hover:text-fg sm:min-h-0 sm:min-w-0";
  return (
    <footer className="mt-8 flex flex-col gap-3 border-t border-line py-6 text-meta text-subtle sm:flex-row sm:items-center sm:justify-between">
      <p>{site.footer.smallPrint}</p>
      <nav aria-label="Footer" className="flex flex-wrap gap-x-4 gap-y-2">
        <TrackedLink
          href={`mailto:${site.email}`}
          className={link}
          tracking={{ event: "contact_click", channel: "email" }}
        >
          Email
        </TrackedLink>
        <TrackedLink
          href={site.links.linkedin}
          target="_blank"
          rel="noopener"
          className={link}
          tracking={{ event: "contact_click", channel: "linkedin" }}
        >
          LinkedIn
        </TrackedLink>
        <a href={site.links.github} target="_blank" rel="noopener" className={link}>
          GitHub
        </a>
        <a href={site.links.sourceRepo} target="_blank" rel="noopener" className={`${link} gap-0.5`}>
          Source
          <ArrowUpRight size={12} strokeWidth={1.5} aria-hidden />
        </a>
      </nav>
    </footer>
  );
}
