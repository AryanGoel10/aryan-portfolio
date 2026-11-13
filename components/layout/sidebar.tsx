import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";
import { AvailabilityBadge } from "@/components/ui/primitives";
import { NavLinks } from "./nav-links";
import { PaletteHint } from "./palette-hint";
import { ResumeMenu } from "./resume-menu";
import { SocialLinks } from "./social-links";
import { ThemeToggle } from "./theme-toggle";
import portrait from "@/public/aryan-portrait.png";

/** Fixed desktop sidebar (≥ 1024px): portrait, name, availability, nav, search, socials. */
export function Sidebar() {
  return (
    <aside className="fixed inset-y-0 left-0 z-30 hidden w-[280px] flex-col border-r border-line bg-surface lg:flex">
      <div className="flex flex-1 flex-col overflow-y-auto px-5 pt-8 pb-4">
        <Link href="/" className="block w-fit rounded-portrait" aria-label={`${site.name}, home`}>
          <Image
            src={portrait}
            alt={site.name}
            width={200}
            height={200}
            sizes="200px"
            placeholder="blur"
            loading="eager"
            className="portrait size-[200px] rounded-portrait bg-surface-2 object-cover [@media(max-height:820px)]:size-[132px]"
          />
        </Link>
        <p className="mt-5 text-lg leading-tight font-semibold text-fg">{site.name}</p>
        <p className="mt-1 text-meta text-muted">{site.role}</p>
        <p className="mt-2 text-meta font-normal text-subtle">
          Now at <span className="text-muted">{site.currently.map((c) => c.company).join(" & ")}</span>
        </p>
        {site.availability.open && (
          <AvailabilityBadge
            label={site.availability.badge}
            className="mt-4 rounded-[12px] py-1.5 leading-snug whitespace-normal"
          />
        )}

        <nav aria-label="Primary" className="mt-7">
          <NavLinks showSections />
        </nav>

        <div className="mt-6">
          <PaletteHint />
        </div>
      </div>

      <div className="flex items-center gap-0.5 border-t border-line px-4 py-3">
        <SocialLinks />
        <ResumeMenu location="sidebar" trigger="icon" align="start" side="top" />
        <ThemeToggle className="ml-auto" />
      </div>
    </aside>
  );
}
