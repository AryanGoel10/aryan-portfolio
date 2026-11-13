/** Tiny window-event bus so the sidebar hint, shortcuts and palette stay decoupled. */
export const OPEN_PALETTE = "aryan:open-palette";
export const SHOW_TOAST = "aryan:toast";

export function openPalette() {
  window.dispatchEvent(new Event(OPEN_PALETTE));
}

export function showToast(message: string) {
  window.dispatchEvent(new CustomEvent(SHOW_TOAST, { detail: message }));
}
