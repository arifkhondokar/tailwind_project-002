tailwind.config = {
    theme: {
      extend: {
        colors: {
          primary: '#F40404',
          black: '#282828',
          white: '#ffffff',
          txcolor: '#6C6C6C',
          bgcolor: '#F0F0F0',
          bgborder: '#FFB800',
          btnbg: 'rgba(255, 255, 255, 0.50)',
      },
      maxWidth: {
        'container': '1536px',
      },
      
      fontFamily: {
        'poppins': "'Poppins', sans-serif",
      },
      
      fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
      
      backgroundImage: {
        'overbanner': "linear-gradient(05deg, #060606 16.68%, rgba(0, 0, 0, 0.2) 90.44%), url('./images/banner.jpg');",
        'overlay': 'linear-gradient(05deg, #060606 16.68%, rgba(0, 0, 0, 0.2) 90.44%);',
      },
      
      fontSize: {
        xs: '12px',
        sm: '14px',
        base: '16px',
        '2xl': '24px',
        '4xl': '36px',
        subhead: '48px',
        headding: '64px', 
      },

      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md':	'768px',
        // => @media (min-width: 768px) { ... }

        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }

        '2xl':	'1536px',
        // => @media (min-width: 1536px) { ... }
      },
    }
  }
}