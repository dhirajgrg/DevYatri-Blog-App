/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"DM Serif Display"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      colors: {
        green: {
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
        },
        neutral: {
          50:  '#f5f5f5',
          100: '#eeeeee',
          200: '#cccccc',
          300: '#aaaaaa',
          400: '#888888',
          500: '#666666',
          600: '#555555',
          700: '#444444',
          800: '#2a2a2a',
          850: '#1e1e1e',
          900: '#161616',
          950: '#0f0f0f',
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.5s ease both',
        'progress': 'progress 1.2s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        progress: {
          from: { width: '0%' },
          to:   { width: '100%', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}
