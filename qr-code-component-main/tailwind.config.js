/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
        // Add more custom font families as needed
      },
      colors: {
        'light-gray': '#a3a3a3'
      }
    },
  },
  plugins: [],
}

