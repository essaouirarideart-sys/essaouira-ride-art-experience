import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: "#0A0A0A",
          card: "#141414",
          elevated: "#1E1E1E",
          subtle: "#181818",
        },
        gold: {
          DEFAULT: "#C8A050",
          light: "#E2C47E",
          dark: "#9B7A36",
        },
        sunset: {
          DEFAULT: "#D4763A",
          deep: "#B04A1A",
          glow: "#F2A65A",
        },
        ink: {
          DEFAULT: "#F5F0E8",
          muted: "#A39E94",
          dim: "#6E6A62",
        },
        border: {
          DEFAULT: "#2A2722",
          subtle: "#1F1C18",
          gold: "rgba(200, 160, 80, 0.25)",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.22em",
      },
      backgroundImage: {
        "gradient-hero":
          "linear-gradient(180deg, rgba(10,10,10,0.0) 0%, rgba(10,10,10,0.5) 60%, rgba(10,10,10,0.95) 100%)",
        "gradient-gold":
          "linear-gradient(135deg, #E2C47E 0%, #C8A050 50%, #9B7A36 100%)",
        "gradient-sunset":
          "linear-gradient(135deg, #F2A65A 0%, #D4763A 55%, #B04A1A 100%)",
        "gradient-radial-sunset":
          "radial-gradient(ellipse at top, rgba(212,118,58,0.18) 0%, rgba(10,10,10,0) 60%)",
      },
      boxShadow: {
        gold: "0 0 0 1px rgba(200,160,80,0.35), 0 10px 40px -10px rgba(200,160,80,0.25)",
        card: "0 30px 60px -25px rgba(0,0,0,0.7)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slow-zoom": {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.08)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out forwards",
        "slow-zoom": "slow-zoom 14s ease-out forwards",
        shimmer: "shimmer 2.5s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
