/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          primary: "#000000",
          secondary: "#050505",
          card: "#0A0A0A",
        },
        primary: "#22C55E",
        accent: "#A3E635",
        text: {
          primary: "#FFFFFF",
          secondary: "#9AA4B2",
        },
      },
      fontFamily: {
        inter: ["Inter", "ui-sans-serif", "system-ui", "-apple-system", "sans-serif"],
      },
      borderRadius: {
        card: "20px",
        btn: "12px",
      },
      boxShadow: {
        glow: "0 15px 60px rgba(34, 197, 94, 0.35)",
        card: "0 10px 40px rgba(7, 50, 35, 0.45)",
        neon: "0 0 0 1px rgba(34,197,94,0.35), 0 25px 80px rgba(34,197,94,0.35)",
      },
      backgroundImage: {
        "grid-radial": "radial-gradient(circle at 20% 20%, rgba(34, 197, 94, 0.18), transparent 35%), radial-gradient(circle at 80% 0%, rgba(163, 230, 53, 0.12), transparent 28%)",
        "diagonal-glow": "linear-gradient(135deg, rgba(34, 197, 94, 0.15), rgba(163, 230, 53, 0.1))",
        "hero-mesh": "radial-gradient(circle at 20% 20%, rgba(34,197,94,0.18), transparent 32%), radial-gradient(circle at 80% 0%, rgba(163,230,53,0.14), transparent 30%), radial-gradient(circle at 40% 80%, rgba(34,197,94,0.12), transparent 30%)",
        "glass-sheen": "linear-gradient(120deg, rgba(255,255,255,0.08), rgba(255,255,255,0))",
      },
      keyframes: {
        floaty: {
          "0%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
          "100%": { transform: "translateY(0px)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(34,197,94,0.35)" },
          "50%": { boxShadow: "0 0 0 12px rgba(34,197,94,0)" },
        },
      },
      animation: {
        "float-slow": "floaty 6s ease-in-out infinite",
        "pulse-glow": "pulseGlow 3.6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
