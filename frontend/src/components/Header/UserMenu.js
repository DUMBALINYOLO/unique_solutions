import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Info from '@material-ui/icons/Info';
import Warning from '@material-ui/icons/Warning';
import Check from '@material-ui/icons/CheckCircle';
import Error from '@material-ui/icons/RemoveCircle';
import ExitToApp from '@material-ui/icons/ExitToApp';
import Badge from '@material-ui/core/Badge';
import Divider from '@material-ui/core/Divider';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import dummy from '../../api/dummy/dummyContents';
import avatarApi from '../../api/images/avatars';
import {logout} from '../../actions/auth'
import link from '../../api/ui/link';
import styles from './header-jss';


class UserMenu extends React.Component {
  state = {
    anchorEl: null,
    openMenu: null
  };

  handleMenu = menu => (event) => {
    const { openMenu } = this.state;
    this.setState({
      openMenu: openMenu === menu ? null : menu,
      anchorEl: event.currentTarget
    });
  };

  handleClose = () => {
    this.setState({ anchorEl: null, openMenu: null });
  };

  render() {
    const { classes, dark } = this.props;
    const { anchorEl, openMenu } = this.state;
    return (
      <div>
        <IconButton
          aria-haspopup="true"
          onClick={this.handleMenu('notification')}
          color="inherit"
          className={classNames(classes.notifIcon, dark ? classes.dark : classes.light)}
        >
          <Badge className={classes.badge} badgeContent={1} color="secondary">
            <i className="ion-ios-bell-outline" />
          </Badge>
        </IconButton>
        <Button onClick={this.handleMenu('user-setting')}>
          LOGOUT
        </Button>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={openMenu === 'user-setting'}
          onClose={this.handleClose}
        >

          <Divider />
            <Button
              onClick={() => this.props.logout()}
              >
              <span>LOGOUT</span>
            </Button>
        </Menu>
      </div>
    );
  }
}

UserMenu.propTypes = {
  classes: PropTypes.object.isRequired,
  dark: PropTypes.bool,
};

UserMenu.defaultProps = {
  dark: false
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
)(UserMenu);

export default withStyles(styles)(NavigationMapped);

