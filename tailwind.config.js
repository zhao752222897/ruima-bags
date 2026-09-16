/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'rm-navy-900': 'var(--rm-navy-900)',
        'rm-navy-800': 'var(--rm-navy-800)',
        'rm-navy-700': 'var(--rm-navy-700)',
        'rm-orange-500': 'var(--rm-orange-500)',
        'rm-orange-600': 'var(--rm-orange-600)',
        'rm-orange-300': 'var(--rm-orange-300)',
        'rm-gold': 'var(--rm-gold)',
        'rm-text-333': 'var(--rm-text-333)',
        'rm-text-666': 'var(--rm-text-666)',
        'rm-line': 'var(--rm-line)',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [],
};
