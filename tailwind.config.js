/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        midnight: "#14213D",
        silver: "#F0EFEF",
        electric: "#4361EE",
        "electric-dark": "#3651D4",
        "electric-glow": "rgba(67, 97, 238, 0.3)",
        "electric-tint": "rgba(67, 97, 238, 0.1)",
        "white-70": "rgba(255, 255, 255, 0.7)",
        "midnight-50": "rgba(20, 33, 61, 0.5)",
        "silver-60": "rgba(240, 239, 239, 0.6)",
        "error": "#E53E3E",
        "whatsapp": "#25D366",
        "whatsapp-dark": "#128C7E",
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
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
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
      },
      fontFamily: {
        sans: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display': ['72px', { lineHeight: '1.05', letterSpacing: '-0.02em', fontWeight: '500' }],
        'display-lg': ['64px', { lineHeight: '1.05', letterSpacing: '-0.02em', fontWeight: '500' }],
        'display-md': ['56px', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '500' }],
        'display-sm': ['44px', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '500' }],
        'h2': ['48px', { lineHeight: '1.15', letterSpacing: '-0.01em', fontWeight: '500' }],
        'h2-lg': ['44px', { lineHeight: '1.15', letterSpacing: '-0.01em', fontWeight: '500' }],
        'h2-md': ['40px', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '500' }],
        'h2-sm': ['32px', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '500' }],
        'h3': ['24px', { lineHeight: '1.3', fontWeight: '500' }],
        'h3-md': ['22px', { lineHeight: '1.3', fontWeight: '500' }],
        'h3-sm': ['20px', { lineHeight: '1.3', fontWeight: '500' }],
        'body': ['18px', { lineHeight: '1.65', fontWeight: '400' }],
        'body-sm': ['16px', { lineHeight: '1.6', fontWeight: '400' }],
        'caption': ['12px', { lineHeight: '1.5', fontWeight: '500', letterSpacing: '0.02em' }],
      },
      borderRadius: {
        xl: "calc(var(--radius) + 4px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xs: "calc(var(--radius) - 6px)",
      },
      boxShadow: {
        xs: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        'card': '0 4px 24px rgba(20, 33, 61, 0.08)',
        'card-hover': '0 8px 40px rgba(20, 33, 61, 0.12)',
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
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
        "hero-fade-up": {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "hero-fade-up-sm": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "hero-fade-up-xs": {
          from: { opacity: "0", transform: "translateY(15px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "caret-blink": "caret-blink 1.25s ease-out infinite",
        "hero-headline": "hero-fade-up 0.8s cubic-bezier(0.165, 0.84, 0.44, 1) 0s forwards",
        "hero-desc": "hero-fade-up-sm 0.8s cubic-bezier(0.165, 0.84, 0.44, 1) 0.15s forwards",
        "hero-cta1": "hero-fade-up-xs 0.8s cubic-bezier(0.165, 0.84, 0.44, 1) 0.3s forwards",
        "hero-cta2": "hero-fade-up-xs 0.8s cubic-bezier(0.165, 0.84, 0.44, 1) 0.4s forwards",
        "hero-trust": "hero-fade-up-xs 0.8s cubic-bezier(0.165, 0.84, 0.44, 1) 0.5s forwards",
        "float": "float 3s ease-in-out infinite",
        "pulse-soft": "pulse-soft 2s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
