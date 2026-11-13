"use client";

import { useRouter } from "next/navigation";
import { Command } from "cmdk";
import {
  ArrowRight,
  CalendarDays,
  Copy,
  Download,
  FileText,
  Moon,
  Search,
  type LucideIcon,
} from "lucide-react";
import { site } from "@/content/site";
import { track } from "@/lib/analytics";
import { copyEmail } from "@/lib/clipboard";
import { toggleTheme } from "@/lib/theme";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { LinkedInIcon } from "@/components/ui/brand-icons";
import { Kbd } from "@/components/ui/primitives";
import { NavIcon } from "./nav-icons";

export type PaletteCase = { slug: string; title: string; company: string };

/** ⌘K command palette (loaded on first open). */
export default function CommandMenu({
  open,
  onOpenChange,
  cases,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  cases: PaletteCase[];
}) {
  const router = useRouter();
  const run = (fn: () => void) => {
    onOpenChange(false);
    fn();
  };
  const go = (href: string) => run(() => router.push(href));
  const openUrl = (url: string) => window.open(url, "_blank", "noopener");

  const pageShortcut: Record<string, string> = { "/resume": "R", "/contact": "C" };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent showClose={false} className="top-[15vh] max-w-xl translate-y-0 overflow-hidden p-0">
        <DialogTitle className="sr-only">Search pages and actions</DialogTitle>
        <DialogDescription className="sr-only">
          Type to filter. Use arrow keys to move and Enter to run.
        </DialogDescription>
        <Command label="Command menu" loop className="flex flex-col">
          <div className="flex items-center gap-3 border-b border-line px-4">
            <Search size={18} strokeWidth={1.5} className="text-subtle" aria-hidden />
            <Command.Input
              autoFocus
              placeholder="Search pages, case studies, actions…"
              className="h-12 flex-1 bg-transparent text-[15px] text-fg outline-none placeholder:text-subtle"
            />
            <Kbd>Esc</Kbd>
          </div>
          <Command.List className="max-h-[min(60vh,420px)] overflow-y-auto p-2">
            <Command.Empty className="px-3 py-6 text-center text-sm text-muted">No results.</Command.Empty>

            <Command.Group heading="Pages">
              {site.nav.map((item) => (
                <Item key={item.href} onSelect={() => go(item.href)} shortcut={pageShortcut[item.href]}>
                  <NavIcon name={item.icon} className="text-subtle" />
                  {item.label}
                </Item>
              ))}
            </Command.Group>

            <Command.Group heading="Case studies">
              {cases.map((c) => (
                <Item key={c.slug} value={`${c.title} ${c.company}`} onSelect={() => go(`/work/${c.slug}`)}>
                  <ArrowRight size={18} strokeWidth={1.5} className="text-subtle" aria-hidden />
                  <span className="min-w-0 flex-1 truncate">{c.title}</span>
                  <span className="hidden shrink-0 text-[13px] text-subtle sm:inline">{c.company}</span>
                </Item>
              ))}
            </Command.Group>

            <Command.Group heading="Actions">
              {site.resumes.map((r) => (
                <Item
                  key={r.id}
                  onSelect={() =>
                    run(() => {
                      track("resume_download", { version: r.id, location: "palette" });
                      openUrl(r.file);
                    })
                  }
                  icon={Download}
                >
                  Download {r.id === "gtm" ? "GTM" : "Analyst"} resume
                </Item>
              ))}
              <Item onSelect={() => run(() => void copyEmail())} icon={Copy}>
                Copy email
              </Item>
              {site.links.calcom && (
                <Item
                  onSelect={() =>
                    run(() => {
                      track("contact_click", { channel: "calcom" });
                      openUrl(site.links.calcom!);
                    })
                  }
                  icon={CalendarDays}
                >
                  Book a call
                </Item>
              )}
              <Item
                onSelect={() =>
                  run(() => {
                    track("contact_click", { channel: "linkedin" });
                    openUrl(site.links.linkedin);
                  })
                }
              >
                <LinkedInIcon className="text-subtle" />
                Open LinkedIn
              </Item>
              <Item onSelect={() => run(toggleTheme)} icon={Moon} shortcut="T">
                Toggle theme
              </Item>
              <Item onSelect={() => go("/resume")} icon={FileText}>
                Resume page
              </Item>
            </Command.Group>
          </Command.List>
        </Command>
      </DialogContent>
    </Dialog>
  );
}

function Item({
  children,
  onSelect,
  icon: Icon,
  shortcut,
  value,
}: {
  children: React.ReactNode;
  onSelect: () => void;
  icon?: LucideIcon;
  shortcut?: string;
  value?: string;
}) {
  return (
    <Command.Item
      value={value}
      onSelect={onSelect}
      className="flex min-h-11 cursor-pointer items-center gap-3 rounded-button px-3 text-sm text-muted"
    >
      {Icon && <Icon size={18} strokeWidth={1.5} className="text-subtle" aria-hidden />}
      {children}
      {shortcut && <Kbd className="ml-auto">{shortcut}</Kbd>}
    </Command.Item>
  );
}
