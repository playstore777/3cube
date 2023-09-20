/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'ssm':{'min':'320px','max':'768px'},
      'md':'769px',
      'ld':{'max':'1024px'}
    },
    extend: {
      
    },
  },
  plugins: [],
}

