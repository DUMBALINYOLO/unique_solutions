import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import Navigation from './Navigation';
import flax from './FLEXI.png'
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
    } = this.props;
    const { transform } = this.state;

    return (
      <div className={classNames(classes.drawerInner, !drawerPaper ? classes.drawerPaperClose : '')}>
        <div className={classes.drawerHeader}>
            <div
              className={classNames(classes.profile, classes.user)}
              style={{ opacity: 1 - (transform / 100), marginTop: transform * - 0.3 }}
            >
              <NavLink to="/" className={classNames(classes.brand, classes.brandBar, turnDarker && classes.darker)}>
                <img src={flax} style={{width:150, opacity: 1 }} alt='pic' />
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
  anchorEl: null,
  isLogin: true,
};



export default withStyles(styles)(DumbalinyoloNavigation );
