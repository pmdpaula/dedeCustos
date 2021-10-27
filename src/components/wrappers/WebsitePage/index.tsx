/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Router from 'next/router';
import { parseCookies } from 'nookies';
import { ReactNode, useContext, useEffect, useState } from 'react';
import { ThemeContext } from 'styled-components';

import globalDefinitions from '../../../config/globalDefinitions';
import AxAppBar from '../../foundation/AxAppBar/AxAppBar';
import AxDrawer from '../../foundation/AxDrawer/AxDrawer';
import AxFooter from '../../foundation/AxFooter/AxFooter';
import SEO from '../../foundation/SEO';
import { WebsitePageContext } from './context/index';

interface WebsitePageWrapperProps {
  themeProps: {
    isDark: boolean;
  };
  seoProps?: { headTitle: string };
  menuProps?: {
    display: boolean;
  };
  footerProps?: {
    content?: ReactNode;
  };
  children: ReactNode;
}

const { drawerWidth } = globalDefinitions;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    overflow: 'auto',
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  // container: {
  //   paddingTop: theme.spacing(4),
  //   paddingBottom: theme.spacing(4),
  // },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}));

export default function WebsitePageWrapper({
  children,
  seoProps,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  footerProps,
}: WebsitePageWrapperProps): JSX.Element {
  const websitePageContext = useContext(WebsitePageContext);
  const theme = useContext(ThemeContext);

  const [isDark, setIsDark] = useState<boolean | undefined>();

  const isDrawerCloseble = !!useMediaQuery(theme.breakpoints.down('md')); // in small screens drawer is closable, in big is fixed

  const [openDrawer, setOpenDrawer] = useState<boolean>(!isDrawerCloseble);
  const classes = useStyles();

  const toggleTheme = (event: any) => {
    setIsDark(event.target.checked);
    websitePageContext.setIsDark(event.target.checked);
  };

  const toggleOpenDrawer = () => {
    setOpenDrawer(isDrawerCloseble ? !openDrawer : true);
  };

  // eslint-disable-next-line operator-linebreak
  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        // eslint-disable-next-line prettier/prettier
        event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setOpenDrawer(isDrawerCloseble ? open : true);
    };

  // const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  useEffect(() => {
    setOpenDrawer(!isDrawerCloseble);
  }, [isDrawerCloseble]);

  useEffect(() => {
    const root = window.document.documentElement;
    const initialColorValue = root.style.getPropertyValue(
      '--initial-color-mode',
    );

    setIsDark(initialColorValue === 'dark');
    websitePageContext.setIsDark(initialColorValue === 'dark');
    // console.log(api.get('/'));

    // const { 'nextauth.token': token } = parseCookies();
    // console.log('wrapper token', token);
    // setTimeout(() => {
    //   if (!token) {
    //     Router.push('/app/login/');
    //   }
    // }, 100);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isDark !== undefined) {
      if (isDark) {
        // document.documentElement.setAttribute('data-theme', 'dark');
        window.localStorage.setItem('theme', 'dark');
        websitePageContext.setIsDark(true);
        setIsDark(true);
      } else {
        // document.documentElement.removeAttribute('data-theme');
        window.localStorage.setItem('theme', 'light');
        websitePageContext.setIsDark(false);
        setIsDark(false);
      }
    }
  }, [isDark, websitePageContext]);

  // setCookie(null, 'themeType', theme.palette.type, {
  //   maxAge: 1000 * 24 * 60 * 60,
  //   path: '/',
  // });

  // useEffect(() => {
  //   // Remove the server-side injected CSS.
  //   const jssStyles = document.querySelector('#jss-server-side');
  //   if (jssStyles) {
  //     if (jssStyles.parentElement) {
  //       jssStyles.parentElement.removeChild(jssStyles);
  //     }
  //   }
  // }, []);

  return (
    <>
      <SEO {...seoProps} />

      {seoProps?.headTitle !== 'Login' ? (
        <div className={classes.root} key="drawerAnchor">
          <div>
            <AxAppBar
              open={openDrawer}
              toggleOpenDrawer={toggleOpenDrawer}
              isDrawerCloseble={isDrawerCloseble}
              toggleTheme={toggleTheme}
            />
          </div>
          <AxDrawer
            open={openDrawer}
            toggleOpenDrawer={toggleOpenDrawer}
            onClose={toggleDrawer(false)}
            variant={isDrawerCloseble ? 'temporary' : 'permanent'}
          />
          {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
          <main
            className={classes.content}
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
          >
            <div className={classes.appBarSpacer} />
            <Container maxWidth="lg">
              <Grid>
                {/* Page content */}
                {children}
              </Grid>
            </Container>
            {footerProps ? (
              <Container style={{ marginTop: 'auto' }}>
                <AxFooter content={footerProps.content} />
              </Container>
            ) : null}
          </main>
        </div>
      ) : (
        <>{children}</>
      )}
    </>
  );
}
