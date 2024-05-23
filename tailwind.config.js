/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Open Sans'", "sans-serif"],
      },
      colors: {
        blue: {
          50: "#ebf3fe",
          100: "#c2d8fc",
          200: "#a5c6fb",
          300: "#7cabf9",
          400: "#629bf8",
          500: "#3b82f6",
          600: "#3676e0",
          700: "#2a5caf",
          800: "#204887",
          900: "#193767",
        },
      },
    },
  },
  plugins: [],
}