/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3B82F6', // Blue
          dark: '#1E40AF',
          light: '#93C5FD',
        },
        secondary: {
          DEFAULT: '#10B981', // Emerald
          dark: '#065F46',
          light: '#6EE7B7',
        },
        dark: '#1F2937',
        light: '#F9FAFB',
      },
      gray: {
        860: '#434147', // Replace with the correct gray-860 value
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        mono: ['Roboto Mono', 'monospace'],
      },
    },
  },
  plugins: [],
};
