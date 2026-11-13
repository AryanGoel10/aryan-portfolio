import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

/** Teach tailwind-merge that our custom type-scale utilities are font sizes, not colours. */
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [{ text: ["display", "h2", "h3", "meta", "metric"] }],
    },
  },
});

/** Merge Tailwind class names, letting later classes win. */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Format an ISO date ("2026-11-13") as "13 Nov 2026". */
export function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
}

/** Render a metric as text, e.g. { prefix: "+", value: 44, suffix: "%" } → "+44%". */
export function formatMetric(m: { prefix?: string; value: number; suffix?: string }) {
  return `${m.prefix ?? ""}${m.value.toLocaleString("en-US")}${m.suffix ?? ""}`;
}
