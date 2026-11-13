import { ArrowDown, ArrowRight } from "lucide-react";

/** Pipeline diagram drawn from a case study's `workflow` frontmatter. Horizontal on wide screens. */
export function Workflow({ steps }: { steps: { step: string; tools: string[] }[] }) {
  return (
    <figure className="not-prose my-8">
      <ol className="flex flex-col gap-2 md:flex-row md:items-stretch md:gap-0" aria-label="Workflow">
        {steps.map((s, i) => (
          <li key={s.step} className="flex flex-col items-stretch md:flex-1 md:flex-row">
            <div className="flex-1 rounded-card border border-line bg-surface-2 p-4">
              <p className="font-mono text-[12px] text-accent">{String(i + 1).padStart(2, "0")}</p>
              <p className="mt-1 text-[14px] leading-snug font-semibold text-fg">{s.step}</p>
              <p className="mt-2 flex flex-wrap gap-1">
                {s.tools.map((t) => (
                  <span
                    key={t}
                    className="rounded-[4px] border border-line px-1.5 py-0.5 font-mono text-[11px] text-muted"
                  >
                    {t}
                  </span>
                ))}
              </p>
            </div>
            {i < steps.length - 1 && (
              <span
                className="flex items-center justify-center py-0.5 text-subtle md:px-1 md:py-0"
                aria-hidden
              >
                <ArrowDown size={16} strokeWidth={1.5} className="md:hidden" />
                <ArrowRight size={16} strokeWidth={1.5} className="hidden md:block" />
              </span>
            )}
          </li>
        ))}
      </ol>
      <figcaption className="mt-3 text-meta text-subtle">How the engine works, step by step.</figcaption>
    </figure>
  );
}
