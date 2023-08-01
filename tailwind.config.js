/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      geist: {
        white: "var(--geist-white)",
        black: "var(--geist-black)",
        background: "var(--geist-background)",
        foreground: "var(--geist-foreground)",
        accents: {
          1: "var(--geist-accents-1)",
          2: "var(--geist-accents-2)",
          3: "var(--geist-accents-3)",
          4: "var(--geist-accents-4)",
          5: "var(--geist-accents-5)",
          6: "var(--geist-accents-6)",
          7: "var(--geist-accents-7)",
          8: "var(--geist-accents-8)",
        },
        error: {
          lighter: "var(--geist-error-lighter)",
          light: "var(--geist-error-light)",
          DEFAULT: "var(--geist-error)",
          dark: "var(--geist-error-dark)",
        },
        success: {
          lighter: "var(--geist-success-lighter)",
          light: "var(--geist-success-light)",
          DEFAULT: "var(--geist-success)",
          dark: "var(--geist-success-dark)",
        },
        warning: {
          lighter: "var(--geist-warning-lighter)",
          light: "var(--geist-warning-light)",
          DEFAULT: "var(--geist-warning)",
          dark: "var(--geist-warning-dark)",
        },
        violet: {
          lighter: "var(--geist-violet-lighter)",
          light: "var(--geist-violet-light)",
          DEFAULT: "var(--geist-violet)",
          dark: "var(--geist-violet-dark)",
        },
        cyan: {
          lighter: "var(--geist-cyan-lighter)",
          light: "var(--geist-cyan-light)",
          DEFAULT: "var(--geist-cyan)",
          dark: "var(--geist-cyan-dark)",
        },
        highlight: {
          purple: "var(--geist-highlight-purple)",
          magenta: "var(--geist-highlight-magenta)",
          pink: "var(--geist-highlight-pink)",
          yellow: "var(--geist-highlight-yellow)",
        },
      },
    },
    borderRadius: {
      none: "0px",
      full: "9999px",
      DEFAULT: "5px",
    },
    extend: {
      keyframes: {
        "loading-spinner": { from: { opacity: 1 }, to: { opacity: 0.15 } },
      },
      animation: {
        "loading-spinner": "loading-spinner 1.2s linear infinite",
      },
    },
  },
  darkMode: "class",
  plugins: [require("@tailwindcss/typography")],
};
