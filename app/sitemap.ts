import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { getAllCases } from "@/lib/mdx";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/work", "/about", "/resume", "/contact"].map((p) => ({
    url: `${site.url}${p}`,
    changeFrequency: "monthly" as const,
    priority: p === "" ? 1 : 0.8,
  }));
  const cases = getAllCases().map((c) => ({
    url: `${site.url}/work/${c.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));
  return [...pages, ...cases];
}
