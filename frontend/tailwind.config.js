const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Dosis', ...defaultTheme.fontFamily.sans],
      },
      zIndex: {
        '-1': '-1',
      },
      transformOrigin: {
        0: '0%',
      },
    },
  },
  variants: {
    borderColor: ['responsive', 'hover', 'focus', 'focus-within'],
    lineClamp: ['responsive', 'hover'],
  },
  plugins: [require('@tailwindcss/line-clamp')],
}
