const plugin = require("tailwindcss/plugin");

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: { enabled: false, content: ["./src/**/*.tsx"] },
  theme: {
    container: {
      center: true,
    },
  },
  variants: {},
  plugins: [
    plugin(({ addUtilities }) => {
      const newUtilities = {
        ".blue-green": {
          "background-image": "linear-gradient(to right , #ff0 , #00FFFF)",
        },
      };

      addUtilities(newUtilities);
    }),
  ],
};
