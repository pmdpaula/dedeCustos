/* eslint-disable @typescript-eslint/no-unused-vars */
import Collapse from '@material-ui/core/Collapse';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import IconExpandLess from '@material-ui/icons/ExpandLess';
import IconExpandMore from '@material-ui/icons/ExpandMore';
import clsx from 'clsx';
import Color from 'color';
import { useContext, useState } from 'react';
import styled, { ThemeContext } from 'styled-components';

import { menutItemsProps } from '../../../data/listItems';
import { themeProps } from '../../../theme/themeLight';
import AppMenuItemComponent from './AppMenuItemComponent';

export type AppMenuItemProps = menutItemsProps & {
  dense: boolean;
};

export type GmailListItemStyleProps = {
  color: string;
  // collapsed?: boolean;
};

const useStyles = makeStyles(
  // eslint-disable-next-line no-unused-vars
  (theme: themeProps) =>
    createStyles({
      menuItem: {},
      menuItemIcon: {
        color: theme.palette.tertiary.main,
        fontWeight: 600,
      },
      selected: () => ({
        fontWeight: 'bold' as const,
        color: theme.palette.secondary.main,
        backgroundColor: `${Color(theme.palette.secondary.main)
          .saturate(0.5)
          .lighten(0.9)
          .toString()} !important`,
        '& > svg:first-child': {
          opacity: 1,
        },
      }),
    }),
  // eslint-disable-next-line function-paren-newline
);

const AxAppMenuItemComponent = styled(AppMenuItemComponent)``;

// const AxListItemIcon = styled(ListItemIcon)`
//   color: ${({ theme }) => theme.palette.primary.main};
//   font-weight: 600;

//   ${AxAppMenuItemComponent} hover: {
//     box-shadow: 2px 2px 4px #000000;
//   }
// `;

const AppMenuItem: React.FC<AppMenuItemProps> = ({ dense, ...props }) => {
  const { name, Icon, link, disabled, items = [] } = props;
  // eslint-disable-next-line prettier/prettier
  const theme = useContext(ThemeContext);
  const classes = useStyles(theme);

  const isExpandable = items && items.length > 0;
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(false);

  function handleClick() {
    setOpen(!open);
    setSelectedItem(!selectedItem);
  }

  const MenuItemRoot = (
    <AxAppMenuItemComponent
      className={clsx(classes.menuItem, selectedItem)}
      link={disabled ? null : link}
      onClick={handleClick}
      disabled={disabled}
    >
      {/* Display an icon if any */}
      {!!Icon && (
        <ListItemIcon className={classes.menuItemIcon}>
          <Icon />
        </ListItemIcon>
      )}
      <ListItemText primary={name} inset={!Icon} />
      {/* Display the expand menu if the item has children */}
      {isExpandable && !open && <IconExpandMore />}
      {isExpandable && open && <IconExpandLess />}
    </AxAppMenuItemComponent>
  );

  const MenuItemChildren = isExpandable ? (
    <Collapse in={open} timeout="auto" unmountOnExit>
      <Divider />
      <List component="div" dense={dense} disablePadding>
        {items.map((item, index) => {
          const id = `key${index}`;
          return <AppMenuItem {...item} dense={dense} key={id} />;
        })}
      </List>
    </Collapse>
  ) : null;

  return (
    <>
      {MenuItemRoot}
      {MenuItemChildren}
    </>
  );
};

// AppMenuItem.propTypes = AppMenuItemPropTypes;

export default AppMenuItem;
