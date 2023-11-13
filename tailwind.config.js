/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ['./src/**/*.{html,jsx,tsx,astro}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000',
      white: '#fff',
      slate: {
        50: '#F8FAFC',
        100: '#F1F5F9',
        200: '#E2E8F0',
        300: '#CBD5E1',
        400: '#94A3B8',
        500: '#64748B',
        600: '#475569',
        700: '#334155',
        800: '#1E293B',
        900: '#0F172A',
      },

      gray: {
        50: '#f9fafb',
        100: '#f4f5f7',
        200: '#e5e7eb',
        300: '#d2d6dc',
        400: '#9fa6b2',
        500: '#6b7280',
        600: '#4b5563',
        700: '#374151',
        800: '#252f3f',
        900: '#161e2e',
      },
      red: {
        50: '#fdf2f2',
        100: '#fde8e8',
        200: '#fbd5d5',
        300: '#f8b4b4',
        400: '#f98080',
        500: '#f05252',
        600: '#e02424',
        700: '#c81e1e',
        800: '#9b1c1c',
        900: '#771d1d',
      },
      orange: {
        50: '#fff8f1',
        100: '#feecdc',
        200: '#fcd9bd',
        300: '#fcbf8c',
        400: '#f9893a',
        500: '#f66d0a',
        600: '#e3601c',
        700: '#c05621',
        800: '#9c4221',
        900: '#7b341e',
      },
      yellow: {
        50: '#FFFAEB',
        100: '#FCE588',
        200: '#FADB5F',
        300: '#F7C948',
        400: '#F0B429',
        500: '#DE911D',
        600: '#CB6E17',
        700: '#B44D12',
        800: '#8D2B0B',
        900: '#63171B',
      },
      green: {
        50: '#F0FDF4',
        100: '#DCFCE7',
        200: '#BBF7D0',
        300: '#86EFAC',
        400: '#4DE680',
        500: '#22C55E',
        600: '#16A34A',
        700: '#15803D',
        800: '#166534',
        900: '#14532D',
      },
      teal: {
        50: '#EFFCF6',
        100: '#C6F7E2',
        200: '#8EEDC7',
        300: '#65D6AD',
        400: '#3EBD93',
        500: '#27AB83',
        600: '#199473',
        700: '#147D64',
        800: '#0C6B58',
        900: '#014D40',
      },
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      fontFamily: {
        sans: ["WorkSans", ...defaultTheme.fontFamily.sans],
      },
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      fontSize: {
        'xl2': '2rem',
        'xl3': '3rem',
        'xl4': '4rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
  plugins: [
      require('@astrojs/tailwind')
  ]
}