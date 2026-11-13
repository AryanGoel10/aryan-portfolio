import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getAllCases, getFeaturedCases } from "@/lib/mdx";
import { CaseCard } from "@/components/work/case-card";
import { Reveal } from "@/components/layout/reveal";

/** The three featured case studies as large cards, then a link to all of them. */
export function FeaturedWork() {
  const featured = getFeaturedCases().slice(0, 3);
  const total = getAllCases().length;
  return (
    <>
      <ul className="grid gap-4 sm:grid-cols-2">
        {featured.map((study, i) => (
          <Reveal as="li" key={study.slug} stagger={i} className={i === 0 ? "sm:col-span-2" : undefined}>
            <CaseCard study={study} size="large" />
          </Reveal>
        ))}
      </ul>
      <Link href="/work" className="mt-6 inline-flex items-center gap-1.5 link-underline text-sm font-medium">
        View all {total} case studies
        <ArrowRight size={16} strokeWidth={1.5} aria-hidden />
      </Link>
    </>
  );
}
