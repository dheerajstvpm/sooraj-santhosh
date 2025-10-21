// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://dheerajstvpm.github.io",
  base: "/sooraj-santhosh",

  vite: {
    plugins: [tailwindcss()],
  },
});