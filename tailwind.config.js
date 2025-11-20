/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "dm-sans": ["var(--font-dm-sans)", "ui-sans-dm", "system-ui"],
      },
      boxShadow: {
        card: "0 0 4px 0 rgba(0,0,0,0.16)",
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};

