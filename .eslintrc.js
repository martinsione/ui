/** @type {import("eslint").Linter.Config} */
const config = {
  root: true,
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:tailwindcss/recommended",
    "next",
    "prettier",
  ],
  plugins: ["@typescript-eslint"],
  parser: "@typescript-eslint/parser",
  settings: {
    // https://github.com/francoismassart/eslint-plugin-tailwindcss#supported-rules
    tailwindcss: {
      callees: ["cn"],
      config: "./tailwind.config.js",
    },
  },
  rules: {
    "@next/next/no-html-link-for-pages": "off",
    "@next/next/no-img-element": "off",
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
        caughtErrorsIgnorePattern: "^_",
      },
    ],
    "no-console": ["warn", { allow: ["error"] }],
    "react/jsx-curly-brace-presence": [
      "warn",
      { props: "never", children: "never" },
    ],
    "react/self-closing-comp": ["warn", { component: true, html: true }],
    "tailwindcss/no-custom-classname": "off",
  },
  reportUnusedDisableDirectives: true,
};

module.exports = config;
