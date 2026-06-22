// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://thrtn85.com",
  // Keep Cloudflare Pages output directory unchanged.
  outDir: "./dist",
  build: {
    // Clean directory-style URLs: /services/managed-support/ (Astro default).
    format: "directory",
  },
});
