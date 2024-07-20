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
        'green50': '#C9F5AE',
        'green100': '#5EA74C',
        'green110': '#5A6A4A',
      },
    },
  },
  plugins: [],
};
