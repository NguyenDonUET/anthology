import type { Config } from 'tailwindcss';
import { colors, white, black, transparent, currentColor } from './src/tokens/colors';

export default {
  content: ['./src/**/*.tsx', './src/**/*.ts', './src/**/*.mdx'],
  darkMode: ['class', '[data-mode="dark"]'],
  plugins: [],
  theme: {
    colors: {
      ...colors,
      white,
      black,
      transparent,
      currentColor,
    },
    fontFamily: {
      sans: ['Inter Variable', 'sans-serif'],
    },
  },
} satisfies Config;
