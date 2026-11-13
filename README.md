# aryan-portfolio

Personal portfolio for **Aryan Goel**, GTM & Growth Engineer. Built with Next.js 16 (App Router, TypeScript), Tailwind CSS v4 and MDX, and deployed on Vercel. Every page is statically generated.

## Editing content (no code needed)

Everything you'd want to change lives in [`/content`](./content):

| File                    | What's in it                                                                                                                           |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `content/site.ts`       | Name, links, availability, hero, current roles, the 4 metrics, "What I do" cards, section headings, contact copy, resume files, domain |
| `content/experience.ts` | Roles timeline on Home                                                                                                                 |
| `content/leadership.ts` | 180DC and GDG cards                                                                                                                    |
| `content/skills.ts`     | Skills on the About page (`true` = advanced ★)                                                                                         |
| `content/about.ts`      | About story, "How I work", education, achievements, interests                                                                          |
| `content/work/*.mdx`    | One file per case study. Settings at the top between `---` lines, write-up below                                                       |

**The easiest way to edit:** open the file on github.com, click the pencil icon, make the change and click **Commit changes**. Vercel redeploys the site automatically in about a minute.

Things to know:

- **Search for `TODO`** to find everything still waiting on you. Unfinished items also show on the site as dashed amber "TODO" boxes.
- **Every build checks your content.** If you make a typo (a missing quote, a field with the wrong name, a meta description over 160 characters), the deploy fails and the error names the file and field. Nothing broken ever goes live; the previous version stays up.
- **In case-study files**, put text in double quotes if it contains `#` or `: ` (colon followed by a space), e.g. `outcome: "India's #1 card issuer: ..."`. Without quotes, everything after `#` is silently dropped.
- **Featured case studies** on Home are the ones with `featured: true` (first three by `order`).
- **When your roles change:** edit `currently` in `site.ts` (the hero's "Currently" cards) and the `current: true` flags in `experience.ts`.
- **When you replace a resume PDF:** keep the same file name in `public/resume/` and update `resumeLastUpdated` in `site.ts`. The short links `/resume/gtm` and `/resume/analyst` always point at the current files.
- **Booking link:** `links.booking` in `site.ts` (currently Calendly). Set it to `null` to hide every "Book a call" button; change `bookingLabel` to change the button text.
- **Drafts:** when you've rewritten the About story or "How I work", set `storyIsDraft` / `howIWorkIsDraft` to `false` in `about.ts` to remove the TODO boxes.

## Deploying on Vercel (one time, ~5 minutes)

1. Go to [vercel.com](https://vercel.com) and **Sign up with GitHub**. The free Hobby plan is enough.
2. Click **Add New… → Project**, find `aryan-portfolio` and click **Import**.
3. Leave every setting as it is (Vercel detects Next.js) and click **Deploy**.
4. When it finishes you get a free address like `aryan-portfolio.vercel.app`. Put that in `url` in `content/site.ts` (until you buy a domain) so share previews and the sitemap use the right address.
5. In the project, open **Analytics** and **Speed Insights** and click **Enable** on each. They're free on Hobby.

From then on, every push to `main` redeploys the site, and every pull request gets its own preview link.

### Adding your own domain (optional)

1. Buy the domain (e.g. `aryangoel.in`) from any registrar.
2. In Vercel: **Project → Settings → Domains → Add**, type the domain, and follow the DNS records it shows you (usually one `A` record and one `CNAME`) in your registrar's DNS settings.
3. Update `url` in `content/site.ts` to `https://aryangoel.in`.

## Analytics

Vercel Analytics records page views plus these custom events (see `lib/analytics.ts`):

| Event             | Fires when                              | Properties                                                                               |
| ----------------- | --------------------------------------- | ---------------------------------------------------------------------------------------- |
| `resume_download` | Either PDF is opened                    | `version` (gtm / analyst), `location` (hero, sidebar, resume-page, palette, mobile-menu) |
| `contact_click`   | Email, booking link or LinkedIn clicked | `channel`                                                                                |
| `email_copy`      | Copy-email used                         | none                                                                                     |
| `case_view`       | A case study page is viewed             | `slug`                                                                                   |
| `palette_open`    | ⌘K palette opened                       | none                                                                                     |

Analytics only loads on Vercel, so local runs stay clean.

**UTM links for outreach**, so you can see which channel brings visitors:

```
https://aryan-goel.vercel.app/?utm_source=linkedin&utm_campaign=jan27-internships
https://aryan-goel.vercel.app/?utm_source=email&utm_campaign=jan27-internships
https://aryan-goel.vercel.app/?utm_source=naukri&utm_campaign=jan27-internships
https://aryan-goel.vercel.app/?utm_source=internshala&utm_campaign=jan27-internships
```

## Running it locally (optional)

You need [Node.js](https://nodejs.org) 20 or newer.

```bash
npm install
npm run dev        # http://localhost:3000 (also serves /styleguide)
npm run check      # lint + typecheck + formatting
npm run build      # production build (also validates /content)
```

## Keyboard shortcuts

- `⌘K` / `Ctrl+K`: command palette (pages, case studies, resume downloads, copy email, theme)
- `R`: resume, `C`: contact, `T`: toggle theme (when not typing in a field)

## Project structure

```
app/          Routes: / , /work, /work/[slug], /about, /resume, /contact, 404, OG images, sitemap, robots
components/   layout/ (sidebar, mobile nav, palette, footer), home/, work/, resume/, contact/, ui/
content/      All editable copy and data; schema.ts (zod) + validate.ts check it at build time
lib/          mdx.ts (case-study loader), analytics.ts, theme.ts, clipboard.ts, og.tsx, utils.ts
public/       aryan.jpg, aryan-portrait.png, resume/*.pdf
styles/       globals.css (design tokens: colours, type scale, motion)
```

## Quality

CI runs lint, typecheck, Prettier and a production build on every push, plus Lighthouse CI (mobile) on pull requests. Last local run: Lighthouse 100 / 100 / 100 / 100 on Home and 99 / 100 / 100 / 100 on a case study, and 0 axe accessibility violations across every page in both themes.

## Licence

[MIT](./LICENSE)
