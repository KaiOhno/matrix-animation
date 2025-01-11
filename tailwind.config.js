/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'cellInfection': 'cellInfection 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)',
      },
      keyframes: {
        cellInfection: {
          '0%': { 
            opacity: '0',
            transform: 'scale(0) rotate(0deg)'
          },
          '60%': {
            opacity: '0.8',
            transform: 'scale(1.3) rotate(var(--rotation))'
          },
          '100%': { 
            opacity: '1',
            transform: 'scale(var(--scale)) rotate(var(--rotation))'
          }
        }
      }
    },
  },
  plugins: [],
}