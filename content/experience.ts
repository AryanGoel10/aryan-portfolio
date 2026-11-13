/** Roles timeline on the Home page, newest first. */
import { experienceSchema } from "./schema";

export const experience = experienceSchema.parse([
  {
    dates: "Aug 2026 – Now",
    role: "Founder's Office Associate",
    org: "Nextvant",
    line: "GTM & HubSpot services. Rejoined to own 2 client accounts and build AI agents that find buyers (20 meetings booked).",
    kind: "work",
    current: true,
  },
  {
    dates: "Sep 2026 – Dec 2026",
    role: "GTM & Growth Engineer Intern",
    org: "TensorTonic",
    line: "Growth for an ML practice platform with 52K+ learners: paid search, SEO/AEO, partnerships and retention.",
    kind: "work",
    current: true,
  },
  {
    dates: "May 2026 – Jul 2026",
    role: "Associate Consultant Intern",
    org: "Mastercard Advisors",
    line: "Performance analytics and reporting automation for India's #1 card issuer. Full-time offer, joining May 2027.",
    kind: "work",
  },
  {
    dates: "Jun 2025 – Apr 2026",
    role: "Founder's Office Associate",
    org: "Nextvant",
    line: "GTM for 3 international clients in Australia, Europe and China: +280% impressions, +400% clicks.",
    kind: "work",
  },
  {
    dates: "2023 – 2027",
    role: "B.Tech ECE",
    org: "Netaji Subhas University of Technology",
    line: "CGPA 7.82",
    kind: "education",
  },
]);
