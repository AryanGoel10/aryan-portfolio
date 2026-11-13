"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { site } from "@/content/site";
import portrait from "@/public/aryan-portrait.png";

const loadSheet = () => import("./mobile-menu-sheet");
const MobileMenuSheet = dynamic(loadSheet, { ssr: false });

/** Top bar (< 1024px). The bottom-sheet menu is loaded on first open to keep the initial bundle small. */
export function MobileNav() {
  const [open, setOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);

  return (
    <header className="sticky top-0 z-40 flex h-14 items-center gap-3 border-b border-line bg-bg/85 px-5 backdrop-blur-md lg:hidden">
      <Link href="/" className="flex min-h-11 items-center gap-3" aria-label={`${site.name}, home`}>
        <Image
          src={portrait}
          alt=""
          width={32}
          height={32}
          sizes="32px"
          className="size-8 rounded-full bg-surface-2 object-cover"
        />
        <span className="text-sm font-semibold text-fg">{site.name}</span>
      </Link>

      <button
        type="button"
        // Start downloading the sheet as soon as a finger/pointer touches the button.
        onPointerDown={() => void loadSheet()}
        onFocus={() => void loadSheet()}
        onClick={() => {
          setLoaded(true);
          setOpen(true);
        }}
        aria-haspopup="dialog"
        aria-expanded={open}
        className="ml-auto inline-flex size-11 items-center justify-center rounded-button text-fg hover:bg-surface-2"
        aria-label="Open menu"
      >
        <Menu size={20} strokeWidth={1.5} aria-hidden />
      </button>

      {loaded && <MobileMenuSheet open={open} onOpenChange={setOpen} />}
    </header>
  );
}
