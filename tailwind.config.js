/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./index.html",
  ],
  theme: {
    extend: {
      colors: {
        // Black & Grey Palette
        black: {
          DEFAULT: '#000000',
          dark: '#000000',
          light: '#1A1A1A',
        },
        grey: {
          DEFAULT: '#6B6B6B',
          dark: '#4A4A4A',
          light: '#9A9A9A',
          lighter: '#E5E5E5',
          lightest: '#F5F5F5',
        },
        white: {
          DEFAULT: '#FFFFFF',
          dark: '#F0F0F0',
          light: '#FAFAFA',
        },
        // Accent colors (subtle)
        accent: {
          DEFAULT: '#333333',
          dark: '#1A1A1A',
          light: '#4A4A4A',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
