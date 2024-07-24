/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors : {
        brand : {
          eigengrau : "#0e1111",
          dark : "#1D2E36",
          light : "#2D7FBF",
          white : "#EEEEEE",
          gray : "#7B9220",
        }
      },
      fontFamily: {
        natya: ['Natya', 'sans-serif'],
      },
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ]
};