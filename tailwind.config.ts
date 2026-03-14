export default {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        royal: {
          primary: "#1A2A6C",
          "primary-hover": "#0F1C4D",
          secondary: "#5A2EA6",
          accent: "#D4AF37",
        },
        text: {
          primary: "#0F172A",
          secondary: "#334155",
          muted: "#64748B",
        },
        bg: {
          page: "#FFFFFF",
          subtle: "#F8FAFC",
        },
      },
    },
  },
  plugins: [],
};
