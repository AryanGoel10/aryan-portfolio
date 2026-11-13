/**
 * Zod schemas for everything in /content.
 *
 * Each content file calls `schema.parse(...)`, so a typo or missing field
 * fails the build with a clear message instead of shipping a broken page.
 * You should rarely need to edit this file — edit the content files instead.
 */
import { z } from "zod";

/** ISO date like "2026-11-13". */
const isoDate = z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Use YYYY-MM-DD");

/** Root-relative path ("/work") or absolute https URL. */
const href = z
  .string()
  .refine((v) => v.startsWith("/") || v.startsWith("https://") || v.startsWith("mailto:"), {
    message: "Use a path starting with / or a full https:// / mailto: URL",
  });

/* ------------------------------------------------------------------ */
/* site.ts                                                             */
/* ------------------------------------------------------------------ */

export const navIconSchema = z.enum(["home", "layers", "user", "file-text", "mail"]);

export const metricSchema = z.object({
  /** The number the count-up animates to. */
  value: z.number().nonnegative(),
  /** Text before the number, e.g. "+". */
  prefix: z.string().optional(),
  /** Text after the number, e.g. "K+" or "%". */
  suffix: z.string().optional(),
  label: z.string().min(1),
  /** Where the number comes from, shown above it, e.g. "Nextvant". */
  company: z.string().min(1),
  /** Shown on hover / focus / tap. Every number needs a source. */
  source: z.string().min(1),
  /** Green up arrow next to the label. Defaults to "up". */
  trend: z.enum(["up", "none"]).optional(),
});

export const resumeSchema = z.object({
  id: z.enum(["gtm", "analyst"]),
  label: z.string(),
  /** Short label used in menus, e.g. "GTM version". */
  shortLabel: z.string(),
  /** Path of the PDF inside /public. */
  file: z.string().startsWith("/resume/").endsWith(".pdf"),
  /** Stable short link that redirects to the PDF. */
  shortPath: z.string().startsWith("/resume/"),
  bestFor: z.string(),
});

export const siteSchema = z.object({
  name: z.string(),
  role: z.string(),
  positioning: z.string(),
  /** Canonical site URL, no trailing slash. */
  url: z.url(),
  location: z.string(),
  educationShort: z.string(),
  email: z.email(),
  availability: z.object({
    open: z.boolean(),
    /** Short badge text. */
    badge: z.string(),
    /** Long form used in the hero and meta description. */
    long: z.string(),
  }),
  links: z.object({
    linkedin: z.url(),
    github: z.url(),
    sourceRepo: z.url(),
    /** Booking link (Calendly, Cal.com…). Leave null to hide every "Book a call" button. */
    booking: z.url().nullable(),
    /** Button text for the booking link, e.g. "Book a 30-min call". */
    bookingLabel: z.string(),
  }),
  nav: z.array(z.object({ label: z.string(), href, icon: navIconSchema })),
  resumes: z.array(resumeSchema).length(2),
  resumeLastUpdated: isoDate,
  seo: z.object({
    homeTitle: z.string(),
    titleTemplate: z.string(),
    description: z.string().max(160, "Meta descriptions should stay under 160 characters"),
  }),
  hero: z.object({
    eyebrow: z.string(),
    /** The headline is split so one word can be set in serif italic. */
    headline: z.object({ before: z.string(), accent: z.string(), after: z.string() }),
    subline: z.string(),
    /** Short credibility line under the current roles. */
    previously: z.string(),
    primaryCta: z.string(),
    secondaryCta: z.object({ label: z.string(), href }),
  }),
  /** Current roles, shown in the hero in this order. */
  currently: z
    .array(
      z.object({
        company: z.string(),
        /** What the company is, in a few words. */
        about: z.string(),
        role: z.string(),
        since: z.string(),
        /** What you do there, one sentence. */
        line: z.string(),
        /** Case study that shows the work. */
        href,
      }),
    )
    .min(1)
    .max(3),
  metrics: z.array(metricSchema).min(3).max(4),
  /** "What I do" cards on Home. */
  whatIDo: z
    .array(
      z.object({
        title: z.string(),
        body: z.string(),
        proof: z.string(),
        links: z.array(z.object({ label: z.string(), href })).min(1),
      }),
    )
    .length(3),
  /** Section headings on Home. */
  home: z.object({
    whatIDo: z.object({ eyebrow: z.string(), title: z.string() }),
    work: z.object({ eyebrow: z.string(), title: z.string() }),
    experience: z.object({ eyebrow: z.string(), title: z.string() }),
    leadership: z.object({ eyebrow: z.string(), title: z.string() }),
  }),
  contactCta: z.object({
    heading: z.string(),
    subheading: z.string(),
    /** Secondary line for founders who want GTM help. */
    founderLine: z.string(),
  }),
  footer: z.object({
    smallPrint: z.string(),
  }),
  pages: z.object({
    work: z.object({ title: z.string(), intro: z.string(), description: z.string() }),
    about: z.object({ title: z.string(), description: z.string() }),
    resume: z.object({ title: z.string(), description: z.string() }),
    contact: z.object({ title: z.string(), intro: z.string(), description: z.string() }),
    notFound: z.object({ title: z.string(), body: z.string() }),
  }),
});

