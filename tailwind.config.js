module.exports = {
  purge: [
    './pages/**/*.tsx',
    './components/**/*.tsx'
  ],
  theme: {
    filter: {
      'none': 'none',
      'grayscale': 'grayscale(1)',
      'invert': 'invert(1)',
      'sepia': 'sepia(1)',
    },
    backdropFilter: {
      'none': 'none',
      'blur': 'blur(5px)',
    },
    extend: {
      backgroundImage: () => ({
        wallpaper: "url('public/images/background.jpeg')",
      })
    },
  },
  variants: {
    extend: {
      filter: ['responsive'],
      backdropFilter: ['responsive']
    },
  },
  plugins: [
    require('tailwindcss-filters')
  ],
}
