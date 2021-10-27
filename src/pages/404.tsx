import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';

import websitePageHOC from '../components/wrappers/WebsitePage/hoc';

const Page404Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 70vh;
  background-color: ${({ theme }) => theme.palette.error.main};
  margin-top: 2rem;
`;

const Page404 = (): JSX.Element => (
  <Page404Wrapper boxShadow={3} borderRadius={40} boxSizing={50}>
    {/* <Paper elevation={3} style={{ width: '90%' }}> */}
    <Typography variant="h1" style={{ fontWeight: 800 }}>
      404
    </Typography>
    <Typography variant="h5" align="center">
      Parece que página procurada não existe!
    </Typography>
    {/* </Paper> */}
  </Page404Wrapper>
);

export default websitePageHOC(Page404, {
  pageWrapperProps: {
    seoProps: {
      headTitle: '404',
    },
  },
});
