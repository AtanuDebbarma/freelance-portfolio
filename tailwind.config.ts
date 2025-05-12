import type {Config} from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      xl: {min: '1280px'},
      lg: {min: '1024px'},
      md: {min: '820px'},
      sm: {min: '766px'},
      xs: {min: '580px'},
      xxs: {min: '430px'},
      xxxs: {min: '410px'},
      xxxxs: {min: '380px'},
      xxxxxs: {min: '350px'},
    },
    extend: {},
  },
  plugins: [],
};

export default config;
