/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#faf8f5', // Blanco crudo / Warm raw porcelain off-white
        surface: {
          50: '#f5f2eb',
          100: '#eee9de',
          200: '#e3dcce',
          300: '#d0c6b3',
        },
        border: 'rgba(0, 0, 0, 0.07)',
        accent: {
          gold: '#c5a059',
          goldHover: '#b38e48',
          goldLight: 'rgba(197, 160, 89, 0.12)',
          dark: '#1c1917',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        display: ['var(--font-syne)', 'sans-serif'],
      },
      transitionTimingFunction: {
        'emil-out': 'cubic-bezier(0.23, 1, 0.32, 1)',
        'emil-in-out': 'cubic-bezier(0.77, 0, 0.175, 1)',
      },
    },
  },
  plugins: [],
};
