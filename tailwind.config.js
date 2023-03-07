/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "gray-20": "#F8F4EB",
        "gray-50": "#EFE6E6",
        "gray-100": "#DFCCCC",
        "gray-500": "#808285",
        "primary-100": "#d1e3f2",
        "primary-300": "#76acd7",
        "primary-500": "#1b75bc",
        "secondary-400": "#FFCD58",
        "secondary-500": "#FFC132",
      },
      backgroundImage: (theme) => ({
        "gradient-indigo": "linear-gradient(90deg, #5d1e3f2 0%, #DFCCCC 100%)",
        "mobile-home": "url('/assets/mobile-home.jpg')",
      }),
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      content: {
        dorsettext: "url('../assets/dorsetText.png')",
        absrtactwaves: 'url("../assets/absrtactWaves.png")',
        sparkles: 'url("../assets/Sparkles.png")',
        circles: 'url("../assets/Circles.png")',
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
};
