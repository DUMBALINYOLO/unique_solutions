import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import ManagementLayout from '../layout/ManagementLayout'
import Invoices  from './Invoices';
import {connect}  from 'react-redux';
import {getInvoices} from '../../actions/fees';


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
  const { classes, records, token } = props;

  const unpaid = records.filter((invoice) => invoice.status === 'unpaid')
  const partially = records.filter((invoice) => invoice.status === 'partially')
  const fully = records.filter((invoice) => invoice.status === 'fully')



  useEffect(() => {
    if(!props.fetched) {
        props.getInvoices(token);
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
              <Tab label="UNPAID" />
              <Tab label="PARTIALLY PAID" />
              <Tab label="FULLY PAID" />


            </Tabs>
          </AppBar>
          {value === 0 && <TabContainer><Invoices getInvoices={props.getInvoices} records={unpaid} /></TabContainer>}
          {value === 1 && <TabContainer><Invoices getInvoices={props.getInvoices} records={partially} /></TabContainer>}
          {value === 2 && <TabContainer><Invoices getInvoices={props.getInvoices} records={fully} /></TabContainer>}
          
        </div>
      </ManagementLayout>
    );
}



const mapStateToProps = state =>({
  records: state.fees.invoices,
  token: state.auth.token,

})

const InvoicesMapped = connect(
  mapStateToProps,
  {getInvoices}
)(InvoicesTab)

export default withStyles(styles)(InvoicesMapped);
