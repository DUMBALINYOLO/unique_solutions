import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Grid,
  Avatar,
  Badge,
  Card,
  CardContent,
  Button,
  Divider
} from '@material-ui/core';

import stock2 from '../../assets/images/stock-photos/stock-2.jpg';
import avatar1 from '../../assets/images/avatars/avatar1.jpg';
import avatar2 from '../../assets/images/avatars/avatar2.jpg';
import avatar3 from '../../assets/images/avatars/avatar3.jpg';
import avatar5 from '../../assets/images/avatars/avatar5.jpg';
import avatar7 from '../../assets/images/avatars/avatar7.jpg';

const ServiceDetail = (props) => {

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
        <Grid item xs={12} lg={12}>
          <Card className="mb-4">
            <div className="card-badges">
              <span className="h-auto px-3 py-1 badge badge-warning badge-pill">
                ${fee}
              </span>
            </div>
            <a
              href="#/"
              onClick={e => e.preventDefault()}
              className="image-title-overlay"
              title="...">
              <div className="image-title-overlay--bottom">
                <h3 className="display-4 font-weight-bold m-0 text-white">
                  {name}
                </h3>
              </div>
              <img alt="..." className="card-img-top" src={primary_image} />
            </a>
            <CardContent className="p-3">
              <div className="d-flex justify-content-between mb-4">
                <div className="d-flex align-items-center">
                  <Avatar alt="..." src={avatar2} className="mr-2" />
                  <div>
                    CATEGORY
                    <span className="d-block">
                      {category}
                    </span>

                  </div>
                </div>
                <div>
                  <Button
                    variant="outlined"
                    color="secondary"
                    className="py-1 px-2 font-weight-bold">
                    <span className="text-success pr-1">10000</span>
                    <span className="d-block opacity-6 text-black font-size-xs">
                      Reviews
                    </span>
                  </Button>
                </div>
              </div>
              <p className="card-text">
                {description}
              </p>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Fragment>
  );
}


export default ServiceDetail;
