import type { Metadata } from "next";
import { site } from "@/content/site";
import { PlaceholderPage } from "@/components/layout/placeholder-page";

export const metadata: Metadata = {
  title: site.pages.about.title,
  description: site.pages.about.description,
};

export default function AboutPage() {
  return <PlaceholderPage title={site.pages.about.title} phase="Phase 4" />;
}
