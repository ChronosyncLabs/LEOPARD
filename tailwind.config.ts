import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        nike: {
          black: "#111",
          carbon: "#0b0b0b",
          white: "#ffffff",
        },
      },
      fontFamily: {
        antonio: ['var(--font-antonio)', 'sans-serif'],
        archivo: ['var(--font-archivo)', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.08em',
      },
    },
  },
  plugins: [],
} satisfies Config;
