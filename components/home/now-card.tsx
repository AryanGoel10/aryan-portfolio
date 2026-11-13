import { site } from "@/content/site";
import { formatDate } from "@/lib/utils";

/** "Now" card with last-updated date from site.ts. */
export function NowCard() {
  return (
    <div className="rounded-card border border-line bg-surface p-6 shadow-card sm:p-8">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h2 id="now-title" className="eyebrow text-accent">
          {site.now.eyebrow}
        </h2>
        <p className="text-meta text-subtle">
          Last updated <time dateTime={site.now.updated}>{formatDate(site.now.updated)}</time>
        </p>
      </div>
      <p className="mt-4 max-w-[68ch] text-[17px] leading-relaxed text-fg">{site.now.text}</p>
    </div>
  );
}
