/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'navy': {
            800: '#0F3460',
            900: '#0A2647',
          },
          'orange': {
            500: '#FF6B4A',
          },
        },
      },
    },
    plugins: [],
  }