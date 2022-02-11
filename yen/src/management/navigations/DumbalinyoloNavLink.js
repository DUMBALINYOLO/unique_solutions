import React from "react";
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Icon from '@mui/material/Icon';
import DumbalinyoloNavBadge from "./DumbalinyoloNavBadge";

const DumbalinyoloNavLink = props => {
  const { item } = props;
  return (
    <ListItem
      button
      component="a"
      href={item.url}
      target={item.target ? item.target : "_blank"}
    >
      {item.icon && (
        <ListItemIcon>
          <Icon>{item.icon}</Icon>
        </ListItemIcon>
      )}
      <ListItemText primary={item.title} />
      {item.badge && <DumbalinyoloNavBadge className="mr-4" badge={item.badge} />}
    </ListItem>
  );
};

export default DumbalinyoloNavLink;
