"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

/** Appears after 1.5 screens of scroll. Kbd-styled, bottom-right. */
export function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 1.5);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      onClick={() => {
        window.scrollTo({ top: 0 });
        document.getElementById("content")?.focus({ preventScroll: true });
      }}
      aria-label="Back to top"
      tabIndex={show ? 0 : -1}
      aria-hidden={!show}
      className={`fixed right-5 bottom-5 z-30 inline-flex size-11 items-center justify-center rounded-button border border-line bg-surface text-muted shadow-card transition-opacity duration-150 hover:text-fg lg:size-10 ${
        show ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <ArrowUp size={18} strokeWidth={1.5} aria-hidden />
    </button>
  );
}
