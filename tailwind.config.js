/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // We will remove the toggle but keep the class strategy just in case, or remove it. User said "remove dark mode". I'll keep it but not use it.
  theme: {
    extend: {
      colors: {
        primary: '#0d2426', // Dark Green
        secondary: '#16383c', // Slightly lighter green for cards
        accent: '#bef264', // Lime Green
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
