import { experience } from "@/content/experience";

/** Roles timeline, newest first. Date column on desktop, date above role on mobile. */
export function Timeline() {
  return (
    <ol className="border-t border-line">
      {experience.map((e) => (
        <li
          key={`${e.org}-${e.dates}`}
          className="grid gap-1 border-b border-line py-5 sm:grid-cols-[150px_1fr] sm:gap-6"
        >
          <p className="font-mono text-[13px] leading-6 text-subtle tabular-nums">{e.dates}</p>
          <div>
            <h3 className="text-[16px] leading-6 font-semibold text-fg">
              {e.role}
              <span className="font-normal text-muted">, {e.org}</span>
            </h3>
            <p className="mt-1 text-[15px] text-muted">{e.line}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
