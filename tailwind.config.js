/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        home: "#1E1E1E",
        primary: "#E46700",
        second: "#8B3F00",
      },
    },
  },
  plugins: [],
};
