module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "price-color": "#F57224"
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
