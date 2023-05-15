/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'ceru': '#437C90',
      'dsg': '#255957',
      'ddsg': '#183A38',
      'eggshell': '#EEEBD3',
      'golden': '#A08040',
      'ecru': '#E2DCB6'
    },
    extend: {
      borderRadius: {
        '160': '160px'
      },
      spacing: {
        'hs': '760px',
        'hc': '400px'
      }
    },
  },
  plugins: [],
}

