import type { Config } from "tailwindcss"

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cafe: {
          black: "#0A0A0A",
          charcoal: "#1A1A1A",
          gold: "#D4A853",
          cream: "#F5F2EA",
          orange: "#E87A2F",
          sage: "#8BAF7F",
        },
      },
      fontFamily: {
        heading: ["var(--font-heading)", "Montserrat", "sans-serif"],
        body: ["var(--font-body)", "DM Sans", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 40px rgba(212, 168, 83, 0.22)",
      },
    },
  },
  plugins: [],
}
export default config
