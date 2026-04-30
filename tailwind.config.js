module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        vox: {
          green:  '#2B6130',
          red:    '#8C0D0F',
          cream:  '#F6E5CA',
          yellow: '#FFCF0B',
          black:  '#000001',
          white:  '#FFFFFF',
        },
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'sans-serif'],   // closest to Horizon
        body:    ['"Barlow"', 'sans-serif'],        // clean modern body
        footer:  ['"Arimo"', 'sans-serif'],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":  "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
