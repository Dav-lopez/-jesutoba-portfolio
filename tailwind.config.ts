import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: "#0A0A0F",
          secondary: "#111118",
          tertiary: "#16161F",
        },
        surface: {
          DEFAULT: "#1C1C27",
          2: "#222230",
        },
        accent: {
          DEFAULT: "#6C63FF",
          2: "#8B5CF6",
          3: "#A78BFA",
        },
        teal: {
          DEFAULT: "#10B981",
          2: "#34D399",
        },
        gold: {
          DEFAULT: "#F59E0B",
          2: "#FCD34D",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
