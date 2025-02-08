import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Dark Theme
        theme1: {
          mainBg: "#3A4663",
          toggleBg: "#242D44",
          toggleBtn: "#D03F2F",
          screenBg: "#181F33",
          // Numbers and Operators
          keyBg: "#EAE3DC",
          keyShadow: "#B3A497",
          // Equal Key
          equalKeyBg: "#D03F2F",
          equalKeyShadow: "#93261A",
          // Reset and Delete Keys
          reDelKeyBg: "#647198",
          reDelKeyShadow: "#414E73",
          // Numbers and Operators text color
          text: "#434A59",
        },
        // Light Theme
        theme2: {
          mainBg: "#E6E6E6",
          toggleBg: "#242D44",
          toggleBtn: "#D03F2F",
          screenBg: "#EEEEEE",
          // Numbers and Operators
          keyBg: "#E5E4E1",
          keyShadow: "#E5E4E1",
          // Equal Key
          equalKeyBg: "#C85402",
          equalKeyShadow: "#873901",
          // Reset and Delete Keys
          reDelKeyBg: "#378187",
          reDelKeyShadow: "#1B6066",
          // Numbers and Operators text color
          text: "#36362C",
        },
        // Alt Theme
        theme3: {
          mainBg: "#17062A",
          toggleBg: "#1E0936",
          toggleBtn: "#00DED0",
          screenBg: "#1E0936",
          // Numbers and Operators
          keyBg: "#331C4D",
          keyShadow: "#881C9E",
          // Equal Key,
          equalKeyBg: "#00DED0",
          equalKeyShadow: "#6CF9F1",
          // Reset and Delete Keys
          reDelKeyBg: "#56077C",
          reDelKeyShadow: "#56077C",
          // Numbers and Operators text color
          text: "#FFE53D",
        },
      },
      fontFamily: {
        spartan: ['League Spartan', 'Arial', 'Helvetica', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
