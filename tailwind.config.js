module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "price-color": "#F57224"
      },
      width: {
        '600': '600px'

      },
      height: {

        sm: '300px',
 
        md: '16px',
 
        lg: '24px',
 
        xl: '48px',
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
