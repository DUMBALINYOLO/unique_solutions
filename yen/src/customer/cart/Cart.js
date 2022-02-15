import React, { Fragment, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import {connect} from 'react-redux';
import CountUp from 'react-countup';
import { withStyles } from '@mui/styles';
import { getCustomerCart } from '../../actions/sales';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import {Link, Redirect} from 'react-router-dom';
import CustomerWrapper from '../home/CustomerWrapper';

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    padding: '30px',
  },
});


function Cart(props) {

  const { classes, email, token, cart, userName } = props;

  console.log(props)

  const {
    lines,
    subtotal,
    tax,
    total,
    total_owed,
    total_paid
  } = cart;

  useEffect(() => {
    if(!props.fetched) {
        props.getCustomerCart(token);
    }
    console.log('mount it!');
  }, []);




  return (
    <CustomerWrapper>
      <Grid
        container
        spacing={4}
        className={classes.root}
        style={{paddingTop: '100px'}}

        >

        <Grid item xs={12} lg={12}>

          <Card className="mb-4  card-box-hover-rise ">
            <span className="ribbon-angle ribbon-angle--top-right ribbon-warning">
              <small>{userName}</small>
            </span>
            <span className="ribbon-angle ribbon-angle--top-left ribbon-primary">
              <small>{userName}</small>
            </span>
            <span className="ribbon-angle ribbon-angle--bottom-right ribbon-success">
              <small>{email}</small>
            </span>
            <div className="card-img-wrapper">
              <div className="bg-composed-wrapper bg-vicious-stance border-0">

                <div className="bg-composed-wrapper--content text-center text-light p-5">
                  <h1 className="display-3 font-weight-bold mb-0">
                    <Box className="pb-4">
                      <Button
                        size="large"
                        color="secondary"
                        variant="contained"
                        component={Link}
                        to='/customers'
                      >
                        CONTINUE SHOPING
                      </Button>
                    </Box>
                  </h1>
                </div>
              </div>
            </div>
            <div className="card-body text-center">

              <Grid container spacing={4}>
                <Grid xs={12} sm={4} item>
                  <div className=" text-center rounded  card-box-hover-rise">
                    <div>
                      <FontAwesomeIcon
                        icon={['far', 'user']}
                        className="font-size-xxl text-warning"
                      />
                    </div>
                    <div className="mt-2 line-height-sm">
                      <b className="font-size-lg">${total}</b>
                      <span className=" d-block">TOTAL</span>
                    </div>
                  </div>
                </Grid>
                <Grid xs={12} sm={4} item>
                  <div className="text-center rounded card-box-hover-rise">
                    <div>
                      <FontAwesomeIcon
                        icon={['fas', 'lemon']}
                        className="font-size-xxl text-success"
                      />
                    </div>
                    <div className="mt-2 line-height-sm">
                      <b className="font-size-lg">${total_paid}</b>
                      <span className=" d-block">TOTAL PAID</span>
                    </div>
                  </div>
                </Grid>
                <Grid xs={12} sm={4} item>
                  <div className="text-center rounded  card-box-hover-rise">
                    <div>
                      <FontAwesomeIcon
                        icon={['far', 'chart-bar']}
                        className="font-size-xxl text-info"
                      />
                    </div>
                    <div className="mt-2 line-height-sm">
                      <b className="font-size-lg">${total_owed}</b>
                      <span className=" d-block">TOTAL DUE</span>
                    </div>
                  </div>
                </Grid>
              </Grid>
              <div className="table-responsive" style={{paddingTop : '20px'}}>
                <DataTable
                    value={lines}
                    dataKey="id"
                    rows={10}
                    rowsPerPageOptions={[5, 10, 25]}
                    virtualScroll
                    virtualRowHeight={5}
                    className="p-datatable-gridlines  card-box-hover-rise"
                  >
                    <Column
                      field="id"
                      header="ID"
                    />
                    <Column
                      field="type"
                      header="TYPE"
                    />
                    <Column
                      field="product"
                      header="PRODUCT"
                    />
                    <Column
                      field="quantity"
                      header="QUANTITY"

                    />
                    <Column
                      field="unit_price"
                      header="UNIT PRICE"
                    />
                    <Column
                      field="total"
                      header="TOTAL COST"
                    />
                </DataTable>
              </div>
            </div>
          </Card>
        </Grid>
      </Grid>
    </CustomerWrapper>

  );
}

const mapStateToProps = state => ({
    cart: state.sales.customercart,
    email : state.auth.email,
    token: state.auth.token,
    userName: state.auth.userName,
  });



const CartMapped = connect(
    mapStateToProps,
    {
      getCustomerCart
    }
  )(Cart);


export default withStyles(styles)(CartMapped);
