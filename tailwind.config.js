module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"SF Pro Display"', "sans-serif"], // or a sleek font like Inter
      },
      transitionDuration: {
        DEFAULT: '400ms',
      },
      boxShadow: {
        smooth: "0 20px 60px rgba(0,0,0,0.2)",
      },
    },
  },
  
  plugins: [],
}
