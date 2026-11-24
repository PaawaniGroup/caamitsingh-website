import type { Config } from "tailwindcss";

/**
 * Colour tokens are CSS variables (see globals.css) so light / dark mode switch automatically.
 * `navy`, `steel` (muted text on navy) and `brass` (the single thin accent rule) are fixed.
 */
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    container: { center: true, padding: { DEFAULT: "1.25rem", md: "2rem" }, screens: { "2xl": "1240px" } },
    extend: {
      colors: {
        navy: { DEFAULT: "#0B1F3A", 800: "#12284A", 700: "#1B3558" },
        steel: "#9DB0C8",
        brass: "#B8923A",
        bg: "rgb(var(--bg) / <alpha-value>)",
        band: "rgb(var(--band) / <alpha-value>)",
        surface: "rgb(var(--surface) / <alpha-value>)",
        ink: "rgb(var(--ink) / <alpha-value>)",
        body: "rgb(var(--body) / <alpha-value>)",
        muted: "rgb(var(--muted) / <alpha-value>)",
        line: "rgb(var(--line) / <alpha-value>)",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
