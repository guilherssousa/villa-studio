const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    fontFamily: {
      sans: ["Lato", fontFamily.sans],
    },
    extend: {},
  },
  plugins: [],
};
