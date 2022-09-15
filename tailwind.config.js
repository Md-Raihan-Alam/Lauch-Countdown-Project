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
        "softDarkBlue":"rgba(182,189,200,0.9)",
        "softBlack":"rgba(0,0,0,0.5)",
        "softVeryBlue":"rgba(29,32,37,0.3)"
      },
      spacing:{
        "box":"150px",
      }
    },
  },
  plugins: [],
}
