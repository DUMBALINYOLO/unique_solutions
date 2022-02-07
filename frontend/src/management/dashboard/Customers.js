import React, { useState, useEffect, useRef } from 'react';
import classNames from 'classnames';
import { DataTable } from 'primereact/datatable';
import { connect } from 'react-redux';
import { Column } from 'primereact/column';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import { FileUpload } from 'primereact/fileupload';
import { Rating } from 'primereact/rating';
import { Toolbar } from 'primereact/toolbar';
import { InputTextarea } from 'primereact/inputtextarea';
import { RadioButton } from 'primereact/radiobutton';
import { InputNumber } from 'primereact/inputnumber';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import './table.css';
import {
  Paper,
  makeStyles,
  TableBody,
  TableRow,
  TableCell,
  InputAdornment,
  Grid,
}
from '@material-ui/core';
import { Divider } from 'primereact/divider';
import { getCustomerStats } from '../../actions/reports';
import { MultiSelect } from 'primereact/multiselect';
import  Controls  from "../../components/formcontrols/Controls";
import {Form } from "../../components/formcontrols/useForm";
import CircularProgress from '@material-ui/core/CircularProgress';
import LinearProgress from '@material-ui/core/LinearProgress';
import { Dropdown } from 'primereact/dropdown';
import product from './product.jpg';
import category from './category.png';
import { Badge } from 'primereact/badge';
import binanceLogo from '../../images/crypto/binance.png';
import bitcoinLogo from '../../images/crypto/bitcoin.png';
import bytecoinLogo from '../../images/crypto/bytecoin.png';
import cardanoLogo from '../../images/crypto/cardano.png';
import decredLogo from '../../images/crypto/decred.png';
import iconLogo from '../../images/crypto/icon.png';
import iotaLogo from '../../images/crypto/iota.png';
import litecoinLogo from '../../images/crypto/litecoin.png';
import moneroLogo from '../../images/crypto/monero.png';
import nanoLogo from '../../images/crypto/nano.png';
import nemLogo from '../../images/crypto/nem.png';
import papulousLogo from '../../images/crypto/papulous.png';
import rippleLogo from '../../images/crypto/ripple.png';
import stellarLogo from '../../images/crypto/stellar.png';
import stratisLogo from '../../images/crypto/stratis.png';
import tronLogo from '../../images/crypto/tron.png';
import TradingTable from '../../components/Tables/TradingTable';



class Customers extends React.Component {
  state = {
    order: 'asc',
    orderBy: 'market',
    columnData: [
      {
        id: 'name',
        numeric: false,
        disablePadding: true,
        label: 'NAME'
      }, {
        id: 'total_net',
        numeric: true,
        disablePadding: false,
        label: 'INVENTORY TOTAL WEIGHT'
      },
      {
        id: 'charges_without_tax',
        numeric: true,
        disablePadding: false,
        label: 'TOTAL INVETORY VALUE WITHOUT TAX'
      },
       {
        id: 'tax_charges',
        numeric: true,
        disablePadding: false,
        label: 'TOTAL TAX CHARGES'
      }, {
        id: 'charges_with_tax',
        numeric: true,
        disablePadding: false,
        label: 'TOTAL INVETORY VALUE WITHOUT TAX'
      },
    ],
  };

  componentDidMount() {
    this.props.getCustomerStats(this.props.token);
  }

  render() {
    const {
      order,
      orderBy,
      columnData
    } = this.state;
    console.log(this.props.records)

    return (
      <TradingTable
        order={order}
        orderBy={orderBy}
        data={this.props.records}
        page={0}
        rowsPerPage={5}
        defaultPerPage={5}
        filterText={''}
        columnData={columnData}
      />
    );
  }
}

const mapStateToProps = state =>({
    records: state.reports.customerstats,
    token: state.auth.token,

})

export default connect(
  mapStateToProps,
  {getCustomerStats} )
  (Customers);
