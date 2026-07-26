import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#1B2A4A",
          deep: "#101A30",
          light: "#2B3E63",
        },
        gold: {
          DEFAULT: "#E8A33D",
          light: "#F3C57A",
          deep: "#C9821F",
        },
        sage: {
          DEFAULT: "#4C7C6E",
          light: "#6E9C8D",
        },
        cream: "#FAF6EF",
        ink: "#33363D",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        arc: "0 0 50% 50% / 0 0 100% 100%",
      },
    },
  },
  plugins: [],
};

export default config;
