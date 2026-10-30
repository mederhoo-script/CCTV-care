import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        navy: "#071b35",
        ink: "#102a43",
        blue: "#177ddc",
        mist: "#f4f8fc",
        line: "#dce6f0",
      },
      boxShadow: { card: "0 12px 35px rgba(7, 27, 53, .08)" },
    },
  },
  plugins: [],
};
export default config;
