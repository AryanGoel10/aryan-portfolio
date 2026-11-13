/**
 * Typed wrapper around Vercel Analytics custom events (SPEC section 8).
 * Safe to call anywhere on the client; it never throws.
 */
import { track as vercelTrack } from "@vercel/analytics";

export type ResumeLocation =
  "hero" | "sidebar" | "resume-page" | "palette" | "mobile-menu" | "contact" | "case-study";

type Events = {
  resume_download: { version: "gtm" | "analyst"; location: ResumeLocation };
  contact_click: { channel: "email" | "booking" | "linkedin" };
  email_copy: Record<string, never>;
  case_view: { slug: string };
  palette_open: Record<string, never>;
};

export function track<E extends keyof Events>(event: E, props?: Events[E]) {
  try {
    vercelTrack(event, props);
  } catch {
    // Analytics must never break the page.
  }
}
