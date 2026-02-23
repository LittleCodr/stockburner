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
      },
      backgroundImage: {
        "grid-radial": "radial-gradient(circle at 20% 20%, rgba(34, 197, 94, 0.18), transparent 35%), radial-gradient(circle at 80% 0%, rgba(163, 230, 53, 0.12), transparent 28%)",
        "diagonal-glow": "linear-gradient(135deg, rgba(34, 197, 94, 0.15), rgba(163, 230, 53, 0.1))",
      },
    },
  },
  plugins: [],
};
