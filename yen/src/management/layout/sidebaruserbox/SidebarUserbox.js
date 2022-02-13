import React, { Fragment, useContext } from 'react';
import clsx from 'clsx';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import avatar4 from '../../../assets/images/avatars/avatar4.jpg';
import { connect } from 'react-redux';




const SidebarUserbox = props => {

  const user = {
    name: 'Mphilisi',
    sub: 'Mpofu',
  }

  const { sidebarToggle, sidebarHover } = props;

  return (
    <Fragment>
      <Box
        className={clsx('app-sidebar-userbox', {
          'app-sidebar-userbox--collapsed': sidebarToggle && !sidebarHover,
        })}>
        <Avatar
          alt="Remy Sharp"
          src={avatar4}
          className="app-sidebar-userbox-avatar"
        />
        <Box className="app-sidebar-userbox-name">
          <Box>
            <b>{user.name}</b>
          </Box>
          <Box className="app-sidebar-userbox-description">{user.sub}</Box>
        </Box>
      </Box>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  sidebarToggle: state.ui.sidebarToggle,
  sidebarHover: state.ui.sidebarHover,
});

export default connect(mapStateToProps)(SidebarUserbox);
