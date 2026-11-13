import { site } from "@/content/site";
import { Hero } from "@/components/home/hero";
import { ImpactStrip } from "@/components/home/impact-strip";
import { FeaturedWork } from "@/components/home/featured-work";
import { Timeline } from "@/components/home/timeline";
import { Leadership } from "@/components/home/leadership";
import { NowCard } from "@/components/home/now-card";
import { ContactCTA } from "@/components/home/contact-cta";
import { SectionHeading } from "@/components/ui/primitives";
import { Reveal } from "@/components/layout/reveal";
import { JsonLd } from "@/components/json-ld";

export default function Home() {
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
          address: { "@type": "PostalAddress", addressLocality: "New Delhi", addressCountry: "IN" },
          alumniOf: { "@type": "CollegeOrUniversity", name: "Netaji Subhas University of Technology" },
          sameAs: [site.links.linkedin, site.links.github],
        }}
      />

      <Hero />

      <section id="impact" aria-label="Impact" className="scroll-mt-20 pb-16 lg:pb-24">
        <ImpactStrip />
      </section>

      <section
        id="featured-work"
        aria-labelledby="featured-title"
        className="scroll-mt-14 border-t border-line section-y"
      >
        <Reveal>
          <SectionHeading
            id="featured-title"
            eyebrow="Selected work"
            title="Case studies with real numbers"
          />
        </Reveal>
        <FeaturedWork />
      </section>

      <section
        id="experience"
        aria-labelledby="experience-title"
        className="scroll-mt-14 border-t border-line section-y"
      >
        <Reveal>
          <SectionHeading id="experience-title" eyebrow="Experience" title="Where I've shipped growth" />
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
          <SectionHeading id="leadership-title" eyebrow="Leadership" title="Teams I lead" />
        </Reveal>
        <Leadership />
      </section>

      <section id="now" aria-labelledby="now-title" className="scroll-mt-14 pb-16 lg:pb-24">
        <Reveal>
          <NowCard />
        </Reveal>
      </section>

      <section
        id="contact"
        aria-labelledby="contact-title"
        className="scroll-mt-14 border-t border-line section-y"
      >
        <Reveal>
          <ContactCTA />
        </Reveal>
      </section>
    </>
  );
}
