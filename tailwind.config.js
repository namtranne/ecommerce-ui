/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      transitionDuration: {
        '2000': '2000ms',
        '10000': '10000ms',
      },
      gradientColorStopPositions: {
        14: '14%',
        20: '20%',
        25: '25%',
        30: '30%',
      },
      colors: {
        'titanium-100': '#bad9cd',
        'titanium-200': '#455f63',
      },
    },
    backgroundSize: {
      '200%': '200%',
      '300%': '300%',
      '400%': '400%',
    },
  },
  plugins: [],
};