/* ------------------------------------------------------------------ */
/* experience.ts                                                       */
/* ------------------------------------------------------------------ */

export const experienceSchema = z.array(
  z.object({
    dates: z.string(),
    role: z.string(),
    org: z.string(),
    line: z.string(),
    kind: z.enum(["work", "education"]),
    /** Shows a "Current" pill. */
    current: z.boolean().optional(),
  }),
);

/* ------------------------------------------------------------------ */
/* leadership.ts                                                       */
/* ------------------------------------------------------------------ */

export const leadershipSchema = z.array(
  z.object({
    title: z.string(),
    org: z.string(),
    tenure: z.string(),
    path: z.string().optional(),
    description: z.string(),
  }),
);

/* ------------------------------------------------------------------ */
/* skills.ts                                                           */
/* ------------------------------------------------------------------ */

export const skillsSchema = z.array(
  z.object({
    group: z.string(),
    items: z.array(z.object({ name: z.string(), advanced: z.boolean().default(false) })),
  }),
);

/* ------------------------------------------------------------------ */
/* about.ts                                                            */
/* ------------------------------------------------------------------ */

export const aboutSchema = z.object({
  story: z.array(z.string()).min(1),
  storyIsDraft: z.boolean(),
  howIWork: z.array(z.object({ title: z.string(), body: z.string() })),
  howIWorkIsDraft: z.boolean(),
  education: z.array(
    z.object({ qualification: z.string(), institution: z.string(), years: z.string(), result: z.string() }),
  ),
  achievements: z.array(z.string()),
  /** Smaller roles shown as a compact list on About. */
  otherRoles: z.array(z.object({ role: z.string(), org: z.string(), dates: z.string() })),
  languages: z.array(z.string()),
  /** 2–3 interests. Empty array shows a TODO placeholder. */
  outsideWork: z.array(z.object({ title: z.string(), line: z.string() })),
});

/* ------------------------------------------------------------------ */
/* work/*.mdx frontmatter                                              */
/* ------------------------------------------------------------------ */

export const caseCategorySchema = z.enum(["Growth", "Analytics", "Automation", "Strategy"]);

export const caseFrontmatterSchema = z.object({
  title: z.string(),
  company: z.string(),
  role: z.string(),
  dates: z.string(),
  /** Shown on cards as "company · year". */
  year: z.string(),
  category: caseCategorySchema,
  /** One-line outcome for cards and the case-study header. */
  outcome: z.string(),
  tags: z.array(z.string()).min(3),
  metrics: z
    .array(z.object({ value: z.string(), label: z.string(), source: z.string().optional() }))
    .min(1)
    .max(4),
  /**
   * Optional pipeline shown as a diagram on the case study, in order.
   * Each step: what happens and which tools do it.
   */
  workflow: z.array(z.object({ step: z.string(), tools: z.array(z.string()).min(1) })).optional(),
  featured: z.boolean().default(false),
  /** Sort order on /work (1 = first). */
  order: z.number().int().positive(),
  /** Short SEO description for this case study. */
  description: z.string().max(160),
});

export type Site = z.infer<typeof siteSchema>;
export type Metric = z.infer<typeof metricSchema>;
export type Resume = z.infer<typeof resumeSchema>;
export type Experience = z.infer<typeof experienceSchema>;
export type Leadership = z.infer<typeof leadershipSchema>;
export type Skills = z.infer<typeof skillsSchema>;
export type About = z.infer<typeof aboutSchema>;
export type CaseCategory = z.infer<typeof caseCategorySchema>;
export type CaseFrontmatter = z.infer<typeof caseFrontmatterSchema>;
