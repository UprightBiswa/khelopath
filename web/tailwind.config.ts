import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#17201c",
        forest: "#116149",
        leaf: "#2f855a",
        saffron: "#ef9f27",
        river: "#1769aa",
        cloud: "#f7faf8",
        line: "#d9e2dd"
      },
      boxShadow: {
        soft: "0 16px 40px rgba(23, 32, 28, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;

