"use client";

import { useEffect, useState } from "react";

let hasNavigated = false;

/** 150ms fade on client navigations (not on first load, so LCP isn't delayed). */
export default function Template({ children }: { children: React.ReactNode }) {
  const [animate] = useState(() => hasNavigated);
  useEffect(() => {
    hasNavigated = true;
  }, []);
  return <div className={animate ? "page-fade" : undefined}>{children}</div>;
}
