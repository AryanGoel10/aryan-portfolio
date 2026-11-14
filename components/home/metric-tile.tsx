"use client";

import { useEffect, useId, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { CompanyLogo } from "@/components/ui/company-logo";

export type MetricTileProps = {
  /** Final value as text, e.g. "52K+" — always in the HTML for SEO and no-JS. */
  display: string;
  label: string;
  /** Optional eyebrow above the number, e.g. the company it came from. */
  company?: string;
  source?: string;
  up?: boolean;
  /** When set, the number counts up from 0 to `countTo` once on first view. */
  countTo?: number;
  prefix?: string;
  suffix?: string;
  /** Smaller number for dense strips (case-study headers). */
  compact?: boolean;
  className?: string;
};

const ease = (t: number) => 1 - Math.pow(2, -10 * t); // close to cubic-bezier(0.22, 1, 0.36, 1)

/**
 * Metric tile: mono number, green up arrow, label, and a source note on hover / focus / tap.
 * The tooltip is a lightweight CSS one (no positioning library) linked via aria-describedby;
 * Esc dismisses it.
 */
export function MetricTile({
  display,
  label,
  company,
  source,
  up,
  countTo,
  prefix = "",
  suffix = "",
  compact = false,
  className,
}: MetricTileProps) {
  const numRef = useRef<HTMLSpanElement>(null);
  const [tapped, setTapped] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const tipId = useId();

  useEffect(() => {
    const el = numRef.current;
    if (!el || countTo === undefined) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const duration = 600 + Math.min(300, countTo / 10); // 600–900ms
        const start = performance.now();
        const step = (now: number) => {
          const t = Math.min(1, (now - start) / duration);
          el.textContent = `${prefix}${Math.round(countTo * ease(t)).toLocaleString("en-US")}${suffix}`;
          if (t < 1) raf = requestAnimationFrame(step);
          else el.textContent = display;
        };
        raf = requestAnimationFrame(step);
      },
      { threshold: 0.2 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [countTo, display, prefix, suffix]);

  const body = (
    <>
      {company && (
        <span className="mb-3 flex items-center gap-2 eyebrow text-subtle">
          <CompanyLogo company={company} size={20} className="rounded-[5px]" />
          {company}
        </span>
      )}
      <span
        className={cn(
          "block",
          display.length > 7 ? "max-sm:[&>[aria-hidden]]:text-[24px]" : "whitespace-nowrap",
        )}
      >
        <span className="sr-only">
          {display}
          {up ? " (up)" : ""}
        </span>
        <span
          ref={numRef}
          aria-hidden
          className={cn("text-metric text-fg", compact && "text-[26px] sm:text-[30px]")}
        >
          {display}
        </span>
      </span>
      <span className="mt-3 flex gap-1 text-meta font-normal text-muted">
        {up && (
          <ArrowUpRight size={16} strokeWidth={1.75} className="mt-0.5 shrink-0 text-positive" aria-hidden />
        )}
        <span>{label}</span>
      </span>
    </>
  );

  const tileClass = cn(
    "flex h-full w-full flex-col items-start rounded-card border border-line bg-surface-2 p-4 text-left sm:p-5",
    className,
  );

  if (!source) return <div className={tileClass}>{body}</div>;

  return (
    <div
      className="group relative h-full"
      onMouseLeave={() => {
        setDismissed(false);
        setTapped(false);
      }}
    >
      <button
        type="button"
        aria-describedby={tipId}
        className={cn(tileClass, "cursor-help")}
        onClick={() => {
          setDismissed(false);
          setTapped((t) => !t);
        }}
        onBlur={() => {
          setTapped(false);
          setDismissed(false);
        }}
        onKeyDown={(e) => {
          if (e.key === "Escape") {
            setTapped(false);
            setDismissed(true);
          }
        }}
      >
        {body}
      </button>
      <span
        id={tipId}
        role="tooltip"
        data-open={tapped || undefined}
        data-dismissed={dismissed || undefined}
        className={cn(
          "pointer-events-none invisible absolute inset-x-0 top-full z-20 mt-2 rounded-button border border-line bg-surface px-3 py-1.5 text-[13px] leading-snug text-muted opacity-0 shadow-card transition-opacity duration-150",
          "group-hover:opacity-100 group-has-[:focus-visible]:opacity-100 data-[dismissed]:!opacity-0 data-[open]:opacity-100",
        )}
      >
        <span className="mr-1.5 eyebrow text-subtle">Source</span>
        {source}
      </span>
    </div>
  );
}
