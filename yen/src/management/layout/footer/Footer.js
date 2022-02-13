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
                to="/DashboardAnalytics">
                <ListItemText primary="Analytics" />
              </ListItem>
              <ListItem
                className="rounded-sm text-nowrap"
                button
                component={Link}
                to="/FormsWizard">
                <ListItemText primary="Wizards" />
              </ListItem>
              <ListItem
                className="rounded-sm text-nowrap"
                button
                component={Link}
                to="/DashboardCrmManager">
                <ListItemText primary="CRM Manager" />
              </ListItem>
            </List>
          </div>
          <div className="app-footer--second">
            <span>Carolina React Admin Dashboard with Material-UI PRO</span> ©
            2020 - crafted with <span className="text-danger px-1">❤</span> by{' '}
            <a href="https://uifort.com" title="UiFort.com">
              UiFort.com
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
