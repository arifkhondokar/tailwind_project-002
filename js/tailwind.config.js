tailwind.config = {
    theme: {
      extend: {
        colors: {
          primary: '#F40404',
          black: '#282828',
          white: '#ffffff',
          bgborder: '#FFB800',
          btnbg: 'rgba(255, 255, 255, 0.50)',
      },
      maxWidth: {
        'container': '1140px',
      },
      fontFamily: {
        'poppins': "'Poppins', sans-serif",
      },
      ontWeight: {
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        'extra-bold': '800',
      },
      backgroundImage: {
        'mapbanner': "url('/images/maps.png')",
        'overlay': 'linear-gradient(05deg, #060606 16.68%, rgba(0, 0, 0, 0.2) 90.44%);',
        'over': 'linear-gradient( #000000 0%, rgba(0, 0, 0, 0.60) 0%);',
      },
      fontSize: {
        headding: '64px',
        subhead: '48px',
      },

    }
  }
}