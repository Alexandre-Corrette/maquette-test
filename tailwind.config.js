module.exports = {
  purge: [
    './resources/**/*.twig',
    './resources/**/*.js',
    './resources/**/*.vue',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
    display: ["group-hover"]
  },
  plugins: [],
}
