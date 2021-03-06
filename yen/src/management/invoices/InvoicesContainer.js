import React, { useEffect } from 'react';

import Card from '@mui/material/Card';
import {connect} from 'react-redux';
import { withStyles } from '@mui/styles';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useNavigate } from 'react-router-dom';
import { Button } from 'primereact/button';



const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: '#424242',
    padding: '40px',
  },
});


const Invoices = (props)  => {

  const {invoices} = props;
  const navigate = useNavigate();


  const handleClick = (id) =>{
    navigate(`/management/invoices/${id}`);
  }

  const actionBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <Button
                  className="p-button-warning p-mr-2 p-mb-2"
                  label='VIEW'
                  style={{padding: '5px'}}
                  onClick={() => handleClick(rowData.id)}

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
