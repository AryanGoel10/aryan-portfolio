import type { Metadata } from "next";
import { site } from "@/content/site";
import { PlaceholderPage } from "@/components/layout/placeholder-page";

export const metadata: Metadata = { title: "Contact", description: site.pages.contact.description };

export default function ContactPage() {
  return (
    <PlaceholderPage title={site.pages.contact.title} phase="Phase 4">
      <p className="text-muted">{site.pages.contact.intro}</p>
    </PlaceholderPage>
  );
}
