import React, { useState, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { connect } from 'react-redux';
import { Column } from 'primereact/column';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import { Toolbar } from 'primereact/toolbar';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { useHistory } from 'react-router-dom';
import {
  Paper,
  makeStyles,

}
from '@material-ui/core';
import CreateUser from './CreateUser';



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



const Admins = (props) => {


    const classes = useStyles();
    const [productDialog, setProductDialog] = useState(false);
    const [globalFilter, setGlobalFilter] = useState(null);
    const toast = useRef(null);
    const dt = useRef(null);
    const history = useHistory();
    const openNew = () => {
        setProductDialog(true);
    }

    const hideDialog = () => {
        setProductDialog(false);
    }






    const leftToolbarTemplate = () => {
        return (
            <React.Fragment>
                <Button
                    label="ADD NEW"
                    className="p-button-warning p-mr-2"
                    onClick={openNew}
                />
            </React.Fragment>
        )
    }



    const handleClick = (role, id) =>{
      if (role === 'admin' | 'bursar'){
        history.push(`/managementdashboard/users/${id}`)
      }else if (role === 'bursar'){
        history.push(`/managementdashboard/users/${id}`)
      }else {
        history.push(`/managementdashboard/students/${id}`)
      }

    }

    const actionBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <Button
                  label='OPEN'
                  className="p-button-rounded  p-button-warning"
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
                    <Toolbar className="p-mb-4" left={leftToolbarTemplate}></Toolbar>
                    <DataTable
                        ref={dt}
                        value={props.records}
                        dataKey="id" paginator rows={10} rowsPerPageOptions={[5, 10, 25]}
                        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                        currentPageReportTemplate="SHOWING {first} TO {last} OF {totalRecords} USERS"
                        globalFilter={globalFilter}
                        header={header}
                        virtualScroll
                        virtualRowHeight={5}
                        className="p-datatable-gridlines"
                      >
                        <Column
                          header="ID"
                          field="id"
                          sortable
                          filter
                        />
                        <Column
                          header="EMAIL"
                          field="email"
                          sortable
                          filter
                        />
                        <Column
                          header="USERNAME"
                          field="username"
                          sortable
                          filter

                        />
                        <Column
                          header="FIRST NAME"
                          field="first_name"
                          sortable
                          filter

                        />
                        <Column
                          header="MIDDLE NAME"
                          field="middle_name"
                          sortable
                          filter

                        />
                        <Column
                          header="LAST NAME"
                          field="last_name"
                          sortable
                          filter

                        />
                        <Column
                          header="GENDER"
                          field="gender"
                          sortable
                          filter

                        />

                    </DataTable>
                </div>

                <Dialog
                  visible={productDialog}
                  style={{ width: '800px' }}
                  header="USER FORM"
                  modal
                  className="p-fluid"
                  onHide={hideDialog}
                >
                    <CreateUser
                        getUsers={props.getUsers}
                        userDialog={setProductDialog}

                    />

                </Dialog>

            </div>
          </Paper>
        </>
    );
}

const mapStateToProps = state =>({
    token: state.auth.token,
    email: state.auth.email,
})

export default connect(
  mapStateToProps,
  {} )
  (Admins);
