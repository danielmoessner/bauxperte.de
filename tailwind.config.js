const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./content/**/*.{json,md}",
  ],
  theme: {
    extend: {
      colors: {
        "x-black": "#43434a",
        "x-lime": "#a7c82a",
        "x-green": "#657c29",
        "x-blue": "#4254a1",
        "x-red": "#951e14",
        "x-cherry": "#7c1e15",
      },
      fontFamily: {
        sans: ["Aileron", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
