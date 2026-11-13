"use client";

import { useState } from "react";
import type { CaseCategory } from "@/content/schema";
import { cn } from "@/lib/utils";

const FILTERS = ["All", "Growth", "Analytics", "Automation", "Strategy"] as const;
type Filter = (typeof FILTERS)[number];

/**
 * Filter chips + grid. Cards are rendered on the server and passed in, so filtering
 * just shows or hides them (everything stays in the HTML for SEO).
 */
export function WorkGrid({
  items,
}: {
  items: { slug: string; category: CaseCategory; card: React.ReactNode }[];
}) {
  const [filter, setFilter] = useState<Filter>("All");
  const visible = items.filter((i) => filter === "All" || i.category === filter);

  return (
    <>
      <div role="group" aria-label="Filter case studies by category" className="mb-8 flex flex-wrap gap-2">
        {FILTERS.map((f) => {
          const count = f === "All" ? items.length : items.filter((i) => i.category === f).length;
          return (
            <button
              key={f}
              type="button"
              aria-pressed={filter === f}
              onClick={() => setFilter(f)}
              className={cn(
                "inline-flex min-h-11 items-center gap-2 rounded-full border px-4 text-sm font-medium transition-colors duration-150 sm:min-h-9",
                filter === f
                  ? "border-transparent bg-fg text-bg"
                  : "border-line text-muted hover:bg-surface-2 hover:text-fg",
              )}
            >
              {f}
              <span className={cn("font-mono text-[12px]", filter === f ? "text-bg/70" : "text-subtle")}>
                {count}
              </span>
            </button>
          );
        })}
      </div>
      <p className="sr-only" aria-live="polite">
        Showing {visible.length} case {visible.length === 1 ? "study" : "studies"}
      </p>
      <ul className="grid gap-4 sm:grid-cols-2">
        {items.map((i) => (
          <li key={i.slug} hidden={!visible.includes(i)}>
            {i.card}
          </li>
        ))}
      </ul>
    </>
  );
}
