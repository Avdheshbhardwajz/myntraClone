// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // This ensures Tailwind scans all .js/.jsx/.ts/.tsx files in the src folder
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["poppins"],
      },
    },
  },
  plugins: [],
};
