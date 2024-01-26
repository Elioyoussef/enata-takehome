/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    screens: {
      lg: "1440px",
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
};
