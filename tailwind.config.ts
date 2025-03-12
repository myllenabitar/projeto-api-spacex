import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
  darkMode: ["class", "[data-theme='dark']"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        cosmic: {
          black: "#0A0E17",
          dark: "#1A1E2B",
          blue: "#0C84FE",
          "light-blue": "#5AB8FF",
          white: "#F7F9FC",
          gray: "#C4C9D4",
          purple: "#6E59A5",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        custom: {
          preto: "#141414",
          branco: "#f5f5f5",
          azulEscuro: "#0a29f5",
          azulClaro: "#6375eb",
          azulFofo: "#3a86ff",
          azulBemClaro: "#84C5DE",
          cinzaEscuro: "#525252",
          cinzaMedio: "#a3a3a3",
          cinzaClaro: "#cccccc",
        },
      },
      fontFamily: {
        inter: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Oxygen",
          "Ubuntu",
          "Cantarell",
          "Open Sans",
          "Helvetica Neue",
          "Icons16",
          "sans-serif",
        ],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-slow": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "bounce-subtle": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.6s ease-out",
        "fade-up": "fade-up 0.6s ease-out",
        "pulse-slow": "pulse-slow 4s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        "bounce-subtle": "bounce-subtle 3s ease-in-out infinite",
      },
      backgroundImage: {
        "space-gradient": "linear-gradient(180deg, #0A0E17 0%, #1A1E2B 100%)",
        "card-gradient": "linear-gradient(135deg, rgba(12, 132, 254, 0.1) 0%, rgba(110, 89, 165, 0.1) 100%)",
        "ticket-gradient": "linear-gradient(135deg, #0C84FE 0%, #6E59A5 100%)",
      },
      boxShadow: {
        neon: "0 0 10px rgba(12, 132, 254, 0.3), 0 0 20px rgba(12, 132, 254, 0.2), 0 0 30px rgba(12, 132, 254, 0.1)",
        card: "0 8px 30px rgba(10, 14, 23, 0.15)",
        ticket: "0 12px 40px rgba(12, 132, 254, 0.2)",
      },	 	
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;

