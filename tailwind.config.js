/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      animation: {
        "loop-scroll": "loop-scroll 8s linear infinite"
      },
      keyframes: {
        "loop-scroll": {
          from: { transform: "translateX(5%)" },
          to: { transform: "translateX(-37%)" }
        }
      }
    },
  },
  plugins: [],
}

