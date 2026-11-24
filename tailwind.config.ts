import type { Config } from "tailwindcss";

/**
 * Colour tokens are CSS variables (see globals.css) so light / dark mode switch automatically.
 * Pastel palette: soft tints for section backgrounds, one deep sage `primary` for buttons and icon boxes,
 * and `brass` (the single thin accent rule) is fixed.
 */
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    container: { center: true, padding: { DEFAULT: "1.25rem", md: "2rem" }, screens: { "2xl": "1240px" } },
    extend: {
      colors: {
        brass: "#C2A06A",
        primary: { DEFAULT: "rgb(var(--primary) / <alpha-value>)", hover: "rgb(var(--primary-hover) / <alpha-value>)" },
        "on-primary": "rgb(var(--on-primary) / <alpha-value>)",
        rose: "rgb(var(--rose) / <alpha-value>)",
        sage: "rgb(var(--sage) / <alpha-value>)",
        lilac: "rgb(var(--lilac) / <alpha-value>)",
        butter: "rgb(var(--butter) / <alpha-value>)",
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
