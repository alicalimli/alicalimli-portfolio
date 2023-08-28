module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./setup/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ["class", '[data-mode="theme-dark"]'],
  theme: {
    extend: {
      transitionDuration: {
        0: "0ms",
        400: "400ms",
        450: "450ms",
      },
      width: {
        128: "32rem",
      },
    },
    themes: {
      dark: {
        white: "#fff",
        black: "#000",
        "text-main": "#fff",
        "accent-primary": "#2563EB",
        "accent-tinted": "#3897e9",
        "accent-shaded": "#1f7dcf",
        "bg-main": "#111",
        "bg-secondary": "#191919",
        "muted-main": "#E6E6E6",
        "muted-secondary": "#CCCCCC",
      },
    },
    colors: {
      white: "#000",
      black: "#fff",
      "accent-primary": "#228be6",
      "accent-tinted": "#3897e9",
      "accent-shaded": "#1f7dcf",
      "text-main": "#111",
      "bg-main": "#fff",
      "bg-secondary": "#333",
      "muted-main": "#fff",
      "muted-secondary": "#fff",
    },
  },
  transitionProperty: {
    scale: "scale",
  },
  plugins: [
    require("tailwind-theme-switcher"),
    require("tailwind-scrollbar")({ nocompatible: true }),
    require("tailwind-fluid-typography"),
    require("tailwindcss-fluid-spacing"),
  ],
};
