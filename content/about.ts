/** About page content. */
import { aboutSchema } from "./schema";

export const about = aboutSchema.parse({
  // Written from Aryan's LinkedIn profile (Nov 2026). Edit freely.
  story: [
    "I started out building things that fly. At school I helped design a UAV for the Real World Design Challenge, which our team won in India, picking up the State Governor's Award. I also led a team designing a space settlement around Jupiter's moon Europa for the NSS/NASA Ames contest.",
    "At NSUT I study electronics and communication engineering, and found I liked moving numbers more than designing circuits. 180 Degrees Consulting taught me structure: I joined as a Junior Consultant in 2023 and now lead the chapter as President. Google Developer Group taught me to run a team that ships: I went from the operations team to President.",
    "Then I went looking for real numbers to move. At Nextvant and TensorTonic I ship growth myself, from Google Ads and SEO to AI agents that find buyers. At Mastercard I learned rigour at scale, working on analytics for India's #1 card issuer, where every number has to be right.",
  ],
  storyIsDraft: false,

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
  howIWorkIsDraft: false,

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
    "Winners, Real World Design Challenge (India), with the State Governor's Award",
    "Honourable Mention, NSS/NASA Ames Space Settlement Design Competition",
    "NPTEL Course Topper, Top 2% (2024)",
    "National Rank 3 and State Rank 1, Mathematical Genius Award",
    "Blue Blazer for Academic Excellence, 3 years, DPS R.K. Puram",
    "DELF A1 (French), Attestation of Excellence",
  ],

  otherRoles: [
    {
      role: "Assistant Placement Coordinator",
      org: "Training and Placement, NSUT",
      dates: "Apr 2025 – Apr 2026",
    },
    { role: "Product Manager", org: "idea8.studio", dates: "May 2025 – Aug 2025" },
    {
      role: "Operations Co-Head",
      org: "NSUT Incubation and Innovation Foundation",
      dates: "Jun 2024 – Apr 2025",
    },
    { role: "Event Management Coordinator", org: "Moksha and Resonanz, NSUT", dates: "2024 – 2025" },
  ],

  languages: ["English (native)", "Hindi (native)", "French (elementary)"],

  // Interests from Aryan; the one-liners are drafts — edit freely.
  outsideWork: [
    { title: "Football", line: "Playing or watching, it's how I switch off." },
    { title: "Stock market", line: "Following markets and the businesses behind the tickers." },
    { title: "New places", line: "Always hunting for the next place to visit." },
  ],
});
