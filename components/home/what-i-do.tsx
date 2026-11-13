import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { site } from "@/content/site";
import { Reveal } from "@/components/layout/reveal";

/** Three doorways: what I do, the proof, and the case studies that show it. */
export function WhatIDo() {
  return (
    <ul className="grid gap-4 md:grid-cols-3">
      {site.whatIDo.map((w, i) => (
        <Reveal
          as="li"
          key={w.title}
          stagger={i}
          className="flex flex-col rounded-card border border-line bg-surface p-6 shadow-card"
        >
          <p className="font-mono text-[12px] text-accent">{String(i + 1).padStart(2, "0")}</p>
          <h3 className="mt-2 text-h3 text-fg">{w.title}</h3>
          <p className="mt-2 text-[15px] leading-relaxed text-muted">{w.body}</p>
          <p className="mt-4 border-t border-line pt-4 font-mono text-[12px] leading-relaxed text-fg">
            {w.proof}
          </p>
          <ul className="mt-4 space-y-1">
            {w.links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  prefetch
                  className="group inline-flex min-h-11 items-center gap-1.5 text-[14px] text-muted hover:text-accent sm:min-h-8"
                >
                  <ArrowRight
                    size={14}
                    strokeWidth={1.5}
                    className="text-subtle transition-transform duration-150 group-hover:translate-x-0.5 group-hover:text-accent"
                    aria-hidden
                  />
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>
      ))}
    </ul>
  );
}
