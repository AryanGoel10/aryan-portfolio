import { companyLogos } from "@/content/logos";
import { cn } from "@/lib/utils";

/**
 * Small square company mark on a neutral tile. Decorative (the company name is always
 * written next to it), so it's hidden from screen readers. Renders nothing for unknown companies.
 */
export function CompanyLogo({
  company,
  size = 28,
  className,
}: {
  company: string;
  size?: number;
  className?: string;
}) {
  const logo = companyLogos[company];
  if (!logo) return null;
  const inner = Math.round(size * 0.68);
  return (
    <span
      aria-hidden
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-[8px] border border-line bg-surface-2",
        className,
      )}
      style={{ width: size, height: size }}
    >
      {/* Plain <img>: tiny static files (SVG/PNG) that need no optimisation. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={logo.src}
        alt=""
        width={logo.width}
        height={logo.height}
        loading="lazy"
        decoding="async"
        style={{ maxWidth: inner, maxHeight: inner, width: "auto", height: "auto" }}
      />
    </span>
  );
}
