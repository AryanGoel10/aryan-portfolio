"use client";

import { useEffect, useId, useRef, useState } from "react";
import { ChevronDown, Download, FileText } from "lucide-react";
import { site } from "@/content/site";
import { track, type ResumeLocation } from "@/lib/analytics";
import { safeGet, safeSet } from "@/lib/storage";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const LAST_KEY = "resume:last";
type Version = "gtm" | "analyst";

/**
 * "Download resume" menu button with the GTM and Analyst versions (WAI-ARIA menu button pattern).
 * Remembers the last choice (localStorage, wrapped in try/catch) and lists it first.
 * Hand-rolled instead of Radix DropdownMenu to keep the positioning engine out of the Home bundle.
 */
export function ResumeMenu({
  location,
  trigger = "button",
  className,
  align = "start",
  side = "bottom",
}: {
  location: ResumeLocation;
  trigger?: "button" | "icon";
  className?: string;
  align?: "start" | "end";
  side?: "bottom" | "top";
}) {
  const [open, setOpen] = useState(false);
  const [last, setLast] = useState<Version | null>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuId = useId();

  useEffect(() => {
    const v = safeGet(LAST_KEY);
    // eslint-disable-next-line react-hooks/set-state-in-effect -- read once after mount (storage is client-only)
    if (v === "gtm" || v === "analyst") setLast(v);
  }, []);

  // Focus the first item on open; close on outside pointer down.
  useEffect(() => {
    if (!open) return;
    rootRef.current?.querySelector<HTMLElement>("[role=menuitem]")?.focus();
    const onDown = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("pointerdown", onDown);
    return () => document.removeEventListener("pointerdown", onDown);
  }, [open]);

  const close = (focusButton = true) => {
    setOpen(false);
    if (focusButton) buttonRef.current?.focus();
  };

  const onMenuKey = (e: React.KeyboardEvent) => {
    const items = [...(rootRef.current?.querySelectorAll<HTMLElement>("[role=menuitem]") ?? [])];
    const i = items.indexOf(document.activeElement as HTMLElement);
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();
      const next = e.key === "ArrowDown" ? (i + 1) % items.length : (i - 1 + items.length) % items.length;
      items[next]?.focus();
    } else if (e.key === "Home" || e.key === "End") {
      e.preventDefault();
      items[e.key === "Home" ? 0 : items.length - 1]?.focus();
    } else if (e.key === "Escape") {
      e.preventDefault();
      e.stopPropagation();
      close();
    } else if (e.key === "Tab") {
      close(false);
    }
  };

  const resumes = [...site.resumes].sort((a, b) => (a.id === last ? -1 : b.id === last ? 1 : 0));

  return (
    <div ref={rootRef} className={cn("relative", trigger === "button" && "w-full sm:w-auto")}>
      <button
        ref={buttonRef}
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={open ? menuId : undefined}
        aria-label={trigger === "icon" ? "Download resume" : undefined}
        title={trigger === "icon" ? "Download resume" : undefined}
        onClick={() => setOpen((o) => !o)}
        onKeyDown={(e) => {
          if (e.key === "ArrowDown" && !open) {
            e.preventDefault();
            setOpen(true);
          }
        }}
        className={cn(
          trigger === "button"
            ? buttonVariants({ variant: "primary" })
            : "inline-flex size-9 items-center justify-center rounded-button text-muted transition-colors duration-150 hover:bg-surface-2 hover:text-fg",
          className,
        )}
      >
        {trigger === "button" ? (
          <>
            {site.hero.primaryCta}
            <ChevronDown
              aria-hidden
              strokeWidth={1.5}
              className={cn("transition-transform duration-150", open && "rotate-180")}
            />
          </>
        ) : (
          <FileText size={18} strokeWidth={1.5} aria-hidden />
        )}
      </button>

      {open && (
        <div
          id={menuId}
          role="menu"
          aria-label="Choose a resume version"
          onKeyDown={onMenuKey}
          className={cn(
            "toast-in absolute z-50 w-[min(18rem,calc(100vw-2.5rem))] rounded-card border border-line bg-surface p-1.5 shadow-card",
            side === "bottom" ? "top-full mt-2" : "bottom-full mb-2",
            align === "start" ? "left-0" : "right-0",
          )}
        >
          <p className="px-3 pt-2 pb-1 eyebrow text-subtle" aria-hidden>
            Choose a version
          </p>
          {resumes.map((r) => (
            <a
              key={r.id}
              role="menuitem"
              tabIndex={-1}
              href={r.file}
              target="_blank"
              rel="noopener"
              onClick={() => {
                safeSet(LAST_KEY, r.id);
                setLast(r.id);
                track("resume_download", { version: r.id, location });
                close(false);
              }}
              className="flex min-h-11 items-center gap-3 rounded-button px-3 py-2 text-sm text-fg outline-none hover:bg-surface-2 focus-visible:bg-surface-2 focus-visible:outline-none"
            >
              <Download size={16} strokeWidth={1.5} className="shrink-0 text-accent" aria-hidden />
              <span className="flex-1">
                {r.shortLabel}
                <span className="block text-[13px] text-muted">
                  {r.bestFor.replace(/^Best for /, "For ")}
                </span>
              </span>
              {r.id === last && <span className="eyebrow text-subtle">Last</span>}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
