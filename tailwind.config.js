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
        "white":"hsl(0, 0%, 100%)",
        "darkDesaturatedBlue":"hsl(236, 21%, 26%)",
        "veryDarkBlue":"hsl(235, 16%, 14%)",
        "verDark":"hsl(234, 17%, 12%)",
        "grayishBlue":"hsl(237, 18%, 59%)",
        "softRed":"hsl(345, 95%, 68%)",
        "softRedBg":"rgba(251,96,135,0.2)",
        "grayishBLueBg":"rgba(132,134,169,0.2)",
        "darkDesaturatedBlueBg":"rgba(52,54,80,0.2)",
        "veryDarkBlueBg":"rgba(30,31,41,0.2)",
        "veryDarkBlue":"rgba(25,26,36,0.7)"
      },
      colors:{
        "darkDesaturatedBlue":"hsl(236, 21%, 26%)",
        "veryDarkBlue":"hsl(235, 16%, 14%)",
        "verDark":"hsl(234, 17%, 12%)",
        "grayishBlue":"hsl(237, 18%, 59%)",
        "softRed":"hsl(345, 95%, 68%)",
      },
      spacing:{
        "box":"150px",
      },
    },
  },
  plugins: [],
}
