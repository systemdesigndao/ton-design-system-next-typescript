/* eslint-disable @typescript-eslint/no-var-requires */
const { tdsTheme } = require('@designervoid/ton-design-system')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: tdsTheme,
  },
  plugins: [],
}
