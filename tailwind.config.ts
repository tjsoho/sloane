/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-cream': '#fdf3e3',
        'brand-logo': '#C1FF72',
        'brand-green': '#003b1f',
        'brand-green-light': '#4b8052',
        'brand-green-dark': '#004B27',
        'brand-orange': '#FF914D',
        'brand-orange-light': '#FFBD59',
        'brand-orange-dark': '#572700',
        'brand-yellow': '#FFD874',
        
      },
      fontFamily: {
        'Archivo': ['Archivo Black', 'sans-serif'],
        'Quicksand': ['Quicksand', 'sans-serif'],
        'Script': ['Script'],
        'Black': ['Black Han Sans', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      transitionProperty: {
        'width': 'width',
      },
      transitionDuration: {
        '1300': '1300ms',
      },
      transitionTimingFunction: {
        'ease-in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      keyframes: {
        'gentle-pulse': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
      },
      animation: {
        'gentle-pulse': 'gentle-pulse 2s ease-in-out infinite',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
