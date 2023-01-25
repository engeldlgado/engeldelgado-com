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
            maxWidth: '90ch'
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

          secondary: '#fb8532',

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
