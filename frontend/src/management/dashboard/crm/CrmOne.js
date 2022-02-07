import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Grid, Card } from '@material-ui/core';

export default function Stats(props) {
  const {customers, authors, staff_users} =props;


  return (
    <Fragment>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} lg={4}>
          <Card className="card-box card-shadow-first p-4 mb-4 bg-royal card-box-hover-rise">
            <div className="d-flex align-items-center">
              <div className="d-40 rounded-circle bg-first text-white text-center font-size-lg mr-3">
                <FontAwesomeIcon icon={['far', 'keyboard']} />
              </div>
              <div >AUTHORS</div>
            </div>
            <div className="display-3 text-center line-height-sm text-second text-center d-flex align-items-center pt-3 justify-content-center">
              <FontAwesomeIcon
                icon={['fas', 'arrow-up']}
                className="font-size-sm text-success mr-2"
              />
            <div>{authors}</div>
            </div>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <Card className="card-box p-4 mb-4 bg-royal card-box-hover-rise">
            <div className="d-flex align-items-center">
              <div className="d-40 rounded-circle bg-success text-white text-center font-size-lg mr-3">
                <FontAwesomeIcon icon={['far', 'file-excel']} />
              </div>
              <div>STAFF USERS</div>
            </div>
            <div className="display-3 text-center line-height-sm text-second text-center d-flex align-items-center pt-3 justify-content-center">
              <FontAwesomeIcon
                icon={['far', 'dot-circle']}
                className="font-size-sm text-warning mr-2"
              />
              <div>{staff_users}</div>
            </div>
          </Card>
        </Grid>
        <Grid item xs={12} lg={4}>
          <Card className="card-box p-4 mb-4 bg-royal card-box-hover-rise">
            <div className="d-flex align-items-center">
              <div className="d-40 rounded-circle bg-danger text-white text-center font-size-lg mr-3">
                <FontAwesomeIcon icon={['far', 'user']} />
              </div>
              <div >CUSTOMERS</div>
            </div>
            <div className="display-3 text-center line-height-sm text-second text-center d-flex align-items-center pt-3 justify-content-center">
              <FontAwesomeIcon
                icon={['fas', 'arrow-up']}
                className="font-size-sm text-success mr-2"
              />
            <div>{customers}</div>
            </div>
          </Card>
        </Grid>
      </Grid>
    </Fragment>
  );
}
