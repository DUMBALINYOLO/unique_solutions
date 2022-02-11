import React, { Fragment } from 'react';

import clsx from 'clsx';
import { Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Tooltip  from '@mui/material/Tooltip';
import { connect } from 'react-redux';
import projectLogo from '../../assets/images/react.svg';
import { setSidebarToggleMobile } from '../../actions/uiactions';
import MenuOpenRoundedIcon from '@mui/icons-material/MenuOpenRounded';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';


const SidebarHeader = props => {

  const toggleSidebar = () => {
    setSidebarToggle(!sidebarToggle);
  };
  const toggleSidebarMobile = () => {
    setSidebarToggleMobile(!sidebarToggleMobile);
  };


  const {
    sidebarToggleMobile,
    setSidebarToggleMobile,
    setSidebarToggle,
    sidebarToggle,
    sidebarHover,
  } = props;

  return (
    <Fragment>
      <div
        className={clsx('app-sidebar-header', {
          'app-sidebar-header-close': sidebarToggle && !sidebarHover,
        })}>
        <Box className="header-logo-wrapper" title="Desbravador Software">
          <Link to="/DashboardDefault" className="header-logo-wrapper-link">
            <IconButton
              color="primary"
              size="medium"
              className="header-logo-wrapper-btn">
              <img
                className="app-sidebar-logo"
                alt="Desbravador Software"
                src={projectLogo}
              />
            </IconButton>
          </Link>
          <Box className="header-logo-text">Desbravador</Box>
        </Box>
        <Box
          className={clsx('app-sidebar-header-btn', {
            'app-sidebar-header-btn-close': sidebarToggle && !sidebarHover,
          })}>
          <Tooltip title="Toggle Sidebar" placement="right">
            <IconButton color="inherit" onClick={toggleSidebar} size="medium">
              {sidebarToggle ? <MenuRoundedIcon /> : <MenuOpenRoundedIcon />}
            </IconButton>
          </Tooltip>
        </Box>
        <Box className="app-sidebar-header-btn-mobile">
          <Tooltip title="Toggle Sidebar" placement="right">
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
      </div>
    </Fragment>
  );
};
const mapStateToProps = state => ({
  sidebarToggle: state.ui.sidebarToggle,
  sidebarHover: state.ui.sidebarHover,
  sidebarToggleMobile: state.ui.sidebarToggleMobile,
});

const mapDispatchToProps = dispatch => ({
  setSidebarToggleMobile: enable => dispatch(setSidebarToggleMobile(enable)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SidebarHeader);
