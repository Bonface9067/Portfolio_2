/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: '#00ffc8',
          50: '#e6fff9',
          100: '#b3ffec',
          400: '#00ffc8',
          500: '#00d4a8',
          600: '#00a888',
        },
        ink: {
          bg: '#050812',
          bg2: '#070d1a',
          text: '#f0f4ff',
          muted: 'rgba(200,220,255,0.6)',
        },
      },
      fontFamily: {
        display: ["'Syne'", 'sans-serif'],
        sans: ["'DM Sans'", 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 30px rgba(0,255,200,0.25)',
      },
      backgroundImage: {
        'grid-dark':
          'linear-gradient(rgba(0,255,200,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,200,0.06) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
};
