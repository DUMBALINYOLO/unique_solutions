import React, { Fragment } from 'react';
import clsx from 'clsx';
import PerfectScrollbar from 'react-perfect-scrollbar';
import Drawer from '@mui/material/Drawer';
import Paper from '@mui/material/Paper';
import Hidden from '@mui/material/Hidden';
import { connect } from 'react-redux';

import SidebarHeader from '../sidebarheader/SidebarHeader';
import SidebarUserbox from '../sidebaruserbox/SidebarUserbox';
import SidebarMenu from '../sidebarmenu/SidebarMenu';
import SidebarFooter from '../sidebarfooter/SidebarFooter';
import TjedzaNavigations from '../../navigations/TjedzaNavigations';


import navItems from './navItems';

import {
  setSidebarToggleMobile,
  setSidebarHover,
  setSidebarToggle,
  setSidebarFooter,
  setSidebarUserbox,
} from '../../../actions/uiactions';

const Sidebar = props => {
  const {
    setSidebarToggleMobile,
    sidebarToggleMobile,
    sidebarFixed,
    sidebarHover,
    setSidebarHover,
    sidebarToggle,
    sidebarUserbox,
    sidebarShadow,
    sidebarFooter,
  } = props;

  const toggleHoverOn = () => setSidebarHover(true);
  const toggleHoverOff = () => setSidebarHover(false);

  const closeDrawer = () => setSidebarToggleMobile(!sidebarToggleMobile);

  const sidebarMenuContent = (
    <div
      className={clsx({
        'app-sidebar-nav-close': sidebarToggle && !sidebarHover,
      })}>

      {/*
        {navItems.map(list => (
          <SidebarMenu
            component="div"
            key={list.label}
            pages={list.content}
            title={list.label}
          />
        ))}
        */

      }

    </div>
  );

  return (
    <Fragment>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          open={sidebarToggleMobile}
          onClose={closeDrawer}
          variant="temporary"
          elevation={4}
          className="app-sidebar-wrapper-lg">
          <SidebarHeader />
          <PerfectScrollbar>
            {sidebarUserbox && <SidebarUserbox />}
            {sidebarMenuContent}
            {sidebarFooter && <SidebarFooter />}
          </PerfectScrollbar>
        </Drawer>
      </Hidden>

      <Hidden mdDown>
        <Paper
          onMouseEnter={toggleHoverOn}
          onMouseLeave={toggleHoverOff}
          className={clsx('app-sidebar-wrapper', {
            'app-sidebar-wrapper-close': sidebarToggle,
            'app-sidebar-wrapper-open': sidebarHover,
            'app-sidebar-wrapper-fixed': sidebarFixed,
          })}
          square
          open={sidebarToggle}
          elevation={sidebarShadow ? 11 : 3}>
          <SidebarHeader />
          <div
            className={clsx({
              'app-sidebar-menu': sidebarFixed,
              'app-sidebar-collapsed': sidebarToggle && !sidebarHover,
            })}>
            <PerfectScrollbar options={{ wheelPropagation: false }}>
              {sidebarUserbox && <SidebarUserbox />}
              <TjedzaNavigations/>
              {sidebarFooter && <SidebarFooter />}
            </PerfectScrollbar>
          </div>
        </Paper>
      </Hidden>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  sidebarFixed: state.ui.sidebarFixed,
  headerFixed: state.ui.headerFixed,
  sidebarToggle: state.ui.sidebarToggle,
  sidebarHover: state.ui.sidebarHover,
  sidebarShadow: state.ui.sidebarShadow,
  sidebarFooter: state.ui.sidebarFooter,
  sidebarUserbox: state.ui.sidebarUserbox,
  sidebarToggleMobile: state.ui.sidebarToggleMobile,
});

const mapDispatchToProps = dispatch => ({
  setSidebarToggleMobile: enable => dispatch(setSidebarToggleMobile(enable)),
  setSidebarToggle: enable => dispatch(setSidebarToggle(enable)),
  setSidebarHover: enable => dispatch(setSidebarHover(enable)),
  setSidebarFooter: enable => dispatch(setSidebarFooter(enable)),
  setSidebarUserbox: enable => dispatch(setSidebarUserbox(enable)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
