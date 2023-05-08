const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,tsx,jsx}'],
  theme: {
    extend: {
      colors: {
        app: {
          blue: '#3294f8',
          base: {
            title: '#e7edf4',
            subtitle: '#c4d4e3',
            text: '#AFC2D4',
            span: '#7B96B2',
            label: '#3A536B',
            border: '#1C2F41',
            post: '#112131',
            profile: '#0B1B2B',
            background: '#071422',
            input: '#040F1A',
          },
        },
      },
      fontFamily: {
        sans: ['Nunito', ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        'cover-pattern': "url('assets/cover.jpg')",
      },
    },
  },
  plugins: [],
}
