import React, { useEffect } from 'react';
import { Redirect } from 'react-router';
import {Card } from '@material-ui/core';
import {connect} from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import {getCustomerPayments} from '../../actions/sales';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import CustomerWrapper from '../home/CustomerWrapper';

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: '#424242',
    padding: '40px',
  },
});


function Payments(props) {
  const {email, token, payments, userName } = props;


  useEffect(() => {
    if(!props.fetched) {
        props.getCustomerPayments(token);
    }
    console.log('mount it!');
  }, []);


  return (
    <CustomerWrapper>

        <Card
          className="mb-4 card-box-hover-rise "
          style={{padding: '30px', paddingTop: '80px'}}
        >

          <span className="ribbon-angle ribbon-angle--top-left ribbon-primary">
            <small>{userName}</small>
          </span>
          <span className="ribbon-angle ribbon-angle--bottom-right ribbon-success">
            <small>{email}</small>
          </span>

            <div className="table-responsive" style={{paddingTop : '20px'}}>
              <DataTable
                  value={payments}
                  dataKey="id"
                  rows={10}
                  rowsPerPageOptions={[5, 10, 25]}
                  virtualScroll
                  virtualRowHeight={5}
                  className="p-datatable-gridlines bg-royal card-box-hover-rise"
                >
                  <Column
                    field="id"
                    header="ID"
                    filter
                    sortable
                  />
                  <Column
                    field="reference_number"
                    header="REFERENCE NUMBER"
                    filter
                    sortable
                  />
                  <Column
                    field="date"
                    header="DATE"
                    filter
                    sortable
                  />
                  <Column
                    field="invoice"
                    header="INVOICE"
                    filter
                    sortable
                  />
                  <Column
                    field="method"
                    header="METHOD"
                    filter
                    sortable
                  />
                  <Column
                    field="bookkeeper"
                    header="CASHIER"
                    filter
                    sortable
                  />
                  <Column
                    field="comments"
                    header="COMMENTS"
                    filter
                    sortable
                  />
                  <Column
                    field="amount"
                    header="AMOUNT"
                    filter
                    sortable

                  />
              </DataTable>
            </div>
          </Card>
      </CustomerWrapper>


  );
}

const mapStateToProps = state => ({
    payments: state.sales.customerpayments,
    email : state.auth.email,
    token: state.auth.token,
    userName: state.auth.userName,
  });



const PaymentsMapped = connect(
    mapStateToProps,
    {
        getCustomerPayments
    }
  )(Payments);


export default withStyles(styles)(PaymentsMapped);
