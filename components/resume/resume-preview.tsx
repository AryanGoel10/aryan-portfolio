"use client";

import { useState } from "react";
import { Tabs } from "radix-ui";
import type { Resume } from "@/content/schema";
import { track } from "@/lib/analytics";
import { cn } from "@/lib/utils";

/** Tabbed PDF preview (hidden on mobile). Falls back to "Preview unavailable" + download link. */
export function ResumePreview({ resumes }: { resumes: Resume[] }) {
  const [tab, setTab] = useState<string>(resumes[0].id);
  return (
    <Tabs.Root value={tab} onValueChange={setTab} className="hidden sm:block">
      <Tabs.List
        aria-label="Resume version"
        className="mb-4 inline-flex gap-1 rounded-button border border-line p-1"
      >
        {resumes.map((r) => (
          <Tabs.Trigger
            key={r.id}
            value={r.id}
            className={cn(
              "rounded-[6px] px-3 py-1.5 text-sm font-medium transition-colors duration-150",
              tab === r.id ? "bg-surface-2 text-fg" : "text-muted hover:text-fg",
            )}
          >
            {r.shortLabel}
          </Tabs.Trigger>
        ))}
      </Tabs.List>
      {resumes.map((r) => (
        <Tabs.Content key={r.id} value={r.id} className="outline-none">
          <object
            data={`${r.file}#view=FitH`}
            type="application/pdf"
            aria-label={`${r.label} preview`}
            className="h-[min(1100px,85vh)] w-full rounded-card border border-line bg-surface"
          >
            <div className="flex h-60 flex-col items-center justify-center gap-3 rounded-card border border-line bg-surface p-6 text-center">
              <p className="text-muted">Preview unavailable in this browser.</p>
              <a
                href={r.file}
                target="_blank"
                rel="noopener"
                className="link-underline text-sm font-medium"
                onClick={() => track("resume_download", { version: r.id, location: "resume-page" })}
              >
                Open the {r.shortLabel} (PDF)
              </a>
            </div>
          </object>
        </Tabs.Content>
      ))}
    </Tabs.Root>
  );
}
