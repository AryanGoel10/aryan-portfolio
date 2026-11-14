/**
 * Site-wide content: identity, links, availability, nav, hero, metrics and page copy.
 *
 * Edit freely. The build checks this file against content/schema.ts (see content/validate.ts)
 * and will tell you exactly which field is wrong if something breaks.
 */
import type { Site } from "./schema";

export const site: Site = {
  name: "Aryan Goel",
  role: "GTM & Growth Engineer",
  positioning:
    "GTM & growth engineer at Nextvant and TensorTonic. I turn data and automation into users, pipeline and revenue.",

  // Live address. Change to your own domain (e.g. https://aryangoel.in) once you buy one.
  url: "https://aryan-goel.vercel.app",

  location: "New Delhi, India",
  educationShort: "B.Tech ECE, NSUT ’27",
  email: "goel.aryan26@gmail.com",

  availability: {
    open: true,
    badge: "Open to GTM & growth roles · Jan 2027",
    long: "Open to GTM & growth roles from Jan 2027",
  },

  links: {
    linkedin: "https://www.linkedin.com/in/aryangoel26",
    github: "https://github.com/AryanGoel10",
    sourceRepo: "https://github.com/AryanGoel10/aryan-portfolio",
    // Booking link. Set to null to hide every "Book a call" button.
    booking: "https://calendly.com/goel-aryan26/30min",
    bookingLabel: "Book a 30-min call",
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
      preview: "/resume/preview/gtm.png",
      // Draft — edit if you like.
      bestFor: "Best for startup growth, GTM and founder's office roles.",
    },
    {
      id: "analyst",
      label: "Analyst resume",
      shortLabel: "Analyst version",
      file: "/resume/Aryan_Goel_Resume_Analyst.pdf",
      shortPath: "/resume/analyst",
      preview: "/resume/preview/analyst.png",
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
      "GTM & growth engineer at Nextvant and TensorTonic: AI agents, paid search and SEO. Ex-Mastercard Advisors. Open to GTM & growth roles from Jan 2027.",
  },

  hero: {
    eyebrow: "New Delhi, India · B.Tech ECE, NSUT ’27",
    // "growth" is set in serif italic.
    headline: { before: "I'm Aryan, a GTM & ", accent: "growth", after: " engineer." },
    subline: "I grow products with paid search, SEO and AI agents, and I measure everything.",
    previously:
      "Previously at Mastercard Advisors: analytics and automation for India's #1 card issuer, ending in a full-time offer.",
    primaryCta: "Download resume",
    secondaryCta: { label: "See my work", href: "/work" },
  },

  // Current roles, in the order they appear in the hero.
  currently: [
    {
      company: "Nextvant",
      about: "GTM & HubSpot services",
      role: "Founder's Office Associate",
      since: "Aug 2026",
      line: "I own 2 client accounts and build AI agents that find buyers: 20 meetings booked so far.",
      href: "/work/ai-buying-signal-engine",
    },
    {
      company: "TensorTonic",
      about: "ML coding practice, 52K+ learners",
      role: "GTM & Growth Engineer",
      since: "Sep 2026",
      line: "I run growth across paid search, SEO/AEO and partnerships: +44% organic clicks in 2 months.",
      href: "/work/tensortonic-growth",
    },
  ],

  metrics: [
    {
      value: 20,
      label: "meetings booked by my AI agents",
      company: "Nextvant",
      source: "Nextvant buying-signal engine, Nov 2026",
    },
    {
      value: 44,
      prefix: "+",
      suffix: "%",
      label: "organic search clicks in 2 months",
      company: "TensorTonic",
      source: "Google Search Console, 15 Sep–12 Nov vs prior 59 days",
    },
    {
      value: 95,
      suffix: "%",
      label: "faster quarterly reporting",
      company: "Mastercard",
      source: "120 → 5 min per file, 10 file types",
    },
    {
      value: 52,
      suffix: "K+",
      label: "learners on the platform I grow",
      company: "TensorTonic",
      source: "TensorTonic CRM, Nov 2026",
    },
  ],

  whatIDo: [
    {
      title: "Growth & GTM",
      body: "Paid search, SEO/AEO, partnerships and outbound that bring in users and pipeline.",
      proof: "+44% organic clicks · 93 sign-ups in 3 weeks · +400% clicks for clients",
      links: [
        { label: "Growing TensorTonic", href: "/work/tensortonic-growth" },
        { label: "3 international clients", href: "/work/nextvant-client-growth" },
        { label: "AI toy US launch", href: "/work/ai-toy-us-launch" },
      ],
    },
    {
      title: "Analytics",
      body: "SQL, Python and PySpark on large datasets, turned into decisions a client can act on.",
      proof: "5.2M cardholders segmented · ~₹500 Cr incremental value",
      links: [{ label: "Card activation at Mastercard", href: "/work/card-activation-analytics" }],
    },
    {
      title: "AI & automation",
      body: "Agents and pipelines that take repetitive work off a team's plate.",
      proof: "120 → 5 min reporting · 20 meetings from AI agents",
      links: [
        { label: "AI buying-signal engine", href: "/work/ai-buying-signal-engine" },
        { label: "Reporting automation", href: "/work/mastercard-qbr-automation" },
      ],
    },
  ],

  home: {
    whatIDo: { eyebrow: "What I do", title: "Growth, analytics and automation, end to end" },
    work: { eyebrow: "Selected work", title: "Three projects, with the numbers" },
    experience: { eyebrow: "Experience", title: "Where I've worked" },
    leadership: { eyebrow: "Leadership", title: "Teams I lead at NSUT" },
  },

  contactCta: {
    heading: "Hiring for January 2027? Let's talk.",
    subheading: "I'm open to GTM, growth and analyst roles, and I reply within 24 hours.",
    founderLine: "Building a startup and need GTM help?",
  },

  footer: {
    smallPrint: "© 2026 Aryan Goel · Built with Next.js",
  },

  pages: {
    work: {
      title: "Work",
      intro:
        "Seven projects across growth, analytics and automation. Each one shows the problem, what I did and what changed.",
      description:
        "Seven case studies in growth, analytics, automation and strategy: Google Ads, SEO, SQL, Python and AI agents, each with measured results.",
    },
    about: {
      title: "About",
      description:
        "GTM & growth engineer at Nextvant and TensorTonic, ECE student at NSUT. My story, how I work, skills and what I lead.",
    },
    resume: {
      title: "Resume",
      description: "Download Aryan Goel's GTM & Growth resume or Analyst resume (PDF).",
    },
    contact: {
      title: "Say hello.",
      intro:
        "Hiring for a GTM, growth or analyst role from January 2027, or need GTM help for your startup? I'd love to talk.",
      description:
        "Email, book a 30-minute call or connect on LinkedIn. Open to GTM & growth roles from Jan 2027.",
    },
    notFound: {
      title: "This page churned.",
      body: "Let's win you back:",
    },
  },
};
