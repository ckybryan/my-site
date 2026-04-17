/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#F5F1E8',
          900: '#EDE8DC',
          800: '#DED7C4',
          700: '#B8B09B',
        },
        fg: {
          DEFAULT: '#2A2620',
          dim: '#5D574C',
          mute: '#8F887A',
        },
        accent: {
          500: '#3A2E1E',
        },
        live: '#2F8F52',
      },
      fontFamily: {
        sans: ['Geist', 'system-ui', 'sans-serif'],
        mono: ['Geist Mono', 'ui-monospace', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
    },
  },
  plugins: [],
}
