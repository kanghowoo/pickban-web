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
      },
      minWidth: {
        '18': '72px',
        '1280px': '1280px',
      },
      height: {
        '108px': '108px',
        '540px': '540px',
      },
    },
  },
  plugins: [],
};
