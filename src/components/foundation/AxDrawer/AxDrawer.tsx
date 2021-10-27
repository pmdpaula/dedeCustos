import Divider from '@material-ui/core/Divider';
import Drawer, { DrawerProps } from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import clsx from 'clsx';

import globalDefinitions from '../../../config/globalDefinitions';
import AppMenu from './AppMenu';

const { drawerWidth } = globalDefinitions;

const useStyles = makeStyles((theme) => ({
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(0),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(8),
    },
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
}));

interface AxDrawerProps {
  open: boolean;
  toggleOpenDrawer: () => void;
  onClose: any;
  variant: DrawerProps['variant'];
}

const AxDrawer = ({
  open,
  toggleOpenDrawer,
  ...props
}: AxDrawerProps): JSX.Element => {
  const classes = useStyles();

  return (
    <Drawer
      variant="permanent"
      open={open}
      classes={{
        paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
      }}
      {...props}
    >
      <div className={classes.toolbarIcon}>
        <IconButton onClick={toggleOpenDrawer}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <AppMenu />
    </Drawer>
  );
};

export default AxDrawer;
