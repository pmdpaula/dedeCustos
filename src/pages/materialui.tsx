import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  useMediaQuery,
} from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import SignalWifiOffIcon from '@material-ui/icons/SignalWifiOff';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import websitePageHOC from '../components/wrappers/WebsitePage/hoc/index';
import { useWidth } from '../hooks/usefullHooks';
import { Logo } from '../theme/Logo';

// https://material-ui.com/pt/system/basics/#css-property
function RealWorld() {
  return (
    <Box clone pt={2} pr={1} pb={1} pl={2}>
      <Paper elevation={0}>
        <Grid container spacing={2} alignItems="center" wrap="nowrap">
          <Grid item>
            <Box bgcolor="primary.main" clone>
              <Avatar>
                <SignalWifiOffIcon />
              </Avatar>
            </Box>
          </Grid>
          <Grid item>
            <Typography>
              You have lost connection to the internet. This app is offline.
            </Typography>
          </Grid>
        </Grid>
        <Grid container justify="flex-end" spacing={1}>
          <Grid item>
            <Button color="primary">Turn on wifi</Button>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}

const defaultProps = {
  bgcolor: 'background.paper',
  border: 1,
  m: 1,
  borderColor: 'text.primary',
  style: { width: '5rem', height: '5rem' },
};

function FlexDirection() {
  return (
    <Container
      style={{
        width: '100%',
        border: 'solid 3px violet',
        borderRadius: 12,
        margin: 4,
      }}
    >
      <Box
        display="flex"
        flexDirection="row"
        p={1}
        m={1}
        bgcolor="background.paper"
      >
        <Box p={1} bgcolor="grey.300">
          Item 1
        </Box>
        <Box p={1} bgcolor="grey.300">
          Item 2
        </Box>
        <Box p={1} bgcolor="grey.300">
          Item 3
        </Box>
      </Box>
      <Box
        display="flex"
        flexDirection="row-reverse"
        p={1}
        m={1}
        bgcolor="background.paper"
      >
        <Box p={1} bgcolor="grey.300">
          Item 1
        </Box>
        <Box p={1} bgcolor="grey.300">
          Item 2
        </Box>
        <Box p={1} bgcolor="grey.300">
          Item 3
        </Box>
      </Box>
    </Container>
  );
}

function BackgroundColor() {
  return (
    <Grid container spacing={1} style={{ margin: 8 }}>
      <Grid item xs={12} sm={4}>
        <Box bgcolor="primary.main" color="primary.contrastText" p={2}>
          primary.main
        </Box>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Box bgcolor="secondary.main" color="secondary.contrastText" p={2}>
          secondary.main
        </Box>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Box bgcolor="error.main" color="error.contrastText" p={2}>
          error.main
        </Box>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Box bgcolor="warning.main" color="warning.contrastText" p={2}>
          warning.main
        </Box>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Box bgcolor="info.main" color="info.contrastText" p={2}>
          info.main
        </Box>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Box bgcolor="success.main" color="success.contrastText" p={2}>
          success.main
        </Box>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Box bgcolor="text.primary" color="background.paper" p={2}>
          text.primary
        </Box>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Box bgcolor="text.secondary" color="background.paper" p={2}>
          text.secondary
        </Box>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Box bgcolor="text.disabled" color="background.paper" p={2}>
          text.disabled
        </Box>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Box bgcolor="tertiary.main" color="tertiary.contrastText" p={2}>
          tertiary.main
        </Box>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Box bgcolor="quaternary.main" color="background.paper" p={2}>
          quaternary.main
        </Box>
      </Grid>
    </Grid>
  );
}

function HeightComponent() {
  return (
    <Grid
      container
      style={{
        width: '100%',
        border: 'solid 3px violet',
        borderRadius: 12,
        margin: 4,
      }}
    >
      <Box
        boxShadow={0}
        bgcolor="background.paper"
        m={1}
        p={1}
        style={{ width: '8rem', height: '5rem' }}
      >
        boxShadow=
        {0}
      </Box>
      <Box
        boxShadow={1}
        bgcolor="background.paper"
        m={1}
        p={1}
        style={{ width: '8rem', height: '5rem' }}
      >
        boxShadow=
        {1}
      </Box>
      <Box
        boxShadow={2}
        bgcolor="background.paper"
        m={1}
        p={1}
        style={{ width: '8rem', height: '5rem' }}
      >
        boxShadow=
        {2}
      </Box>
      <Box
        boxShadow={3}
        bgcolor="background.paper"
        m={1}
        p={1}
        style={{ width: '8rem', height: '5rem' }}
      >
        boxShadow=
        {3}
      </Box>
    </Grid>
  );
}

function TextAlignment() {
  return (
    <Box border={1} borderColor="pink" my={3}>
      <Typography component="div">
        <Box textAlign="justify" m={1}>
          Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus
          sit amet fermentum. Donec sed odio operae, eu vulputate felis rhoncus.
        </Box>
        <Box textAlign="left" m={1}>
          Left aligned text.
        </Box>
        <Box textAlign="center" m={1}>
          Center aligned text.
        </Box>
        <Box textAlign="right" m={1}>
          Right aligned text.
        </Box>
      </Typography>
      <Typography component="div">
        <Box fontFamily="fontFamily" m={1}>
          Default
        </Box>
        <Box fontFamily="Monospace" fontSize="h6.fontSize" m={1}>
          Monospace
        </Box>
      </Typography>
    </Box>
  );
}

// const websitePageContext = useContext(WebsitePageContext);

function Material(): JSX.Element {
  // console.log(`SwitchTheme isDark: ${websitePageContext.isDarkTheme}`);

  // const [spacing, setSpacing] = useState<GridSpacing>(2);
  // const classes = useStyles();

  // const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
  //   setSpacing(Number((event.target as HTMLInputElement).value) as GridSpacing);
  // };
  const theme = useContext(ThemeContext);
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  const width = useWidth();
  // console.log(palette.background);

  // const websitePageContext = useContext(WebsitePageContext);
  // eslint-disable-next-line prefer-destructuring
  // const SwitchTheme = websitePageContext.SwitchTheme;

  return (
    <Container maxWidth="lg">
      {/* <Switch
        checked={websitePageContext.isDarkTheme}
        onChange={websitePageContext.toggleTheme}
      /> */}
      {/* <SwitchTheme /> */}
      {/* tema
      </Button> */}
      <span>{`width: ${width}`}</span>
      <br />
      <Box>
        <Logo size="large" />
      </Box>
      {matches && (
        <span>{`theme.breakpoints.up('sm') matches: ${matches}`}</span>
      )}
      <TextAlignment />

      <HeightComponent />

      <BackgroundColor />

      <Grid>
        <Button variant="contained">Default</Button>
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="secondary">
          Secondary
        </Button>
        <Button variant="contained" disabled>
          Disabled
        </Button>
        <Button variant="contained" color="primary" href="#contained-buttons">
          Link
        </Button>
        {/* <Button
          variant="contained"
          href="#contained-buttons"
          style={{
            background: palette.tertiary.main,
            color: palette.tertiary.contrastText,
          }}
        >
          tertiary
        </Button> */}
      </Grid>

      <RealWorld />

      <Box
        display="flex"
        justifyContent="center"
        border={2}
        borderColor="primary.main"
        borderRadius={4}
      >
        <Box {...defaultProps} border={0} />
        <Box {...defaultProps} borderTop={0} />
        <Box {...defaultProps} borderRight={0} />
        <Box {...defaultProps} borderBottom={0} />
        <Box {...defaultProps} borderLeft={0} />
      </Box>

      <FlexDirection />
    </Container>
  );
}

export default websitePageHOC(Material, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Material',
    },
  },
});
