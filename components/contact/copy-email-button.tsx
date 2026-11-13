"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { copyEmail } from "@/lib/clipboard";

/** Copies the email; icon swaps to a check for 2s and a toast confirms. */
export function CopyEmailButton() {
  const [copied, setCopied] = useState(false);
  return (
    <button
      type="button"
      onClick={async () => {
        if (await copyEmail()) {
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        }
      }}
      className="relative z-10 inline-flex min-h-11 items-center gap-2 rounded-button border border-line px-3 text-sm text-fg transition-colors duration-150 hover:bg-surface-2"
    >
      {copied ? (
        <Check size={16} strokeWidth={1.5} className="text-positive" aria-hidden />
      ) : (
        <Copy size={16} strokeWidth={1.5} aria-hidden />
      )}
      {copied ? "Copied" : "Copy email"}
    </button>
  );
}
