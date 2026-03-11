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
        sans: ["DM Sans", "sans-serif"],
      },
      colors: {
        sinch: {
          yellow: "#FFBE3C",
          green: "#007171",
          blue: "#3AA7EA",
          red: "#D13D42",
          black: "#000000",
          navy: "#0A273D",
          grey: "#F8F8F8",
        },
      },
    },
  },
  plugins: [],
};
export default config;
