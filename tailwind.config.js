/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {},
    fontFamily: {
      heading: ["Volkhov", "serif"],
      text: ["Poppins", "sans-serif"],
    },
    colors: {
      blue: {
        100: "#d0d1d8",
        200: "#a1a3b2",
        300: "#72748b",
        400: "#434665",
        500: "#14183e",
        600: "#101332",
        700: "#0c0e25",
        800: "#080a19",
        900: "#04050c",
      },

      lol: {
        100: "#d1d2db",
        200: "#a3a5b7",
        300: "#747893",
        400: "#464b6f",
        500: "#181e4b",
        600: "#13183c",
        700: "#0e122d",
        800: "#0a0c1e",
        900: "#05060f",
      },
      gray: {
        100: "#dfe0e6",
        200: "#bfc0cd",
        300: "#9ea1b4",
        400: "#7e819b",
        500: "#5e6282",
        600: "#4b4e68",
        700: "#383b4e",
        800: "#262734",
        900: "#13141a",
      },
      red: {
        100: "#f9e1dc",
        200: "#f2c3b9",
        300: "#eca597",
        400: "#e58774",
        500: "#df6951",
        600: "#b25441",
        700: "#863f31",
        800: "#592a20",
        900: "#2d1510",
      },
      yellow: "#F1A501",
      textBlue: "#14183E",
      textBody: "#5E6282",
      textHeading: "#1E1D4C",
    },
  },
  plugins: [],
};
