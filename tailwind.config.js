/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-roboto)',
        alt: 'var(--font-bai-janjuree)',
      },
      colors: {
        BG: {
          700: '#0f172a',
          800: '#070C1A',
          900: '#030711',
        },

        gray: {
          200: '#c8cfd9',
          300: '#a2aebe',
          400: '#7f8ea3',
          500: '#596981',
          600: '#4d596d',
          700: '#434b5b',
          800: '#3c424e',
          900: '#20232c',
          950: '#20232c',
        },
        jade: {
          500: '#00b37e',
          600: '#00a474',
          700: '#008361',
        },
        purple: {
          500: '#7B61FF',
          700: '#4f1ee3',
        },
        mirage: {
          700: '#314d73',
          800: '#2c4360',
          900: '#293951',
          950: '#1d283a',
        },
        red: {
          500: '#ff234b',
          600: '#FF002E',
        },
      },

      fontSize: {
        '5xl': '2.5rem',
      },
      height: {
        'hv-calc': 'calc(100vh - 8.0625rem)',
        'hv-section': 'calc(100vh - 16.875rem)',
      },
    },
  },
  plugins: [],
}
