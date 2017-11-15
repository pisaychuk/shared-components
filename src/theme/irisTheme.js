/*
  A theme that uses the new (circa 2017) 'amoeba' brand colors.
*/

export const colors = {
  primary: {
    default: '#00bef0',
    alternate: '#008db1',
    light: '#d9f5fc',
    border: '#33c9f0',
    dark: '#004658',
  },
  /* aka 'green' */
  positive: {
    default: '#6cbf0d',
    light: '#e9f5db',
    border: '#b5df86',
    dark: '#5a9f0b',
  },
  /* aka 'red' */
  negative: {
    default: '#e9562e',
    light: '#fceae6',
    border: '#f6bbab',
    dark: '#b1351e',
  },
  accents: [
    /* purple */
    {
      default: '#a95adf',
    },
    /* orange */
    {
      default: '#ff673c',
    },
  ],
  gray: {
    /* aka medium */
    default: '#666',
    light: '#f3f3f3',
    border: '#c2c2c2',
    borderLight: '#e1e1e1',
    disabled: '#e1e1e1',
    dark: '#272b2d',
    /* aka help-text */
    medium: '#7f8897',
    mediumLight: '#dedede',
  },
  shadow: {
    default: 'rgba(0, 0, 0, 0.3)',
    light: 'rgba(0, 0, 0, 0.12)',
    extraLight: 'rgba(0, 0, 0, 0.05)',
    white: 'rgba(255, 255, 255, 0.3)',
  },
  graphics: [
    '#41d3bd',
    '#a95adf',
  ],
  border: {
    medium: '#c2c2c2',
    light: '#e1e1e1',
  },
  background: {
    default: '#fff',
    inverted: '#272b2d',
    disabled: '#e1e1e1',
  },
  text: {
    default: '#666',
    inverted: '#fff',
    disabled: '#666',
  },
};

export const fonts = {
  brand: '"Overpass", Raleway, "Open Sans", arial, sans-serif',
  default: '"Overpass", Raleway, "Open Sans", arial, sans-serif',
  monospace: '"Source Code Pro", monospace',
  icon: 'Bandwidth',
};

export const shadows = {
  short: '0 2px 4px rgba(0, 0, 0, 0.14)',
  long: `
    0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 1px 5px 0 rgba(0, 0, 0, 0.12),
    0 3px 1px -2px rgba(0 ,0, 0, 0.2)
    `,
  focusOutline: '0 0 0 5px #d9f5fc',
};

export const spacing = {
  extraSmall: '5px',
  small: '10px',
  medium: '15px',
  large: '30px',
  extraLarge: '60px',
};

export const thicknesses = {
  normal: '1px',
  wide: '2px',
  extraWide: '3px',
};

export default {
  name: 'iris',
  colors,
  fonts,
  shadows,
  spacing,
  thicknesses,
};
