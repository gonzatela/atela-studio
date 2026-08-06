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
        background: '#09090b',
        surface: {
          50: '#18181b',
          100: '#1f1f23',
          200: '#27272a',
          300: '#3f3f46',
        },
        border: 'rgba(255, 255, 255, 0.08)',
        accent: {
          primary: '#6366f1',
          secondary: '#38bdf8',
          accentGlow: 'rgba(99, 102, 241, 0.15)',
          gold: '#e2b350',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        display: ['var(--font-syne)', 'sans-serif'],
      },
      animation: {
        'pulse-glow': 'pulseGlow 4s infinite ease-in-out',
        'float': 'float 6s infinite ease-in-out',
        'shimmer': 'shimmer 2.5s infinite linear',
        'marquee': 'marquee 30s linear infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
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
