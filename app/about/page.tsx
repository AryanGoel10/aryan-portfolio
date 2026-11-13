import type { Metadata } from "next";
import Image from "next/image";
import { Star } from "lucide-react";
import { site } from "@/content/site";
import { about } from "@/content/about";
import { skills } from "@/content/skills";
import { SectionHeading, Todo } from "@/components/ui/primitives";
import { Reveal } from "@/components/layout/reveal";
import photo from "@/public/aryan-portrait.png";

export const metadata: Metadata = {
  title: site.pages.about.title,
  description: site.pages.about.description,
  alternates: { canonical: "/about" },
  openGraph: {
    url: "/about",
    title: `${site.pages.about.title} · ${site.name}`,
    description: site.pages.about.description,
  },
};

export default function AboutPage() {
  return (
    <div className="pt-10 pb-16 sm:pt-14 lg:pt-20">
      <div className="grid items-end gap-8 sm:grid-cols-[1fr_240px]">
        <div>
          <h1 className="text-display text-fg">{site.pages.about.title}</h1>
          <p className="mt-4 text-lg text-muted">{site.positioning}</p>
        </div>
        <Image
          src={photo}
          alt={site.name}
          sizes="(min-width: 640px) 240px, 60vw"
          placeholder="blur"
          priority
          className="aspect-square w-3/5 max-w-[240px] rounded-portrait bg-surface-2 object-cover object-top sm:w-full"
        />
      </div>

      <section aria-labelledby="story-title" className="mt-14">
        <h2 id="story-title" className="sr-only">
          My story
        </h2>
        <div className="max-w-[68ch] space-y-4 text-[17px] leading-relaxed text-muted">
          {about.story.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>
        {about.storyIsDraft && (
          <Todo className="mt-6 max-w-[68ch]">
            Draft story. Aryan to rewrite in his own words (content/about.ts).
          </Todo>
        )}
      </section>

      <section aria-labelledby="how-title" className="mt-16 border-t border-line section-y">
        <SectionHeading id="how-title" eyebrow="Principles" title="How I work" />
        <ul className="grid gap-4 sm:grid-cols-3">
          {about.howIWork.map((h, i) => (
            <Reveal
              as="li"
              key={h.title}
              stagger={i}
              className="rounded-card border border-line bg-surface p-6 shadow-card"
            >
              <p className="font-mono text-[12px] text-accent">{String(i + 1).padStart(2, "0")}</p>
              <h3 className="mt-2 text-h3 text-fg">
                <span className="serif-accent text-[22px]">{h.title}</span>
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-muted">{h.body}</p>
            </Reveal>
          ))}
        </ul>
        {about.howIWorkIsDraft && <Todo className="mt-6">Draft principles. Aryan to confirm or edit.</Todo>}
      </section>

      <section aria-labelledby="skills-title" className="border-t border-line section-y">
        <SectionHeading id="skills-title" eyebrow="Toolkit" title="Skills" />
        <div className="grid gap-8 sm:grid-cols-2">
          {skills.map((g) => (
            <Reveal key={g.group}>
              <h3 className="eyebrow text-subtle">{g.group}</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <li
                    key={s.name}
                    className={`inline-flex items-center gap-1.5 rounded-button border px-3 py-1.5 text-sm ${
                      s.advanced ? "border-accent/40 text-fg" : "border-line text-muted"
                    }`}
                  >
                    {s.name}
                    {s.advanced && (
                      <>
                        <Star size={12} strokeWidth={1.5} className="fill-accent text-accent" aria-hidden />
                        <span className="sr-only">(advanced)</span>
                      </>
                    )}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
        <p className="mt-6 flex items-center gap-1.5 text-meta text-subtle">
          <Star size={12} strokeWidth={1.5} className="fill-accent text-accent" aria-hidden /> Advanced
          proficiency
        </p>
      </section>

      <section aria-labelledby="edu-title" className="border-t border-line section-y">
        <div className="grid gap-12 sm:grid-cols-2">
          <div>
            <SectionHeading id="edu-title" eyebrow="Education" title="Education" />
            <ul className="space-y-5">
              {about.education.map((e) => (
                <li key={e.qualification}>
                  <h3 className="text-[16px] font-semibold text-fg">{e.qualification}</h3>
                  <p className="text-[15px] text-muted">{e.institution}</p>
                  <p className="mt-1 font-mono text-[13px] text-subtle">
                    {e.years} · {e.result}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading eyebrow="Recognition" title="Achievements" />
            <ul className="space-y-3">
              {about.achievements.map((a) => (
                <li key={a} className="flex gap-3 text-[15px] text-muted">
                  <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section aria-labelledby="roles-title" className="border-t border-line section-y">
        <div className="grid gap-12 sm:grid-cols-[1fr_200px]">
          <div>
            <SectionHeading id="roles-title" eyebrow="Also" title="Other roles" />
            <ul className="border-t border-line">
              {about.otherRoles.map((r) => (
                <li
                  key={r.role + r.org}
                  className="grid gap-1 border-b border-line py-4 sm:grid-cols-[150px_1fr] sm:gap-6"
                >
                  <p className="font-mono text-[13px] leading-6 text-subtle">{r.dates}</p>
                  <p className="text-[15px] text-fg">
                    {r.role}
                    <span className="text-muted">, {r.org}</span>
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading eyebrow="Languages" title="I speak" />
            <ul className="space-y-2 text-[15px] text-muted">
              {about.languages.map((l) => (
                <li key={l}>{l}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section aria-labelledby="outside-title" className="border-t border-line section-y">
        <SectionHeading id="outside-title" eyebrow="Off the clock" title="Outside work" />
        {about.outsideWork.length > 0 ? (
          <ul className="grid gap-4 sm:grid-cols-3">
            {about.outsideWork.map((o, i) => (
              <Reveal
                as="li"
                key={o.title}
                stagger={i}
                className="rounded-card border border-line bg-surface p-6 shadow-card"
              >
                <h3 className="text-h3 text-fg">{o.title}</h3>
                <p className="mt-2 text-[15px] text-muted">{o.line}</p>
              </Reveal>
            ))}
          </ul>
        ) : (
          <Todo>Add 2–3 interests in content/about.ts.</Todo>
        )}
      </section>
    </div>
  );
}
