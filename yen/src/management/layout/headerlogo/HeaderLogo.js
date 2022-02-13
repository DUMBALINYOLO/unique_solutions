import React, { Fragment } from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { connect } from 'react-redux';
import projectLogo from '../../../assets/images/react.svg';


const HeaderLogo = props => {
  const { sidebarToggle, sidebarHover } = props;
  return (
    <Fragment>
      <div
        className={clsx('app-header-logo', {
          'app-header-logo-close': sidebarToggle,
          'app-header-logo-open': sidebarHover,
        })}>
        <Box className="header-logo-wrapper" title="Desbravador Software">
          <Link to="/DashboardDefault" className="header-logo-wrapper-link">
            <IconButton
              color="primary"
              size="medium"
              className="header-logo-wrapper-btn">
              <img
                className="app-header-logo-img"
                alt="Desbravador Software"
                src={projectLogo}
              />
            </IconButton>
          </Link>
          <Box className="header-logo-text">Desbravador</Box>
        </Box>
      </div>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  sidebarToggle: state.ui.sidebarToggle,
  sidebarHover: state.ui.sidebarHover,
});

export default connect(mapStateToProps)(HeaderLogo);
