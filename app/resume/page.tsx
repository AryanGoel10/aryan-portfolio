import type { Metadata } from "next";
import { Download } from "lucide-react";
import { site } from "@/content/site";
import { formatDate } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { TrackedLink } from "@/components/layout/tracked-link";
import { ResumePreview } from "@/components/resume/resume-preview";

export const metadata: Metadata = {
  title: site.pages.resume.title,
  description: site.pages.resume.description,
  alternates: { canonical: "/resume" },
  openGraph: {
    url: "/resume",
    title: `${site.pages.resume.title} · ${site.name}`,
    description: site.pages.resume.description,
  },
};

export default function ResumePage() {
  return (
    <div className="pt-10 pb-16 sm:pt-14 lg:pt-20">
      <h1 className="text-display text-fg">{site.pages.resume.title}</h1>
      <p className="mt-4 max-w-[60ch] text-lg text-muted">
        Two versions for two kinds of role. Both are one page and open as PDFs.
      </p>

      <ul className="mt-10 grid gap-4 sm:grid-cols-2">
        {site.resumes.map((r) => (
          <li key={r.id} className="flex flex-col rounded-card border border-line bg-surface p-6 shadow-card">
            <h2 className="text-h3 text-fg">{r.label}</h2>
            <p className="mt-2 flex-1 text-[15px] text-muted">{r.bestFor}</p>
            <TrackedLink
              href={r.file}
              target="_blank"
              rel="noopener"
              className={buttonVariants({
                variant: r.id === "gtm" ? "primary" : "secondary",
                className: "mt-6 w-full sm:w-fit",
              })}
              tracking={{ event: "resume_download", version: r.id, location: "resume-page" }}
            >
              Download PDF <Download aria-hidden strokeWidth={1.5} />
            </TrackedLink>
            <p className="mt-3 font-mono text-[12px] text-subtle">
              Short link: {site.url.replace("https://", "")}
              {r.shortPath}
            </p>
          </li>
        ))}
      </ul>

      <p className="mt-6 text-meta text-subtle">
        Last updated <time dateTime={site.resumeLastUpdated}>{formatDate(site.resumeLastUpdated)}</time>
      </p>

      <section aria-label="Resume preview" className="mt-12">
        <ResumePreview resumes={site.resumes} />
      </section>
    </div>
  );
}
