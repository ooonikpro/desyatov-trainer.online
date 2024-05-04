// .prettierrc.mjs
/** @type {import("prettier").Config} */
export default {
  plugins: ["prettier-plugin-astro"],
  overrides: [
    {
      files: ["*.astro", "*.svelte", "*.js", "*.ts"],
      options: {
        parser: "astro",
        singleQuote: false,
        bracketSameLine: false,
        singleAttributePerLine: false,
        jsxBracketSameLine: false
      }
    }
  ]
};
