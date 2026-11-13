import { site } from "@/content/site";
import { Hero } from "@/components/home/hero";
import { ImpactStrip } from "@/components/home/impact-strip";
import { WhatIDo } from "@/components/home/what-i-do";
import { FeaturedWork } from "@/components/home/featured-work";
import { Timeline } from "@/components/home/timeline";
import { Leadership } from "@/components/home/leadership";
import { ContactCTA } from "@/components/home/contact-cta";
import { SectionHeading } from "@/components/ui/primitives";
import { Reveal } from "@/components/layout/reveal";
import { JsonLd } from "@/components/json-ld";

/**
 * Home tells one story, in order: who I am and where I work now → what I do →
 * proof (selected work) → experience → leadership → one way to get in touch.
 */
export default function Home() {
  const { home } = site;
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Person",
          name: site.name,
          jobTitle: site.role,
          description: site.positioning,
          url: site.url,
          image: `${site.url}/aryan.jpg`,
          email: `mailto:${site.email}`,
          worksFor: site.currently.map((c) => ({ "@type": "Organization", name: c.company })),
          address: { "@type": "PostalAddress", addressLocality: "New Delhi", addressCountry: "IN" },
          alumniOf: { "@type": "CollegeOrUniversity", name: "Netaji Subhas University of Technology" },
          sameAs: [site.links.linkedin, site.links.github],
        }}
      />

      <Hero />

      <section aria-label="Results" className="pb-16 lg:pb-24">
        <ImpactStrip />
      </section>

      <section
        id="what-i-do"
        aria-labelledby="what-title"
        className="scroll-mt-14 border-t border-line section-y"
      >
        <Reveal>
          <SectionHeading id="what-title" eyebrow={home.whatIDo.eyebrow} title={home.whatIDo.title} />
        </Reveal>
        <WhatIDo />
      </section>

      <section
        id="featured-work"
        aria-labelledby="featured-title"
        className="scroll-mt-14 border-t border-line section-y"
      >
        <Reveal>
          <SectionHeading id="featured-title" eyebrow={home.work.eyebrow} title={home.work.title} />
        </Reveal>
        <FeaturedWork />
      </section>

      <section
        id="experience"
        aria-labelledby="experience-title"
        className="scroll-mt-14 border-t border-line section-y"
      >
        <Reveal>
          <SectionHeading
            id="experience-title"
            eyebrow={home.experience.eyebrow}
            title={home.experience.title}
          />
        </Reveal>
        <Reveal>
          <Timeline />
        </Reveal>
      </section>

      <section
        id="leadership"
        aria-labelledby="leadership-title"
        className="scroll-mt-14 border-t border-line section-y"
      >
        <Reveal>
          <SectionHeading
            id="leadership-title"
            eyebrow={home.leadership.eyebrow}
            title={home.leadership.title}
          />
        </Reveal>
        <Leadership />
      </section>

      <section id="contact" aria-labelledby="contact-title" className="scroll-mt-14 pb-16 lg:pb-24">
        <Reveal>
          <ContactCTA />
        </Reveal>
      </section>
    </>
  );
}
