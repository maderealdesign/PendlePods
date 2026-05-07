/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#044B36',
          secondary: '#A3C671',
          light: '#F8F9FA',
          dark: '#1A202C'
        },
        tier: {
          bronze: '#CD7F32',
          silver: '#9CA3AF',
          gold: '#F59E0B',
          premium: '#111827'
        }
      },
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      }
    }
  },
  plugins: [],
}
