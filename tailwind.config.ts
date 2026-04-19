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
          "radial-gradient(circle at top right, rgba(47,127,125,0.15), transparent 50%), radial-gradient(circle at bottom left, rgba(245,158,11,0.1), transparent 45%)"
      }
    }
  },
  plugins: []
};

export default config;
