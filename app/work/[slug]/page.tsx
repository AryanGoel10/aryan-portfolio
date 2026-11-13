import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { site } from "@/content/site";
import { getAllCases, getCase, getNeighbours, readingTime } from "@/lib/mdx";
import { TagLine } from "@/components/ui/primitives";
import { MetricTile } from "@/components/home/metric-tile";
import { ContactCTA } from "@/components/home/contact-cta";
import { mdxComponents } from "@/components/work/mdx-components";
import { Workflow } from "@/components/work/workflow";
import { CaseViewTracker } from "@/components/work/case-view-tracker";
import { JsonLd } from "@/components/json-ld";

export function generateStaticParams() {
  return getAllCases().map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps<"/work/[slug]">): Promise<Metadata> {
  const c = getCase((await params).slug);
  if (!c) return {};
  const url = `/work/${c.slug}`;
  return {
    title: c.title,
    description: c.description,
    alternates: { canonical: url },
    openGraph: { type: "article", url, title: c.title, description: c.description },
    twitter: { card: "summary_large_image", title: c.title, description: c.description },
  };
}

export default function CaseStudyPage({ params }: PageProps<"/work/[slug]">) {
  return (
    <Suspense fallback={<CaseSkeleton />}>
      <CaseFromParams params={params} />
    </Suspense>
  );
}

async function CaseFromParams({ params }: Pick<PageProps<"/work/[slug]">, "params">) {
  const { slug } = await params;
  if (!getCase(slug)) notFound();
  return <CaseStudy slug={slug} />;
}

/** Cached per slug, so client navigations (prefetched links) are instant. */
async function CaseStudy({ slug }: { slug: string }) {
  "use cache";
  const c = getCase(slug)!;
  const { prev, next } = getNeighbours(slug);
  const minutes = readingTime(c.body);

  const { content } = await compileMDX({
    source: c.body,
    // Our own trusted content: allow simple expressions like items={[...]};
    // dangerous JS (eval, require, etc.) stays blocked.
    options: { blockJS: false, blockDangerousJS: true },
    components: {
      ...mdxComponents,
      Workflow: () => (c.workflow ? <Workflow steps={c.workflow} /> : null),
    },
  });

  return (
    <article className="pt-8 pb-16 sm:pt-12 lg:pt-16">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: c.title,
          description: c.description,
          url: `${site.url}/work/${c.slug}`,
          image: `${site.url}/work/${c.slug}/opengraph-image`,
          author: { "@type": "Person", name: site.name, url: site.url },
          publisher: { "@type": "Person", name: site.name },
          about: c.company,
          keywords: c.tags.join(", "),
        }}
      />
      <CaseViewTracker slug={c.slug} />

      <nav aria-label="Breadcrumb" className="text-meta text-subtle">
        <ol className="flex flex-wrap items-center gap-1.5">
          <li>
            <Link href="/work" className="hover:text-fg">
              Work
            </Link>
          </li>
          <li aria-hidden>/</li>
          <li aria-current="page" className="text-muted">
            {c.title}
          </li>
        </ol>
      </nav>

      <header className="mt-8">
        <p className="eyebrow text-subtle">
          {c.company} · {c.dates} · {c.role}
        </p>
        <h1 className="mt-4 text-[32px] leading-[1.1] font-semibold tracking-[-0.03em] text-fg sm:text-[44px]">
          {c.title}
        </h1>
        <p className="mt-4 max-w-[60ch] text-lg text-muted">{c.outcome}</p>
        <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2">
          <TagLine tags={c.tags} />
          <span className="text-meta text-subtle">{minutes} min read</span>
        </div>

        <>
          <ul
            className={`mt-8 grid grid-cols-2 gap-3 sm:gap-4 ${c.metrics.length >= 4 ? "xl:grid-cols-4" : c.metrics.length === 3 ? "sm:grid-cols-3" : ""}`}
          >
            {c.metrics.map((m) => (
              <li key={m.label}>
                <MetricTile display={m.value} label={m.label} source={m.source} />
              </li>
            ))}
          </ul>
        </>
      </header>

      <div className="mt-12 max-w-[68ch] border-t border-line pt-10">{content}</div>

      <nav
        aria-label="More case studies"
        className="mt-16 grid gap-4 border-t border-line pt-10 sm:grid-cols-2"
      >
        <Link
          href={`/work/${prev.slug}`}
          prefetch
          className="card-hover group rounded-card border border-line bg-surface p-5 shadow-card"
        >
          <span className="flex items-center gap-1.5 eyebrow text-subtle">
            <ArrowLeft size={14} strokeWidth={1.5} aria-hidden /> Previous
          </span>
          <span className="mt-2 block text-h3 text-fg">{prev.title}</span>
        </Link>
        <Link
          href={`/work/${next.slug}`}
          prefetch
          className="card-hover group rounded-card border border-line bg-surface p-5 text-right shadow-card"
        >
          <span className="flex items-center justify-end gap-1.5 eyebrow text-subtle">
            Next <ArrowRight size={14} strokeWidth={1.5} aria-hidden className="card-arrow" />
          </span>
          <span className="mt-2 block text-h3 text-fg">{next.title}</span>
        </Link>
      </nav>

      <section aria-labelledby="case-contact" className="mt-16">
        <ContactCTA headingId="case-contact" />
      </section>
    </article>
  );
}

function CaseSkeleton() {
  return (
    <div className="animate-pulse pt-16 pb-16" aria-hidden>
      <div className="h-3 w-40 rounded bg-surface-2" />
      <div className="mt-6 h-10 w-3/4 rounded bg-surface-2" />
      <div className="mt-4 h-5 w-2/3 rounded bg-surface-2" />
      <div className="mt-8 grid grid-cols-2 gap-3 xl:grid-cols-4">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="h-28 rounded-card bg-surface-2" />
        ))}
      </div>
    </div>
  );
}
