/**
 * Theme handling (dark default, light optional, no flash).
 *
 * An inline script in <head> (see THEME_SCRIPT) applies the theme before first paint.
 * A stored choice wins; otherwise the visitor's system preference is used.
 */
import { safeGet, safeSet } from "./storage";

export const THEME_KEY = "theme";

/** Runs before paint. Kept tiny and dependency-free. */
export const THEME_SCRIPT = `(function(){var d=document.documentElement;d.classList.add('js');try{var t=localStorage.getItem('${THEME_KEY}');var l=t?t==='light':window.matchMedia('(prefers-color-scheme: light)').matches;d.classList.toggle('light',l)}catch(e){}})();`;

export function isLight() {
  return document.documentElement.classList.contains("light");
}

export function setTheme(theme: "light" | "dark") {
  document.documentElement.classList.toggle("light", theme === "light");
  safeSet(THEME_KEY, theme);
}

export function toggleTheme() {
  setTheme(isLight() ? "dark" : "light");
}

/** True when the visitor hasn't picked a theme yet (so we follow the system). */
export function followsSystem() {
  return safeGet(THEME_KEY) === null;
}
