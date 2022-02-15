import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@mui/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';

import ManagementLayout from "../layout/leftsidebar/LeftSidebar";
import UnpaidDetail  from './UnpaidDetail';
import {connect}  from 'react-redux';
import {getInvoice, getInvoiceLines, getPayments } from '../../actions/sales';
import {useParams} from 'react-router-dom';

import Payments from './Payments';


function TabContainer(props) {
  const { children } = props;
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
});

const InvoicesTab =(props) => {
  const [value, setValue] = useState(0)
  const { classes, invoice,payments,invoicelines, token } = props;
  const {id } = useParams();


  useEffect(() => {
    if(!props.fetched) {
        props.getInvoice(id , token);
        props.getInvoiceLines(id , token);
        props.getPayments(id , token);
    }
    console.log('mount it!');
  }, []);


  const handleChange = (event, value) => {
    setValue( value);
  };



    return (
      <ManagementLayout>
        <div className={classes.root}>
          <AppBar position="static" color="default">
            <Tabs
              value={value}
              onChange={handleChange}
              variant="fullWidth"
              scrollButtons="on"
              indicatorColor="primary"
              textColor="secondary"
            >
              <Tab label="INVOICE" />
              <Tab label="PAYMENTS" />


            </Tabs>
          </AppBar>
          {value === 0 && <TabContainer><UnpaidDetail invoicelines={invoicelines} payments={payments} invoice={invoice}  /></TabContainer>}
          {value === 1 && <TabContainer><Payments payments={payments} /></TabContainer>}

        </div>
      </ManagementLayout>
    );
}



const mapStateToProps = state =>({
  invoice: state.sales.invoice,
  token: state.auth.token,
  invoicelines: state.sales.invoicelines,
  payments: state.sales.payments,

})

const InvoicesMapped = connect(
  mapStateToProps,
  {getInvoice, getInvoiceLines, getPayments}
)(InvoicesTab)

export default withStyles(styles)(InvoicesMapped);
