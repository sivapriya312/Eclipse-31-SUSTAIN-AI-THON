/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9f0',
          100: '#dcf0dc',
          200: '#bce3bc',
          300: '#92ce92',
          400: '#66b466',
          500: '#4a9d4a',
          600: '#3b7e3b',
          700: '#326432',
          800: '#2b502b',
          900: '#244224',
        },
        accent: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdb97c',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        }
      }
    },
  },
  plugins: [],
};