/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          navy:   '#272538',
          purple: '#4b528a',
          muted:  '#7d84b2',
          teal:   '#67c5d4',
          coral:  '#EF999E',
        },
        // shadcn/ui semantic tokens (mapped to brand palette)
        background:   '#272538',
        foreground:   '#ffffff',
        primary:      { DEFAULT: '#67c5d4', foreground: '#272538' },
        secondary:    { DEFAULT: '#4b528a', foreground: '#ffffff' },
        muted:        { DEFAULT: '#4b528a', foreground: '#7d84b2' },
        accent:       { DEFAULT: '#4b528a', foreground: '#ffffff' },
        destructive:  { DEFAULT: '#ef4444', foreground: '#ffffff' },
        border:       'rgba(75,82,138,0.5)',
        input:        'rgba(75,82,138,0.5)',
        ring:         '#67c5d4',
        card:         { DEFAULT: '#1e1c2e', foreground: '#ffffff' },
      },
      fontFamily: {
        sans:    ['Sarabun', 'system-ui', 'sans-serif'],
        heading: ['Baskervville', 'Georgia', 'serif'],
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
      },
    },
  },
  plugins: [],
};
