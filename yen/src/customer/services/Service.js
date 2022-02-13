import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@mui/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { connect } from 'react-redux';
import Typography from '@mui/material/Typography';
import CustomerWrapper from '../home/CustomerWrapper';
import {getService, getServiceImages} from '../../actions/services';
import ServiceDetail from './ServiceDetail';
import Images from './Images';
import { useParams } from "react-router-dom";




function TabContainer(props) {
  const { children } = props;
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};


const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
});


const Service = (props) => {
  const [value, setValue] = useState(0)
  const { classes, records, service, images, getServiceImages } = props;
  let {id } = useParams()


  useEffect(() => {
    if(!props.fetched) {
        props.getService(id, props.token);
        props.getServiceImages(id, props.token);
    }
    console.log('mount it!');


  }, []);


  const handleChange = (event, value) => {
    setValue(value);
  };


  return (
    <CustomerWrapper>
      <div
        className={classes.root}
        style={{paddingTop: '100px', paddingBottom: '30px', paddingLeft: '30px', paddingRight: '30px',}}
      >
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={handleChange}
            variant="fullWidth"
            scrollButtons="on"
            indicatorColor="primary"
            textColor="secondary"
            className=' card-box-hover-rise'

          >
            <Tab label="SERVICE DETAIL" />
            <Tab label="SERVICE IMAGES" />
          </Tabs>
        </AppBar>
        {value === 0 && <TabContainer><ServiceDetail service={service}/></TabContainer>}
        {value === 1 && <TabContainer><Images images={images} getImages={getServiceImages} service={service}/></TabContainer>}


      </div>
    </CustomerWrapper>
  );
}



const mapStateToProps = state => ({
    service: state.services.service,
    images: state.services.serviceimages,
    token: state.auth.token,

  });



const ServiceMapped = connect(
    mapStateToProps,
    {
      getService,
      getServiceImages
    }
  )(Service);

export default withStyles(styles)(ServiceMapped);
