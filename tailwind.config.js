/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}", "./node_modules/tw-elements/js/**/*.js"],
  theme: {
    extend: {},
    screens: {
      sm: { min: "640px" },
      md: { min: "768px" },
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  darkMode: "class",
  plugins: [require("tw-elements/plugin.cjs")],
};
