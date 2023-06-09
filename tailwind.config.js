/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#fff159',
        secondary: '#3483FA',
        secondaryHover: '#2968c8',
        background: '#EBEBEB',
      },
      backgroundImage: {
        'custom-gradient':
          'linear-gradient(0deg, rgb(8,19,48) 0%, rgba(8,19,48, 0.0001) 100%)',
      },
    },
  },
  plugins: [],
};
