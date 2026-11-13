"use client";

import { useRef } from "react";
import { Download, Search } from "lucide-react";
import { site } from "@/content/site";
import { openPalette } from "@/lib/events";
import { Sheet, SheetContent, SheetDescription, SheetTitle } from "@/components/ui/sheet";
import { AvailabilityBadge } from "@/components/ui/primitives";
import { NavLinks } from "./nav-links";
import { SocialLinks } from "./social-links";
import { ThemeToggle } from "./theme-toggle";
import { TrackedLink } from "./tracked-link";

/** Bottom-sheet menu (loaded on first open). Closes on route change, Esc or swipe down. */
export default function MobileMenuSheet({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const touchStart = useRef<number | null>(null);
  const close = () => onOpenChange(false);

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="bottom"
        className="overflow-y-auto pb-[max(20px,env(safe-area-inset-bottom))]"
        onTouchStart={(e) => (touchStart.current = e.touches[0].clientY)}
        onTouchEnd={(e) => {
          if (touchStart.current !== null && e.changedTouches[0].clientY - touchStart.current > 80) close();
          touchStart.current = null;
        }}
      >
        <div className="mx-auto h-1 w-10 rounded-full bg-line" aria-hidden />
        <div>
          <SheetTitle>Menu</SheetTitle>
          <SheetDescription className="sr-only">Site navigation, resume downloads and links</SheetDescription>
        </div>
        {site.availability.open && <AvailabilityBadge label={site.availability.badge} className="w-fit" />}

        <nav aria-label="Primary">
          <NavLinks onNavigate={close} />
        </nav>

        <button
          type="button"
          onClick={() => {
            close();
            setTimeout(openPalette, 150);
          }}
          className="flex min-h-11 items-center gap-3 rounded-button border border-line px-3 text-sm text-muted"
        >
          <Search size={16} strokeWidth={1.5} aria-hidden />
          Search and actions
        </button>

        <div className="grid grid-cols-1 gap-2 min-[400px]:grid-cols-2">
          {site.resumes.map((r) => (
            <TrackedLink
              key={r.id}
              href={r.file}
              target="_blank"
              rel="noopener"
              tracking={{ event: "resume_download", version: r.id, location: "mobile-menu" }}
              className="flex min-h-11 items-center justify-center gap-2 rounded-button border border-line px-3 text-sm text-fg hover:bg-surface-2"
            >
              <Download size={16} strokeWidth={1.5} className="text-accent" aria-hidden />
              {r.shortLabel}
            </TrackedLink>
          ))}
        </div>

        <div className="flex items-center gap-1 border-t border-line pt-3">
          <SocialLinks />
          <ThemeToggle className="ml-auto" />
        </div>
      </SheetContent>
    </Sheet>
  );
}
