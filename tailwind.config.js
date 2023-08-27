/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-accent": "#F16718",
        "light-accent": "#FF9B62",
        "cc-black": "#162542",
        "cc-neutral-1": "#E8EFF2",
        "cc-neutral-2": "#7B8BAD",
      },
      screens: {
        "cc-xl": "1795px",
      },
    },
  },
  plugins: [],
};
