"use client";

import { useEffect } from "react";
import { track } from "@/lib/analytics";

/** Fires `case_view` once per case-study page view. */
export function CaseViewTracker({ slug }: { slug: string }) {
  useEffect(() => {
    track("case_view", { slug });
  }, [slug]);
  return null;
}
