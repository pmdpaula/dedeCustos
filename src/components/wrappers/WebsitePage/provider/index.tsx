/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { useContext } from 'react';
import { ThemeProvider } from 'styled-components';

import themeDark from '../../../../theme/themeDark';
import themeLight from '../../../../theme/themeLight';
import { WebsitePageContext } from '../context/index';

export default function WebsiteGlobalProvider({ children }: any) {
  const websitePageContext = useContext(WebsitePageContext);

  return (
    <MuiThemeProvider
      theme={websitePageContext.isDark ? themeDark : themeLight}
    >
      <ThemeProvider theme={websitePageContext.isDark ? themeDark : themeLight}>
        <CssBaseline />
        {/* <GlobalStyle /> */}
        {children}
      </ThemeProvider>
    </MuiThemeProvider>
  );
}
