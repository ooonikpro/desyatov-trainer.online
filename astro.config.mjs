import svelte from "@astrojs/svelte";
import { defineConfig } from "astro/config";

import { fileURLToPath } from "url";
import path, { dirname } from "path";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const site = process.env.APP_SITE;
const base = process.env.APP_BASE;

// https://astro.build/config
export default defineConfig({
  ...(site ? {
    site
  } : {}),
  ...(base ? {
    base
  } : {}),
  vite: {
    resolve: {
      alias: {
        "@blocks": `${path.resolve(__dirname, "src/blocks")}/`,
        "@components": `${path.resolve(__dirname, "src/components")}/`,
        "@shared": `${path.resolve(__dirname, "src/shared")}/`
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          // path to your scss variables
          additionalData: `@import "@shared/mixins/index.scss";`
        }
      }
    }
  },
  integrations: [svelte()]
});