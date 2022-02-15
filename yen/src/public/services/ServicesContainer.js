import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Grid  from '@mui/material/Grid';
import Button  from '@mui/material/Button';
import Card  from '@mui/material/Card';
import { Toolbar } from 'primereact/toolbar';
import { Button as PrimeButton } from 'primereact/button';
import Paper from "@mui/material/Paper";
import { Dialog } from 'primereact/dialog';
import { useNavigate } from 'react-router-dom';
import Filter from './Filter';
import AOS from "aos";
import 'aos/dist/aos.css';
import EmptyView from './EmptyView';


const ServiceContainer = (props) => {
  const navigate = useNavigate();
  const {records} = props;
  const [services, setServices] = useState(records);
  const [filteredServices, setFilteredServices] = useState(records);
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedPrice, setSelectedPrice] = useState([1, 1000000]);
  const [resultsFound, setResultsFound] = useState(true);

  useEffect(() =>{
    AOS.init({duration : 3000})

  }, []);



  const handleClick = id =>{
      navigate(`/services/${id}`)
  }

  const handleChangePrice = (event, value) => {
    setSelectedPrice(value);
  };


  return(
    <Grid
      container
      spacing={4}
      data-aos="zoom-in-up"

    >
      <Grid
        item
        xs={12}
        sm={2}
        style={{paddingRight: '20px',}}
        data-aos="zoom-in-up"
      >
        <Filter
          services={services}
          setFilteredServices={setFilteredServices}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          selectedPrice={selectedPrice}
          changePrice={handleChangePrice}
          setResultsFound={setResultsFound}
        />
      </Grid>

      <Grid item xs={12} sm={10}>
        {resultsFound ?
            <Grid
              container
              spacing={4}
              style={{padding: '30px'}}
              data-aos="zoom-in-up"
            >
            {
              filteredServices.map((service) => {
                    return (

                          <Grid item xs={12} data-aos="flip-up" sm={6} md={4} key={service.id}>
                            <Card data-aos="flip-left" className="card-transparent bg-royal card-box-hover-rise mb-4">
                              <div className="card-img-wrapper">
                                <div className="card-badges card-badges-bottom">
                                  <div className="badge badge-warning badge-pill">${service.fee}</div>
                                </div>
                                <img
                                  data-aos="flip-right"
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
            : <EmptyView/>
          }
      </Grid>
    </Grid>

  );
};


export default ServiceContainer;
