import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import ManagementLayout from '../layout/ManagementLayout';
import {getService, getServiceImages} from '../../actions/services';
import ServiceDetail from './ServiceDetail';
import Images from './Images';




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
  console.log(service)


  useEffect(() => {
    if(!props.fetched) {
        props.getService(props.match.params.id, props.token);
        props.getServiceImages(props.match.params.id, props.token);
    }
    console.log('mount it!');


  }, []);


  const handleChange = (event, value) => {
    setValue(value);
  };


  return (
    <ManagementLayout>
      <div className={classes.root}>
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
    </ManagementLayout>
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
