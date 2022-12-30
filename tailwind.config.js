/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        socialtheme: {
          primary: "#25D366",
          secondary: "#FBFCFE",
          accent: "#FFFFFF",
          neutral: "#3d4451",
          "base-100": "#E1DEED",
        },
      },
      "dark",
      "cupcake",
    ],
  },
}
