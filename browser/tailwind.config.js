/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [".css/src/**/*.{html,js}",'./main.html',
  './index.html','./js.{html,js}',],
  theme: {
    extend: {
      colors:{
        "slate-WA":"#94A3B8",
        "gray_WA":"#D1D5DB",
        "blue_WA":"#2563EB",
        "orange_WA":"#FDBA74",
        "lila_WA":"#A5B4FC"
      }
    },
    fontFamily:{ 
      Source_Sans_Pro:["Source_Sans_Pro, sans-serif"]
    },
    container:{
      center: true,
      padding: '1rem',
      screens:{
        lg:"1124px",
        xd: "1124px",
        "2xl":"1124px",
      },
    },
  },
  plugins: [],
}