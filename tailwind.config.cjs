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
          primary: "#020408",
          secondary: "#050a0e",
          card: "#080f14",
        },
        primary: "#00FF88",
        "primary-dim": "#22C55E",
        accent: "#A3E635",
        "accent-2": "#00D4FF",
        "accent-3": "#FF6B35",
        gold: "#FFD700",
        text: {
          primary: "#FFFFFF",
          secondary: "#8fa4b8",
          muted: "#4D6476",
        },
      },
      fontFamily: {
        inter: ["Inter", "ui-sans-serif", "system-ui", "-apple-system", "sans-serif"],
        mono: ["JetBrains Mono", "Fira Code", "ui-monospace", "monospace"],
      },
      borderRadius: {
        card: "24px",
        btn: "14px",
        xl2: "28px",
      },
      boxShadow: {
        glow: "0 0 30px rgba(0,255,136,0.4), 0 20px 60px rgba(0,255,136,0.2)",
        "glow-sm": "0 0 15px rgba(0,255,136,0.3)",
        "glow-lg": "0 0 60px rgba(0,255,136,0.5), 0 30px 80px rgba(0,255,136,0.25)",
        card: "0 8px 32px rgba(0,0,0,0.6), 0 2px 8px rgba(0,255,136,0.08)",
        neon: "0 0 0 1px rgba(0,255,136,0.4), 0 0 30px rgba(0,255,136,0.35), inset 0 0 30px rgba(0,255,136,0.05)",
        "neon-blue": "0 0 0 1px rgba(0,212,255,0.4), 0 0 30px rgba(0,212,255,0.3)",
        "neon-gold": "0 0 0 1px rgba(255,215,0,0.4), 0 0 30px rgba(255,215,0,0.3)",
        "inner-glow": "inset 0 1px 0 rgba(255,255,255,0.08), inset 0 -1px 0 rgba(0,0,0,0.4)",
        depth: "0 25px 80px rgba(0,0,0,0.8), 0 10px 30px rgba(0,0,0,0.4)",
      },
      backgroundImage: {
        "grid-radial": "radial-gradient(circle at 20% 20%, rgba(0,255,136,0.15), transparent 35%), radial-gradient(circle at 80% 0%, rgba(163,230,53,0.1), transparent 28%)",
        "diagonal-glow": "linear-gradient(135deg, rgba(0,255,136,0.12), rgba(163,230,53,0.08))",
        "hero-mesh": "radial-gradient(ellipse at 15% 25%, rgba(0,255,136,0.2), transparent 40%), radial-gradient(ellipse at 85% 10%, rgba(0,212,255,0.12), transparent 35%), radial-gradient(ellipse at 50% 80%, rgba(0,255,136,0.1), transparent 40%)",
        "glass-sheen": "linear-gradient(120deg, rgba(255,255,255,0.1), rgba(255,255,255,0))",
        "card-gradient": "linear-gradient(145deg, rgba(0,255,136,0.06), rgba(0,0,0,0) 50%, rgba(0,212,255,0.04))",
        "aurora": "radial-gradient(ellipse at 0% 0%, rgba(0,255,136,0.25) 0%, transparent 50%), radial-gradient(ellipse at 100% 0%, rgba(0,212,255,0.2) 0%, transparent 50%), radial-gradient(ellipse at 50% 100%, rgba(163,230,53,0.15) 0%, transparent 50%)",
        "gold-gradient": "linear-gradient(135deg, #FFD700, #FFA500)",
        "neon-border": "linear-gradient(90deg, rgba(0,255,136,0), rgba(0,255,136,0.8), rgba(0,212,255,0.8), rgba(0,255,136,0))",
      },
      keyframes: {
        floaty: {
          "0%": { transform: "translateY(0px) rotate(0deg)" },
          "33%": { transform: "translateY(-10px) rotate(1deg)" },
          "66%": { transform: "translateY(-6px) rotate(-1deg)" },
          "100%": { transform: "translateY(0px) rotate(0deg)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(0,255,136,0.4), 0 0 15px rgba(0,255,136,0.2)" },
          "50%": { boxShadow: "0 0 0 14px rgba(0,255,136,0), 0 0 40px rgba(0,255,136,0.4)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        ticker: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        spinSlow: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        beamSweep: {
          "0%": { transform: "translateX(-100%) skewX(-15deg)" },
          "100%": { transform: "translateX(300%) skewX(-15deg)" },
        },
        orbPulse: {
          "0%, 100%": { opacity: "0.5", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(1.1)" },
        },
        gradientShift: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        borderGlow: {
          "0%, 100%": { borderColor: "rgba(0,255,136,0.3)" },
          "50%": { borderColor: "rgba(0,212,255,0.6)" },
        },
        scanLine: {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "10%": { opacity: "1" },
          "90%": { opacity: "1" },
          "100%": { transform: "translateY(1000%)", opacity: "0" },
        },
        textReveal: {
          "0%": { clipPath: "inset(0 100% 0 0)" },
          "100%": { clipPath: "inset(0 0% 0 0)" },
        },
        counting: {
          "0%": { transform: "translateY(50%)", opacity: "0" },
          "100%": { transform: "translateY(0%)", opacity: "1" },
        },
        neonPulse: {
          "0%, 100%": { textShadow: "0 0 10px rgba(0,255,136,0.8), 0 0 20px rgba(0,255,136,0.4)" },
          "50%": { textShadow: "0 0 20px rgba(0,255,136,1), 0 0 40px rgba(0,255,136,0.6), 0 0 60px rgba(0,255,136,0.3)" },
        },
      },
      animation: {
        "float-slow": "floaty 7s ease-in-out infinite",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        shimmer: "shimmer 2.5s linear infinite",
        ticker: "ticker 30s linear infinite",
        "spin-slow": "spinSlow 12s linear infinite",
        "beam-sweep": "beamSweep 3s ease-in-out infinite",
        "orb-pulse": "orbPulse 4s ease-in-out infinite",
        "gradient-shift": "gradientShift 6s ease infinite",
        "border-glow": "borderGlow 3s ease-in-out infinite",
        "scan-line": "scanLine 4s ease-in-out infinite",
        "neon-pulse": "neonPulse 2s ease-in-out infinite",
      },
      backdropBlur: {
        xs: "2px",
        "4xl": "72px",
      },
    },
  },
  plugins: [],
};
