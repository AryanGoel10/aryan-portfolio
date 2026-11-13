import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/content/site";
import { getAllCases } from "@/lib/mdx";
import { PlaceholderPage } from "@/components/layout/placeholder-page";

export const metadata: Metadata = { title: site.pages.work.title, description: site.pages.work.description };

export default function WorkPage() {
  return (
    <PlaceholderPage title={site.pages.work.title} phase="Phase 3">
      <p className="text-muted">{site.pages.work.intro}</p>
      <ul className="mt-6 list-disc space-y-1 pl-5">
        {getAllCases().map((c) => (
          <li key={c.slug}>
            <Link href={`/work/${c.slug}`} className="hover:text-accent">
              {c.title}
            </Link>
          </li>
        ))}
      </ul>
    </PlaceholderPage>
  );
}
