/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'grey': '#D1D1D1',
        'lightgrey': '#EFEFEF',
        'bg-dashboard':'#F8F8F8',
        'btn-blue':'#1D7DEA',
        'bg-login':'#f7fbff',
        'db-header':'#E6F0FF',
        'db-row-lightblue':'#F4F9FF',
        'rs-green':'rgba(40, 202, 13, 0.15)',
        'rs-red': 'rgba(202, 13, 13, 0.2)',
        'rs-yellow':'rgba(248, 255, 168, 0.5)',
        'rs-text-green':'#18A002',
        'rs-text-red':'#C92A2A',
        'rs-text-yellow':'#C7B40E',
        'bg-eth':'#E0EEFF',
        'bg-address': '#CBE1FF',
        'bg-rs':'#F5F5F5',
        'rs-heading':'#5C5C5C',
        'rs-details':'#2F2F2F'
      },
      fontSize: {
        'xxl': '30px',
        'xl': '20px',
        'lg': '18px',
        'md':'16px',
        'sm':'14px',
        'xs':'12px'
      }
    },
  },
  plugins: [],
}
