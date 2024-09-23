/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{js,jsx,ts,tsx}",
  "./public/index.html",
];
export const theme = {
  colors: {
    transparent: 'transparent',
    current: 'currentColor',
    'white': '#ffffff',
    'tahiti': {
      100: '#cffafe',
      200: '#a5f3fc',
      300: '#67e8f9',
      400: '#22d3ee',
      500: '#06b6d4',
      600: '#0891b2',
      700: '#0e7490',
      800: '#155e75',
      900: '#164e63',
    },
    'brand': {
      50: '#FEF6EE',
      100: '#FDEBD7',
      200: '#FAD4AE',
      300: '#F7B57A',
      400: '#F28B45',
      500: '#EF6F25',
      600: '#E05216',
      700: '#BA3D14',
      800: '#943218',
      900: '#772B17',
      950: '#40140A'
    },
    'neutral': {
      0: '#FFFFFF',
      50: '#F6F6F6',
      75: '#F6FAFD',
      100: '#E7E7E7',
      200: '#D1D1D1',
      300: '#E7E7E7',
      400: '#888888',
      450: '#6B6B6B',
      500: '#6D6D6D',
      600: '#5D5D5D',
      700: '#4F4F4F',
      800: '#454545',
      900: '#3D3D3D',
      950: '#262626',
    },
    'accent': {
      100: '#42EBE9'
    },
    'secondary': {
      50: '#FDFEE8',
      100: '#FCFEC3',
      200: '#FDFD8B',
      300: '#FCF448',
      400: '#F9E616',
      500: '#E9CD09',
      600: '#C9A105',
      700: '#A07408',
      800: '#845B0F',
      900: '#714A12',
      950: '#422706'
    },
    'negative': {
      100: '#E12129'
    },
    'positive': {
      100: '#2ACA18'
    },
  },
};
export const plugins = [];