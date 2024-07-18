/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  mode: 'jit',
  theme: {
    fontFamily: {
      jeju: ['Jeju Hallasan', 'serif'],
    },
    extend: {
      screens: {
        'xs': '480px',
        'xxs': '360px',
      },
      backgroundImage: {
        'girl': "url('/assets/girl.svg')",
        'title': "url('/assets/title.svg')",
      },
      colors: {
        'primary': '#5EA74C',
        'secondary': '#C9F5AE',
        'green110': '#25421E'
      },
    },
  },
  plugins: [],
};
