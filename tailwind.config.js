/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'primary-color': '#0081C9',
          'mainColor1': '#FD2F02',
          'white': '#fff',
          'green': '#05BA43',
          
          'bg-1': '#1E1E1E',
          'bg-2': '#c9c7c7',
          'dark-green': '#00130d',
          'dark-green-1': '#002d1d',
          'dark-green-2': '#00130d',
          'dark-green-3': '#000701',
          'dark-gray': '#000000',

          'black': '#000000',
          'textColor1': '#1E1C1A'

        },
        screens: {
          'medium-pc' : {'max': '1300px'},
          'small-pc': {'max': '950px'},
          'tablet': {'max': '700px'},
          'phone': {'max': '500px'},
          'small-phone': {'max': '450px'},
        },
        boxShadow: {
          'shadow': '3px 10px 8px 7px rgb(229, 239, 249)',
          'shadow2': '0px 0px 7px 1px rgba(0,0,0,0.75)'
        },
        fontFamily: {
            'font-1': ["Quando", "serif"], 
        },
      },
    },
    variants: {
      extend: {
        borderColor: ['focus', 'peer-focus'],
        borderWidth: ['focus', 'peer-focus'],
      },
    },
    plugins: [],
  };