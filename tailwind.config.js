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
      zIndex: {
        '-1': '-1',
        '-10': '-10',
      },
      borderRadius: {
        '160': '160px'
      },
      spacing: {
        'hs': '650px',
        'hc': '400px',
        'ha': '1200px',
        'hp': '1300px',
        'project-img': '270px',
        'project': '450px',
        'project-mobile': '400px',
        'project-img-mobile': '220px',
      }
    },
  },
  plugins: [],
}

