import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import ManagementLayout from '../layout/ManagementLayout'
import Sales from './sales/Sales';
import {connect} from 'react-redux';
import {getPaymentReports} from '../../actions/fees';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';




const ManagementHome = (props) => {

    const title = ' Dawini High School';
    const {
      token,
      stats
    } = props;




    useEffect(() => {
      if(!props.fetched) {
          props.getPaymentReports(token);
      }
      console.log('mount it!');
    }, []);




    return (
      <ManagementLayout>
        <Helmet>
          <title>{title}</title>

        </Helmet>
        <div className="table-responsive my-4">
          <DataTable
              value={stats}
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
                field="name"
                header="NAME"
              />
              <Column
                field="surname"
                header="SURNAME"
              />
              <Column
                field="unpaid_invoices"
                header="UNPAID INVOICES"

              />
              <Column
                field="partially_paid_invoices"
                header="PARTIALLY PAID INVOICES"
              />
              <Column
                field="fully_paid_invoices"
                header="FULLY PAID INVOICES"
              />
              <Column
                field="total_due"
                header="TOTAL DUE"
              />
          </DataTable>


        </div>

      </ManagementLayout>
  );

}


const mapStateToProps = state => ({
  stats: state.fees.paymentreports,
  token: state.auth.token,
});



export default connect(
  mapStateToProps,
  {
    getPaymentReports
  }
)(ManagementHome);
