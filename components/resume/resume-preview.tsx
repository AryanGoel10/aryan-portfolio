"use client";

import { useState } from "react";
import Image from "next/image";
import { Tabs } from "radix-ui";
import { ArrowUpRight, Download } from "lucide-react";
import type { Resume } from "@/content/schema";
import { track } from "@/lib/analytics";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/**
 * Tabbed resume preview. Shows an image of each one-page PDF, which loads in every browser
 * and on phones (embedded PDF viewers don't). Clicking the page opens the real PDF.
 */
export function ResumePreview({ resumes }: { resumes: Resume[] }) {
  const [tab, setTab] = useState<string>(resumes[0].id);
  return (
    <Tabs.Root value={tab} onValueChange={setTab}>
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <Tabs.List
          aria-label="Resume version"
          className="inline-flex gap-1 rounded-button border border-line p-1"
        >
          {resumes.map((r) => (
            <Tabs.Trigger
              key={r.id}
              value={r.id}
              className={cn(
                "min-h-9 rounded-[6px] px-3 text-sm font-medium transition-colors duration-150",
                tab === r.id ? "bg-surface-2 text-fg" : "text-muted hover:text-fg",
              )}
            >
              {r.shortLabel}
            </Tabs.Trigger>
          ))}
        </Tabs.List>
      </div>
      {resumes.map((r) => (
        <Tabs.Content key={r.id} value={r.id} className="outline-none">
          <a
            href={r.file}
            target="_blank"
            rel="noopener"
            onClick={() => track("resume_download", { version: r.id, location: "resume-page" })}
            className="group relative block overflow-hidden rounded-card border border-line bg-white shadow-card"
          >
            <Image
              src={r.preview}
              alt={`Preview of Aryan Goel's ${r.label}, page 1`}
              width={1654}
              height={2339}
              sizes="(min-width: 1024px) 784px, 100vw"
              className="h-auto w-full"
            />
            <span className="absolute right-3 bottom-3 inline-flex items-center gap-1.5 rounded-full bg-black/75 px-3 py-1.5 text-[13px] font-medium text-white opacity-90 transition-opacity group-hover:opacity-100">
              Open PDF <ArrowUpRight size={14} strokeWidth={1.75} aria-hidden />
            </span>
          </a>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            <a
              href={r.file}
              target="_blank"
              rel="noopener"
              onClick={() => track("resume_download", { version: r.id, location: "resume-page" })}
              className={buttonVariants({ variant: "secondary" })}
            >
              Download {r.shortLabel} (PDF) <Download aria-hidden strokeWidth={1.5} />
            </a>
          </div>
        </Tabs.Content>
      ))}
    </Tabs.Root>
  );
}
