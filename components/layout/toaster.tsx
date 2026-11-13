"use client";

import { useEffect, useState } from "react";
import { Check } from "lucide-react";
import { SHOW_TOAST } from "@/lib/events";

/** Polite live region for short confirmations ("Email copied"). */
export function Toaster() {
  const [toast, setToast] = useState<{ id: number; message: string } | null>(null);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    const onToast = (e: Event) => {
      const message = (e as CustomEvent<string>).detail;
      setToast({ id: Date.now(), message });
      clearTimeout(timer);
      timer = setTimeout(() => setToast(null), 2200);
    };
    window.addEventListener(SHOW_TOAST, onToast);
    return () => {
      window.removeEventListener(SHOW_TOAST, onToast);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div
      aria-live="polite"
      role="status"
      className="pointer-events-none fixed inset-x-0 bottom-6 z-[60] flex justify-center px-5"
    >
      {toast && (
        <p
          key={toast.id}
          className="toast-in inline-flex items-center gap-2 rounded-full border border-line bg-surface-2 px-4 py-2 text-sm text-fg shadow-card"
        >
          <Check size={16} strokeWidth={1.5} className="text-positive" aria-hidden />
          {toast.message}
        </p>
      )}
    </div>
  );
}
