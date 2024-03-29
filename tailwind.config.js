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
        secundaria: 'rgba(1, 51, 84, 0.2)',
        terciaria: '#F68121',
        cor2:'rgba(1, 51, 84, 0.2)',
        cor3:'rgb(0, 113, 189)',
        cor4: '#F4E9DF',
        gray: colors.gray,
        white: colors.white
        },

        extend: {
          fontFamily: {
              sans: ['Work Sans', ...defaultTheme.fontFamily.sans],
          },
      },
  },
  plugins: [],
}

