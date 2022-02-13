import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Grid  from '@mui/material/Grid';
import ManagementLayout from "../layout/leftsidebar/LeftSidebar";
import Button  from '@mui/material/Button';
import Card  from '@mui/material/Card';
import { Toolbar } from 'primereact/toolbar';
import { Button as PrimeButton } from 'primereact/button';
import Paper from "@mui/material/Paper";
import { Dialog } from 'primereact/dialog';
import AddService from './AddService';
import { useNavigate } from 'react-router-dom';






const Services = props => {

  const { records} = props;
  const navigate = useNavigate();
  const [serviceDialog, setServiceDialog] = useState(false);



  const openNew = () => {
    setServiceDialog(true);
  }

    const hideDialog = () => {
        setServiceDialog(false);
    }





  const handleClick = id =>{
    navigate(`/management/services/${id}`)
  }

  const rightToolbarTemplate = () => {
      return (
          <React.Fragment>

              <PrimeButton
                label="ADD NEW SERVICE"
                className="p-button-info"
                onClick={openNew}
              />
          </React.Fragment>
      )
  }



  return (
    <Paper>
      <Toolbar
        className="mb-4"
        right={rightToolbarTemplate}>
      </Toolbar>
      <Dialog
        visible={serviceDialog}
        style={{ width: '800px' }}
        header="SERVICE FORM"
        modal
        className="p-fluid"
        onHide={hideDialog}
        >
          <AddService
              getServices ={props.getServices}
              setServiceDialog={setServiceDialog}
          />
      </Dialog>
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
                      View Details
                    </Button>
                  </div>
                </Card>
              </Grid>
            );
          })
        }

      </Grid>
    </Paper>

  );
};


export default Services;
