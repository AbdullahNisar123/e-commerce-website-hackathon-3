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
        White: "#ffffff",
        primary: "#B88E2F",
        Gray1: "#3A3A3A",
        Gray2: "#616161",
        Gray3: "#898989",
        Gray4: "#B0B0B0",
        Gray5: "#D8D8D8",
        Font: "#333333",
        Font1: "#666666",
        lightBG: "#F4F5F7",
        GreenAccents: "#2EC1AC",
        RedAccents: "#E97171",

      },
    },
  },
  plugins: [],
};
export default config;
