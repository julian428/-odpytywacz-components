/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.tsx"],
  plugins: [require("daisyui"), require("tailwindcss-animated")],
};
