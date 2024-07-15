/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  mode: 'jit',
  theme: {
    fontFamily: {
      jeju: ['Jeju Hallasan', 'serif'],
    },
    extend: {
      backgroundImage: {
        'girl': "url('/assets/girl.svg')",
      },
      colors: {
        'primary': '#5EA74C',
        'secondary': '#C9F5AE',
      },
    },
  },
  plugins: [],
};
