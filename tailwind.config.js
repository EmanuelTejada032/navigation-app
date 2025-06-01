/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./App.tsx", 
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./presentation/**/*.{js,jsx,ts,tsx}"
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        'mont-black': ['Montserrat-Black', 'sans-serif'],
        'mont-bold': ['Montserrat-Bold', 'sans-serif'],
        'mont-light': ['Montserrat-Light', 'sans-serif'],
        'mont-medium': ['Montserrat-Medium', 'sans-serif'],
        'mont-regular': ['Montserrat-Regular', 'sans-serif'],
        'mont-semibold': ['Montserrat-SemiBold', 'sans-serif'],
        'mont-thin': ['Montserrat-Thin', 'sans-serif'],
        
      }
    },
  },
  plugins: [],
}