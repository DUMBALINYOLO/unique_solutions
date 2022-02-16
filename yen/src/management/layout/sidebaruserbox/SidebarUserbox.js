import React, { Fragment, useContext } from 'react';
import clsx from 'clsx';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import avatar4 from '../../../assets/images/avatars/avatar4.jpg';
import { connect } from 'react-redux';




const SidebarUserbox = props => {
  const {firstName, lastName} = props;

  const user = {
    name: firstName,
    sub: lastName,
  }

  const { sidebarToggle, sidebarHover } = props;

  return (
    <Fragment>
      <Box
        className={clsx('app-sidebar-userbox', {
          'app-sidebar-userbox--collapsed': sidebarToggle && !sidebarHover,
        })}>

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
  firstName: state.auth.firstName,
  lastName: state.auth.lastName,

});

export default connect(mapStateToProps)(SidebarUserbox);
