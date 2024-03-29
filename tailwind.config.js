/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },

    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
      },
      colors: {
        mainBackground: "rgb(29 78 216)",
      },
      fontFamily: {
        sans: ["Bai Jamjuree", "sans-serif"],
      },
      gridTemplateColumns: {
        "30/70": "28% 70%",
      },
    },
  },
  plugins: [],
};
