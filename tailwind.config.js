  /** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
        colors:{
          paytou_green:"#4daa46",   
          paytou_orange:"#f39009", 
          primary_gray:"#334155",  
          secondary_gray:"#475569",
          tertiary_gray:"#94a3b8",
          secondary_background:"#e5e7eb",
        },
        boxShadow: {
          '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
        }
    },
  },
  plugins: [],
}

