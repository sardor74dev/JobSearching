/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      backgroundImage: {
        'main-image': "url('/Untitled design.png')",
      },
      boxShadow: {
        'sharp': '7px 7px 0px rgba(255, 255, 255, 1)',
        'sharp-hover': '2px 2px 0px rgba(255, 255, 255, 1)',
        'yellow-sharp': '20px 10px 0px rgba(255, 231, 12, 1)',
        'yellow-sharp-hover': '6px 3px 0px rgba(255, 231, 12, 1)',
        'search-button': '10px 10px 0px rgba(255, 231, 12, 1)',
        'search-button-hover': '3px 3px 0px rgba(255, 231, 12, 1)',
        'filter-button': '7px 7px 0px rgba(255, 231, 12, 1)',
        'filter-button-hover': '2px 2px 0px rgba(255, 231, 12, 1)'
      },
    },
  },
  plugins: [],
}

