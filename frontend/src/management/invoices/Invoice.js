import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Grid, Card, Button, Divider } from '@material-ui/core';
import ManagementLayout from '../layout/ManagementLayout';
import {connect} from 'react-redux';
import {
  getInvoice,
  getInvoiceLines

} from '../../actions/fees';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Dialog } from 'primereact/dialog';
import Pay from './Pay';




function Invoice(props) {
  const {token, invoice, invoicelines} = props;
  const [seriesDialog, setSeriesDialog] = useState(false);

  useEffect(() => {
    if(!props.fetched) {
        props.getInvoice(props.match.params.id, token);
        props.getInvoiceLines(props.match.params.id, token);
    }
    console.log('mount it!');
  }, []);

  const openNew = () => {
    setSeriesDialog(true);
  }

  const hideDialog = () => {
        setSeriesDialog(false);
  }



  return (
    <ManagementLayout>
      <Card className="card-box card-box-hover-rise">
        <div className="card-body p-4">
          <div className="d-flex flex-column flex-lg-row align-items-center justify-content-between">
            <div className="text-center text-lg-left mb-3 mb-lg-0">
              <h1 className="display-4 font-weight-bold">Invoice {invoice.id}</h1>
              <p className="mb-0" >{invoice.date}</p>
            </div>
            
          </div>
          <Divider className="my-3" />
          <div className="d-flex flex-column flex-lg-row justify-content-between mb-4">
            <div>
              <div className="text-uppercase mb-2 font-size-xs">
                Billed from
              </div>
              <p className="mb-1 font-weight-bold">DAWINI HIGH SCHOOL</p>
              <p >
                office number 003.
                Bulawayo Zimbabwe.
              </p>
              <p>
                <span className="d-block pb-1">
                  <b>Tel.:</b>
                  +263778481481 and or
                  +263776442240
                </span>
                <span className="d-block">
                  <b>Email:</b>

                    dawini20@gmail.com
                </span>
              </p>
            </div>
            <div className="text-right">
              <div className="text-uppercase  mb-2 font-size-xs">
                Invoice no.
              </div>
              <h1 className="display-4 opacity-8 ">#{invoice.id}</h1>
            </div>
          </div>
          <div className="d-flex flex-column flex-lg-row justify-content-between">

            <div>
              <div className="text-uppercase  mb-2 font-size-xs">
                Invoice information
              </div>
              <ul className="list-unstyled">
                <li className="d-flex justify-content-between pb-1">
                  <span className="pr-4">Invoice Number</span>
                  <span className="pl-4">INV{invoice.id}</span>
                </li>
                <li className="d-flex justify-content-between pb-1">
                  <span className="pr-4">Issue Date</span>
                  <span className="pl-4">{invoice.date}</span>
                </li>
                <li className="d-flex justify-content-between">
                  <span className="pr-4">Due Date</span>
                  <span className="pl-4">{invoice.due}</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="table-responsive my-4">
            <DataTable
                value={invoicelines}
                dataKey="id"
                rows={10}
                rowsPerPageOptions={[5, 10, 25]}
                virtualScroll
                virtualRowHeight={5}
                className="p-datatable-gridlines"
              >
                <Column
                  field="id"
                  header="ID"
                />
                <Column
                  field="reference_number"
                  header="REFERRENCE NUMBER"
                />
                <Column
                  field="fee"
                  header="FEE"
                />
                <Column
                  field="quantity"
                  header="QUANTITY"

                />
                <Column
                  field="price"
                  header="PRICE"
                />
                <Column
                  field="total"
                  header="TOTAL COST"
                />
            </DataTable>


          </div>
          <div className="divider mb-4" />
          <Grid container spacing={4}>
            <Grid item lg={8}>

            </Grid>
            <Grid item lg={4}>
              <ul className="list-unstyled mb-3">
                <li className="d-flex justify-content-between pb-1">
                  <span className="pr-4">Sub-Total</span>
                  <span className="pl-4">{invoice.subtotal}</span>
                </li>
                <li className="d-flex justify-content-between pb-1">
                  <span className="pr-4">Tax (14.5%)</span>
                  <span className="pl-4">${invoice.tax_amount}</span>
                </li>
                <li className="d-flex justify-content-between pb-1">
                  <span className="pr-4">Discount</span>
                  <span className="pl-4">-$0.00</span>
                </li>
                <li className="d-flex justify-content-between font-weight-bold pt-3 pb-2 font-size-lg">
                  <span className="pr-4">Total</span>
                  <span className="pl-4">${invoice.total}</span>
                </li>
              </ul>
              <Button size="large" variant="contained" color="primary">
                Pay invoice{' '}
              </Button>
            </Grid>
          </Grid>
        </div>
      </Card>
    </ManagementLayout>
  );
}


const mapStateToProps = state =>({
  invoice: state.fees.invoice,
  token: state.auth.token,
  invoicelines: state.fees.invoicelines
})

export default connect(
mapStateToProps,
{getInvoice, getInvoiceLines } )
(Invoice);
