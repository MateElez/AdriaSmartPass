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
          50: "#eef4ff",
          100: "#dbe7ff",
          200: "#b8ceff",
          300: "#8fb0ff",
          400: "#5f87ff",
          500: "#1557ff",
          600: "#1450e8",
          700: "#113fbd",
          800: "#0f3498",
          900: "#0d2a7a"
        },
        accent: {
          500: "#f59e0b",
          600: "#d97706"
        },
        ink: {
          950: "#030712",
          900: "#05070d"
        }
      },
      boxShadow: {
        soft: "0 8px 30px rgba(2, 12, 27, 0.08)",
        subtle: "0 1px 2px rgba(2, 12, 27, 0.06)"
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(600px circle at 75% 30%, rgba(21,87,255,0.16), transparent 55%), radial-gradient(500px circle at 20% 20%, rgba(21,87,255,0.08), transparent 55%)"
      }
    }
  },
  plugins: []
};

export default config;
