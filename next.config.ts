import type { NextConfig } from "next";
import { site } from "./content/site";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // Stable short links for emails: /resume/gtm and /resume/analyst always point at the current PDFs.
  async redirects() {
    return site.resumes.map((r) => ({ source: r.shortPath, destination: r.file, permanent: false }));
  },
  async headers() {
    return [
      {
        source: "/resume/:file*.pdf",
        headers: [{ key: "Content-Disposition", value: "inline" }],
      },
    ];
  },
};

export default nextConfig;
