import React from "react";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import { makeStyles } from "@mui/styles";
import navigationConfig from "./navigationConfig";

import TjedzaNavGroup from "./TjedzaNavGroup";
import TjedzaNavCollapse from "./TjedzaNavCollapse";
import TjedzaNavItem from "./TjedzaNavItem";
import TjedzaNavLink from "./TjedzaNavLink";
import Typography from "@mui/material/Typography";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  logoBg: {
    backgroundColor: theme.palette.type !== "dark" && "#18202c",
    // backgroundColor: "#18202c"
  },
  logo: {
    padding: "1rem",
    "& span": {
      display: "block",
      color: "rgba(41, 113, 245, 0.87)",
    },
  },
  navCustom: {
    "& .MuiTypography-root": {
      fontSize: ".85rem",
    },
    "& .MuiListItemIcon-root": {
      minWidth: "35px",
    },
    "& .MuiCollapse-wrapperInner a": {
      paddingLeft: "50px",
    },
  },
}));

const TjedzaNavigation = (props) => {
  const classes = useStyles(props);

  return (
    <div>
      <List className={classes.navCustom}>
        {navigationConfig.map((item) => (
          <React.Fragment key={item.id}>
            {item.type === "group" && <TjedzaNavGroup item={item} />}

            {item.type === "collapse" && <TjedzaNavCollapse item={item} />}

            {item.type === "item" && <TjedzaNavItem item={item} />}

            {item.type === "link" && <TjedzaNavLink item={item} />}

            {item.type === "divider" && <Divider className="my-16" />}
          </React.Fragment>
        ))}
      </List>
    </div>
  );
};

export default TjedzaNavigation;
