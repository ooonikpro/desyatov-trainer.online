import { defineConfig } from "astro/config";
import { fileURLToPath } from "url";
import path, { dirname } from "path";
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log(process.env.APP_BASE, process.env.APP_SITE);

// https://astro.build/config
export default defineConfig({
  site: process.env.APP_SITE,
  base: process.env.APP_BASE,
  vite: {
    resolve: {
      alias: {
        "@blocks": `${path.resolve(__dirname, "src/blocks")}/`,
        "@components": `${path.resolve(__dirname, "src/components")}/`,
        "@shared": `${path.resolve(__dirname, "src/shared")}/`,
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          // path to your scss variables
          additionalData: `@import "@shared/mixins/index.scss";`,
        },
      },
    },
  },
});
