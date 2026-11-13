import "server-only";

import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { caseFrontmatterSchema, type CaseFrontmatter } from "@/content/schema";

const WORK_DIR = path.join(process.cwd(), "content", "work");

export type CaseStudy = CaseFrontmatter & {
  slug: string;
  /** Raw MDX body (without frontmatter). */
  body: string;
};

function readCase(file: string): CaseStudy {
  const slug = file.replace(/\.mdx$/, "");
  const raw = fs.readFileSync(path.join(WORK_DIR, file), "utf8");
  const { data, content } = matter(raw);
  const parsed = caseFrontmatterSchema.safeParse(data);
  if (!parsed.success) {
    throw new Error(`Invalid frontmatter in content/work/${file}:\n${parsed.error.message}`);
  }
  return { ...parsed.data, slug, body: content };
}

/** All case studies, sorted by `order`. Read at build time only. */
export function getAllCases(): CaseStudy[] {
  return fs
    .readdirSync(WORK_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map(readCase)
    .sort((a, b) => a.order - b.order);
}

export function getCase(slug: string): CaseStudy | undefined {
  return getAllCases().find((c) => c.slug === slug);
}

export function getFeaturedCases(): CaseStudy[] {
  return getAllCases().filter((c) => c.featured);
}
