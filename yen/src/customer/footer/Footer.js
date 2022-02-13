import React, { Fragment } from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { connect } from 'react-redux';


const Footer = props => {
  const { footerShadow, sidebarToggle, footerFixed } = props;
  return (
    <Fragment>
      <Paper
        square
        elevation={footerShadow ? 11 : 2}
        className={clsx('app-footer text-black-50', {
          'app-footer--fixed': footerFixed,
          'app-footer--fixed__collapsed': sidebarToggle
        })}>
        <div className="app-footer--inner">
          <div className="app-footer--first">
            <List dense className="d-flex align-items-center">
              <ListItem
                className="rounded-sm text-nowrap"
                button
                component={Link}
                to="/customers/cart">
                <ListItemText primary="MY CART" />
              </ListItem>
              <ListItem
                className="rounded-sm text-nowrap"
                button
                component={Link}
                to="/customers/products">
                <ListItemText primary="PRODUCTS" />
              </ListItem>
              <ListItem
                className="rounded-sm text-nowrap"
                button
                component={Link}
                to="/customers/services">
                <ListItemText primary="SERVICES" />
              </ListItem>
              <ListItem
                className="rounded-sm text-nowrap"
                button
                component={Link}
                to="/customers/payments">
                <ListItemText primary="PAYMENTS" />
              </ListItem>
              <ListItem
                className="rounded-sm text-nowrap"
                button
                component={Link}
                to="/customers/invoices">
                <ListItemText primary="INVOICES" />
              </ListItem>
            </List>
          </div>
          <div className="app-footer--second">
            <span>UNIQUE SOLUTIONS</span> ©
            2022 - crafted with <span className="text-danger px-1">❤</span> by{' '}
            <a href="https://uifort.com" title="UiFort.com">
              TAKUDZWA
            </a>
          </div>
        </div>
      </Paper>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  footerFixed: state.ui.footerFixed,
  footerShadow: state.ui.footerShadow,
  sidebarToggle: state.ui.sidebarToggle
});
export default connect(mapStateToProps)(Footer);
