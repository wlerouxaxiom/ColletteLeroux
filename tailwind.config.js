/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#1a1a2e',
        'ink-navy': '#0f172a',
        paper: '#fafaf9',
        'warm-gray': '#78716c',
        'deep-red': '#991b1b',
        'light-gray': '#e7e5e4',
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
