/**
 * Site-wide content: identity, links, availability, nav, hero, metrics and page copy.
 *
 * Edit freely. The build checks this file against content/schema.ts and will
 * tell you exactly which field is wrong if something breaks.
 */
import { siteSchema } from "./schema";

export const site = siteSchema.parse({
  name: "Aryan Goel",
  role: "GTM & Growth Engineer",
  positioning: "GTM & Growth Engineer who turns data and automation into users, pipeline and revenue.",

  // TODO(Aryan): replace with the domain you buy (aryangoel.in / .com / .dev).
  url: "https://aryangoel.in",

  location: "New Delhi, India",
  educationShort: "B.Tech ECE, NSUT ’27",
  email: "goel.aryan26@gmail.com",

  availability: {
    open: true,
    badge: "Open to internships · Jan 2027",
    long: "Open to 6-month internships from Jan 2027",
  },

  links: {
    linkedin: "https://www.linkedin.com/in/aryangoel26",
    github: "https://github.com/AryanGoel10",
    sourceRepo: "https://github.com/AryanGoel10/aryan-portfolio",
    // TODO(Aryan): paste your Cal.com 15-minute "Intro call" link. While null, "Book a call" stays hidden.
    calcom: null,
  },

  nav: [
    { label: "Home", href: "/", icon: "home" },
    { label: "Work", href: "/work", icon: "layers" },
    { label: "About", href: "/about", icon: "user" },
    { label: "Resume", href: "/resume", icon: "file-text" },
    { label: "Contact", href: "/contact", icon: "mail" },
  ],

  resumes: [
    {
      id: "gtm",
      label: "GTM & Growth resume",
      shortLabel: "GTM version",
      file: "/resume/Aryan_Goel_Resume_GTM.pdf",
      shortPath: "/resume/gtm",
      // Draft — edit if you like.
      bestFor: "Best for startup growth, GTM and founder's office roles.",
    },
    {
      id: "analyst",
      label: "Analyst resume",
      shortLabel: "Analyst version",
      file: "/resume/Aryan_Goel_Resume_Analyst.pdf",
      shortPath: "/resume/analyst",
      // Draft — edit if you like.
      bestFor: "Best for consulting, fintech and analytics roles.",
    },
  ],
  // Update whenever you replace either PDF.
  resumeLastUpdated: "2026-11-13",

  seo: {
    homeTitle: "Aryan Goel — GTM & Growth Engineer",
    titleTemplate: "%s · Aryan Goel — GTM & Growth Engineer",
    description:
      "GTM & Growth Engineer. Growth at TensorTonic (52K+ learners), analytics at Mastercard Advisors, AI agents at Nextvant. Open to 6-month internships, Jan 2027.",
  },

  hero: {
    eyebrow: "GTM & Growth Engineer · New Delhi",
    // TODO(Aryan): pick a headline. Default below; alternatives listed underneath.
    headline: { before: "I turn data and automation into ", accent: "growth", after: "." },
    headlineAlternatives: ["I build the engines behind user growth.", "Growth, engineered and measured."],
    bio: "I run growth at TensorTonic, an ML coding-practice platform with 52K+ learners. Before that I automated reporting for India's #1 card issuer at Mastercard Advisors, and left with a full-time offer. On the side I build AI agents that find buying signals at Nextvant, and I lead 180 Degrees Consulting at NSUT.",
    primaryCta: "Download resume",
    secondaryCta: { label: "See my work", href: "/work" },
  },

  metrics: [
    {
      value: 52,
      suffix: "K+",
      label: "learners on the platform I grow",
      source: "TensorTonic CRM, Nov 2026",
    },
    {
      value: 44,
      prefix: "+",
      suffix: "%",
      label: "organic search clicks in 2 months",
      source: "Google Search Console, 15 Sep–12 Nov vs prior 59 days",
    },
    {
      value: 95,
      suffix: "%",
      label: "faster reporting at Mastercard",
      source: "120 → 5 min per file, 10 file types",
    },
    {
      value: 3000,
      suffix: "+",
      label: "accounts scanned by my AI agents",
      source: "Nextvant buying-signal engine",
    },
  ],

  now: {
    eyebrow: "Now · Nov 2026",
    text: "Running the TensorTonic × Gradium AI developer contest (20 Nov – 20 Dec), building internal tools at Nextvant with Claude Code, and looking for a 6-month GTM or growth internship from January.",
    // Update monthly along with the text.
    updated: "2026-11-13",
  },

  contactCta: {
    heading: "Let's talk growth.",
    subheading: "I reply within 24 hours.",
  },

  footer: {
    tagline: "Let's build something that grows.",
    smallPrint: "© 2026 Aryan Goel · Built with Next.js",
  },

  pages: {
    work: {
      title: "Work",
      intro: "Seven projects, each with the problem, what I did and what changed.",
      description:
        "Seven case studies in growth, analytics, automation and strategy: Google Ads, SEO, SQL, Python and AI agents, each with measured results.",
    },
    about: {
      title: "About",
      description:
        "ECE student at NSUT turned GTM & growth engineer. How I work, my skills in data, growth and automation, and what I lead.",
    },
    resume: {
      title: "Resume",
      description: "Download Aryan Goel's GTM & Growth resume or Analyst resume (PDF).",
    },
    contact: {
      title: "Say hello.",
      intro: "Hiring for a 6-month GTM, growth or analyst role from January 2027? I'd love to talk.",
      description:
        "Email, book a 15-minute call or connect on LinkedIn. Open to 6-month internships from Jan 2027.",
    },
    notFound: {
      title: "This page churned.",
      body: "Let's win you back:",
    },
  },
});
