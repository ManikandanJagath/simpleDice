/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  content: [
    "./index.html",
    "./src/main.js",
  ],
  theme: {
    extend: {
      spacing: {
        '18': '4.5rem', // Equivalent to 18 * 1rem (assuming the default font size is 1rem)
        '20': '5rem',  // Equivalent to 20 * 1rem
        '22': '5.5rem', // Equivalent to 22 * 1rem
        '24': '6rem',  // Equivalent to 24 * 1rem
        '26': '6.5rem', // Equivalent to 26 * 1rem
        '30': '7.5rem', // Equivalent to 30 * 1rem
        '32': '8rem',  // Equivalent to 32 * 1rem
        '34': '8.5rem', // Equivalent to 34 * 1rem
        '36': '9rem',  // Equivalent to 36 * 1rem
        '38': '9.5rem', // Equivalent to 38 * 1rem
        '40': '10rem', // Equivalent to 40 * 1rem
        '50': '12.5rem', // Equivalent to 50 * 1rem
      },
    },
  },
  variants: {
    extend: {
      // Enable the spacing variants for margin and padding
      margin: ['responsive', 'hover', 'focus', 'first', 'last'],
      padding: ['responsive', 'hover', 'focus', 'first', 'last'],
    },
  },
  plugins: [],
};

export default tailwindConfig;