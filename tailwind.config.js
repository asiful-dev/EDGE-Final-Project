/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        underline: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
      },
      animation: {
        underline: 'underline 0.3s ease-in-out forwards',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.smooth-underline': {
          position: 'relative',
        },
        '.smooth-underline::after': {
          content: '""',
          position: 'absolute',
          left: '0',
          bottom: '0',
          width: '0',
          height: '3px',
          backgroundColor: 'orange',
          transition: 'width 0.3s ease-in-out',
        },
        '.smooth-underline:hover::after': {
          width: '100%',
        },
      });
    },
  ],
}

