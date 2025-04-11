/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#32D094',
        secondary: '#D7E6F4',
      },
    },
  },
  plugins: [],
}

