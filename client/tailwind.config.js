/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      fontFamily: {
        'lucio': ['PT Sans', 'sans-serif'],
        'title': ['Noto Sans SC', 'sans-serif'],
        'paragraph': ['Poppins', 'sans-serif']
      },
      screens: {
        'tablet': '700px',
        'notebook': '900px'
      },
      animation: {
        bounce: 'bounce 1s infinite'
      },
      keyframes: {
        bounce: {
          '0%, 100%': { transform: 'translateY(-10px)' },
          '50%': { transform: 'translateY(0)' }
        }
      }
    },
  },
  plugins: [],
}

