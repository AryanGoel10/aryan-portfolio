import type { ComponentPropsWithoutRef } from "react";
import Link from "next/link";
import { Callout, Tag } from "@/components/ui/primitives";

/** Styles for elements inside case-study MDX. */
export const mdxComponents = {
  h2: (props: ComponentPropsWithoutRef<"h2">) => (
    <h2 className="mt-12 mb-4 text-h2 text-fg first:mt-0" {...props} />
  ),
  h3: (props: ComponentPropsWithoutRef<"h3">) => <h3 className="mt-8 mb-3 text-h3 text-fg" {...props} />,
  p: (props: ComponentPropsWithoutRef<"p">) => <p className="mb-4 text-muted" {...props} />,
  strong: (props: ComponentPropsWithoutRef<"strong">) => (
    <strong className="font-semibold text-fg" {...props} />
  ),
  ul: (props: ComponentPropsWithoutRef<"ul">) => (
    <ul className="mb-4 list-disc space-y-2 pl-5 text-muted marker:text-subtle" {...props} />
  ),
  ol: (props: ComponentPropsWithoutRef<"ol">) => (
    <ol
      className="mb-4 list-decimal space-y-3 pl-5 text-muted marker:font-mono marker:text-[13px] marker:text-accent"
      {...props}
    />
  ),
  li: (props: ComponentPropsWithoutRef<"li">) => <li className="pl-1" {...props} />,
  a: ({ href = "", ...props }: ComponentPropsWithoutRef<"a">) =>
    href.startsWith("/") ? (
      <Link href={href} className="link-underline" {...props} />
    ) : (
      <a href={href} target="_blank" rel="noopener" className="link-underline" {...props} />
    ),
  Callout,
  Tools: ({ items }: { items: string[] }) => (
    <ul className="mb-4 flex flex-wrap gap-2" aria-label="Tools">
      {items.map((t) => (
        <li key={t}>
          <Tag>{t}</Tag>
        </li>
      ))}
    </ul>
  ),
};
