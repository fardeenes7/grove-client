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
        primary: "#001429",
        secondary: "#329BEC",
        myGray: "#444444",
      },
      screens: {
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      whitespace: {
        "pre-line": "pre-line",
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
        space: ["Space Grotesk", "sans-serif"],
      },
      boxShadow: {
        "custom-shadow":
          "0px 5px 15px 0px #252C6126, 0px 2px 4px 0px #8890C233",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
