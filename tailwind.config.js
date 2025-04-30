module.exports = {
    content: [
      "./src/pages/**/*.{js,ts,jsx,tsx}",
      "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          blue: {
            DEFAULT: '#2f3d4d',
            dark: '#263442',
          },
          red: {
            DEFAULT: '#e94c46',
            light: '#ef5f59',
            dark: '#d43f39',
          },
        },
        fontFamily: {
          'quicksand': ['Quicksand', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }