/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backdropBlur: {
        80: "80px",
      },
      colors: {
        primary: "#0052B9",
        secondary: "#59CEE6",
        tertiary: "#00100D",
      },
      backgroundImage: {
        grad: "linear-gradient(105.6deg, #0052B9 -15.15%, #38ABD0 99.71%)",
        btn: "linear-gradient(101.12deg, #48CAE4 0%, #0070FF 176.3%)",
      },
      fontFamily: {
        parkinsans: ["Parkinsans", "sans-serif"], // default font
        manrope: ["Manrope", "sans-serif"],
      },
      fontSize: {
        topH: ["clamp(70px, 5vw, 150px)", { lineHeight: "1.1" }],
        h1: ["clamp(40px, 5vw, 70px)", { lineHeight: "1.1" }],
        h2: ["clamp(24px, 5vw, 60px)", { lineHeight: "1.1" }],
        h3: ["clamp(16px, 5vw, 47px)", { lineHeight: "1.1" }],
        p: ["clamp(14px, 5vw, 24px)", { lineHeight: "1.1" }],
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
      animation: {
        marquee: 'marquee 20s linear infinite',
        'marquee-reverse': 'marquee-reverse 20s linear infinite',
      },
    },
  },
  plugins: [],
};
