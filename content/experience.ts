/** Roles timeline on the Home page, newest first. */
import { experienceSchema } from "./schema";

export const experience = experienceSchema.parse([
  {
    dates: "Sep 2026 – Dec 2026",
    role: "GTM & Growth Engineer Intern",
    org: "TensorTonic",
    line: "Growth across paid, SEO/AEO, partnerships and retention",
    kind: "work",
  },
  {
    dates: "Aug 2026 – Now",
    role: "Founder's Office Associate",
    org: "Nextvant (rejoined)",
    line: "Own 2 client accounts; building AI agents and internal tools",
    kind: "work",
  },
  {
    dates: "May 2026 – Jul 2026",
    role: "Associate Consultant Intern",
    org: "Mastercard Advisors",
    line: "Performance analytics for India's #1 card issuer; full-time offer, joining May 2027",
    kind: "work",
  },
  {
    dates: "Jun 2025 – Apr 2026",
    role: "Founder's Office Associate",
    org: "Nextvant",
    line: "GTM for 3 international clients",
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
