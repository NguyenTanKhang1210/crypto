/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontSize: {
        10: "10px",
        20: "20px",
        lg: "16px",
      },
      fontWeight: {},
      spacing: {},
      colors: {},
    },
  },
  plugins: [],
};
