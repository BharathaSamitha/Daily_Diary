/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#4A90E2",
        accent: "#F5A623",
        "background-light": "#F9FAFB",
        "background-dark": "#111921",
        "text-light": "#333333",
        "text-dark": "#F9FAFB",
      },
      fontFamily: {
        display: ["Nunito", "Inter", "sans-serif"],
      },
      boxShadow: {
        subtle: "0 4px 12px rgba(0, 0, 0, 0.05)",
      },
      borderRadius: {
        DEFAULT: "0.5rem",
        lg: "0.75rem",
        xl: "1rem",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
