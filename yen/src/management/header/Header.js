import React, { Fragment } from 'react';

import clsx from 'clsx';
import { Link } from 'react-router-dom';
import Hidden from "@mui/material/Hidden";
import IconButton from "@mui/material/IconButton";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import { connect } from 'react-redux';
import {
  setSidebarToggle,
  setSidebarToggleMobile,
} from '../../actions/uiactions';
import projectLogo from '../../assets/images/react.svg';
import HeaderLogo from '../headerlogo/HeaderLogo';
import HeaderUserbox from '../headeruserbox/HeaderUserbox';
import MenuOpenRoundedIcon from '@mui/icons-material/MenuOpenRounded';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';


const Header = props => {

  const toggleSidebar = () => {
    setSidebarToggle(!sidebarToggle);
  };


  const toggleSidebarMobile = () => {
    setSidebarToggleMobile(!sidebarToggleMobile);
  };

  const {
    headerShadow,
    headerFixed,
    sidebarToggleMobile,
    setSidebarToggleMobile,
    setSidebarToggle,
    sidebarToggle,
  } = props;

  return (
    <Fragment>
      <AppBar
        color="secondary"
        className={clsx('app-header', {
          'app-header-collapsed-sidebar': props.isCollapsedLayout,
        })}
        position={headerFixed ? 'fixed' : 'absolute'}
        elevation={headerShadow ? 11 : 3}>
        {!props.isCollapsedLayout && <HeaderLogo />}
        <Box className="app-header-toolbar">
          <Hidden lgUp>
            <Box className="app-logo-wrapper" title="Desbravador">
              <Link to="/DashboardDefault" className="app-logo-link">
                <IconButton
                  color="primary"
                  size="medium"
                  className="app-logo-btn">
                  <img
                    className="app-logo-img"
                    alt="Desbravador Software"
                    src={projectLogo}
                  />
                </IconButton>
              </Link>
              <Hidden smDown>
                <Box className="app-logo-text">Desbravador</Box>
              </Hidden>
            </Box>
          </Hidden>
          <Hidden mdDown>
            <Box className="d-flex align-items-center">
              {!props.isCollapsedLayout && (
                <Box
                  className={clsx('btn-toggle-collapse', {
                    'btn-toggle-collapse-closed': sidebarToggle,
                  })}>
                  <Tooltip title="menu" placement="right">
                    <IconButton
                      color="inherit"
                      onClick={toggleSidebar}
                      size="medium"
                      className="btn-inverse">
                      {sidebarToggle ? (
                        <MenuRoundedIcon />
                      ) : (
                        <MenuOpenRoundedIcon />
                      )}
                    </IconButton>
                  </Tooltip>
                </Box>
              )}
              {/* <HeaderSearch />
              <HeaderMenu /> */}
            </Box>
          </Hidden>
          <Box className="d-flex align-items-center">
            {/* <HeaderDots /> */}
            <HeaderUserbox />
            {/* <HeaderDrawer /> */}
            <Box className="toggle-sidebar-btn-mobile">
              <Tooltip title="Menu" placement="right">
                <IconButton
                  color="inherit"
                  onClick={toggleSidebarMobile}
                  size="medium">
                  {sidebarToggleMobile ? (
                    <MenuOpenRoundedIcon />
                  ) : (
                    <MenuRoundedIcon />
                  )}
                </IconButton>
              </Tooltip>
            </Box>
          </Box>
        </Box>
      </AppBar>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  headerShadow: state.ui.headerShadow,
  headerFixed: state.ui.headerFixed,
  sidebarToggleMobile: state.ui.sidebarToggleMobile,
  sidebarToggle: state.ui.sidebarToggle,
});

const mapDispatchToProps = dispatch => ({
  setSidebarToggle: enable => dispatch(setSidebarToggle(enable)),
  setSidebarToggleMobile: enable => dispatch(setSidebarToggleMobile(enable)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
