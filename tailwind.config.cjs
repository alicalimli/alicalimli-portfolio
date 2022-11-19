module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}", "./*.html"],
  darkMode: ["class", '[data-mode="theme-dark"]'],
  theme: {
    themes: {
      dark: {
        white: "#fff",
        black: "#000",
        "text-main": "#fff",
        "bg-main": "#212529",
        "bg-secondary": "#2A3036",
        "muted-main": "#ADB5BD",
        "muted-secondary": "#868E96",
      },
    },
    colors: {
      white: "#000",
      black: "#fff",
      "text-main": "#111",
      "bg-main": "#fff",
      "bg-secondary": "#333",
      "muted-main": "#fff",
      "muted-secondary": "#fff",
    },
  },
  plugins: [
    require("tailwind-theme-switcher"),
    require("tailwind-scrollbar")({ nocompatible: true }),
  ],
};
