/* eslint-disable @typescript-eslint/no-unused-vars */
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';
import Image from 'next/image';
import { useContext } from 'react';

import globalDefinitions from '../../../config/globalDefinitions';
// import { AuthContext } from '../../wrappers/WebsitePage/context/AuthContext';
import { WebsitePageContext } from '../../wrappers/WebsitePage/context/index';
import Link from '../Link';
import AppBarRightSmallScreen from './AppBarRightSmallScreen';

const { drawerWidth } = globalDefinitions;

const useStyles = makeStyles((theme) => ({
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
    // marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: '1rem',
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  // appBarSpacer: theme.mixins.toolbar,
  // content: {
  //   flexGrow: 1,
  //   height: '100vh',
  //   overflow: 'auto',
  // },
  // container: {
  //   paddingTop: theme.spacing(4),
  //   paddingBottom: theme.spacing(4),
  // },
  // paper: {
  //   padding: theme.spacing(2),
  //   display: 'flex',
  //   overflow: 'auto',
  //   flexDirection: 'column',
  // },
  // fixedHeight: {
  //   height: 240,
  // },
}));

interface AxAppBarProps {
  open: boolean;
  toggleOpenDrawer: () => void;
  // handleDrawerClose: () => void;
  isDrawerCloseble: boolean;
  // eslint-disable-next-line no-unused-vars
  toggleTheme: (event: any) => void;
}

const AxAppBar = ({
  open,
  toggleOpenDrawer,
  isDrawerCloseble,
  toggleTheme,
}: AxAppBarProps): JSX.Element => {
  const websitePageContext = useContext(WebsitePageContext);
  const classes = useStyles();
  // const { signOut } = useContext(AuthContext);

  const logo = websitePageContext.isDark
    ? '/AxBladeSoftware_logo_nome_light.svg'
    : '/AxBladeSoftware_logo_nome_dark.svg';

  return (
    <AppBar
      position="absolute"
      className={clsx(
        classes.appBar,
        open && isDrawerCloseble && classes.appBarShift,
      )}
    >
      <Toolbar className={classes.toolbar}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={toggleOpenDrawer}
          className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
        >
          <MenuIcon />
        </IconButton>
        <Box
          className={classes.title}
          display="flex"
          justifyContent="start"
          alignItems="center"
        >
          <Image src={logo} width={120} height={40} />
          <Typography
            component="h2"
            // variant="h6"
            noWrap
            style={{ marginLeft: '1.5rem', fontWeight: 600 }}
          >
            DashBoard Admin
          </Typography>
        </Box>
        <Hidden mdUp>
          <AppBarRightSmallScreen toggleTheme={toggleTheme} />
        </Hidden>
        <Hidden smDown>
          <Box>
            <Link href="/profile">
              <Tooltip title="Perfil" arrow placement="bottom">
                <IconButton color="inherit">
                  <AssignmentIndIcon />
                </IconButton>
              </Tooltip>
            </Link>
            <Tooltip
              title={
                websitePageContext.isDark
                  ? 'Mudar para tema claro'
                  : 'Mudar para tema escuro'
              }
              arrow
              placement="bottom"
            >
              <Switch
                checked={websitePageContext.isDark}
                onChange={toggleTheme}
              />
            </Tooltip>
            <Tooltip title="Sair" arrow placement="bottom">
              <IconButton color="inherit">
                <ExitToAppOutlinedIcon />
              </IconButton>
            </Tooltip>
            {/* <Typography>sair</Typography> */}
          </Box>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

export default AxAppBar;
