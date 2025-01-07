/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mindaro: "#E7F9A9",
        gunmetal: "#1B2323",
        skyblue: "#82C0CC",
        pastelgreen: "#d8f0d6",
        pastelblue: "#b0c1df",
        pastelpurple: "#ad97de",
        pastelpink: "#eca7a8",
      },
      backgroundImage: {
        "radial-pastels": "radial-gradient(circle, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
