import React, { Fragment } from 'react';

import Button  from '@mui/material/Button';
import Card  from '@mui/material/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Grid  from '@mui/material/Grid';
const ProductDetail = (props) => {

  const {
    primary_image,
    name,
    fee,
    description,
    category,

  } = props.service;

  return (
    <Fragment>
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
          </Card>
        </Grid>
      </Grid>
    </Fragment>
  );
}


export default ProductDetail;
