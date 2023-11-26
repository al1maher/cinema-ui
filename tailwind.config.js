/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      padding: ['responsive', 'rtl'],
      margin: ['responsive', 'rtl'],
      textAlign: ['responsive', 'rtl'],
      float: ['responsive', 'rtl'],
      fontFamily: {
        sans: ['Neo Sans Arabic', 'sans-serif']
      },
      colors: {
        primary: '#1C1C28',
        secondary: '#9291A5',
        accent: '#8A74F9',
        background: '#F3F5F7'
      },
      container: {
        padding: {
          DEFAULT: '2rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem'
        },
        center: true
      },
      screens: {
        sm: '640.999999px',
        md: '768.999999px',
        lg: '1024.999999px',
        xl: '1280.999999px',
        '2xl': '1536.999999px'
      }
    }
  },
  plugins: []
}
