import { leadership } from "@/content/leadership";
import { Reveal } from "@/components/layout/reveal";

/** Two compact leadership cards. */
export function Leadership() {
  return (
    <ul className="grid gap-4 sm:grid-cols-2">
      {leadership.map((l, i) => (
        <Reveal
          as="li"
          key={l.org}
          stagger={i}
          className="rounded-card border border-line bg-surface p-6 shadow-card"
        >
          <p className="eyebrow text-subtle">{l.tenure}</p>
          <h3 className="mt-3 text-h3 text-fg">
            {l.title}, {l.org}
          </h3>
          {l.path && <p className="mt-1 text-meta text-subtle">{l.path}</p>}
          <p className="mt-3 text-[15px] leading-relaxed text-muted">{l.description}</p>
        </Reveal>
      ))}
    </ul>
  );
}
