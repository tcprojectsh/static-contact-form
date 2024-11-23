import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        chilli: "url('/assets/images/chilli-oil.jpg')",
        kitchen: "url('/assets/images/kitchen.jpg')",
        table: "url('/assets/images/table.jpg')",
      },
      fontFamily: {
        ttCommons: ["var(--font-tt-commons)"],
        headingNow: ["var(--font-heading-now)"],
        ttRamillas: ["var(--font-tt-ramillas)"],
        magnolia: ["var(--font-magnolia)"],
      },
      screens: {
        smDesktop: "1300px",
      },
    },
  },
  plugins: [],
};
export default config;
