import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f9eef2",
          100: "#f0d5df",
          500: "#9f2241",
          600: "#8a1d38",
          700: "#73172f",
          900: "#4a0f20",
        },
        gold: "#bc955c",
        ink: "#1f1f2e",
      },
      boxShadow: {
        soft: "0 18px 45px rgba(74, 15, 32, 0.1)",
      },
    },
  },
  plugins: [],
};

export default config;
