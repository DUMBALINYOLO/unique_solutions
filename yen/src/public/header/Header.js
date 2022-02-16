import React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
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
import clsx from "clsx";
import NavigationContext from "../../context/NavigationContext";
import ThemeContext from "../../context/ThemeContext";
import Fab from "@mui/material/Fab";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FiShoppingCart, FiBookOpen, FiActivity, FiBarChart2 } from "react-icons/fi";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import projectLogo from './fort.jpg';




const TjedzaAppBar = (props) => {


  const [state, setState] = React.useState({
    right: false
  });

  const toggleDrawer = (side, open) => event => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };


  const { setThemeName, curThemeName } = React.useContext(ThemeContext);

  return (
    <AppBar
      position="fixed"
      className="header-nav-wrapper header-nav-wrapper-lg  px-4 "
    >
      <Toolbar>
        <div className="header-nav-logo">
          <div className="nav-logo">
          <Button
              color="inherit"
              className=" px-4 py-2 text-capitalize"
              component={Link}
              to='/'

            >
              <i className="bg-white">
                <img
                  alt="gosso"
                  src={projectLogo}
                />
              </i>
              UNIQUE SOLUTIONS
            </Button>
          </div>
        </div>
        <div className="header-nav-menu d-none d-lg-block">
          <div className="d-flex justify-content-center">
            <Button
              color="inherit"
              className=" px-4 py-2 text-capitalize"
              component={Link}
              to='/products'
              >
              <FiShoppingCart className="font-size-xxl" style={{padding: '6px'}}/>
                PRODUCTS
            </Button>
            <Button
              color="inherit"
              className=" px-4 py-2 text-capitalize"
              component={Link}
              to='/services'
            >
                <FiActivity className="font-size-xxl" style={{padding: '6px'}}/>
               SERVICES
            </Button>
          </div>
        </div>
        <div >
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

        </div>
        <div className="header-nav-actions flex-grow-0 flex-lg-grow-1">
          <span className="d-none d-lg-block">
            <Button
              color="inherit"
              component={Link}
              to='/login'
              className=" px-4 py-2 text-capitalize"
            >
              <FiBarChart2 className="font-size-xxl" style={{padding: '6px'}}/>
               LOGIN
            </Button>
          </span>
          <span className="d-block d-lg-none">
            <Fab
              onClick={toggleDrawer('right', true)}
              color="primary"
              size="medium">
              <MenuRoundedIcon />
            </Fab>
          </span>
        </div>
        <Drawer
          variant="temporary"
          anchor="right"
          open={state.right}
          onClose={toggleDrawer('right', false)}
          elevation={11}>
          <List className="py-0">
            <ListItem className="d-block bg-secondary py-2 px-3">
              <div className="d-flex w-100 justify-content-between navbar-light align-items-center">
                <div className="header-nav-logo justify-content-start">
                  <Button
                      color="inherit"
                      className=" px-4 py-2 text-capitalize"
                      component={Link}
                      to='/customers'

                    >
                      UNIQUE SOLUTIONS
                    </Button>
                </div>
                <IconButton
                  onClick={toggleDrawer('right', false)}
                  color="primary">
                  <MenuRoundedIcon />
                </IconButton>
              </div>
            </ListItem>
            <Divider />

            <Divider />
            <ListItem className="d-block py-3 px-2">
              <Button
                color="inherit"
                className=" px-4 py-2 text-capitalize"
                component={Link}
                to='/products'
                >
                <FiShoppingCart className="font-size-xxl" style={{padding: '4px'}}/>
                  PRODUCTS
              </Button>

            </ListItem>
            <Divider />
            <ListItem className="d-block py-3 px-2">
              <Button
                color="inherit"
                className=" px-4 py-2 text-capitalize"
                component={Link}
                to='/services'
              >
                  <FiActivity className="font-size-xxl" style={{padding: '4px'}}/>
                 SERVICES
              </Button>

            </ListItem>
            <Divider />
            <Divider />
            <ListItem className="d-block py-3 px-2">
              <Button
                  color="inherit"
                  className=" px-4 py-2 text-capitalize"
                  component={Link}
                  to='/login'
                >
                  LOGIN
              </Button>

            </ListItem>
            <Divider />

          </List>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};


export default TjedzaAppBar;
