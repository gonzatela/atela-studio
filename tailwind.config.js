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
        background: '#fdfdfd',
        surface: {
          50: '#f8f8f6',
          100: '#f2f2ef',
          200: '#e8e8e4',
          300: '#d5d5cf',
        },
        border: 'rgba(0, 0, 0, 0.08)',
        accent: {
          gold: '#c5a059',
          goldHover: '#b38e48',
          goldLight: 'rgba(197, 160, 89, 0.12)',
          dark: '#0a0a0c',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        display: ['var(--font-syne)', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s infinite ease-in-out',
        'marquee': 'marquee 30s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};
