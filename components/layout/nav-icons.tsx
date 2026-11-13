import { FileText, House, Layers, Mail, User, type LucideProps } from "lucide-react";
import type { Site } from "@/content/schema";

const icons = { home: House, layers: Layers, user: User, "file-text": FileText, mail: Mail };

export function NavIcon({ name, ...props }: { name: Site["nav"][number]["icon"] } & LucideProps) {
  const Icon = icons[name];
  return <Icon size={18} strokeWidth={1.5} aria-hidden {...props} />;
}
