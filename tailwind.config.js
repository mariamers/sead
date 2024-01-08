/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors');

export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
        principal: 'rgb(0, 113, 189)',
        principalv2:'rgba(1, 51, 84, 0.2)',
        principalv3:'rgba(0, 113, 189, 0.1)',
        secundaria: '#fff',
        gray: colors.gray
        },
        extend: {
          fontFamily: {
              sans: ['Work Sans', ...defaultTheme.fontFamily.sans],
          },
      },
  },
  plugins: [],
}

