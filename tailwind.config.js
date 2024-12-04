/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        theme: {
          DEFAULT: "var(--color-theme, #ff014f)",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
  corePlugins:{preflight : true},
};
