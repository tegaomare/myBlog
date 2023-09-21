/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
   colors: {
  dark: "#1b1b1b",
  light: "#e8f0ff",
  accent: "#7B00D3", 
  accentDark: "#ffdb4d",
   gray: "#575a5e",
 }
  },
  plugins: [],
}



