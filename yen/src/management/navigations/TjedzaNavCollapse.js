import React from "react";
import { makeStyles } from "@mui/styles";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

import TjedzaNavGroup from "./TjedzaNavGroup";
import TjedzaNavItem from "./TjedzaNavItem";
import TjedzaNavLink from "./TjedzaNavLink";
import Icon  from "@mui/material/Icon";
import TjedzaNavBadge from "./TjedzaNavBadge";
import { useNavigate } from "react-router-dom";



const useStyles = makeStyles(theme => ({
  root: {
    paddingLeft: 0
  }
}));

const persistCollapseOpen = (location, item) => {
  return location && checkPathInChildren(item, location.pathname);
};

const checkPathInChildren = (parent, url) => {
  if (!parent.children) {
    return false;
  }

  for (let i = 0; i < parent.children.length; i++) {
    if (parent.children[i].children) {
      if (checkPathInChildren(parent.children[i], url)) {
        return true;
      }
    }

    if (
      parent.children[i].url === url ||
      url.includes(parent.children[i].url)
    ) {
      return true;
    }
  }

  return false;
};


const withNavigation = (Component) => {
  return props => <Component {...props} navigate={useNavigate()} />;
}

const TjedzaNavCollapse = props => {
  const { item, location } = props;
  const classes = useStyles(props);
  const [open, setOpen] = React.useState(() =>
    persistCollapseOpen(location, item)
  );
  // const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    if (persistCollapseOpen(location, item)) {
      setOpen(true);
    }
  }, [location, item]);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <ul className={classes.root}>
      <ListItem button onClick={handleClick}>
        {item.icon && (
          <ListItemIcon>
            <Icon>{item.icon}</Icon>
          </ListItemIcon>
        )}
        <ListItemText primary={item.title} />
        {item.badge && <TjedzaNavBadge className="mr-4" badge={item.badge} />}
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      {item.children && (
        <Collapse in={open} timeout="auto" unmountOnExit>
          {item.children.map(item => (
            <React.Fragment key={item.id}>
              {item.type === "group" && <TjedzaNavGroup item={item} />}

              {item.type === "collapse" && <NavCollapse item={item} />}

              {item.type === "item" && <TjedzaNavItem item={item} />}

              {item.type === "link" && <TjedzaNavLink item={item} />}
            </React.Fragment>
          ))}
        </Collapse>
      )}
    </ul>
  );
};

const NavCollapse = withNavigation(React.memo(TjedzaNavCollapse));

export default NavCollapse;
