import "server-only";

/**
 * Build-time content check. Imported by the root layout (a server component), so every build
 * validates /content and fails with a readable message if anything is off. Zod never ships to
 * the browser.
 */
import { siteSchema } from "./schema";
import { site } from "./site";

const result = siteSchema.safeParse(site);
if (!result.success) {
  throw new Error(`content/site.ts is invalid:\n${result.error.message}`);
}

export const contentValidated = true;
