import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
      },
      keyframes: {
        hue: {
          '0%': { filter: 'hue-rotate(0deg)' },
          '100%': { filter: 'hue-rotate(360deg)' },
        },
        gradientFlow: {
          '100%': { backgroundPosition: '200% 400%' },
        },
      },
      animation: {
        hue: 'hue 7s linear infinite', // Customize duration and easing here
        gradientFlow: 'gradientFlow 3s ease infinite',
      },
      backgroundSize: {
        'gradient-size': '200% 200%', // To allow smooth gradient flow
      },
    },
  },
  plugins: [],
} satisfies Config;
