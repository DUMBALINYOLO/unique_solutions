import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { connect } from 'react-redux';
import Sidebar from '../sidebar/Sidebar';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import { Navigate } from "react-router-dom";



class LeftSidebar extends Component {

  render(){

    const {
      children,
      sidebarToggle,
      sidebarFixed,
      footerFixed,
      contentBackground,
      userRole
    } = this.props;

    if (!this.props.token){
      return <Navigate  to="/login" replace/>;
    }
    if(this.props.token !== null){
        if (userRole === 'customer'){
            return <Navigate to="/customers" replace/>;
        }
    }

    return (
      <Fragment>
        <div className={clsx('app-wrapper', contentBackground)}>
          <Header drawerWidth={240} />
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
  token: state.auth.token,
  userRole: state.auth.userRole,
});

export default connect(mapStateToProps)(LeftSidebar);
