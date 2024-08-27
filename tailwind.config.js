/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        supreme_regular: ["Supreme-Regular"],
        supreme_bold: ["Supreme-Bold"],
        supreme_extrabold: ["Supreme-ExtraBold"],
        supreme_light: ["Supreme-Light"],
      },
      height: {
        "13": "3.25rem"
      },
      transitionDuration: {
        2000: "2000ms",
        10000: "10000ms",
      },
      gradientColorStopPositions: {
        14: "14%",
        20: "20%",
        25: "25%",
        30: "30%",
      },
      colors: {
        "g5-white": "#f7f7f7",
        "g5-grey": "#eeeeee",
        "g5-black": "#393e46",
        "g5-cream": "#929aab",
      },
      backgroundImage: {
        "cherish-moment": "url('https://i.ibb.co/xqJpNV5/cherish-moment.jpg')",
        "explore-techverse":
          "url(https://i.postimg.cc/sDdV1r1f/signup-banner.png)",
      },
      keyframes: {
        "infinite-scroll": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        "infinite-scroll": "infinite-scroll 30s linear infinite",
      },
    },
    backgroundSize: {
      "200%": "200%",
      "300%": "300%",
      "400%": "400%",
    },
  },
  variants: {
    fill: ['hover', 'focus'],
  },
  plugins: [],
};
