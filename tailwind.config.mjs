/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#254559',
        secondary: '#4B95A6',
        tertiary: '#69B7BF',
        accent: '#F2D3AC',
        highlight: '#D99379',
        premium: {
          50: '#f5f7fa',
          100: '#ebeef3',
          200: '#d8e0e9',
          300: '#b9c7d5',
          400: '#94a7bc',
          500: '#7589a3',
          600: '#5f6f89',
          700: '#4f5b70',
          800: '#434d5d',
          900: '#3a424f',
        }
      },
      fontFamily: {
        'exo': ['Exo', 'sans-serif'],
        'noto': ['Noto Sans', 'sans-serif'],
      },
      screens: {
        'xs': '480px',
      },
      spacing: {
        '18': '4.5rem',
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      boxShadow: {
        'premium': '0 8px 30px rgba(0, 0, 0, 0.12)',
        'premium-hover': '0 20px 80px rgba(0, 0, 0, 0.12)',
      }
    },
  },
  plugins: [],
}