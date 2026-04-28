/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Manrope", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 90px rgba(34,211,238,.28)",
        premium: "0 30px 100px rgba(0,0,0,.45)",
      },
      animation: {
        "slow-pulse": "slowPulse 7s ease-in-out infinite",
        "float": "float 8s ease-in-out infinite",
      },
      keyframes: {
        slowPulse: {
          "0%, 100%": { opacity: ".55", transform: "scale(1)" },
          "50%": { opacity: ".9", transform: "scale(1.06)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-18px)" },
        },
      },
    },
  },
  plugins: [],
}
