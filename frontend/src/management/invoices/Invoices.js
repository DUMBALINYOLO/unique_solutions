import React, { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { DataTable } from 'primereact/datatable';
import { connect } from 'react-redux';
import { Column } from 'primereact/column';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import { Toolbar } from 'primereact/toolbar';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import {
  Paper,
  makeStyles,
}
from '@material-ui/core';
import CreateInvoice from './CreateInvoice';


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



const Invoices = (props) => {



    const classes = useStyles();
    const [productDialog, setProductDialog] = useState(false);
    const [selectedProducts, setSelectedProducts] = useState(null);
    const [globalFilter, setGlobalFilter] = useState(null);
    const history = useHistory();
    const toast = useRef(null);
    const dt = useRef(null);
    const {token} =props;




    const openNew = () => {
        setProductDialog(true);
    }

    const handleClick = (status, id) =>{

      if (status === 'unpaid'){
        history.push(`/managementdashboard/unpaid-invoices/${id}`)
      }else if (status === 'partially'){
        history.push(`/managementdashboard/partially-paid-invoices/${id}`)
      }else if (status === 'fully'){
        history.push(`/managementdashboard/fully-paid-invoices/${id}`)
      }else if (status === 'voided'){
        history.push(`/managementdashboard/voided-invoices/${id}`)
      }

    }



    const hideDialog = () => {
        setProductDialog(false);
    }




    const leftToolbarTemplate = () => {
        return (
            <React.Fragment>
                <Button
                  label="ADD NEW"
                  className="p-button-warning "
                  onClick={openNew}
                />
            </React.Fragment>
        )
    }



    const actionBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <Button
                  className="p-button-success p-mr-2 p-mb-2"
                  label='OPEN'
                  onClick={() => handleClick(rowData.status,rowData.id)}

                />
            </React.Fragment>
        );
    }

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
                        value={props.records}
                        selection={selectedProducts}
                        onSelectionChange={(e) => setSelectedProducts(e.value)}
                        dataKey="id" paginator rows={10} rowsPerPageOptions={[5, 10, 25]}
                        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                        currentPageReportTemplate="SHOWING {first} TO {last} OF {totalRecords} Invoices"
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
                          field="due"
                          header="DUE"
                          sortable
                          filter
                        />
                        <Column
                          field="student"
                          header="STUDENT"
                          sortable
                          filter
                        />
                        <Column
                          field="total"
                          header="TOTAL"
                          sortable
                          filter

                        />
                        <Column
                          field="overdue_days"
                          header="OVERDUE DAYS"
                          sortable
                          filter

                        />
                        <Column
                          field="total_paid"
                          header="TOTAL PAID"
                          sortable
                          filter

                        />
                        <Column
                          field="total_due"
                          header="TOTAL DUE"
                          sortable
                          filter

                        />
                        <Column body={actionBodyTemplate} header="ACTION"/>
                    </DataTable>
                </div>

                <Dialog
                  visible={productDialog}
                  style={{ width: '900px' }}
                  header="INVOICE FORM"
                  modal
                  className="p-fluid"
                  onHide={hideDialog}
                >
                  <CreateInvoice
                    productDialog ={setProductDialog}
                    getInvoices={props.getInvoices}
                  />
                </Dialog>


            </div>
          </Paper>
        </>

    );
}




export default Invoices;
