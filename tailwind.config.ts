import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
      },
      colors: {
        'primary': '#7877C6',
      },
      // animation: {
      //   slidein: "slidein 1s ease var(--slidein-delay, 0) forwards",
      // },
      // keyframes: {
      //   slidein: {
      //     from: {
      //       opacity: "0",
      //       transform: "translateY(5px)",
      //       filter: "blur(5px)",
      //     },
      //     to: {
      //       opacity: "1",
      //       transform: "translateY(0)",
      //       filter: "blur(0px)",
      //     },
      //   },
      // },
      screens: {
        'md': '750px'
      }
    },
  },
  plugins: [],
};
export default config;
