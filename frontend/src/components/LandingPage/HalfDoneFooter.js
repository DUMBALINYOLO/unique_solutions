import React, { Fragment, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Grid, Container, Button, List, ListItem } from '@material-ui/core';
import { Link } from 'react-router-dom';
import projectLogo from './ubuntu.png';
import AOS from "aos";
import 'aos/dist/aos.css';


export default function LivePreviewExample() {

  useEffect(() =>{
    AOS.init({duration : 2000})

  }, []);


  return (
    <Fragment>
      <div className="py-5" data-aos="fade-right">
        <Container className="py-5">
          <Grid container spacing={4} className="text-center text-xl-left">
            <Grid item xs={12} lg={5} className="d-flex align-items-center">
              <div className="mb-5 mb-xl-0 w-100">
                <div
                  className="nav-logo bg-light rounded-sm d-50 mx-auto mx-xl-0"
                  title="Welcome Flexible Measurements & Control Systems 😀">
                  <a
                    href="#/"
                    onClick={e => e.preventDefault()}
                    className="d-block"
                    title="Flexible Measurements & Control Systems">
                    <i className="m-0 d-50">
                      <img
                        alt="Carolina React Admin Dashboard with Material-UI PRO"
                        src={projectLogo}
                      />
                    </i>
                  </a>
                </div>
                <p className="text-black-50 font-size-lg my-3">
                  GROW YOUR BUSINESS WITH US
                </p>
                <div className="divider border-1 rounded-circle border-dark bg-dark opacity-2 mx-auto mx-xl-0 mb-4 w-25" />
                <div className="d-flex justify-content-center justify-content-xl-start">
                  <Button
                    variant="outlined"
                    className="text-facebook py-2 px-2 mr-3"
                    href="#/"
                    onClick={e => e.preventDefault()}>
                    <FontAwesomeIcon
                      icon={['fab', 'facebook']}
                      className="font-size-lg"
                    />
                  </Button>
                  <Button
                    variant="outlined"
                    className="text-twitter py-2 px-2 mr-3"
                    href="#/"
                    onClick={e => e.preventDefault()}>
                    <FontAwesomeIcon
                      icon={['fab', 'twitter']}
                      className="font-size-lg"
                    />
                  </Button>
                  <Button
                    variant="outlined"
                    className="text-google py-2 px-2 mr-3"
                    href="#/"
                    onClick={e => e.preventDefault()}>
                    <FontAwesomeIcon
                      icon={['fab', 'google']}
                      className="font-size-lg"
                    />
                  </Button>
                  <Button
                    variant="outlined"
                    className="text-instagram py-2 px-2"
                    href="#/"
                    onClick={e => e.preventDefault()}>
                    <FontAwesomeIcon
                      icon={['fab', 'instagram']}
                      className="font-size-lg"
                    />
                  </Button>
                </div>
              </div>
            </Grid>
            <Grid
              item
              xs={12}
              lg={7}
              className="d-none d-md-flex align-items-center">
              <Grid container spacing={4} className="w-100">
                <Grid item xs={12} md={4}>
                  <div className="divider-v divider-v-lg opacity-1 d-none d-xl-block" />
                  <div className="pl-3">
                  <Button
                      color="inherit"
                      component={Link}
                      to='/services'
                      className=" px-4 py-2 text-capitalize">
                      OUR SERVICES
                    </Button>

                  </div>
                </Grid>
                <Grid item xs={12} md={4}>
                  <div className="pl-3">
                    <Button
                      color="inherit"
                      component={Link}
                      to='/about'
                      className=" px-4 py-2 text-capitalize">
                      ABOUT US
                    </Button>

                  </div>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Button
                      color="inherit"
                      component={Link}
                      to='/newsletter'
                      className=" px-4 py-2 text-capitalize">
                      NEWSLETTER
                    </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <div className="divider border-1 d-none d-md-block rounded-circle border-dark bg-dark opacity-2 mx-auto my-5 w-25" />
          <div className="text-center d-block text-black-50">
            Copyright &copy; {new Date().getFullYear()} Dawini High School
          </div>
        </Container>
      </div>
    </Fragment>
  );
}
