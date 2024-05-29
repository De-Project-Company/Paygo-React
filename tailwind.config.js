/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Open Sans'", 'sans-serif'],
      },

      colors: {
        blue: {
          50: '#ebf3fe',
          100: '#c2d8fc',
          200: '#a5c6fb',
          300: '#7cabf9',
          400: '#629bf8',
          500: '#3b82f6',
          600: '#3676e0',
          700: '#2a5caf',
          800: '#204887',
          900: '#193767',
        },
        'brand-gray': {
          50: '#E7E7E7',
          100: '#B6B5B5',
          200: '#929292',
          300: '#616060',
          400: '#424141',
          500: '#131111',
          600: '#110F0F',
          700: '#0D0C0C',
          800: '#0A0909',
          900: '#080707',
        },
      },

      screens: {
        xs: '300px',
        lmd: '800px',
        '2xl': '1400px',
      },

      borderWidth: {
        1: '1px',
      },
    },
  },
  plugins: [],
};