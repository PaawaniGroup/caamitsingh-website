import type { Config } from "tailwindcss";

/**
 * Colour tokens are CSS variables (see globals.css) so light / dark mode
 * switch automatically. `navy` and `gold` are fixed brand colours.
 */
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    container: { center: true, padding: { DEFAULT: "1.25rem", md: "2rem" }, screens: { "2xl": "1240px" } },
    extend: {
      colors: {
        navy: { DEFAULT: "#0B1F3A", 800: "#10294A", 700: "#173560", 600: "#1F4278" },
        gold: { DEFAULT: "#C9A24A", soft: "#E6D3A3" },
        bg: "rgb(var(--bg) / <alpha-value>)",
        surface: "rgb(var(--surface) / <alpha-value>)",
        ink: "rgb(var(--ink) / <alpha-value>)",
        body: "rgb(var(--body) / <alpha-value>)",
        line: "rgb(var(--line) / <alpha-value>)",
        "gold-text": "rgb(var(--gold-text) / <alpha-value>)",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      borderRadius: { xl: "0.75rem", "2xl": "1rem" },
      boxShadow: {
        card: "0 1px 2px rgb(11 31 58 / 0.04), 0 8px 24px -12px rgb(11 31 58 / 0.12)",
        lift: "0 2px 4px rgb(11 31 58 / 0.05), 0 18px 36px -16px rgb(11 31 58 / 0.22)",
      },
    },
  },
  plugins: [],
};
export default config;
