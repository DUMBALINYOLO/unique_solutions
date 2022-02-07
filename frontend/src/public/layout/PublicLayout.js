import React from 'react';
import classNames from 'classnames';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import  GuideSlider  from '../../components/GuideSlider';
import { toggleAction, openAction, playTransitionAction } from '../../actions/uiactions';
import LeftSidebarLayout from './LeftSidebarLayout';
import {  Redirect } from 'react-router-dom'
import RightSidebarLayout from './RightSidebarLayout';
import LeftSidebarBigLayout from './LeftSidebarBigLayout';
import DropMenuLayout from './DropMenuLayout';
import MegaMenuLayout from './MegaMenuLayout';
import styles from './appStyles-jss';


class PublicLayout extends React.Component {
  // Initial header style
  state = {
    openGuide: false,
    appHeight: 0
  };

  componentDidMount = () => {
    const {  loadTransition } = this.props;

    // Adjust min height
    this.setState({ appHeight: window.innerHeight + 112 });

    // Set expanded sidebar menu

    // Play page transition
    loadTransition(true);

    // Execute all arguments when page changes

  }

  handleOpenGuide = () => {
    this.setState({ openGuide: true });
  };

  handleCloseGuide = () => {
    this.setState({ openGuide: false });
  };

  render() {
    const {
      classes,
      children,
      toggleDrawer,
      sidebarOpen,
      loadTransition,
      pageLoaded,
      mode,
      history,
      gradient,
      deco,
      bgPosition,
      layout,
      changeMode
    } = this.props;
    const { openGuide, appHeight } = this.state;
    const titleException = ['/', '/', '/'];
    return (
      <div
        style={{ minHeight: appHeight }}
        className={
          classNames(
            classes.appFrameInner,
            layout === 'top-navigation' || layout === 'mega-menu' ? classes.topNav : classes.sideNav,
            mode === 'dark' ? 'dark-mode' : 'light-mode'
          )
        }
      >
        <GuideSlider openGuide={openGuide} closeGuide={this.handleCloseGuide} />
            <LeftSidebarLayout
              history={history}
              toggleDrawer={toggleDrawer}
              loadTransition={loadTransition}
              changeMode={changeMode}
              sidebarOpen={sidebarOpen}
              pageLoaded={pageLoaded}
              mode={mode}
              gradient={gradient}
              deco={deco}
              bgPosition={bgPosition}
              titleException={titleException}
              handleOpenGuide={this.handleOpenGuide}
            >
              { children }
            </LeftSidebarLayout>
      </div>
    );
  }
}




const mapStateToProps = state => ({

  sidebarOpen: state.ui.sidebarOpen,
  pageLoaded: state.ui.pageLoaded,
  mode: state.ui.mode,
  gradient: state.ui.gradient,
  deco: state.ui.deco,
  layout: state.ui.layout,
  bgPosition: state.ui.bgPosition,
  userRole: state.auth.userRole,
});

const mapDispatchToProps = dispatch => ({
  toggleDrawer: () => dispatch(toggleAction),
  initialOpen: bindActionCreators(openAction, dispatch),
  loadTransition: bindActionCreators(playTransitionAction, dispatch),
});

const DashboardMaped = connect(
  mapStateToProps,
  mapDispatchToProps
)(PublicLayout);

export default (withStyles(styles)(DashboardMaped));
