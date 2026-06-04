/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Sora', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        bg: { 0: '#05060f', 1: '#0a0c1a', 2: '#0f1120', 3: '#151828' },
        surface: { DEFAULT: '#1a1d2e', 2: '#1f2235' },
        accent: { DEFAULT: '#6366f1', 2: '#818cf8', dim: '#6366f115' },
        cyan: { DEFAULT: '#22d3ee', dim: '#22d3ee15' },
        violet: '#a78bfa',
        green: '#34d399',
        amber: '#fbbf24',
        pink: '#f472b6',
        t1: '#f0f2ff',
        t2: '#a8adc8',
        t3: '#6b718e',
      },
      animation: {
        'spin-slow': 'spin 6s linear infinite',
        'spin-reverse': 'spin-reverse 6s linear infinite',
        'float': 'float 3s ease-in-out infinite',
        'blink': 'blink 1s step-end infinite',
        'orb': 'orbFloat 8s ease-in-out infinite',
      },
      keyframes: {
        'spin-reverse': { from: { transform: 'rotate(0deg)' }, to: { transform: 'rotate(-360deg)' } },
        float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-8px)' } },
        blink: { '0%,100%': { opacity: 1 }, '50%': { opacity: 0 } },
        orbFloat: { '0%,100%': { transform: 'translateY(0) scale(1)' }, '50%': { transform: 'translateY(-30px) scale(1.05)' } },
      },
    },
  },
  plugins: [],
}
