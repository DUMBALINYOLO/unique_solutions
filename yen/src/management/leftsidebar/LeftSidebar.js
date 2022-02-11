import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { connect } from 'react-redux';
import Sidebar from '../sidebar/Sidebar';
import Header from '../header/Header';
import Footer from '../footer/Footer';


const LeftSidebar = props => {
  const {
    children,
    sidebarToggle,
    sidebarFixed,
    footerFixed,
    contentBackground,
  } = props;

  return (
    <Fragment>
      <div className={clsx('app-wrapper', contentBackground)}>
        <Header />
        <div
          className={clsx('app-main', {
            'app-main-sidebar-static': !sidebarFixed,
          })}>
          <Sidebar />
          <div
            className={clsx('app-content', {
              'app-content-sidebar-collapsed': sidebarToggle,
              'app-content-sidebar-fixed': sidebarFixed,
              'app-content-footer-fixed': footerFixed,
            })}>
            <div className="app-content--inner">
              <div className="app-content--inner__wrapper">{children}</div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </Fragment>
  );
};



const mapStateToProps = state => ({
  sidebarToggle: state.ui.sidebarToggle,
  sidebarToggleMobile: state.ui.sidebarToggleMobile,
  sidebarFixed: state.ui.sidebarFixed,
  headerFixed: state.ui.headerFixed,
  headerSearchHover: state.ui.headerSearchHover,
  headerDrawerToggle: state.ui.headerDrawerToggle,
  footerFixed: state.ui.footerFixed,
  contentBackground: state.ui.contentBackground,
});

export default connect(mapStateToProps)(LeftSidebar);
