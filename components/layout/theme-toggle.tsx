"use client";

import { Moon, Sun } from "lucide-react";
import { toggleTheme } from "@/lib/theme";
import { cn } from "@/lib/utils";

/** Sun/moon cross-fade. Icon state comes from CSS (html.light), so there's no hydration flash. */
export function ThemeToggle({ className }: { className?: string }) {
  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle light and dark theme"
      title="Toggle theme (T)"
      className={cn(
        "relative inline-flex size-11 items-center justify-center rounded-button text-muted transition-colors duration-150 hover:bg-surface-2 hover:text-fg lg:size-9",
        className,
      )}
    >
      <Sun size={18} strokeWidth={1.5} className="theme-icon-sun absolute" aria-hidden />
      <Moon size={18} strokeWidth={1.5} className="theme-icon-moon absolute" aria-hidden />
    </button>
  );
}
