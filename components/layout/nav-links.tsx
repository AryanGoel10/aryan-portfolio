"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/content/site";
import { HOME_SECTIONS } from "@/components/home/sections";
import { NavIcon } from "./nav-icons";
import { cn } from "@/lib/utils";

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
}

/** Watches Home sections and returns the id currently in view. */
function useActiveSection(enabled: boolean) {
  const [active, setActive] = useState<string | null>(null);
  useEffect(() => {
    if (!enabled) return;
    const els = HOME_SECTIONS.map((s) => document.getElementById(s.id)).filter(
      (el): el is HTMLElement => !!el,
    );
    const visible = new Map<string, number>();
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) visible.set(e.target.id, e.isIntersecting ? e.intersectionRatio : 0);
        const top = HOME_SECTIONS.find((s) => (visible.get(s.id) ?? 0) > 0);
        setActive(top ? top.id : null);
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: [0, 0.01] },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [enabled]);
  return enabled ? active : null;
}

/** Primary navigation. Active route gets a surface pill and amber icon; Home also scroll-spies. */
export function NavLinks({
  onNavigate,
  showSections = false,
}: {
  onNavigate?: () => void;
  showSections?: boolean;
}) {
  const pathname = usePathname();
  const onHome = pathname === "/";
  const activeSection = useActiveSection(showSections && onHome);

  return (
    <ul className="flex flex-col gap-0.5">
      {site.nav.map((item) => {
        const active = isActive(pathname, item.href);
        return (
          <li key={item.href}>
            <Link
              href={item.href}
              onClick={onNavigate}
              aria-current={active ? "page" : undefined}
              className={cn(
                "group flex min-h-11 items-center gap-3 rounded-button px-3 text-sm font-medium transition-colors duration-150 lg:min-h-9",
                active ? "bg-surface-2 text-fg" : "text-muted hover:bg-surface-2 hover:text-fg",
              )}
            >
              <NavIcon
                name={item.icon}
                className={cn(active ? "text-accent" : "text-subtle group-hover:text-fg")}
              />
              {item.label}
            </Link>
            {item.href === "/" && showSections && onHome && (
              <ul className="mt-0.5 mb-1 ml-[21px] border-l border-line" aria-label="On this page">
                {HOME_SECTIONS.map((s) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      aria-current={activeSection === s.id ? "location" : undefined}
                      className={cn(
                        "-ml-px block border-l py-1 pl-4 text-[13px] transition-colors duration-150",
                        activeSection === s.id
                          ? "border-accent text-fg"
                          : "border-transparent text-subtle hover:text-fg",
                      )}
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        );
      })}
    </ul>
  );
}
