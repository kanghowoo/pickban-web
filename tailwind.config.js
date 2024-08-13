/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
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
      minWidth: {
        '18': '72px',
        '480px': '480px',
        '560px': '560px',
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
      }
    },
  },
  plugins: [],
};
