import { site } from "@/content/site";
import { formatMetric } from "@/lib/utils";
import { MetricTile } from "./metric-tile";

/** Four count-up metric tiles with source notes. */
export function ImpactStrip() {
  return (
    <>
      <ul className="grid grid-cols-2 gap-3 sm:gap-4 xl:grid-cols-4">
        {site.metrics.map((m) => (
          <li key={m.label}>
            <MetricTile
              display={formatMetric(m)}
              countTo={m.value}
              prefix={m.prefix}
              suffix={m.suffix}
              label={m.label}
              company={m.company}
              source={m.source}
              up={m.trend !== "none"}
            />
          </li>
        ))}
      </ul>
    </>
  );
}
