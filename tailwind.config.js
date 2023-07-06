/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#105E46',
        accent: '#12805D',
        success: '#02D693',
        light: '#BFD1E5',
        tertiary: '#60695C',
        dark: '#1A1F16',
        placeholder: '#1A1F1680',
        danger: '#E5252C',
        warning: '#E6D117'
      },
      fontSize: {
        titleNormal: '61.04px',
        titleSmall: '48.83px',
        subtitleNormal: '39.06px',
        subtitleSmall: '31.25px',
        bodyNormal: '20px',
        bodySmall: '16px',
      },
      letterSpacing: {
        '032': '-0.32px'
      }
    },
  },
  plugins: [],
}

