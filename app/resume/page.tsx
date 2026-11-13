import type { Metadata } from "next";
import { site } from "@/content/site";
import { PlaceholderPage } from "@/components/layout/placeholder-page";

export const metadata: Metadata = {
  title: site.pages.resume.title,
  description: site.pages.resume.description,
};

export default function ResumePage() {
  return (
    <PlaceholderPage title={site.pages.resume.title} phase="Phase 4">
      <ul className="space-y-2">
        {site.resumes.map((r) => (
          <li key={r.id}>
            <a href={r.file} target="_blank" rel="noopener" className="text-accent hover:underline">
              {r.label} (PDF)
            </a>{" "}
            <span className="text-muted">— {r.bestFor}</span>
          </li>
        ))}
      </ul>
    </PlaceholderPage>
  );
}
