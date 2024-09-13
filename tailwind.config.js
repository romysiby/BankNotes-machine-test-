/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        "2xl": "1245px",
        "2.3xl": "1110px",
        "2.2xl": "935px",
        "1xl": "866px",
        "1.1xl": "850px",
        "xlmob":"710px",
        "xmob": "550px",
        "mob": "400px",
        "mdmob": "490px",
        "smmob":"350px",
        "xlsm": "310px"
      }
    },
  },
  plugins: [],
}

