/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      fontFamily: {
        'lucio': ['PT Sans', 'sans-serif'],
        'title': ['Noto Sans SC', 'sans-serif'],
        'paragraph': ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}

