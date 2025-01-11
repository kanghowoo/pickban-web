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
        '13': '52px',        
        '18': '72px',
        '112': '28rem',
      },
      maxWidth: {
        'champion-list': '33.75rem',
        'pick-ban-result': '74rem',
      },
      minWidth: {
        '18': '72px',
        '480px': '480px',
        'champioin-list': '33.75rem',
        'pick-ban-result': '74.25rem',
        '320': '80rem',
      },
      height: {
        '108px': '108px',
        '540px': '540px',
        '460px': '460px',
        '13': '52px',
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
        orderBox: 'rgba(54,46,86,0.85)',
        orderBoxText: 'rgba(225, 215, 255, 0.85)',
        blueTeam: 'rgb(29, 78, 216)',
        redTeam: ' rgb(185, 28, 28)',
        home: '#141517',
        subText: '#a0a5b6',
        card: '#1d1f22',
        cardHeader: '#a0a5b6',
      },
      opacity: {
        '6': '0.06',
      }
    },
  },
  plugins: [
    require('tailwindcss-animate')
  ],
};
