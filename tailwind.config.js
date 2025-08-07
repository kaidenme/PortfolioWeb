/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        underlinePulse: 'underlinePulse 3s ease-in-out infinite',
        glow: 'glow 3s ease-in-out infinite',
        'float-thread-1': 'floatThread1 15s linear infinite',
    'float-thread-2': 'floatThread2 12s linear infinite reverse',
    'float-thread-3': 'floatThread3 18s linear infinite'
      },
      keyframes: {
        floatThread1: {
      '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
      '25%': { transform: 'translate(20px, -15px) rotate(5deg)' },
      '50%': { transform: 'translate(10px, 20px) rotate(-5deg)' },
      '75%': { transform: 'translate(-15px, -10px) rotate(3deg)' }
    },
    floatThread2: {
      '0%, 100%': { transform: 'translate(0, 0) rotate(5deg)' },
      '33%': { transform: 'translate(-20px, 15px) rotate(-3deg)' },
      '66%': { transform: 'translate(15px, -20px) rotate(7deg)' }
    },
    floatThread3: {
      '0%, 100%': { transform: 'translate(0, 0) rotate(-2deg)' },
      '20%': { transform: 'translate(25px, 10px) rotate(5deg)' },
      '40%': { transform: 'translate(-15px, 20px) rotate(-7deg)' },
      '60%': { transform: 'translate(10px, -25px) rotate(3deg)' },
      '80%': { transform: 'translate(-20px, -15px) rotate(-5deg)' }
    },
        underlinePulse: {
          '0%': { width: '0%', opacity: 0 },
          '50%': { width: '100%', opacity: 1 },
          '100%': { width: '0%', opacity: 0 }
        },
        glow: {
          '0%, 100%': { 
            boxShadow: '0 0 0 0px rgba(45, 212, 191, 0.3)',
          },
          '50%': { 
            boxShadow: '0 0 0 8px rgba(45, 212, 191, 0)',
          }
        }
      }
    }
  },
  plugins: [],
  darkMode: 'class',
}