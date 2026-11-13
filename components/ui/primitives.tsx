import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Mono uppercase tag line: GOOGLE ADS · SEO · PYTHON */
export function TagLine({ tags, className }: { tags: string[]; className?: string }) {
  return (
    <p className={cn("eyebrow text-subtle", className)}>
      {tags.map((t, i) => (
        <span key={t}>
          {i > 0 && <span aria-hidden> · </span>}
          {i > 0 && <span className="sr-only">, </span>}
          {t}
        </span>
      ))}
    </p>
  );
}

/** Individual tag chip (used for tools lists). */
export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-button bg-accent-soft px-2 py-1 eyebrow text-fg">
      {children}
    </span>
  );
}

/** Pill badge with a pulsing green dot: "Open to internships · Jan 2027". */
export function AvailabilityBadge({ label, className }: { label: string; className?: string }) {
  return (
    <p
      className={cn(
        "inline-flex items-center gap-2 rounded-full bg-accent-soft px-3 py-1 text-meta whitespace-nowrap text-fg",
        className,
      )}
    >
      <span className="pulse-dot size-1.5 shrink-0 rounded-full bg-positive" aria-hidden />
      {label}
    </p>
  );
}

/** Keyboard key chip. */
export function Kbd({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <kbd
      className={cn(
        "inline-flex h-5 min-w-5 items-center justify-center rounded-[4px] border border-line px-1 font-mono text-[11px] leading-none text-muted",
        className,
      )}
    >
      {children}
    </kbd>
  );
}

/** Amber-ruled callout, used for "Impact" inside case studies. */
export function Callout({ title, children }: { title?: string; children: ReactNode }) {
  return (
    <aside className="my-8 border-l-2 border-accent bg-surface-2 px-5 py-4 [&>*:last-child]:mb-0">
      {title && <p className="mb-2 eyebrow text-accent">{title}</p>}
      {children}
    </aside>
  );
}

/** Visible placeholder for content Aryan still needs to supply. Never invent instead. */
export function Todo({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p
      className={cn(
        "rounded-button border border-dashed border-accent/60 px-3 py-2 text-meta text-muted",
        className,
      )}
    >
      <span className="mr-2 eyebrow text-accent">TODO</span>
      {children}
    </p>
  );
}

/** Eyebrow + H2 section heading. */
export function SectionHeading({
  id,
  eyebrow,
  title,
  className,
}: {
  id?: string;
  eyebrow?: string;
  title: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mb-8", className)}>
      {eyebrow && <p className="mb-3 eyebrow text-subtle">{eyebrow}</p>}
      <h2 id={id} className="text-h2 text-fg">
        {title}
      </h2>
    </div>
  );
}
