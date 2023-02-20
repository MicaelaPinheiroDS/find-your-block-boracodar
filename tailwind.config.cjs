/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  darkMode: 'class',
  theme: {
    colors: {
      'red': '#E45858',
      'purple': '#6246EA',
      'orange': 'orange',
      'black': '#121214',
      'white': 'white',
    },
    extend: {
      backgroundImage: {
        'illustration-1' : "url('/images/illustration-01.png')",
        'illustration-2' : "url('/images/illustration-02.png')",
        'chevron-down' : "url('/images/chevron-down.svg')",
        'icon-carnaval' : "url('/images/icon-carnaval.png')",
        'icon-search' : "url('/images/icon-search.svg')",
        'icon-location' :"url('/images/location.svg')",
      },
    },
  },
  plugins: [],
}
