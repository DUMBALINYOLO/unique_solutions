import React from "react";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import NavLinkAdapter from "./NavLinkAdapter";

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: 20
  }
}));

const DumbalinyoloBreadCrumbs = props => {
  const { path } = props;
  const classes = useStyles();

  const pathName = path.location.pathname.split("/");
  const lastRoute = pathName.splice(-1, 1);

  return (
    <div className={classes.root}>
      <Breadcrumbs aria-label="breadcrumb">
        {pathName.length > 1 &&
          pathName.map((item, index) => (
            <Link
              key={index}
              component={NavLinkAdapter}
              to={pathName.join("/")}
              activeClassName="active"
              exact={true}
              color="inherit"
            >
              {item === "" ? "dashboard" : item}
            </Link>
          ))}
        <Typography color="textPrimary">{lastRoute.toString()}</Typography>
      </Breadcrumbs>
    </div>
  );
};

export default DumbalinyoloBreadCrumbs;
