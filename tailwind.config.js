/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","src/tailwind.css"],
  theme: {
    extend: {
      backgroundImage:{
        "star":"url('./images/bg-stars.svg')",
        "hills":"images/pattern-hills.svg",
      },
      backgroundColor:{
        "softRed":"rgba(251,96,135,0.1)",
      }
    },
  },
  plugins: [],
}
