import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import ManagementLayout from '../layout/ManagementLayout'
import Sales from './sales/Sales';
import {connect} from 'react-redux';

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';




const ManagementHome = (props) => {

    const title = ' UNIQUE SOLUTIONS';
    const {
      token,
      stats
    } = props;




   



    return (
      <ManagementLayout>
        <Helmet>
          <title>{title}</title>

        </Helmet>
        <div className="table-responsive my-4">
          
        </div>

      </ManagementLayout>
  );

}


const mapStateToProps = state => ({
  token: state.auth.token,
});



export default connect(
  mapStateToProps,
  {
    
  }
)(ManagementHome);
