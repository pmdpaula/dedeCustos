import { Theme, useTheme } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';

/**
 * Be careful using this hook. It only works because the number of
 * breakpoints in theme is static. It will break once you change the number of
 * breakpoints. See https://reactjs.org/docs/hooks-rules.html#only-call-hooks-at-the-top-level
 */
function useIsMidOrHigerSizeScreen(): boolean {
  const theme: Theme = useTheme();
  return useMediaQuery(theme.breakpoints.up('md'));
}
