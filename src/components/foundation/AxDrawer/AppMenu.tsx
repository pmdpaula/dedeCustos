import List from '@material-ui/core/List';
import { createStyles, makeStyles } from '@material-ui/core/styles';

import { menutItems } from '../../../data/listItems';
import AppMenuItem from './AppMenuItem';

// These menu was inspired by https://medium.com/@modularcoder/reactjs-multi-level-sidebar-navigation-menu-with-typescrip-materialui-251943c12dda

const useStyles = makeStyles(
  () =>
    createStyles({
      appMenu: {
        width: '100%',
        marginTop: '0.8rem',
      },
    }),
  // eslint-disable-next-line function-paren-newline
);

// const getExpandebleItem = () =>
//   menutItems
//     .filter((item) => item.items && item.ident)
//     .map((item) => item.ident);
// // console.log('getExpandebleItem: ', getExpandebleItem());

const AppMenu: React.FC = () => {
  const classes = useStyles();
  const dense = false;

  return (
    <List
      component="nav"
      className={classes.appMenu}
      dense={dense}
      disablePadding
    >
      {menutItems.map((item) => (
        // const id = `key_${index}`;

        <AppMenuItem {...item} key={item.ident} dense={dense} />
      ))}
    </List>
  );
};

export default AppMenu;
