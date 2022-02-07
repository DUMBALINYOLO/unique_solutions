import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  Fab,
  Drawer,
  IconButton,
  Button,
  List,
  ListItem,
  Divider
} from '@material-ui/core';

import projectLogo from './ubuntu.png';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import { withStyles } from '@material-ui/core/styles';
import {logout} from '../../actions/auth';
import { FiShoppingCart, FiBookOpen, FiActivity, FiBarChart2 } from "react-icons/fi";


const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    alignItems: 'center',
    display: 'flex',
  },
  tabs:{
    backgroundColor: 'grey',
  }
});


const Header = (props) => {
  const [state, setState] = React.useState({
    right: false
  });
  const toggleDrawer = (side, open) => event => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  return (
    <Fragment>
      <div
        className="header-nav-wrapper header-nav-wrapper-lg rounded-sm px-4 navbar-dark card-box-hover-rise"

      >
        <div className="header-nav-logo">
          <div className="nav-logo">
          <Button
              color="inherit"
              className=" px-4 py-2 text-capitalize"
              component={Link}
              to='/customers'

            >
              <i className="bg-white">
                <img
                  alt="gosso"
                  src={projectLogo}
                />
              </i>
              UBUNTU-AFRO PUBLISHERS
            </Button>


          </div>
        </div>
        <div className="header-nav-menu d-none d-lg-block">
          <div className="d-flex justify-content-center">
            <Button
              color="inherit"
              className=" px-4 py-2 text-capitalize"
              component={Link}
              to='/customers/cart'
              >
              <FiShoppingCart className="font-size-xxl" style={{padding: '4px'}}/>
                CART
            </Button>
            <Button
              color="inherit"
              className=" px-4 py-2 text-capitalize"
              component={Link}
              to='/customers/tickets'
              >
              <FiShoppingCart className="font-size-xxl" style={{padding: '4px'}}/>
                TICKETS
            </Button>
            <Button
              color="inherit"
              className=" px-4 py-2 text-capitalize"
              component={Link}
              to='/customers/invoices'
            >
                <FiActivity className="font-size-xxl" style={{padding: '4px'}}/>
               INVOICES
            </Button>
            <Button
              color="inherit"
              component={Link}
              to='/customers/payments'
              className=" px-4 py-2 text-capitalize"
            >
              <FiBarChart2 className="font-size-xxl" style={{padding: '4px'}}/>
               PAYMENTS
            </Button>
          </div>
        </div>
        <div className="header-nav-actions flex-grow-0 flex-lg-grow-1">
          <span className="d-none d-lg-block">
          <Button
              color="inherit"
              onClick={props.logout}
              className=" px-4 py-2 text-capitalize"
            >
              LOGOUT
            </Button>
          </span>
          <span className="d-block d-lg-none">
            <Fab
              onClick={toggleDrawer('right', true)}
              color="primary"
              size="medium">
              <MenuRoundedIcon />
            </Fab>
          </span>
        </div>
        <Drawer
          variant="temporary"
          anchor="right"
          open={state.right}
          onClose={toggleDrawer('right', false)}
          elevation={11}>
          <List className="py-0">
            <ListItem className="d-block bg-secondary py-2 px-3">
              <div className="d-flex w-100 justify-content-between navbar-light align-items-center">
                <div className="header-nav-logo justify-content-start">
                  <Button
                      color="inherit"
                      className=" px-4 py-2 text-capitalize"
                      component={Link}
                      to='/customers'

                    >
                      UBUNTU-AFRO
                    </Button>
                </div>
                <IconButton
                  onClick={toggleDrawer('right', false)}
                  color="primary">
                  <MenuRoundedIcon />
                </IconButton>
              </div>
            </ListItem>
            <Divider />
            <ListItem className="d-block py-3 px-2">
                <Button
                  color="inherit"
                  className=" px-4 py-2 text-capitalize"
                  component={Link}
                  to='/customers/cart'
                  >
                  <FiShoppingCart className="font-size-xxl" style={{padding: '4px'}}/>
                    CART
                </Button>
            </ListItem>
            <Divider />
            <ListItem className="d-block py-3 px-2">
              <Button
                color="inherit"
                className=" px-4 py-2 text-capitalize"
                component={Link}
                to='/customers/tickets'
                >
                <FiShoppingCart className="font-size-xxl" style={{padding: '4px'}}/>
                  TICKETS
              </Button>

            </ListItem>
            <Divider />
            <ListItem className="d-block py-3 px-2">
              <Button
                color="inherit"
                className=" px-4 py-2 text-capitalize"
                component={Link}
                to='/customers/invoices'
              >
                  <FiActivity className="font-size-xxl" style={{padding: '4px'}}/>
                 INVOICES
              </Button>

            </ListItem>
            <Divider />
            <ListItem className="d-block py-3 px-2">
              <Button
                color="inherit"
                component={Link}
                to='/customers/payments'
                className=" px-4 py-2 text-capitalize"
              >
                <FiBarChart2 className="font-size-xxl" style={{padding: '4px'}}/>
                 PAYMENTS
              </Button>

            </ListItem>
            <Divider />
            <ListItem className="d-block py-3 px-2">
              <Button
                  color="inherit"
                  onClick={props.logout}
                  className=" px-4 py-2 text-capitalize"
                >
                  LOGOUT
              </Button>

            </ListItem>
            <Divider />

          </List>
        </Drawer>
      </div>
    </Fragment>
  );
};


const mapStateToProps = state =>({
  token: state.auth.token,
})

const MappedHeader = connect(
mapStateToProps,
{logout} )
(Header);

export default withStyles(styles)(MappedHeader);
