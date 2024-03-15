import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // or 'media' or false
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        gray: {
          50: "#f9f9f9",
          100: "#efefef",
          200: "#cccccc",
          300: "#b6b6b6",
          400: "#d9d9d9",
          500: "#7d7d7d",
          600: "#686465",
          700: "#4d4948",
          800: "#323232",
          900: "#1c1c1c",
        },
        blue: {
          500: "#99ecff;",
          700: "#68e1fd;",
        },
        primary: colors.blue[700],
      },
    },
  },
  plugins: [],
};
export default config;
