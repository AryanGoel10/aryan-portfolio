"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { track } from "@/lib/analytics";
import { OPEN_PALETTE } from "@/lib/events";
import { followsSystem, toggleTheme } from "@/lib/theme";
import type { PaletteCase } from "./command-menu";

const CommandMenu = dynamic(() => import("./command-menu"), { ssr: false });

function isTyping(target: EventTarget | null) {
  const el = target as HTMLElement | null;
  return !!el && (el.isContentEditable || ["INPUT", "TEXTAREA", "SELECT"].includes(el.tagName));
}

/**
 * Global behaviour: ⌘K / Ctrl+K palette (lazy-loaded), single-key shortcuts
 * (R resume, C contact, T theme) and following system theme changes.
 */
export function GlobalClient({ cases }: { cases: PaletteCase[] }) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const openPalette = () => {
      setLoaded(true);
      setOpen(true);
      track("palette_open");
    };

    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        openPalette();
        return;
      }
      if (e.metaKey || e.ctrlKey || e.altKey || isTyping(e.target)) return;
      if (document.querySelector("[role=dialog], [role=menu]")) return;
      const key = e.key.toLowerCase();
      if (key === "r") router.push("/resume");
      else if (key === "c") router.push("/contact");
      else if (key === "t") toggleTheme();
    };

    const mq = window.matchMedia("(prefers-color-scheme: light)");
    const onScheme = () => {
      if (followsSystem()) document.documentElement.classList.toggle("light", mq.matches);
    };

    window.addEventListener(OPEN_PALETTE, openPalette);
    window.addEventListener("keydown", onKey);
    mq.addEventListener("change", onScheme);
    return () => {
      window.removeEventListener(OPEN_PALETTE, openPalette);
      window.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onScheme);
    };
  }, [router]);

  return loaded ? <CommandMenu open={open} onOpenChange={setOpen} cases={cases} /> : null;
}
