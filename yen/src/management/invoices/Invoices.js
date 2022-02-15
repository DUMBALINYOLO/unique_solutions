import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@mui/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import AOS from "aos";
import 'aos/dist/aos.css';
import InvoicesContainer from './InvoicesContainer';
import {getInvoices, acceptInvoice, rejectInvoice} from '../../actions/sales';
import ManagementLayout from "../layout/leftsidebar/LeftSidebar";
import PendingInvoices from './PendingInvoices';




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
  const { classes, email,token, userName, invoices, acceptInvoice, rejectInvoice, getInvoices} = props;
  const voidedInvoices = invoices.filter((invoice) => invoice.status==='voided' && invoice.company_status === 'accepted')
  const unpaidInvoices = invoices.filter((invoice) => invoice.status==='unpaid' && invoice.company_status === 'accepted')
  const partiallyInvoices = invoices.filter((invoice) => invoice.status==='partially' && invoice.company_status === 'accepted')
  const fullyInvoices = invoices.filter((invoice) => invoice.status==='fully' && invoice.company_status === 'accepted')
  const pendingInvoices = invoices.filter((invoice) => invoice.company_status==='pending')
  const rejectedInvoices = invoices.filter((invoice) => invoice.company_status==='rejected')


  useEffect(() =>{
    AOS.init({duration : 2000})

  }, []);

  useEffect(() => {
    if(!props.fetched) {
        props.getInvoices(props.token);
    }
    console.log('mount it!');


  }, []);

  const handleChange = (event, value) => {
    setValue(value);
  };


  return (

        <ManagementLayout>
          <div
            data-aos="fade-right"
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
                <Tab label="PENDING" />
                <Tab label="REJECTED" />
                <Tab label="UNPAID" />
                <Tab label="PARTIALLY PAID" />
                <Tab label="FULLY PAID" />
                <Tab label="VOIDED" />

              </Tabs>
            </AppBar>
            {value === 0 && <TabContainer><PendingInvoices token={token} getInvoices={getInvoices} acceptInvoice={acceptInvoice} rejectInvoice ={rejectInvoice} invoices={pendingInvoices} email={email} userName={userName} /></TabContainer>}
            {value === 1 && <TabContainer><InvoicesContainer  acceptInvoice={acceptInvoice} invoices={rejectedInvoices} email={email} userName={userName}/></TabContainer>}
            {value === 2 && <TabContainer><InvoicesContainer invoices={unpaidInvoices} email={email} userName={userName} /></TabContainer>}
            {value === 3 && <TabContainer><InvoicesContainer invoices={partiallyInvoices} email={email} userName={userName}/></TabContainer>}
            {value === 4 && <TabContainer><InvoicesContainer invoices={fullyInvoices} email={email} userName={userName}/></TabContainer>}
            {value === 5 && <TabContainer><InvoicesContainer invoices={voidedInvoices} email={email} userName={userName}/></TabContainer>}
          </div>
        </ManagementLayout>
  );
}


const mapStateToProps = state => ({
  invoices: state.sales.invoices,
  email : state.auth.email,
  token: state.auth.token,
  userName: state.auth.userName,
});


const InvoicesMapped = connect(
  mapStateToProps,
  {
      getInvoices,
      acceptInvoice,
      rejectInvoice
  }
)(Invoices);


export default withStyles(styles)(InvoicesMapped);
