import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

import { overridesTheme } from '.';

// declare module '@material-ui/core/styles/createPalette' {
//   interface Palette {
//     tertiary: Palette['primary'];
//   }
//   interface PaletteOptions {
//     tertiary: PaletteOptions['primary'];
//   }
// }

// Create a theme instance.
const themeLight = createMuiTheme({
  ...overridesTheme,
  palette: {
    type: 'light',
    primary: {
      main: '#42929D',
    },
    secondary: {
      main: '#007b5f',
      contrastText: '#ddd',
    },
    tertiary: {
      main: '#01426A',
      contrastText: '#ddd',
    },
    error: {
      main: red.A100,
    },
    warning: {
      main: '#FECC17',
    },
    background: {
      default: '#fff',
      paper: '#f5f5f5',
    },
  },
});

export default themeLight;

export type themeProps = typeof themeLight;
