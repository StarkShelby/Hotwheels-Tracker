module.exports = {
  content: ["./*.html", "./pages/**/*.html"],
  theme: {
    extend: {},
  },
  plugins: [],
};

module.exports = {
  theme: {
    extend: {
      keyframes: {
        bounceOnce: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" },
        },
      },
      animation: {
        bounceOnce: "bounceOnce 0.4s ease-in-out",
      },
    },
  },
  plugins: [],
};
