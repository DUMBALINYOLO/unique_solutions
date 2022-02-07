import React, { useState, useEffect, useRef } from 'react';
import {  Redirect } from 'react-router-dom';
import classNames from 'classnames';
import { DataTable } from 'primereact/datatable';
import { connect } from 'react-redux';
import { Column } from 'primereact/column';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import { Toolbar } from 'primereact/toolbar';
import { InputNumber } from 'primereact/inputnumber';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';

import ManagementLayout from "../layout/ManagementLayout";
import { Divider } from 'primereact/divider';
import { getFees, editFee, addFee} from '../../actions/fees';
import { Dropdown } from 'primereact/dropdown';
import { Badge } from 'primereact/badge';





const Fees = (props) => {

    let emptyFee = {
      name: '',
      targets: '',
      type: '',
      amount: '',
    };

    const feeTargetOptions = [
      {key: 'individual', value: 'INDIVIDUAL'},
      {key: 'all', value: 'ALL STUDENTS'},
      {key: 'one', value: 'FORM 1'},
      {key: 'two', value: 'FORM 2'},
      {key: 'three', value: 'FORM 3'},
      {key: 'four', value: 'FORM 4'},
      {key: 'five', value: 'FORM 5'},
      {key: 'six', value: 'FORM 6'},
      {key: 'other', value: 'OTHER'},
    ]

    const feeTypeOptions = [
      {key: 'once', value: 'ONCE-OFF'},
      {key: 'often', value:'often'}
    ]


    const [products, setProducts] = useState(null);
    const [productDialog, setProductDialog] = useState(false);
    const [deleteProductDialog, setDeleteProductDialog] = useState(false);
    const [deleteProductsDialog, setDeleteProductsDialog] = useState(false);
    const [record, setRecord] = useState(emptyFee);
    const [selectedProducts, setSelectedProducts] = useState(null);
    const [submitted, setSubmitted] = useState(false);
    const [newRecord, setNewRecord] = useState({});
    const [globalFilter, setGlobalFilter] = useState(null);
    const toast = useRef(null);
    const dt = useRef(null);
    const {token, records, productcategories} =props;



    useEffect(() => {
      if(!props.fetched) {
          props.getFees(token);
      }
      console.log('mount it!');


    }, [newRecord]);




    const openNew = () => {
        setRecord(emptyFee);
        setSubmitted(false);
        setProductDialog(true);
    }

    const hideDialog = () => {
        setSubmitted(false);
        setProductDialog(false);
    }



    const saveProduct = (e) => {
        setSubmitted(true);
        e.preventDefault();
        if (record.name.trim()) {
            let _record = {...record};
            if (record.id) {
                props.editFee(record.id, record, token);
                setNewRecord(_record)
                props.getFees(token);
                setProductDialog(true);

            }
            else {
                props.addFee(_record, token)
                setNewRecord(_record)
                props.getFees(token);

            }
            setProductDialog(false);
            setRecord(emptyFee);
        }
    }

    const editProduct = (record) => {
        setRecord({...record});
        setProductDialog(true);
    }








    const exportCSV = () => {
        dt.current.exportCSV();
    }



    const onInputChange = (e, name) => {
        const val = (e.target && e.target.value) || '';
        let _record = {...record};
        _record[`${name}`] = val;
        setRecord(_record);
    }




    const leftToolbarTemplate = () => {
        return (
            <React.Fragment>
                <Button label="ADD NEW" className="p-button-warning p-mr-2" onClick={openNew} />
            </React.Fragment>
        )
    }

    const rightToolbarTemplate = () => {
        return (
            <React.Fragment>
                <Button label="CSV" icon="pi pi-upload" className="p-button-primary" onClick={exportCSV} />
                <Button label="PDF" icon="pi pi-file-pdf" className="p-button-warning" onClick={exportCSV} />
                <Button label="PRINT" icon="pi pi-print" className="p-button-secondary" onClick={exportCSV} />
            </React.Fragment>
        )
    }




    const actionBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <Button
                  icon="pi pi-pencil"
                  className="p-button-rounded p-button-warning p-mr-2"
                  onClick={() => editProduct(rowData)}
                >
                </Button>
                <Button
                  icon="pi pi-sign-in"
                  className="p-button-rounded p-button-warning"
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
    const productDialogFooter = (
        <React.Fragment>
            <Button label="Cancel" icon="pi pi-times" className="p-button-text" onClick={hideDialog} />
            <Button label="Save" icon="pi pi-check" className="p-button-text" onClick={saveProduct} />
        </React.Fragment>
    );



    return (
      <ManagementLayout>
            <div className="datatable-crud-demo">
                <Toast ref={toast} />
                <div className="card">
                    <Toolbar className="p-mb-4" left={leftToolbarTemplate}></Toolbar>
                    <DataTable
                        ref={dt}
                        value={props.records}
                        selection={selectedProducts}
                        onSelectionChange={(e) => setSelectedProducts(e.value)}
                        dataKey="id" paginator rows={10} rowsPerPageOptions={[5, 10, 25]}
                        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                        currentPageReportTemplate="SHOWING {first} TO {last} OF {totalRecords} Fees"
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
                          field="name"
                          header="NAME"
                          sortable
                          filter
                        />
                        <Column
                          field="targets"
                          header="TARGET"
                          sortable
                          filter
                        />
                        <Column
                          field="type"
                          header="TYPE"
                          sortable
                          filter
                        />
                        <Column
                          field="amount"
                          header="AMOUNT"
                          sortable
                          filter
                        />
                        <Column body={actionBodyTemplate} header="ACTION"/>
                    </DataTable>
                </div>

                <Dialog
                  visible={productDialog}
                  style={{ width: '600px' }}
                  header="FEE FORM"
                  modal
                  className="p-fluid"
                  footer={productDialogFooter}
                  onHide={hideDialog}
                >

                  <div className="p-fluid p-formgrid p-grid">
                      <div className="p-field p-col-12 p-md-12">
                        <label htmlFor="righticon">NAME</label>
                            <i className="pi pi-spin pi-spinner" />
                            <InputText
                                id="name"
                                name="name"
                                label="Name"
                                value={record.name}
                                onChange={(e) => onInputChange(e, 'name')}
                                tooltip="Choose Fee Name"
                            />
                            {submitted && !record.name && <small className="p-error">Name is required.</small>}
                      </div>
                      <div className="p-field p-col-12 p-md-12">
                        <label htmlFor="righticon">AMOUNT</label>
                            <i className="pi pi-spin pi-spinner" />
                            <InputText
                                id="amount"
                                type="number"
                                value={record.amount}
                                onChange={(e) => onInputChange(e, 'amount')}
                            />
                            {submitted && !record.amount && <small className="p-error">Amount is required.</small>}
                      </div>
                      <div className="p-field p-col-12 p-md-12">
                          <label htmlFor="righticon">TARGETS</label>
                          <span className="p-float-label p-input-icon-right">
                              <Dropdown
                                  value={record.targets}
                                  optionLabel="value"
                                  optionValue="key"
                                  options={feeTargetOptions}
                                  filter
                                  showClear
                                  filterBy="value"
                                  onChange={(e) => onInputChange(e, 'targets')}
                                  tooltip="Choose Parent Account"
                              />
                          </span>
                      </div>
                      <div className="p-field p-col-12 p-md-12">
                          <label htmlFor="righticon">TYPE</label>
                          <span className="p-float-label p-input-icon-right">
                              <Dropdown
                                  value={record.type}
                                  optionLabel="value"
                                  optionValue="key"
                                  options={feeTypeOptions}
                                  filter
                                  showClear
                                  filterBy="value"
                                  onChange={(e) => onInputChange(e, 'type')}
                                  tooltip="Choose Parent Account"
                              />
                          </span>
                      </div>

                  </div>
                </Dialog>

            </div>
        </ManagementLayout>
    );
}

const mapStateToProps = state =>({
    records: state.fees.fees,
    token: state.auth.token,

})

export default connect(
  mapStateToProps,
  {getFees, editFee, addFee} )
  (Fees);
