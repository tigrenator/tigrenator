const { colors } = require('./theme');

module.exports = {
  purge: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: colors,
    },
  },
  variants: {},
  plugins: [],
}
