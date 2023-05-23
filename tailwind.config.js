/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      transitionDuration: {
        '2000': '2000ms',
        '3000': '3000ms',
        '4000': '4000ms',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0.0 },
          '10%': { opacity: 0.0 },
          '30%': { opacity: 0.0 },
          '50%': { opacity: 1.0 },
          '100%': { opacity: 1.0 },
        },
        fadeOut: {
          '0%': { opacity: 1.0 },
          '90%': { opacity: 0.5 },
          '100%': { opacity: 0.5 },
        },
        fadeOn: {
          '0%': { opacity: 0.0 },
          '100%': { opacity: 1.0 },
        }
      },
      animation: {
        'fade-in': 'fadeIn 3s cubic-bezier(1,.01,.65,.98)',
        'fade-out': 'fadeOut 2s cubic-bezier(1,.01,.65,.98)',
        'fade-in-2': 'fadeOn 1s alternate'
      }
    },
  },
  plugins: [],
}

