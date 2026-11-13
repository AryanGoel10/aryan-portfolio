import Link from "next/link";
import { site } from "@/content/site";

/** Temporary page body used until each route is built in its phase. */
export function PlaceholderPage({
  title,
  phase,
  children,
}: {
  title: string;
  phase: string;
  children?: React.ReactNode;
}) {
  return (
    <main id="content" className="mx-auto max-w-[880px] px-5 py-16 sm:px-12">
      <p className="font-mono text-xs tracking-[0.08em] text-subtle uppercase">
        Placeholder · built in {phase}
      </p>
      <h1 className="mt-3 text-4xl font-semibold tracking-[-0.03em]">{title}</h1>
      <nav aria-label="Pages" className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-sm">
        {site.nav.map((item) => (
          <Link key={item.href} href={item.href} className="text-accent underline-offset-4 hover:underline">
            {item.label}
          </Link>
        ))}
      </nav>
      <div className="mt-10">{children}</div>
    </main>
  );
}
