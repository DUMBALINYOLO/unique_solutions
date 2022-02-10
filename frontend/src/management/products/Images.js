import React, {useEffect, useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AOS from "aos";
import 'aos/dist/aos.css';
import {
  Grid,
  Card,
} from '@material-ui/core';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { Toolbar } from 'primereact/toolbar';
import AddImage from './AddImage';




const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: 'primary',
    paddingTop: '65px',
    paddingLeft: '20px',
    paddingRight: '20px',
  },
});





const Images = (props) => {
  const { classes, images, product } = props;
  const [imageDialog, setImageDialog] = useState(false);


  useEffect(() =>{
    AOS.init({duration : 3000})

  }, []);


  const openNew = () => {
    setImageDialog(true);
    }

    const hideDialog = () => {
        setImageDialog(false);
    }

    const leftToolbarTemplate = () => {
        return (
            <React.Fragment>
                <Button
                    label="ADD IMAGE"
                    className="p-button-success "
                    onClick={openNew}
                />
            </React.Fragment>
        )
    }



  return (
      <div data-aos="zoom-in-up">
            <Toolbar className="p-mb-4" left={leftToolbarTemplate}></Toolbar>
            <Dialog
                visible={imageDialog}
                style={{ width: '400px' }}
                header="IMAGE FORM"
                modal
                className="p-fluid"
                onHide={hideDialog}
                >
                    <AddImage
                        product={props.product}
                        getImages={props.getImages}
                        setImageDialog={setImageDialog}
                    />
            </Dialog>
          <Grid container spacing={4} data-aos="zoom-in-up">
            { images.map((image) => {
              return (
                <Grid item xs={12} lg={6} key ={image.id} data-aos="zoom-in-up">
                  <Card className="mb-4">
                    <div className="card-badges">
                      <span className="h-auto px-3 py-1 badge badge-warning badge-pill">
                        {product.name}
                      </span>
                    </div>
                      <img
                        alt="..."
                        className="card-img-top"
                        src={image.image}
                        style={{height: '700px'}}
                      />
                  </Card>
                </Grid>
                );
                })
              }
          </Grid>
      </div>
  );
};




export default withStyles(styles)(Images);
