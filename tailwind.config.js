/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      xs: '360px',
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      primary: "#FA782F",
      secondary: "#C4C4C4;",
      dashboardBg: "#F8F8F8",
      red: "#EE4B2B"
    },
    extend: {},
  },
  plugins: [],
}

