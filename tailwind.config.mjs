/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        rainbow: {
          1: '#FF0000',
          2: '#FF7F00',
          3: '#FFFF00',
          4: '#00FF00',
          5: '#0000FF',
          6: '#4B0082',
          7: '#9400D3',
        }
      }
    },
  },
  plugins: [],
}

