import { experience } from "@/content/experience";
import { CompanyLogo } from "@/components/ui/company-logo";

/** Roles timeline, newest first. Current roles carry a "Current" pill. */
export function Timeline() {
  return (
    <ol className="border-t border-line">
      {experience.map((e) => (
        <li
          key={`${e.org}-${e.dates}`}
          className="grid gap-1 border-b border-line py-5 sm:grid-cols-[150px_1fr] sm:gap-6"
        >
          <p className="font-mono text-[13px] leading-6 text-subtle tabular-nums">{e.dates}</p>
          <div className="flex gap-3">
            <CompanyLogo company={e.org} size={28} className="mt-0.5 hidden sm:inline-flex" />
            <div className="min-w-0">
              <h3 className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[16px] leading-6 font-semibold text-fg">
                <span>
                  {e.role}
                  <span className="font-normal text-muted">, {e.org}</span>
                </span>
                {e.current && (
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-soft px-2 py-0.5 text-[12px] font-medium text-fg">
                    <span className="size-1.5 rounded-full bg-positive" aria-hidden />
                    Current
                  </span>
                )}
              </h3>
              <p className="mt-1 text-[15px] text-muted">{e.line}</p>
            </div>
          </div>
        </li>
      ))}
    </ol>
  );
}
