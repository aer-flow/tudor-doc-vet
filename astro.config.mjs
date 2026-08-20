// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import { SITE_URL } from "./src/data/site.ts";

export default defineConfig({
  site: SITE_URL,
  integrations: [
    sitemap({
      filter: (page) =>
        !page.includes("/design-system") && !page.includes("/multumim"),
    }),
  ],
  // CSS separat: documentul rămâne mic, iar browserul îl parsează în paralel și îl cachează.
  build: { inlineStylesheets: "never" },
  vite: { plugins: [tailwindcss()] },
});
