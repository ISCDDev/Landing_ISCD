/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue-iscd': '#0000f0',
      },
      fontFamily: {
        'digital-desolation': ['Digital Desolation', 'sans-serif'],
        'space-age': ['Space Age', 'sans-serif'],
        'sphere-fez': ['SPHERE FEZ', 'sans-serif'],
        'midnew' : ['Midnew', 'sans-serif'],
        'arimo': ['Arimo', 'sans-serif'],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
