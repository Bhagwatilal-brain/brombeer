/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        'background-soft': 'var(--background-soft)',
        'surface-lavender': 'var(--surface-lavender)',
        'hero-lavender': 'var(--hero-lavender)',
        'violet-light': 'var(--violet-light)',
        'violet-primary': 'var(--violet-primary)',
        'violet-deep': 'var(--violet-deep)',
        'purple-dark': 'var(--purple-dark)',
        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        'border-subtle': 'var(--border-subtle)',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        display: ['"Outfit"', '"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        outfit: ['"Outfit"', '"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1.25rem',
        '3xl': '1.75rem',
        '4xl': '2.25rem',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(75, 45, 168, 0.08), inset 0 1px 0 0 rgba(255, 255, 255, 0.8)',
        'glass-hover': '0 14px 40px -4px rgba(118, 80, 232, 0.16), inset 0 1px 0 0 rgba(255, 255, 255, 0.9)',
        'hero': '0 25px 60px -15px rgba(118, 80, 232, 0.12)',
      },
      animation: {
        'float-slow': 'float 7s ease-in-out infinite',
        'float-reverse': 'floatReverse 8s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        floatReverse: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(10px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
      },
    },
  },
  plugins: [],
};