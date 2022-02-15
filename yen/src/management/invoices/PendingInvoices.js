import React, { useEffect } from 'react';

import Card from '@mui/material/Card';
import {connect} from 'react-redux';
import { withStyles } from '@mui/styles';
import { DataTable } from 'primereact/datatable';
import { Button } from 'primereact/button';
import { Column } from 'primereact/column';



const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: '#424242',
    padding: '40px',
  },
});


const Invoices = (props)  => {

  const {invoices, token, acceptInvoice, rejectInvoice, getInvoices} = props;
  console.log(props)


  const invoiceAccept = (id, rowData, token) => {
      acceptInvoice(id, rowData, token);
      getInvoices(token);

  };


  const invoiceReject = (id, rowData, token) => {
      rejectInvoice(id, rowData, token);
      getInvoices(token);
  };


  const actionBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <Button
                  style={{padding: '5px'}}
                  className="p-button-warning p-mr-2 p-mb-2"
                  label='ACCEPT'
                  onClick={() => invoiceAccept(rowData.id, rowData, token)}
                >
                </Button>
                <Button
                  className="p-button-danger p-mr-2 p-mb-2"
                  label='REJECT'
                  style={{padding: '5px'}}
                  onClick={() => invoiceReject(rowData.id, rowData, token)}

                />
            </React.Fragment>
        );
    }


  return (

          <Card
            className="mb-4 card-box-hover-rise "
            style={{padding: '30px'}}
          >



              <div className="table-responsive" style={{paddingTop : '20px'}}>
                <DataTable
                    value={invoices}
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
                      field="due"
                      header="DUE DATE"
                      filter
                      sortable
                    />
                    <Column
                      field="customer"
                      header="CUSTOMER"
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
                      field="total"
                      header="TOTAL"
                      filter
                      sortable
                    />
                    <Column
                      field="total_due"
                      header="DUE"
                      filter
                      sortable

                    />
                    <Column
                      body={actionBodyTemplate}
                      header="ACTION"
                    />
                </DataTable>
              </div>
        </Card>
  );
}


export default withStyles(styles)(Invoices);
