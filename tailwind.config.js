const { repeat } = require("lodash");

module.exports = {
  purge: [
    './resources/**/*.twig',
    './resources/**/*.js',
    './resources/**/*.vue',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateColumns: {
        // Simple 14 column grid
       'headerColsLg': 'repeat(14, minmax(130px, 1fr))',
       'headerColsSm': 'repeat(6, minmax(0, 1fr))',
      },
      gridTemplateRows:{
        'headerRowsLg':'repeat(10,125px)',
        'headerRowsSm':'repeat(10,65px)'  
      },
      gridColumn:{
        'start-13':'start 13/start 13',
        'start-14':'start 14/start 14',
        'start-15':'start 14/start 15',
        'end-13':'end 13/end 13',
        'end-14':'end 14/end 14',
        'end-15':'end 15/end 15',

      },
      gridRow:{
        'span-7':'span 7/span 7',
        'span-8':'span 8/span 8',
        'span-9':'span 9/span 9',
        'span-10':'span 10/span 10',
        'start-7':'start 7/start 7',
        'start-8':'start 8/start 8',
        'start-9':'start 9/start 9',
        'start-10':'start 10/start 10',
        'end-7':'end 7/end 7',
        'end-8':'end 8/end 8',
        'end-9':'end 9/end 9',
        'end-10':'end 10/end 10',
      }
      
    },
    scale: {
      '25': '.25',
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
