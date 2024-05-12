import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        customInnerBottom: 'inset 0px -4px 0px 0 rgb(0 0 0 / 0.3)',
      },
      gridTemplateAreas: {
        layout: [
          'cancel del divide mult',
          'seven eight nine minus',
          'four five six add',
          'one two three equal',
          'zero zero dot equal',
        ],
      },
      gridTemplateColumns: {
        layout: '90px 90px 90px 90px',
      },
      gridTemplateRows: {
        layout: '60px 60px 60px 60px 60px',
      },
    },
  },
  plugins: [require('@savvywombat/tailwindcss-grid-areas')],
};
export default config;
