module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: "#D09D42",
        teal: "#1E808D",
        dark: "#0d1117",
        light: "#f0f6fc",
    animation: {
        'spin-slow': 'spin 3s linear infinite',
      },    
      },
    },
  },
  plugins: [],
}
