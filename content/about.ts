/** About page content. */
import { aboutSchema } from "./schema";

export const about = aboutSchema.parse({
  // TODO(Aryan): this is a draft from the spec outline — rewrite it in your own words,
  // then set storyIsDraft to false.
  story: [
    "I'm an electronics and communication engineering student at NSUT who found out I liked moving numbers more than designing circuits.",
    "Consulting at 180 Degrees taught me structure: break the problem down, find the lever, recommend one thing. Nextvant and TensorTonic taught me to ship growth myself, from Google Ads to SEO to outbound.",
    "Mastercard taught me rigour at scale: when 5.2 million cardholders sit behind a number, it has to be right every time.",
  ],
  storyIsDraft: true,

  // TODO(Aryan): confirm or edit these three, then set howIWorkIsDraft to false.
  howIWork: [
    {
      title: "Start from the data",
      body: "Before I pick a channel or a tactic, I look at where users, clicks and revenue actually come from.",
    },
    {
      title: "Automate the second time",
      body: "If I do something twice, I script it. That's how a 120-minute report became a 5-minute one.",
    },
    {
      title: "Ship, measure, repeat",
      body: "Small launches, clear metrics, fast iteration. Every experiment ends with a number.",
    },
  ],
  howIWorkIsDraft: true,

  education: [
    {
      qualification: "B.Tech, Electronics and Communication Engineering",
      institution: "Netaji Subhas University of Technology, New Delhi",
      years: "2023 – 2027",
      result: "CGPA 7.82",
    },
    {
      qualification: "Class XII (CBSE)",
      institution: "Delhi Public School, R.K. Puram",
      years: "2023",
      result: "94.2%",
    },
    {
      qualification: "Class X (CBSE)",
      institution: "Delhi Public School, R.K. Puram",
      years: "2021",
      result: "97.6%",
    },
  ],

  achievements: [
    "NPTEL Course Topper, Top 2% (2024)",
    "Blue Blazer for Academic Excellence, 3 years, DPS R.K. Puram",
  ],

  // TODO(Aryan): add 2–3 interests, e.g. { title: "Football", line: "Midfielder, Sunday league." }
  outsideWork: [],
});
