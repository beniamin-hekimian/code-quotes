/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mypink: '#de5197',
        mypurple: '#a354f5',
        myblue: '#6770e9',
      },
      backgroundImage: {
        'leonardo-grid': "url('https://leonardo-cdn.b-cdn.net/wp-content/uploads/2024/06/bg-grid-hero-m.svg')",
        'leonardo-gradient': "url('https://leonardo-cdn.b-cdn.net/wp-content/uploads/2024/06/bg-new-h-nogrid.png')",
      },
    },
  },
  plugins: [],
}
