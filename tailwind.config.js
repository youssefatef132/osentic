/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        obsidian: {
          DEFAULT: '#0a0a0a',
          50: '#1a1a1a',
          100: '#141414',
          200: '#0f0f0f',
        },
        cream: {
          DEFAULT: '#f5f0e8',
          50: '#fdfaf5',
          100: '#f9f4ec',
          200: '#f5f0e8',
          300: '#ede5d5',
          400: '#e2d6c0',
          500: '#d4c4a5',
        },
        champagne: {
          DEFAULT: '#f2e8d0',
          100: '#f7f0de',
          200: '#f2e8d0',
          300: '#e8d9b5',
        },
        gold: {
          DEFAULT: '#c9a84c',
          50: '#fdf8ec',
          100: '#f7e9c0',
          200: '#edcf82',
          300: '#e0b84e',
          400: '#c9a84c',
          500: '#b8960c',
          600: '#9a7c0a',
          700: '#7a6208',
          800: '#5a4806',
          900: '#3a2e04',
        },
        noir: '#121212',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
      },
      letterSpacing: {
        'ultra-wide': '0.35em',
        'brand': '0.2em',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'float-slower': 'float 12s ease-in-out infinite',
        'rotate-slow': 'rotateSlow 20s linear infinite',
        'rotate-slower': 'rotateSlow 30s linear infinite',
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'fade-in': 'fadeIn 1.2s ease-out forwards',
        'shimmer': 'shimmer 2.5s ease-in-out infinite',
        'pulse-gold': 'pulseGold 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '33%': { transform: 'translateY(-18px) rotate(3deg)' },
          '66%': { transform: 'translateY(-8px) rotate(-2deg)' },
        },
        rotateSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        shimmer: {
          '0%, 100%': { opacity: '0.7' },
          '50%': { opacity: '1' },
        },
        pulseGold: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(201,168,76,0.0)' },
          '50%': { boxShadow: '0 0 30px 8px rgba(201,168,76,0.18)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};
