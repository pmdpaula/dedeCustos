/* eslint-disable import/prefer-default-export */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { css } from 'styled-components';

import { breakpoints } from '../index';

// type breakpointsType = typeof breakpoints;
// type breakpointsType = {
//   [key: string]: number;
// };

export const breakpointsMedia = (cssByBreakpoint) => {
  const breakpointNames = Object.keys(breakpoints);

  return breakpointNames
    .filter((breakpointName) => Boolean(cssByBreakpoint[breakpointName]))
    .map(
      (breakpointName) => css`
        @media only screen and (min-width: ${breakpoints[breakpointName]}px) {
          ${cssByBreakpoint[breakpointName]}
        }
      `,
    );
};
