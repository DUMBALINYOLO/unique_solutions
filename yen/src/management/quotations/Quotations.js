import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { DataTable } from 'primereact/datatable';
import { connect } from 'react-redux';
import { Column } from 'primereact/column';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import { Toolbar } from 'primereact/toolbar';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import Paper from '@mui/material/Paper';
import {makeStyles} from '@mui/styles';
import CreateQuotation from './CreateQuotation';
import ManagementLayout from "../layout/leftsidebar/LeftSidebar";
import {getQuotations} from '../../actions/sales';
import Create from './Create';






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



const Quotations = (props) => {



    const classes = useStyles();
    const [productDialog, setProductDialog] = useState(false);
    const [selectedProducts, setSelectedProducts] = useState(null);
    const [globalFilter, setGlobalFilter] = useState(null);
    const navigate= useNavigate();
    const toast = useRef(null);
    const dt = useRef(null);
    const {token} =props;


    useEffect(() => {
      if(!props.fetched) {
          props.getQuotations(props.token);
      }
      console.log('mount it!');

    }, []);




    const openNew = () => {
        setProductDialog(true);
    }

    const handleClick = (id) =>{

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
      <ManagementLayout>
        <Toolbar
          className="mb-4"
          right={leftToolbarTemplate}>
        </Toolbar>

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
                        currentPageReportTemplate="SHOWING {first} TO {last} OF {totalRecords} Quotations"
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
                  header="QUOTATION FORM"
                  modal
                  className="p-fluid"
                  onHide={hideDialog}
                >
                  <CreateQuotation
                    productDialog ={setProductDialog}
                    getQuotations={props.getQuotations}


                  />
                </Dialog>
            </div>
          </Paper>
        </ ManagementLayout>

    );
}


const mapStateToProps = state => ({
    records: state.sales.quotations,
    token: state.auth.token,

  });



export default connect(
    mapStateToProps,
    {
      getQuotations
    }
  )(Quotations);
