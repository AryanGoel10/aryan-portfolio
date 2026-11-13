"use client";

import { Search } from "lucide-react";
import { openPalette } from "@/lib/events";
import { Kbd } from "@/components/ui/primitives";

/** "Search ⌘K" button in the sidebar. */
export function PaletteHint() {
  return (
    <button
      type="button"
      onClick={openPalette}
      className="flex h-9 w-full items-center gap-3 rounded-button border border-line px-3 text-meta text-muted transition-colors duration-150 hover:bg-surface-2 hover:text-fg"
    >
      <Search size={16} strokeWidth={1.5} aria-hidden />
      <span className="flex-1 text-left">Search</span>
      <span className="flex gap-1" aria-hidden>
        <Kbd>⌘</Kbd>
        <Kbd>K</Kbd>
      </span>
      <span className="sr-only">(Command K or Control K)</span>
    </button>
  );
}
