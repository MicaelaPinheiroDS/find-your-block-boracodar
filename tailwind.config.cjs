/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    colors: {
      'red': '#E45858',
      'purple': '#6246EA',
      'black': '#121214',
      'white': 'white',
    },
    extend: {
      backgroundImage: {
        'illustration-1' : "url('./src/assets/img/illustration-01.png')",
        'illustration-2' : "url('./src/assets/img/illustration-02.png')",
        'chevron-down' : "url('./src/assets/img/chevron-down.svg')",
        'icon-carnaval' : "url('./src/assets/img/icon-carnaval.png",
        'icon-search' : "url(./src/assets/img/icon-search.svg)",
        'icon-location' :"url(./src/assets/img/location.svg)",
      },
    },
  },
  plugins: [],
}
