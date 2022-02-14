import React, { useState, useEffect } from 'react';
import Paper from "@mui/material/Paper";
import CustomerWrapper from '../home/CustomerWrapper';
import { connect } from 'react-redux';
import {getProducts} from '../../actions/products';
import ProductContainer from './ProductContainer';




const Products = (props) => {
  const { records} = props;



  useEffect(() => {
    if(!props.fetched) {
        props.getProducts(props.token);
    }
    console.log('mount it!');


  }, []);


  return (
    <CustomerWrapper>
      <Paper
        style={{paddingTop: '100px', paddingBottom: '30px', paddingLeft: '30px', paddingRight: '30px',}}
      >
        <ProductContainer records={records} />
      </Paper>
    </CustomerWrapper>
  );
}


const mapStateToProps = state => ({
    records: state.products.products,
    token: state.auth.token,

  });



export default connect(
    mapStateToProps,
    {
      getProducts
    }
  )(Products);
