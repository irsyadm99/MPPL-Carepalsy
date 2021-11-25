module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        banner: "url('/banner1.png')",
      },
      colors: {
        primary: {
          DEFAULT: "#29717F",
          surface: "#E0F0F2",
          border: "#B8D0D4",
          hover: "#225E6A",
          focus: "#29717F",
          pressed: "#14383F",
        },
        secondary: {
          DEFAULT: "#E95464",
          surface: "#FBDDE0",
          border: "#F8C6CB",
          hover: "#C24653",
          focus: "#E95464",
          pressed: "#742A32",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwind-scrollbar")],
};
