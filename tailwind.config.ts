import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      darkMode: 'media',
      backgroundImage: {
        // "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        // "gradient-conic":
        //   "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'cold': '#111111',
        'breeze': '#000921',
        'colder': '#151f24',
        'side': '#151515;',
      },
      animation: {
        slidein: "slidein 1s ease var(--slidein-delay, 0) forwards",
        // blob: "blob 7s infinite",
      },
      keyframes: {
        slidein: {
          from: {
            opacity: "0",
            transform: "translateY(10px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        // blob: {
        //   "0%": {
        //     transform: "translate(0px, 0px) scale(1)",
        //   },
        //   "33%": {
        //     transform: "translate(30px, -50px) scale(1.1)",
        //   },
        //   "66%": {
        //     transform: "translate(-20, 20px) scale(0.9)",
        //   },
        //   "100%": {
        //     transform: "translate(0px, 0px) scale(1)",
        //   },
        // }
      },
      screens: {
        'md': '750px'
      }
    },
  },
  plugins: [],
};
export default config;
