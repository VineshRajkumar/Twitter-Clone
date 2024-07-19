/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      width:{
        '590':'590px',
        '50.4':'50.4px',
        '85':'345px',
        '500':'500px',
        
      },
      height:{
        '135' : '135px',
        '500' :'500px',
        '1600':'1600px',
        
        '1.5':'5px',
        '900':'900px'
      },
      fontFamily: {
        twitter: ['Helvetica Neue', 'Arial', 'sans-serif'],
      },
      fontSize: {
        'base-custom': ['16px', {
          lineHeight: '19px',
        }],
      },
      top:{
        '500':'500px',
        '800':'600px'
      },
      screens: {
        
        '991px': '991px',
        '891px': '891px',
        '793px': '793px',
        '841px':'841px',
        '699px':'699px',
        '499px':'499px',
        '678px':'678px',
        '639px':'639px',
        '320px':'320px',
      },
      
      
    },
  },
  plugins: [function({ addUtilities }) {
    const newUtilities = {
      '.hide-scrollbar': {
        /* For Firefox */
        'scrollbar-width': 'none',
        /* For Internet Explorer and Edge */
        '-ms-overflow-style': 'none',
      },
      '.hide-scrollbar::-webkit-scrollbar': {
        /* For Chrome, Safari, and Opera */
        display: 'none',
      },
    }
    addUtilities(newUtilities, ['responsive', 'hover'])
  }],
}

