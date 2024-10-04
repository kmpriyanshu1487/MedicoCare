/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Enable dark mode
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#87a7d4",
      },
      gridTemplateColumns: {
        auto: 'repeat(auto-fill, minmax(200px, 1fr))',
      },
    },
  },
  plugins: [],
};
