import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
      },
      fontSize: {
          'large': '2.5rem',
          'logo': '2rem',
          'mid': '1.5rem',
          'normal': '1rem'
      },
      colors: {
        primary : '#0BE58A',
        hover: '#09B569'
      },
      
    },
  },
  plugins: [daisyui],
}

