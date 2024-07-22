/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors : {
        brand : {
          eigengrau : "#0e1111",
          dark : "#194E78",
          light : "#2D7FBF",
          white : "#EEEEEE",
          gray : "#B7B7B7"
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