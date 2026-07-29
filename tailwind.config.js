module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      borderStyle: {
        dashed: 'dashed',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.border-dashed-top': {
          borderTop: '1px dashed #000',
          background: 'transparent',
          height: '0',
        },
      });
    },
  ],
};
