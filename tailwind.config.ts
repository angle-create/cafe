import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4A3728",
        accent: "#E6B325",
        "light-brown": "#8C7B6B",
        cream: "#F5F0E6",
        gray: {
          DEFAULT: "#666666",
        },
        error: "#DC2626",
        success: "#059669",
        warning: "#D97706",
        info: "#2563EB",
      },
      fontFamily: {
        sans: ["Noto Sans JP", "system-ui", "sans-serif"],
        display: ["Playfair Display", "serif"],
      },
      fontSize: {
        h1: ["2.5rem", { lineHeight: "1.2" }],
        h2: ["2rem", { lineHeight: "1.3" }],
        h3: ["1.5rem", { lineHeight: "1.4" }],
        body: ["1rem", { lineHeight: "1.5" }],
        small: ["0.875rem", { lineHeight: "1.4" }],
        price: ["1.25rem", { lineHeight: "1.4" }],
      },
      spacing: {
        xs: "0.5rem",
        sm: "1rem",
        md: "1.5rem",
        lg: "2rem",
        xl: "3rem",
      },
      maxWidth: {
        container: "1280px",
      },
      borderRadius: {
        DEFAULT: "0.5rem",
      },
    },
  },
  plugins: [],
};

export default config; 