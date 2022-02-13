import React, {useEffect, useState } from 'react';
import { withStyles } from '@mui/styles';
import AOS from "aos";
import 'aos/dist/aos.css';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';





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
  const { classes, images, service } = props;



  useEffect(() =>{
    AOS.init({duration : 3000})

  }, []);




  return (
      <div data-aos="zoom-in-up">
          <Grid container spacing={4} data-aos="zoom-in-up">
            { images.map((image) => {
              return (
                <Grid item xs={12} lg={6} key ={image.id} data-aos="zoom-in-up">
                  <Card className="mb-4">
                    <div className="card-badges">
                      <span className="h-auto px-3 py-1 badge badge-warning badge-pill">
                        {service.name}
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
