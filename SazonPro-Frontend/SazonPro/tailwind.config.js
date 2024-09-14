/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      primary: '#F9ED32',
      secondary: '#F2D335',
      tertiary: '#D9BD32',
      gray: '#B0BAC3',
      gray_dark: '#7C838A'
    },
    extend: {},
  },
  plugins: [],
}