import { createMuiTheme } from '@material-ui/core/styles';

import { overridesTheme } from '.';

declare module '@material-ui/core/styles/createPalette' {
  interface Palette {
    tertiary: Palette['primary'];
  }
  interface PaletteOptions {
    tertiary: PaletteOptions['primary'];
  }
}

// Create a theme instance.
const themeDark = createMuiTheme({
  ...overridesTheme,
  palette: {
    type: 'dark',
    primary: {
      main: '#01426A',
      contrastText: '#ddd',
    },
    secondary: {
      main: '#007b5f',
    },
    tertiary: {
      main: '#42929D',
    },
    error: {
      main: '#610404',
    },
    warning: {
      main: '#FECC17',
    },
    // background: {
    //   default: '#fff',
    //   paper: '#f5f5f5',
    // },
  },
});

export default themeDark;
