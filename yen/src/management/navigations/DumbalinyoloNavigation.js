import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@mui/styles';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import { connect } from 'react-redux';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';
import Navigation from './Navigation';
import styles from './sidebar-jss';
import { Divider as PrimeDivider } from 'primereact/divider';



class DumbalinyoloNavigation extends React.Component {
  state = {
    transform: 0,
  };


  componentDidMount = () => {
    // Scroll content to top
    const mainContent = document.getElementById('sidebar');
    mainContent.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    const mainContent = document.getElementById('sidebar');
    mainContent.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = (event) => {
    const scroll = event.target.scrollTop;
    this.setState({
      transform: scroll
    });
  }

  render() {
    const {
      classes,
      turnDarker,
      drawerPaper,
      toggleDrawerOpen,
      loadTransition,
      leftSidebar,
      dataMenu,
      status,
      anchorEl,
      openMenuStatus,
      closeMenuStatus,
      changeStatus,

    } = this.props;
    const { transform } = this.state;

    const setStatus = st => {
      switch (st) {
        case 'online':
          return classes.online;
        case 'idle':
          return classes.idle;
        case 'bussy':
          return classes.bussy;
        default:
          return classes.offline;
      }
    };
    return (
      <div className={classNames(classes.drawerInner, !drawerPaper ? classes.drawerPaperClose : '')}>
        <div className={classes.drawerHeader}>
            <div
              className={classNames(classes.profile, classes.user)}
              style={{ opacity: 1 - (transform / 100), marginTop: transform * - 0.3 }}
            >
              <NavLink to="/" className={classNames(classes.brand, classes.brandBar, turnDarker && classes.darker)}>
                <h1>UNIQUE SOLUTIONS</h1>
              </NavLink>
              <PrimeDivider />
            </div>
        </div>
        <div
          id="sidebar"
          className={
            classNames(
              classes.menuContainer,
              leftSidebar && classes.rounded,

            )
          }
        >

          <Navigation
            loadTransition={loadTransition}
            toggleDrawerOpen={toggleDrawerOpen}
          />
        </div>
      </div>
    );
  }
}



DumbalinyoloNavigation.defaultProps = {
  turnDarker: false,
  toggleDrawerOpen: () => {},
  loadTransition: () => {},
};

const mapStateToProps = state => ({
});


// const mapDispatchToProps = dispatch => {
//   return {
//     logout: () => dispatch(logout()),
//   };
// };





const NavigationMapped = connect(
  mapStateToProps,

)(DumbalinyoloNavigation);

export default withStyles(styles)(NavigationMapped );
