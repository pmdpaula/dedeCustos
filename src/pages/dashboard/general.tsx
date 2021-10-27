import Typography from '@material-ui/core/Typography';

import PageSquare from '../../components/commons/PageSquare/PageSquare';
import websitePageHOC from '../../components/wrappers/WebsitePage/hoc';

const pageName = 'Dashboard Geral';

const General = () => (
  <PageSquare>
    <Typography>{pageName}</Typography>
  </PageSquare>
);

export default websitePageHOC(General, {
  pageWrapperProps: {
    seoProps: {
      headTitle: pageName,
    },
  },
});
