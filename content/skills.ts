/** Skills on the About page, exactly as on the resume. `advanced: true` shows a star. */
import { skillsSchema } from "./schema";

const s = (name: string, advanced = false) => ({ name, advanced });

export const skills = skillsSchema.parse([
  {
    group: "Data & Tech",
    items: [
      s("Python (pandas)"),
      s("SQL"),
      s("PySpark"),
      s("Hadoop"),
      s("Impala"),
      s("VBScript"),
      s("Microsoft Excel", true),
      s("Google Analytics"),
    ],
  },
  {
    group: "GTM & Growth",
    items: [
      s("Go-to-Market Strategy", true),
      s("Google Ads"),
      s("SEO/AEO"),
      s("Search Console"),
      s("Semrush"),
      s("Apollo"),
      s("Clay"),
      s("HubSpot"),
    ],
  },
  {
    group: "AI & Automation",
    items: [
      s("Workflow Automation", true),
      s("AI Agents"),
      s("n8n"),
      s("Make"),
      s("OpenAI/Claude APIs"),
      s("Claude Code"),
    ],
  },
  {
    group: "Business",
    items: [
      s("Market Research", true),
      s("Project Management", true),
      s("Management Consulting"),
      s("Customer Segmentation"),
      s("ROI Modelling"),
    ],
  },
]);
