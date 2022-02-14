import React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import { makeStyles } from "@mui/styles";
import { alpha } from '@mui/material/styles';
import  Badge  from "@mui/material/Badge";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import MailIcon from "@mui/icons-material/Mail";
import TodayIcon from "@mui/icons-material/Today";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import NotificationsIcon from "@mui/icons-material/Notifications";
import TjedzaAvatarMenu from "./TjedzaAvatarMenu";
import clsx from "clsx";
import NavigationContext from "../../../context/NavigationContext";
import ThemeContext from "../../../context/ThemeContext";
import {logout} from '../../../actions/auth';
import {connect } from 'react-redux';


const useStyles = makeStyles((theme) => ({
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: (props) => `calc(100% - ${props.drawerWidth}px)`,
    marginLeft: (props) => props.drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    // marginRight: theme.spacing(2)
  },
  grow: {
    flexGrow: 1,
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor:
      theme.palette.type === "dark"
        ? alpha(theme.palette.common.white, 0.15)
        : alpha(theme.palette.action.disabled, 0.15),
    "&:hover": {
      backgroundColor:
        theme.palette.type === "dark"
          ? alpha(theme.palette.common.white, 0.25)
          : alpha(theme.palette.action.disabled, 0.25),
    },
    // marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  appbarSection: {
    display: "flex",
    // display: "none",
    alignItems: "center",
    // [theme.breakpoints.up("sm")]: {
    //   display: "flex"
    // }
  },
  appbarToday: {
    display: "flex",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
}));

const TjedzaAppBar = (props) => {

  const classes = useStyles(props);
  const { open, handleDrawerToggle, handleRightPanelOpen } = React.useContext(
    NavigationContext
  );


  const { setThemeName, curThemeName } = React.useContext(ThemeContext);

  return (
    <AppBar
      position="fixed"
      className={clsx(classes.appBar, {
        [classes.appBarShift]: open,
      })}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerToggle}
          edge="start"
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ "aria-label": "search" }}
          />
        </div>
        <div className={classes.grow} />
        <div className={classes.appbarSection}>
          <IconButton
            aria-haspopup="true"
            onClick={() =>
              curThemeName === "dark"
                ? setThemeName("light")
                : setThemeName("dark")
            }
            color="inherit"
          >
            {curThemeName === "dark" ? (
              <Brightness7Icon />
            ) : (
              <Brightness4Icon />
            )}
          </IconButton>
          <div className={classes.appbarToday}>
            <IconButton
              aria-haspopup="true"
              onClick={(event) => handleRightPanelOpen(event, 0)}
              color="inherit"
            >
              <TodayIcon />
            </IconButton>
            <IconButton
              aria-haspopup="true"
              onClick={(event) => handleRightPanelOpen(event, 2)}
              aria-label="show 4 new messages"
              color="inherit"
            >
              <Badge badgeContent={4} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton>
          </div>
          <IconButton
            aria-haspopup="true"
            onClick={(event) => handleRightPanelOpen(event, 1)}
            aria-label="show 17 new notifications"
            color="inherit"
          >
            <Badge badgeContent={17} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <TjedzaAvatarMenu logout={props.logout} userName={props.userName}/>
        </div>
      </Toolbar>
    </AppBar>
  );
};


const mapStateToProps = state =>({
  token: state.auth.token,
  userName: state.auth.userName,
})

export default connect(
  mapStateToProps,
  {logout} )
( TjedzaAppBar);
