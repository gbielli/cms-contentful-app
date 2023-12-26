import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

export default {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      content: {
        'summary' : 'url("/summary.svg")',
        
      },
      fontFamily: {
        roundo: ['var(--font-roundo)'],
        manrope: ['var(--font-manrope)'],
        synonym: ['var(--font-synonym)']
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [typography],
} satisfies Config
