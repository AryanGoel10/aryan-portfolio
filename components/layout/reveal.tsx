"use client";

import { useEffect, useRef, type ComponentPropsWithoutRef, type ElementType } from "react";
import { cn } from "@/lib/utils";

/**
 * Fade + 12px rise once when 20% in view. Children with `--stagger` (set via `stagger` prop
 * on nested Reveal) follow 60ms apart. Content stays visible without JS (see globals.css).
 */
export function Reveal<T extends ElementType = "div">({
  as,
  stagger = 0,
  className,
  style,
  ...props
}: { as?: T; stagger?: number } & ComponentPropsWithoutRef<T>) {
  const ref = useRef<HTMLElement>(null);
  const Tag = (as ?? "div") as ElementType;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          io.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={cn("reveal", className)}
      style={{ ...style, "--stagger": stagger } as React.CSSProperties}
      {...props}
    />
  );
}
