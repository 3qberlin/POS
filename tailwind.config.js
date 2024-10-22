/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{js,jsx,ts,tsx}",
  "./public/index.html",
];
export const theme = {
  extend: {
    colors: {
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
    spacing: {
      '0': '0px',
      '1': '1px',
      '2': '2px',
      '4': '4px',
      '8': '8px',
      '12': '12px',
      '16': '16px',
      '20': '20px',
      '24': '24px',
      '28': '28px',
      '32': '32px',
      '40': '40px',
      '44': '44px',
      '56': '56px',
      '60': '60px',
      '72': '72px',
      '80': '80px',
      '100': '100px',
      '140': '140px',
      '280': '280px',
      'n': '-1000px'
    },
    borderRadius: {
      '0': '0px',
      '4': '4px',
      '8': '8px',
      '12': '12px',
      '16': '16px',
      '20': '20px',
      '24': '24px',
      'full': '72px'
    },
    fontSize: {
      48: ['48px', '48px'],
      40: ['40px', '40px'],
      32: ['32px', '32px'],
      28: ['28px', '28px'],
      24: ['24px', '24px'],
      20: ['20px', '20px'],
      18: ['18px', '25px'],
      16: ['16px', '24px'],
      14: ['14px', '14px'],
    },
    letterSpacing: {
      normal: '0',
      1: '1px',
    },
    fontWeight: {
      normal: '400',
      semibold: '600',
    }
  },
  fontFamily: {
    sans: ['SF Pro', 'system-ui', 'sans-serif'],
  },
  lineHeight: {
    'smallMedium': '1.8rem',
    'medium': '2rem',
  },
  screens: {
    'sm': '375px',
    'md': '667px',
    'lg': '992px',
    'xl': '1440px',
  },
  gap: {
    '8': '8px',
    '12': '12px',
    '16': '16px',
    '20': '20px',
    '24': '24px',
    '32': '32px',
    '40': '40px',
  }
};
export const plugins = [];
