/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
        colors:{
          paytou_green:"#4daa46",   
          paytou_orange:"#f39009",   
        }
    },
  },
  plugins: [],
}

