// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',   // adjust to your src structure
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        whitesmoke: '#F5F5F5',
      },
    },
  },
  plugins: [],
}

export default config
