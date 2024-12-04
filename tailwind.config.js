module.exports = {
  content: ["./index.html", "./src/**/*.{ts,js}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "6rem",
        },
      },
      backgroundImage: {
        test: "url('/images/planet.png')",
        test2: "url(/task-management/images/planet.png)",
      },
      fontFamily: {
        vazirBold: ["Vazir-Bold"],
        vazirMedium: ["Vazir-Medium"],
      },
    },
  },
  plugins: [],
};
