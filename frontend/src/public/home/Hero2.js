import React, { Fragment, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Grid,
  Container,
  Card,
  CardContent,
  Button,
  Tooltip
} from '@material-ui/core';

import AddCircleTwoToneIcon from '@material-ui/icons/AddCircleTwoTone';

import svgImage2 from '../../assets/images/illustrations/monitor.svg';

import hero6 from './images/gosso.jpg';
import AOS from "aos";
import 'aos/dist/aos.css';


export default function LivePreviewExample() {
  useEffect(() =>{
    AOS.init({duration : 2000})

  }, []);


  return (
    <Fragment>
      <div className="hero-wrapper bg-composed-wrapper bg-white" data-aos="zoom-in-up">
        <div className="flex-grow-1 w-100 d-flex align-items-center">
          <div
            className="bg-composed-wrapper--image bg-composed-filter-rm opacity-9"
            style={{ backgroundImage: 'url(' + hero6 + ')' }}
          />
          <div className="bg-composed-wrapper--content py-5">
            <Container className="py-5">
              <Grid container spacing={4}>
                <Grid item xs={12} lg={6}>
                  <div className="d-flex align-items-center">
                    <span className="px-4 h-auto py-1 badge badge-success badge-pill">
                      THE FLEXIBLE WAY IS THE BEST WAY
                    </span>
                    <Tooltip
                      arrow
                      placement="right"
                      title="More info placeholder!">
                      <span className="text-black-50 pl-3">
                        <FontAwesomeIcon icon={['far', 'question-circle']} />
                      </span>

                    </Tooltip>
                    <span className="px-4 h-auto py-1 badge badge-success badge-pill">
                      THE BEST WAY IS THE FLEXIBLE WAY
                    </span>

                  </div>
                  <div className="text-black mt-3">
                    <h1 className="display-2 mb-3 font-weight-bold">
                      FLEXIBLE MEASUREMENTS & CONTROL SYSTEMS
                    </h1>
                    <p className="font-size-lg " style={{color: '#FFC300'}}>
                        HOME FOR MORDENIZED INDUSTRIAL TECHNOLOGIES
                        & FLEXIBLE SOLUTIONS TO YOUR PROBLEMS

                    </p>
                    <div className="divider border-2 border-dark my-5 border-light opacity-2 rounded-circle w-25" />
                    <div>
                      <Button
                        size="large"
                        variant="contained"
                        color="secondary"
                        className="mr-3">
                        <span className="btn-wrapper--label">
                          GET IN TOUCH
                        </span>
                        <span className="btn-wrapper--icon">
                          <FontAwesomeIcon icon={['fas', 'arrow-right']} />
                        </span>
                      </Button>
                      <Button size="large" variant="outlined" color="secondary">
                        <span>WE SHALL RESPOND</span>
                      </Button>
                    </div>
                  </div>
                </Grid>
                <Grid
                  item
                  xs={12}
                  lg={6}
                  className="px-0 d-none d-md-flex align-items-center">
                  <img
                    alt="..."
                    className="w-100 mx-auto d-block img-fluid"
                    src={svgImage2}
                  />
                </Grid>
              </Grid>
            </Container>
          </div>
        </div>
        <div className="hero-footer pt-5">
          <Container>
            <Grid container spacing={4}>
              <Grid item xs={12} md={4}>
                <Card className="card-box-hover-rise mb-4">
                  <CardContent className="p-3">
                    <div className="bg-deep-blue text-center text-white display-4 d-60 rounded-circle">
                      <AddCircleTwoToneIcon />
                    </div>
                    <h3 className="heading-6 mt-4 mb-3 font-weight-bold">
                      OUR MISSION
                    </h3>
                    <p className="card-text mb-3">
                      These matters to this principle of selection: he rejects
                      pleasures to secure other.
                    </p>
                    <Button color="primary" title="Learn more">
                      <span>THE FLEXIBLE WAY</span>
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={4}>
                <Card className="card-box-hover-rise mb-4">
                  <CardContent className="p-3">
                    <div className="bg-sunny-morning text-center text-white display-4 d-60 rounded-circle">
                      <FontAwesomeIcon icon={['fas', 'lemon']} />
                    </div>
                    <h3 className="heading-6 mt-4 mb-3 font-weight-bold">
                      OUR VISION
                    </h3>
                    <p className="card-text mb-3">
                      Greater pleasures, or else he endures pains to avoid worse
                      pains. But I must explain.
                    </p>
                    <Button color="primary" title="Learn more">
                      <span>THE FLEXIBLE WAY</span>
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={4}>
                <Card className="card-box-hover-rise mb-4">
                  <CardContent className="p-3">
                    <div className="bg-grow-early text-center text-white display-4 d-60 rounded-circle">
                      <FontAwesomeIcon icon={['far', 'keyboard']} />
                    </div>
                    <h3 className="heading-6 mt-4 mb-3 font-weight-bold">
                      OUR GOAL
                    </h3>
                    <p className="card-text mb-3">
                      To you how all this mistaken idea of denouncing pleasure
                      and praising.
                    </p>
                    <Button color="primary" title="Learn more">
                      <span>THE FLEXIBLE WAY</span>
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </div>
      </div>
    </Fragment>
  );
}
