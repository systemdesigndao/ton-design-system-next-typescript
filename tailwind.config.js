/** @type {import('tailwindcss').Config} */
const tdsTheme = require('@designervoid/ton-design-system/tdsTheme');

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: tdsTheme,
  plugins: [],
}
