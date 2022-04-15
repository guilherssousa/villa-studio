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
        hero: "url('/bg.webp')",
        stat: "linear-gradient(to right, #ca8a04 50%, transparent 50%);",
      },
      backgroundSize: {
        statSize: "200%",
      },
    },
  },
  plugins: [],
};
