/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E90FF',
        secondary: '#ff8e3c',
        tertiary: '#d9376e',
        danger: '#ff0000',
      },
    },

  },
  plugins: [],
}