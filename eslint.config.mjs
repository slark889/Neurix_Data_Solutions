import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import noHtmlLinkForPages from "./eslint-rules/no-html-link-for-pages.js";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  {
    plugins: {
      local: {
        rules: {
          "no-html-link-for-pages": noHtmlLinkForPages,
        },
      },
    },
    rules: {
      // Disable the broken upstream rule
      "@next/next/no-html-link-for-pages": "off",
      // Enable our custom working rule
      "local/no-html-link-for-pages": "error",
    },
  },
]);

export default eslintConfig;
