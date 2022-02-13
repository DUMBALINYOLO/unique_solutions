import React, { Fragment, useState } from 'react';
import Button  from '@mui/material/Button';
import Card  from '@mui/material/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Grid  from '@mui/material/Grid';
import { Dialog } from 'primereact/dialog';
import Order from './Order';


const ProductDetail = (props) => {

  const {
    primary_image,
    name,
    price,
    return_policy,
    type,
    id,
  } = props.product;

  const [orderDialog, setOrderDialog] = useState(false);

  const openNew = () => {
    setOrderDialog(true);
  }

  const hideDialog = () => {
        setOrderDialog(false);
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
                <div className="badge badge-warning badge-pill">${price}</div>
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
                {type}
              </p>
            </div>
            <div className="d-flex justify-content-between pt-3">

              <Button
                size="small"
                variant="contained"
                onClick={openNew}
                color="primary">
                ADD TO CART
              </Button>
            </div>


          </Card>
        </Grid>
      </Grid>
    </Fragment>
  );
}


export default ProductDetail;
