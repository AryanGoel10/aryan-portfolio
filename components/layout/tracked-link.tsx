"use client";

import type { ComponentProps } from "react";
import { track, type ResumeLocation } from "@/lib/analytics";

type Tracking =
  | { event: "resume_download"; version: "gtm" | "analyst"; location: ResumeLocation }
  | { event: "contact_click"; channel: "email" | "calcom" | "linkedin" };

/** An <a> that fires a Vercel Analytics event on click. */
export function TrackedLink({ tracking, onClick, ...props }: ComponentProps<"a"> & { tracking: Tracking }) {
  return (
    <a
      {...props}
      onClick={(e) => {
        if (tracking.event === "resume_download") {
          track("resume_download", { version: tracking.version, location: tracking.location });
        } else {
          track("contact_click", { channel: tracking.channel });
        }
        onClick?.(e);
      }}
    />
  );
}
