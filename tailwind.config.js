/** @type {import('tailwindcss').Config} */
export default {
  content: [

    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {

      boxShadow: {
        'todoItemShadow' : '1px 0px 0px 0px #9747ff4e', 
      },
      transitionProperty: {
        'transitionProperty' : 'all'
      },
      transitionDuration: {
        'transitionDuration' : '0.15s'
      },
      transitionTimingFunction: {

        'transitionTimingFunction' : 'ease-in-out'
      },
    },
    screens : {

      'medium' : '840px',
      'small' : '460px',
    }
  },
  plugins: [],
}

