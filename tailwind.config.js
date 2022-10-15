/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'san-serif'],
      },
      colors: {
        bg: '#0C120C',
        headingColor: '#0065fd',
      },
      screens: {
        ss: '600px',
        md: '920px',
        lg: '1160px',
      },
      animation: {
        slideDown: 'slideDown 1s ease-in-out',
        slideLeft: 'slideLeft 0.3s ease-in-out',
      },
      keyframes: {
        slideDown: {
          from: { opacity: 0, transform: 'translateY(-100%)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
        slideLeft: {
          from: { opacity: 0, transform: 'translateX(-100%)' },
          to: { opacity: 1, transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
};
