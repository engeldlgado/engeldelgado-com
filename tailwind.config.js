/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'tech-bg': "url('/imagenes/tech-bg.jpg')"
        // 'footer-texture': "url('/img/footer-texture.png')",
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            a: {
              color: theme('colors.primary'),
              '&:hover': {
                color: theme('colors.primary')
              }
            },
            code: {
              backgroundColor: theme('colors.gray.300'),
              borderRadius: '0.25rem!important',
              fontWeight: '400!important'
            },
            maxWidth: '90ch'
          }
        },
        dark: {
          css: {
            code: {
              color: theme('colors.gray.300'),
              backgroundColor: theme('colors.black')
            },
            pre: {
              color: theme('colors.gray.300'),
              backgroundColor: theme('colors.black')
            }
          }
        }
      })
    }
  },
  darkMode: 'class',
  daisyui: {
    themes: [
      {
        dark: {
          ...require('daisyui/src/colors/themes')['[data-theme=dark]'],
          primary: '#6e40c9',

          secondary: '#fb8532',

          accent: '#7ee787',

          neutral: '#2A303C',

          'base-100': '#0d1117',

          info: '#2188ff',

          success: '#28a745',

          warning: '#ffdf5d',

          error: '#bd2c00'
        },
        light: {
          ...require('daisyui/src/colors/themes')['[data-theme=light]'],
          primary: '#fb8532',

          secondary: '#c75200',

          accent: '#7ee787',

          neutral: '#0d1117',

          info: '#2188ff',

          success: '#28a745',

          warning: '#ffdf5d',

          error: '#bd2c00'
        }
      }
    ]
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui')
  ]
}
