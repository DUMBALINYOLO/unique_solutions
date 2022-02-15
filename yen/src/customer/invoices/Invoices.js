import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@mui/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import CustomerWrapper from '../home/CustomerWrapper';
import AOS from "aos";
import 'aos/dist/aos.css';
import InvoicesContainer from './InvoicesContainer';
import {getCustomerInvoices} from '../../actions/sales';




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
    paddingTop: '40px',
    backgroundColor: theme.palette.background.paper,
  },
  tabs:{
    backgroundColor: theme.palette.background.paper
  }
});




const Invoices = (props) => {
  const [value, setValue] = useState(0)
  const { classes, email,token, userName, invoices} = props;
  const voidedInvoices = invoices.filter((invoice) => invoice.status==='voided' && invoice.company_status === 'accepted')
  const unpaidInvoices = invoices.filter((invoice) => invoice.status==='unpaid' && invoice.company_status === 'accepted')
  const partiallyInvoices = invoices.filter((invoice) => invoice.status==='partially' && invoice.company_status === 'accepted')
  const fullyInvoices = invoices.filter((invoice) => invoice.status==='fully' && invoice.company_status === 'accepted')


  useEffect(() =>{
    AOS.init({duration : 2000})

  }, []);

  useEffect(() => {
    if(!props.fetched) {
        props.getCustomerInvoices(props.token);
    }
    console.log('mount it!');


  }, []);

  const handleChange = (event, value) => {
    setValue(value);
  };


  return (

        <CustomerWrapper>
          <div
            data-aos="fade-right"
            style={{paddingTop: '100px', paddingBottom: '30px', paddingLeft: '30px', paddingRight: '30px',}}
          >
            <AppBar position="static" color="default">
              <Tabs
                value={value}
                onChange={handleChange}
                variant="fullWidth"
                scrollButtons="on"
                indicatorColor="primary"
                textColor="secondary"
                className={classes.tabs}
              >
                <Tab label="UNPAID" />
                <Tab label="PARTIALLY PAID" />
                <Tab label="FULLY PAID" />
                <Tab label="VOIDED" />

              </Tabs>
            </AppBar>
            {value === 0 && <TabContainer><InvoicesContainer invoices={unpaidInvoices} email={email} userName={userName} /></TabContainer>}
            {value === 1 && <TabContainer><InvoicesContainer invoices={partiallyInvoices} email={email} userName={userName}/></TabContainer>}
            {value === 2 && <TabContainer><InvoicesContainer invoices={fullyInvoices} email={email} userName={userName}/></TabContainer>}
            {value === 3 && <TabContainer><InvoicesContainer invoices={voidedInvoices} email={email} userName={userName}/></TabContainer>}
          </div>
        </CustomerWrapper>
  );
}


const mapStateToProps = state => ({
  invoices: state.sales.customerinvoices,
  email : state.auth.email,
  token: state.auth.token,
  userName: state.auth.userName,
});


const InvoicesMapped = connect(
  mapStateToProps,
  {
      getCustomerInvoices
  }
)(Invoices);


export default withStyles(styles)(InvoicesMapped);
