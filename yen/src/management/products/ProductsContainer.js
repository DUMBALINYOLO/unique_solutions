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
import AddProduct from './AddProduct';
import { useNavigate } from 'react-router-dom';



const Products = (props) => {
  const { records} = props;
  const [productDialog, setProductDialog] = useState(false);
  const navigate = useNavigate();


  const handleClick = id =>{
      navigate(`/management/products/${id}`)
  }


  const openNew = () => {
    setProductDialog(true);
  }

  const hideDialog = () => {
      setProductDialog(false);
  }

  const rightToolbarTemplate = () => {
      return (
          <React.Fragment>

              <PrimeButton
                label="ADD NEW PRODUCT"
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
        visible={productDialog}
        style={{ width: '800px' }}
        header="IMAGE FORM"
        modal
        className="p-fluid"
        onHide={hideDialog}
        >
          <AddProduct
              getProducts ={props.getProducts}
              setProductDialog={setProductDialog}
          />
      </Dialog>
      <Grid
        container
        spacing={4}
      >
      {
        records.map((product) => {
          return (
              <Grid item xs={12} sm={6} md={4} key={product.id}>
                <Card className="card-transparent bg-royal card-box-hover-rise mb-4">
                  <div className="card-img-wrapper">
                    <div className="card-badges card-badges-bottom">
                      <div className="badge badge-warning badge-pill">${product.price}</div>
                    </div>
                    <img
                      src={product.primary_image}
                      className="card-img-top rounded"
                      alt="..."
                      style={{height: '250px'}}
                    />
                  </div>
                  <div className="card-body text-center">
                    <h5 className="card-title font-weight-bold font-size-lg">
                      {product.name}
                    </h5>
                    <p className="card-text">
                      {product.type}
                    </p>
                    <Button
                      size="small"
                      variant="outlined"
                      color="primary"
                      className="mt-1"
                      onClick={() => handleClick(product.id)}
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
}



export default Products;
