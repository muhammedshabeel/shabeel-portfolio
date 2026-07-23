/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Plus Jakarta Sans'", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["'Clash Display'", "'Plus Jakarta Sans'", "ui-sans-serif", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 80px rgba(99,102,241,.32)",
        "glow-sm": "0 0 40px rgba(99,102,241,.22)",
        premium: "0 30px 100px rgba(0,0,0,.55)",
        "violet-glow": "0 8px 40px rgba(139,92,246,.35)",
      },
      animation: {
        "slow-pulse": "slowPulse 8s ease-in-out infinite",
        float: "float 9s ease-in-out infinite",
        ticker: "ticker 24s linear infinite",
        shimmer: "shimmer 2.8s ease-in-out infinite",
        "fade-up": "fadeUp .6s ease both",
      },
      keyframes: {
        slowPulse: {
          "0%, 100%": { opacity: ".4", transform: "scale(1)" },
          "50%": { opacity: ".8", transform: "scale(1.07)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        ticker: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
