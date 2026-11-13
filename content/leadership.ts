/** Leadership cards on the Home page. */
import { leadershipSchema } from "./schema";

export const leadership = leadershipSchema.parse([
  {
    title: "President",
    org: "180 Degrees Consulting NSUT",
    tenure: "Since Nov 2023",
    path: "Junior → Senior Consultant → President",
    description:
      "Leading a 60-member chapter; delivered 4 consulting engagements across EV, AI toys, medical tourism and social impact.",
  },
  {
    title: "President",
    org: "Google Developer Group NSUT",
    tenure: "Aug 2025 – Jul 2026",
    description:
      "Led a 70-member tech team; shipped Lush, a social app; ran flagship event Shunya in 2025 and 2026, plus 10+ workshops.",
  },
]);
