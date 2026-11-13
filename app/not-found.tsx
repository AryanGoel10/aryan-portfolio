import Link from "next/link";
import { ArrowRight, House } from "lucide-react";
import { site } from "@/content/site";
import { buttonVariants } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="pt-16 pb-24 sm:pt-24">
      <p className="eyebrow text-subtle">404</p>
      <h1 className="mt-4 text-display text-fg">
        This page <span className="serif-accent text-accent">churned</span>.
      </h1>
      <p className="mt-5 text-lg text-muted">{site.pages.notFound.body}</p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link href="/" className={buttonVariants({ variant: "primary" })}>
          <House aria-hidden strokeWidth={1.5} /> Home
        </Link>
        <Link href="/work" className={buttonVariants({ variant: "secondary" })}>
          Work <ArrowRight aria-hidden strokeWidth={1.5} />
        </Link>
      </div>
    </div>
  );
}
