import { createMuiTheme } from '@material-ui/core/styles';

export type breakpointsType = {
  [key: string]: number;
};

// export const breakpoints: breakpointsType = {
export const breakpoints: breakpointsType = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1600,
} as const;

export const baseStyles = {
  borderRadius: '8px',
  transition: '200ms ease-in-out',
  fontFamily: "'Roboto', sans-serif",
  boxShadow: {
    primary: '0px 4px 10px rgba(0, 0, 0, 0.25)',
    secondary:
      '0px 10px 13px -7px rgba(0, 0, 0, 1), 5px 5px 37px 19px rgba(0,0,0,0);',
  },
} as const;

export const overridesTheme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        html: {
          // WebkitFontSmoothing: 'auto',
          height: '100%',
          fontFamily: "'Roboto', sans-serif",
        },
        body: {
          overflowY: 'scroll',
        },
      },
    },
  },
});
