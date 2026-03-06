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
        // Primary Palette
        burgundy: {
          DEFAULT: '#8B2635',
          dark: '#6B1D2A',
          light: '#A83245',
        },
        cream: {
          DEFAULT: '#F5F0E8',
          dark: '#E8E0D4',
          light: '#FAF7F2',
        },
        charcoal: {
          DEFAULT: '#2D2D2D',
          dark: '#1A1A1A',
          light: '#4A4A4A',
        },
        // Secondary Palette
        ochre: {
          DEFAULT: '#D4A84B',
          dark: '#B8923D',
          light: '#E5C06B',
        },
        sage: {
          DEFAULT: '#7A8B6E',
          dark: '#5E6E54',
          light: '#9AAD8C',
        },
        rose: {
          DEFAULT: '#C9A9A6',
          dark: '#A88987',
          light: '#DFC9C7',
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
