const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    fontFamily: {
      sans: ["Lato", fontFamily.sans],
      serif: ["DM Serif Text", fontFamily.serif],
    },
    extend: {
      colors: {
        villa: "#121212",
      },
      backgroundImage: {
        hero: "url('/bg.jpg')",
      },
    },
  },
  plugins: [],
};
