/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lorio: {
          primary: '#6366F1', // Purple from the design
          secondary: '#22C55E', // Green accent
          orange: '#F59E0B', // Orange accent
          blue: '#3B82F6', // Blue accent
          dark: '#1F2937',
          light: '#F9FAFB'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}