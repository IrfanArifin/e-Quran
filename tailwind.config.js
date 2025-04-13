// tailwind.config.js
module.exports = {
  important: true,  
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        'blue-light': '#9FB3DF',
        'blue-sky': '#9EC6F3',
        'blue-pale': '#BDDDE4',
        'cream': '#FFF1D5',
      }
    }
  },
  plugins: [],
}