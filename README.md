# aryan-portfolio

Personal portfolio for **Aryan Goel**, GTM & Growth Engineer. Built with Next.js (App Router, TypeScript), Tailwind CSS and MDX, and deployed on Vercel.

> Status: in progress. Phase 0 (setup + content) is done.

## Editing content (no code needed)

Everything you'd want to change lives in [`/content`](./content):

| File                    | What's in it                                                                                          |
| ----------------------- | ----------------------------------------------------------------------------------------------------- |
| `content/site.ts`       | Name, links, availability badge, hero copy, the 4 impact metrics, Now card, page titles, resume files |
| `content/experience.ts` | Roles timeline on Home                                                                                |
| `content/leadership.ts` | 180DC and GDG cards                                                                                   |
| `content/skills.ts`     | Skills on the About page (`true` = advanced ★)                                                        |
| `content/about.ts`      | About story, "How I work", education, achievements, interests                                         |
| `content/work/*.mdx`    | One file per case study. Settings at the top between `---` lines, write-up below                      |

**The easiest way to edit:** open the file on github.com, click the pencil icon, make the change and click **Commit changes**. Vercel redeploys the site automatically in about a minute.

Things to know:

- **Search for `TODO`** to find everything still waiting on you.
- **Every page checks its content when the site builds.** If you make a typo (say, a missing quote or a field with the wrong name), the deploy fails and the error names the file and field. Nothing broken ever goes live.
- **In case-study files**, put text in double quotes if it contains `#` or `: ` (colon followed by a space), e.g. `outcome: "India's #1 card issuer: ..."`. Without quotes, everything after `#` is silently dropped.
- **Monthly:** update `now.text` and `now.updated` in `site.ts`.
- **When you replace a resume PDF:** keep the same file name in `public/resume/` and update `resumeLastUpdated` in `site.ts`.
- **Cal.com:** paste your booking link into `links.calcom` in `site.ts`. Until then the "Book a call" button stays hidden.

## Running it locally (optional)

You need [Node.js](https://nodejs.org) 20 or newer.

```bash
npm install
npm run dev        # http://localhost:3000
npm run check      # lint + typecheck + formatting
npm run build      # production build
```

## Project structure

```
app/          Routes: / , /work, /work/[slug], /about, /resume, /contact, 404
components/   layout/, home/, work/, ui/ (shadcn-style primitives on Radix)
content/      All editable copy and data (validated with zod in content/schema.ts)
lib/          mdx.ts (case-study loader), analytics.ts (Vercel events), utils.ts
public/       aryan.jpg, resume/*.pdf
styles/       globals.css (design tokens: colours, fonts, radii)
```

## Licence

[MIT](./LICENSE)
