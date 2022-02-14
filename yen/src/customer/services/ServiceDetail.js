import React, { Fragment, useState } from 'react';

import Button  from '@mui/material/Button';
import Card  from '@mui/material/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Grid  from '@mui/material/Grid';
import { Dialog } from 'primereact/dialog';
import Order from './Order';
import { Toolbar } from 'primereact/toolbar';
import { Button as PrimeButton } from 'primereact/button';



const ProductDetail = (props) => {

  const {
    primary_image,
    name,
    fee,
    description,
    category,
    id,

  } = props.service;


  const [orderDialog, setOrderDialog] = useState(false);

  const openNew = () => {
    setOrderDialog(true);
  }

  const hideDialog = () => {
        setOrderDialog(false);
  }

  const rightToolbarTemplate = () => {
      return (
          <React.Fragment>

              <PrimeButton
                label="ADD TO CART"
                className="p-button-info"
                onClick={openNew}
              />
          </React.Fragment>
      )
  }

  return (
    <Fragment>
      <Dialog
        visible={orderDialog}
        style={{ width: '400px' }}
        header="CART FORM"
        modal
        className="p-fluid"
        onHide={hideDialog}
        >
          <Order
              id={id}
              orderDialog={setOrderDialog}
          />
      </Dialog>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={12} >
          <Card className="card-transparent bg-royal card-box-hover-rise mb-4">
            <div className="card-img-wrapper">
              <div className="card-badges card-badges-bottom">
                <div className="badge badge-warning badge-pill">${fee}</div>
              </div>
              <img
                src={primary_image}
                className="card-img-top rounded"
                alt="..."
                style={{height: '250px'}}
              />
            </div>
            <div className="card-body text-center">
              <h5 className="card-title font-weight-bold font-size-lg">
                {name}
              </h5>
              <p className="card-text">
                {description}
              </p>
            </div>
            <Toolbar
              className="mb-4"
              style={{backgroundColor:"#283747"}}
              right={rightToolbarTemplate}>
            </Toolbar>
          </Card>
        </Grid>
      </Grid>
    </Fragment>
  );
}


export default ProductDetail;
