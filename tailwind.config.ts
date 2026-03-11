import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Epilogue", "sans-serif"],
      },
      colors: {
        brand: {
          teal: "#00B2A9",
          "teal-light": "#00D9CF",
          "teal-dark": "#008880",
          navy: "#060D1B",
          "navy-2": "#0C1A30",
          "navy-3": "#0F2244",
          slate: "#6B80A0",
          "slate-light": "#94A8C4",
          orange: "#FF6640",
          purple: "#7B5CF5",
        },
      },
    },
  },
  plugins: [],
};
export default config;
