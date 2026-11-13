import { Mail } from "lucide-react";
import { site } from "@/content/site";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/brand-icons";
import { TrackedLink } from "./tracked-link";

const iconLink =
  "inline-flex size-11 items-center justify-center rounded-button text-muted transition-colors duration-150 hover:bg-surface-2 hover:text-fg lg:size-9";

/** LinkedIn, GitHub and Email icon buttons. */
export function SocialLinks() {
  return (
    <>
      <TrackedLink
        href={site.links.linkedin}
        target="_blank"
        rel="noopener"
        aria-label="LinkedIn"
        title="LinkedIn"
        className={iconLink}
        tracking={{ event: "contact_click", channel: "linkedin" }}
      >
        <LinkedInIcon />
      </TrackedLink>
      <a
        href={site.links.github}
        target="_blank"
        rel="noopener"
        aria-label="GitHub"
        title="GitHub"
        className={iconLink}
      >
        <GitHubIcon />
      </a>
      <TrackedLink
        href={`mailto:${site.email}`}
        aria-label={`Email ${site.email}`}
        title="Email"
        className={iconLink}
        tracking={{ event: "contact_click", channel: "email" }}
      >
        <Mail size={18} strokeWidth={1.5} aria-hidden />
      </TrackedLink>
    </>
  );
}
