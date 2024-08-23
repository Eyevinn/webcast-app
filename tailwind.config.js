// eslint-disable-next-line @typescript-eslint/no-var-requires
const { nextui } = require('@nextui-org/react');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    fontFamily: {
      inter: ['Inter', 'sans-serif']
    },
    extend: {
      boxShadow: {
        inner: 'inset 4px 2px 4px 0 rgb(0 0 0 / 0.25);'
      },
      colors: {
        white: '#ffffff',
        black: '#0C0C0C'
      },
      gridTemplateColumns: {
        'responsive-columns':
          'repeat(auto-fit, minmax(min(18.75rem, 100%), 1fr));',
        'md-responsive-columns':
          'repeat(auto-fit, minmax(min(100%, 200px), 1fr));',
        'lg-responsive-columns':
          'repeat(auto-fit, minmax(min(100%, 200px), 300px));',
        'xl-responsive-columns':
          'repeat(auto-fit, minmax(min(100%, 200px), 400px));'
      },
      screens: {
        '3xl': '1900px'
      }
    }
  },
  darkMode: 'class',
  plugins: [
    nextui({
      themes: {
        dark: {
          colors: {
            primary: {
              DEFAULT: '#BEE6FD'
            },
            secondary: {
              DEFAULT: '#A64DFF'
            },
            success: {
              DEFAULT: '#17C964'
            },
            warning: {
              DEFAULT: '#FAAB4E'
            },
            danger: {
              DEFAULT: '#E15050'
            },
            background: '#292929',
            foreground: '#E4E4E7',
            foreground2: '#949494',
            foreground3: '#7B7B7B',
            foreground4: '#444444',
            foreground5: '#303030',
            foreground6: '#292929',
            foreground7: '#D4E1E5',
            foreground8: '#D4EFFF',
            foreground9: '#BEE6FD',
            divider: '#7B7B7B',
            content1: '#303030', // in figma: content5
            content2: '#949494',
            content3: '#7B7B7B',
            content4: '#444444',
            content5: '#E4E4E7', // in figma: content1
            content6: '#292929',
            content9: '#BEE6FD',
            content00: '#0C0C0C'
          }
        }
      }
    })
  ]
};
