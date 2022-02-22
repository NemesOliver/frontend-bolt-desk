module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      fontSize: {
        p: ["1.25rem"], // 18px
      },
      colors: {
        body: "#EFEFEF",
        background: "#FFFFFF",
        primary: "#0A2637",
        secondary: "#F89B1C",
      },
    },
  },
  plugins: [],
};
