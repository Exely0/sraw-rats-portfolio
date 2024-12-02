/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "grad-blue-black": "radial-gradient(circle, #00162a, black)",
      },
    },
  },
  plugins: [],
};
