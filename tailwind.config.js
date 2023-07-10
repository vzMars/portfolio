/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        kgcs: ['kgcs'],
        lexreg: ['lexreg'],
        lexbold: ['lexbold'],
      },
      colors: {
        brand: {
          100: '#2457F5',
        },
        letterboxd: {
          100: '#2c3440',
        },
        instagram: {
          100: '#1400c8',
          200: '#b900b4',
          300: '#f50000',
        },
        twitter: {
          100: '#1da1f2',
        },
        linkedin: {
          100: '#2867b2',
        },
      },
    },
  },
  plugins: [],
};
