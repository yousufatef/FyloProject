/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#67dbda",
      },
      keyframes: {
        moveRight: {
          "0%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(10px)" },
          "100%": { transform: "translateX(0)" },
        },
        moveUp: {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(10px)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      animation: {
        moveRight: "moveRight 1s ease-in-out infinite",
        moveUp: "moveUp 1s ease-in-out infinite",
      },
      screens: {
        sm: "540px",
        md: "720px",
        lg: "960px",
        xlg: "1140px",
        "2xlg": "1400px",
      },
    },
  },
  plugins: [],
};
