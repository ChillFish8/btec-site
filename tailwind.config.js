const colours = require("tailwindcss/colors");

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      purple: colours.violet,
      gray: colours.trueGray,
      red: colours.red,
      yellow: colours.yellow,
      green: colours.green,
      blue: colours.blue,
      indigo: colours.indigo,
      white: colours.white,
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
