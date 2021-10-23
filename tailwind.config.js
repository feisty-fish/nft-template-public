module.exports = {
  mode: 'jit',
  plugins: [
  ],
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    extend: {
    backgroundImage: {
      'hero': "url('../../public/assets/images/tank1.png')",
    },
    fontFamily: {
      'rampart': ['Rampart One'],
      'lobster': ['Lobster']
    },
      colors: {
        primary: {
          100: '#8BD7FA',
          200: '#B6E8FF',
          300: '#B6E8FF',
          400: '##B6E8FF',
          500: '#DC1FFF',
          600: '#DC1FFF',
          700: '#DC1FFF',
          800: '#DC1FFF',
          900: '#DC1FFF',
        },
        gray: {
          100: '#B6E8FF',
          200: '#edf2f7',
          300: '#e2e8f0',
          400: '#cbd5e0',
          500: '#a0aec0',
          600: '#718096',
          700: '#4a5568',
          800: '#2d3748',
          900: '#1a202c',
        },
        purple: {
          500: "#4E44CE",
          600: "#8BD7FA",
          700: "#C08BFA"
        }
      },
      lineHeight: {
        hero: '4.5rem',
      },
    },
  },
  variants: {},
  plugins: [],
};
