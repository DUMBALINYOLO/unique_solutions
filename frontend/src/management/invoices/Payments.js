import React, { useState, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import {connect} from 'react-redux';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import {
  Paper,
  makeStyles,
}

from '@material-ui/core';




const useStyles = makeStyles(theme => ({
  pageContent: {
      margin: theme.spacing(5),
      padding: theme.spacing(3)
  },
  searchInput: {
      width: '75%'
  },
  newButton: {
      position: 'absolute',
      right: '10px'
  }
}))



const Payments = (props) => {

    const classes = useStyles();
    const [globalFilter, setGlobalFilter] = useState(null);
    const toast = useRef(null);
    const dt = useRef(null);





    const header = (
        <div className="table-header">
            <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText type="search" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Search..." />
            </span>
        </div>
    );



    return (
      <>
        <Paper className={classes.pageContent}>
            <div className="datatable-crud-demo">
                <Toast ref={toast} />
                <div className="card">
                    <DataTable
                        ref={dt}
                        value={props.payments}
                        dataKey="id" paginator rows={25} rowsPerPageOptions={[5, 10, 25]}
                        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                        currentPageReportTemplate="SHOWING {first} TO {last} OF {totalRecords} PLANS"
                        globalFilter={globalFilter}
                        header={header}
                        virtualScroll
                        virtualRowHeight={5}
                        className="p-datatable-gridlines"
                      >

                        <Column
                          field="id"
                          header="ID"
                          sortable
                          filter
                        />
                        <Column
                          field="date"
                          header="DATE"
                          sortable
                          filter
                        />
                        <Column
                          field="method"
                          header="METHOD"
                          sortable
                          filter
                        />
                        <Column
                          field="bookkeeper"
                          header="BURSAR"
                          sortable
                          filter
                        />
                        <Column
                          field="amount"
                          header="AMOUNT"
                          sortable
                          filter

                        />

                    </DataTable>
                </div>


            </div>
          </Paper>
        </>
    );
}

export default Payments;
