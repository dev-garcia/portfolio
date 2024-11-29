import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        azulPiscina: "#00d8ff",
        verdeAzulado: "#3d717a",
        verdeBrilhante: "#16e08f",
        vermelho: "#e45250",
        ameixa: "#ad004e",
        bg: "#1f2937",
      },
    },
  },
  plugins: [],
};
export default config;
