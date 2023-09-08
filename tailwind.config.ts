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
        primary: ["Poppins", "sans-serif"],
      },
      colors: {
        darkBlue: "#1e2352",
        lightBlue: "#007aff",
        darkGray: "#0e1022",
        grayGreen: "#577987",
      },
      backgroundImage: {
        landing: "url('../assets/images/trainPic.jpg')",
      },
    },
  },
  plugins: [],
};
export default config;
