import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bill: {
          orange: "#DA5221",
          green: "#98C643",
          lime: "#EEF188",
        },
      },
      fontFamily: {
         mono: 'cutiveMono ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
         serif: 'cantanaOne ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;'
      }
    },
  },
  plugins: [],
} satisfies Config;
