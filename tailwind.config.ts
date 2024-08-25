import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontSize: {
        '1': '20px',
        '2': '18px',
        '3': '16px',
        '4': '14px',
        '5': '12px',
        '6': '10px',
        h1: '42px',
        h2: '36px',
        h3: '32px',
        h4: '24px',
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        primary: '#8B73EF',
        'primary-100': '#F0EFF4',
        'primary-200': '#D2C8FF',
        'primary-300': '#A390F2',
        negative: '#FF0E0E',
        positive: '#6981FE',
        'sub-100': '#D9D9D9',
        'sub-200': '#9A9998',
        'sub-300': '#666666',
        'sub-400': '#111111',
        'cus-100': '#F4F6FA',
        'cus-200': '#374553',
        'cus-300': '#323232',
        'stroke-100': '#DBDBDB',
      },
      fontFamily: {
        gowun: ['var(--gowun)'],
      },
      screens: {
        tablet: '1280px',
      },
      keyframes: {
        infiniteSlide: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(-300px * 3))' },
        },
      },
      animation: {
        infiniteSlide: 'infiniteSlide 20s linear infinite',
      },
    },
  },
  plugins: [],
};
export default config;
