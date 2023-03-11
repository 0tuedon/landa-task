/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans_serif: ["Sora"],
      },
      colors: {
        navbar: "#F6F9FD",
        border: "#E6E6E6",
        active_blue: "#004CCC",
        background_blue: "#DDE7F8",
      },
    },
  },
  plugins: [],
};
