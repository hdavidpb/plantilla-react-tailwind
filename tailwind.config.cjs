/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "socias-pink": "rgb(255, 119, 175 )",
        "socias-purple": "#aa5dd6",
        "socias-black": "#4C4C53",
        "socias-yellow": "#FFEFC4",
      },
    },
  },
  plugins: [],
});
