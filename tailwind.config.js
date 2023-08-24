/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'bounce': {
          '0%, 100%': {
            transform: 'translateY(-25%)',
            'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)'
          },
          '50%': {
            transform: 'translateY(0)', // Fixed: Added single quotes around 'translateY(0)'
            'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)' // Fixed: Removed the extra space after 'cubic-bezier('
          }
        },
      },
      animation: {
        'bounce': 'bounce 1s infinite' // Fixed: Removed extra whitespace at the end of 'bounce	'
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    // ...
  ],
};
