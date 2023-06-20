/** @type {import('tailwindcss').Config} */
module.exports = {
  
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
   daisyui: {
      themes: [
        {
          mytheme: {
          
 "primary": "#f9eb90",
          
 "secondary": "#4cce35",
          
 "accent": "#e899c0",
          
 "neutral": "#21242C",
          
 "base-100": "#3A4E59",
          
 "info": "#82A4E3",
          
 "success": "#1BDE83",
          
 "warning": "#AA850E",
          
 "error": "#E34F5D",
          },
        },
      ],
    },
  plugins: [require("daisyui")],
}
