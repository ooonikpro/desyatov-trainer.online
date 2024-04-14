import { defineConfig } from "astro/config";
import { fileURLToPath } from "url";
import path, { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// https://astro.build/config
export default defineConfig({
  site: 'https://ooonikpro.github.io',
  base: 'desyatov-trainer.online',
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
