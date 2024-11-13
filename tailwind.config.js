/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ylw: '#FEBF00',
        reed: '#B52B1D',
      },
    },
  },
  plugins: [],
}