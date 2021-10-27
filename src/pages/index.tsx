import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
// import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Image from 'next/image';
import { useContext } from 'react';

import { WebsitePageContext } from '../components/wrappers/WebsitePage/context/index';
import websitePageHOC from '../components/wrappers/WebsitePage/hoc/index';

function Home(): JSX.Element {
  const websitePageContext = useContext(WebsitePageContext);

  const logo = websitePageContext.isDark
    ? '/AxBladeSoftware_logo_nome_light.svg'
    : '/AxBladeSoftware_logo_nome_dark.svg';

  return (
    <>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Grid>
          <Image src={logo} width={400} height={200} />
        </Grid>
        <Grid>
          <Typography
            component="h1"
            variant="h3"
            color="inherit"
            align="center"
            style={{ fontWeight: 800 }}
          >
            AxeBlade Software
          </Typography>
        </Grid>
      </Box>
    </>
  );
}

export default websitePageHOC(Home, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Home',
    },
    footerProps: {
      content: 'Copyright AxeBlade Software',
    },
  },
});
