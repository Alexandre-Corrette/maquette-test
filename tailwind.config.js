module.exports = {
  purge: [
    './resources/**/*.twig',
    './resources/**/*.js',
    './resources/**/*.vue',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateRows:{
        '8':'repeat(8,minmax(0, 3fr))',
      }
      
    },
    fontFamily: {
      sans:['Sen', 'sans-serif']
    },
    
  },
  variants: {
    extend: {
    },
    display: ["group-hover"]
  },
  plugins: [],
}
