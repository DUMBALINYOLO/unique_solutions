import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Grid  from '@mui/material/Grid';
import Button  from '@mui/material/Button';
import Card  from '@mui/material/Card';
import { Toolbar } from 'primereact/toolbar';
import { Button as PrimeButton } from 'primereact/button';
import Paper from "@mui/material/Paper";
import { useNavigate } from 'react-router-dom';
import {getServices} from '../../actions/services';
import CustomerWrapper from '../home/CustomerWrapper';
import { connect } from 'react-redux';






const Services = props => {

  const { records} = props;
  const navigate = useNavigate();


  const handleClick = id =>{
    navigate(`/customers/services/${id}`)
  }


  useEffect(() => {
    if(!props.fetched) {
        props.getServices(props.token);
    }
    console.log('mount it!');


  }, []);


  return (
    <CustomerWrapper>
      <Paper
        style={{paddingTop: '100px', paddingBottom: '30px', paddingLeft: '30px', paddingRight: '30px',}}

      >

        <Grid
          container
          spacing={4}
        >
        {
          records.map((service) => {
            return (
                <Grid item xs={12} sm={6} md={4} key={service.id}>
                  <Card className="card-transparent bg-royal card-box-hover-rise mb-4">
                    <div className="card-img-wrapper">
                      <div className="card-badges card-badges-bottom">
                        <div className="badge badge-warning badge-pill">${service.fee}</div>
                      </div>
                      <img
                        src={service.primary_image}
                        className="card-img-top rounded"
                        alt="..."
                        style={{height: '250px'}}
                      />
                    </div>
                    <div className="card-body text-center">
                      <h5 className="card-title font-weight-bold font-size-lg">
                        {service.name}
                      </h5>
                      <p className="card-text">
                        {service.category}
                      </p>
                      <Button
                        size="small"
                        variant="outlined"
                        color="primary"
                        className="mt-1"
                        onClick={() => handleClick(service.id)}
                        >
                        VIEW DETAILS & ORDER SERVICE
                      </Button>
                    </div>
                  </Card>
                </Grid>
              );
            })
          }

        </Grid>
      </Paper>
    </CustomerWrapper>

  );
};

const mapStateToProps = state => ({
    records: state.services.services,
    token: state.auth.token,

  });



export default connect(
    mapStateToProps,
    {
      getServices
    }
  )(Services);
