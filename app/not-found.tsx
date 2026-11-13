import { site } from "@/content/site";
import { PlaceholderPage } from "@/components/layout/placeholder-page";

export default function NotFound() {
  return (
    <PlaceholderPage title={site.pages.notFound.title} phase="Phase 4">
      <p className="text-muted">{site.pages.notFound.body}</p>
    </PlaceholderPage>
  );
}
