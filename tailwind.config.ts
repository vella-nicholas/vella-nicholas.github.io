import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './data/**/*.ts',
  ],
  theme: {
    extend: {
      colors: {
        background: 'rgb(9 9 11)',      // zinc-950
        surface: 'rgb(24 24 27)',       // zinc-900
        accent: 'rgb(99 102 241)',      // indigo-500
        'accent-hover': 'rgb(79 70 229)', // indigo-600
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
    },
  },
  plugins: [],
}

export default config
