import React from "react";
import { makeStyles } from '@mui/styles';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Icon from '@mui/material/Icon';
import NavLinkAdapter from "./NavLinkAdapter";

import TjedzaNavBadge from "./TjedzaNavBadge";

const useStyles = makeStyles(theme => ({
  active: {
    background: "#2467db",
    color: "#fff",
    "&:hover": {
      background: "#1a4fab"
    }
    // // borderRadius: "10px 0 0 10px"
  }
}));

const TjedzaNavItem = props => {
  const classes = useStyles();
  const { item } = props;

  return (
    <ListItem
      button
      component={NavLinkAdapter}
      to={item.url}
      activeClassName={classes.active}
      exact={item.exact}
    >
      {item.icon && (
        <ListItemIcon>
          <Icon>{item.icon}</Icon>
        </ListItemIcon>
      )}
      <ListItemText primary={item.title} />
      {item.badge && <TjedzaNavBadge className="mr-4" badge={item.badge} />}
    </ListItem>
  );
};

export default TjedzaNavItem;
