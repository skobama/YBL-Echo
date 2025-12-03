import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./client/**/*.{ts,tsx}"],
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
        yanbal: {
          DEFAULT: "hsl(var(--yanbal))",
          black: "hsl(var(--yanbal-black))",
          20: "hsl(var(--yanbal-20))",
          30: "hsl(var(--yanbal-30))",
          50: "hsl(var(--yanbal-50))",
        },
        neutral: {
          10: "hsl(var(--neutral-10))",
          20: "hsl(var(--neutral-20))",
          30: "hsl(var(--neutral-30))",
          60: "hsl(var(--neutral-60))",
          90: "hsl(var(--neutral-90))",
        },
        mint: {
          10: "hsl(var(--mint-10))",
          40: "hsl(var(--mint-40))",
        },
        crimson: {
          10: "hsl(var(--crimson-10))",
          20: "hsl(var(--crimson-20))",
          40: "hsl(var(--crimson-40))",
        },
        peach: {
          10: "hsl(var(--peach-10))",
        },
        olive: {
          10: "hsl(var(--olive-10))",
        },
        blue: {
          20: "hsl(var(--blue-20))",
        },
        aegean: {
          40: "hsl(var(--aegean-40))",
        },
        red: {
          100: "hsl(var(--red-100))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
