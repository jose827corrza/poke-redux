/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    fontFamily: {
      title: ['"Roboto Mono"', 'monospace'],
      splineSans: ['"Spline Sans Mono"', 'monospace'],
    },
    extend: {},
  },
  plugins: [],
  // to allow manually toggling the dark mode
  darkMode: 'class'
}
