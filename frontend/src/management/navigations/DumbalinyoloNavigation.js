import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Avatar from '@material-ui/core/Avatar';
import brand from '../../api/dummy/brand';
import dummy from '../../api/dummy/dummyContents';
import logo from '../../images/logo.svg';
import Navigation from './Navigation';
import {logout} from '../../actions/auth'
import flax from './ubuntu.png'
import styles from '../layout/sidebar-jss';
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
      isLogin,
      userName,
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
                <h1>DAWINI HIGH SCHOOL</h1>
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

DumbalinyoloNavigation.propTypes = {
  // classes: PropTypes.object.isRequired,
  // drawerPaper: PropTypes.bool.isRequired,
  // turnDarker: PropTypes.bool,
  // toggleDrawerOpen: PropTypes.func,
  // loadTransition: PropTypes.func,
  // leftSidebar: PropTypes.bool.isRequired,
  // dataMenu: PropTypes.array.isRequired,
  // status: PropTypes.string.isRequired,
  // anchorEl: PropTypes.object,
  // openMenuStatus: PropTypes.func.isRequired,
  // closeMenuStatus: PropTypes.func.isRequired,
  // changeStatus: PropTypes.func.isRequired,
  // isLogin: PropTypes.bool
};

DumbalinyoloNavigation.defaultProps = {
  turnDarker: false,
  toggleDrawerOpen: () => {},
  loadTransition: () => {},
  anchorEl: null,
  isLogin: true,
};

const mapStateToProps = state => ({
  userName: state.auth.userName,
  isAuthenticated: state.auth.token !== null,
});


// const mapDispatchToProps = dispatch => {
//   return {
//     logout: () => dispatch(logout()),
//   };
// };





const NavigationMapped = connect(
  mapStateToProps,
  {logout},
)(DumbalinyoloNavigation);

export default withStyles(styles)(NavigationMapped );
