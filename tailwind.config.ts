import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./hooks/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f4f8f8",
          100: "#d6e8e7",
          200: "#add0ce",
          300: "#84b8b5",
          400: "#5ba09d",
          500: "#2f7f7d",
          600: "#226361",
          700: "#164746",
          800: "#0a2d2c",
          900: "#041516"
        },
        accent: {
          500: "#f59e0b",
          600: "#d97706"
        }
      },
      boxShadow: {
        soft: "0 8px 30px rgba(2, 12, 27, 0.08)"
      },
      backgroundImage: {
        "hero-grid":
          "radial-gradient(circle at top right, rgba(148,163,184,0.55), transparent 55%), radial-gradient(circle at bottom left, rgba(226,232,240,0.9), transparent 48%)"
      }
    }
  },
  plugins: []
};

export default config;
