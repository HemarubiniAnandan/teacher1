/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          pink: "#ec4899",
          "light-pink": "#fce7f3",
          "dark-pink": "#db2777",
          "dark-text": "#1f2937"
        },
        secondary: {
          DEFAULT: "#9333ea"
        }
      }
    }
  },
  plugins: []
};
