export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        pthfndr: {
          navy: '#0C2A5C',
          blue: '#004890',
          cyan: '#0097b2',
          lime: '#7ed957',
        },
        // ... other colors
      },
      fontFamily: {
        // If you want to define custom fonts
        'sans': ['Futura', 'Inter', 'Montserrat', 'sans-serif'],
      }
    }
  },
  plugins: [],
}