import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import ManagementLayout from '../layout/ManagementLayout'
import FullyPaidDetail  from './FullyPaidDetail';
import {connect}  from 'react-redux';
import {getInvoice, getInvoiceLines, getPayments } from '../../actions/fees';
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

  useEffect(() => {
    if(!props.fetched) {
        props.getInvoice(props.match.params.id, token);
        props.getInvoiceLines(props.match.params.id, token);
        props.getPayments(props.match.params.id, token);
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
          {value === 0 && <TabContainer><FullyPaidDetail invoicelines={invoicelines} payments={payments} invoice={invoice}  /></TabContainer>}
          {value === 1 && <TabContainer><Payments payments={payments} /></TabContainer>}

        </div>
      </ManagementLayout>
    );
}



const mapStateToProps = state =>({
  invoice: state.fees.invoice,
  token: state.auth.token,
  invoicelines: state.fees.invoicelines,
  payments: state.fees.payments,

})

const InvoicesMapped = connect(
  mapStateToProps,
  {getInvoice, getInvoiceLines, getPayments}
)(InvoicesTab)

export default withStyles(styles)(InvoicesMapped);
