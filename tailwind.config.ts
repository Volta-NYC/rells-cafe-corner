import type { Config } from "tailwindcss"

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cafe: {
          ink: "#0A0A0A",
          inkSoft: "#1F2937",
          muted: "#6B7280",
          subtle: "#9CA3AF",
          line: "#E5E7EB",
          surface: "#FFFFFF",
          bg: "#F7F7F5",
          tint: "#FCE4E4",
          tintSoft: "#FFF1F1",
          rose: "#E85A6F",
          roseDeep: "#C53D52",
          sage: "#8BAF7F",
        },
      },
      fontFamily: {
        heading: ["var(--font-heading)", "Montserrat", "sans-serif"],
        body: ["var(--font-body)", "DM Sans", "sans-serif"],
      },
      boxShadow: {
        soft: "0 12px 40px -24px rgba(15, 23, 42, 0.20)",
        glow: "0 18px 48px -22px rgba(232, 90, 111, 0.35)",
        card: "0 1px 0 rgba(15,23,42,0.04), 0 8px 24px -16px rgba(15,23,42,0.18)",
      },
    },
  },
  plugins: [],
}
export default config
