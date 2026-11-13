import { site } from "@/content/site";
import { track } from "./analytics";
import { showToast } from "./events";

/** Copy Aryan's email, fire `email_copy`, show "Email copied". Returns success. */
export async function copyEmail(): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(site.email);
  } catch {
    // Fallback for browsers without async clipboard permission.
    try {
      const ta = document.createElement("textarea");
      ta.value = site.email;
      ta.setAttribute("readonly", "");
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      const ok = document.execCommand("copy");
      ta.remove();
      if (!ok) throw new Error("copy failed");
    } catch {
      showToast(`Couldn't copy. Email: ${site.email}`);
      return false;
    }
  }
  track("email_copy");
  showToast("Email copied");
  return true;
}
