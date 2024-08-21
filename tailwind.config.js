/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    './src/styles.css'
  ],
  theme: {
    extend: {
      width: {
        '300px': '300px',
        '1/10': '10.0%',
        '9/10': '90.0%',
        '460px': '460px',
        '18': '72px',
      },
      maxWidth: {
        'champion-list': '33.75rem'
      },
      minWidth: {
        '18': '72px',
        '480px': '480px',
        'champioin-list': '33.75rem',
        '1280px': '1280px',
      },
      height: {
        '108px': '108px',
        '540px': '540px',
        '460px': '460px',
        '18': '72px',
      },
      fontSize: {
        '0.6rem': '0.6rem',
      },
      colors: {
        championImg: '#1f1f22',
        orderHeader: '#252236',
        orderBorder: '#646078',
        orderBody: '#463c64',
      },
    },
  },
  plugins: [],
};
