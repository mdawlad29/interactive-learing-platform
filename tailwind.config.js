/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#18B3C7",
        secondary: "#0F6CE7",
        neutral: "#fff",
      },
      textColor: {
        primary: "#18B3C7",
        secondary: "#0F6CE7",
        neutral: "#fff",
      },
      borderColor: {
        primary: "#18B3C7",
        secondary: "#0F6CE7",
        neutral: "#fff",
      },
    },
  },
  plugins: [],
};
