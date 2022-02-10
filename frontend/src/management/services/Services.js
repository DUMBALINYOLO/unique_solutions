import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import ManagementLayout from '../layout/ManagementLayout';
import ServiceContainer from './ServiceContainer';
import {getServices} from '../../actions/services';




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

const Services = (props) => {
  const [value, setValue] = useState(0)
  const { classes, records } = props;
  const repairServices = records.filter((service) => service.category ==='REPAIR');
  const printingServices = records.filter((service) => service.category ==='PRINTING');
  const photocopyingServices = records.filter((service) => service.category ==='PHOTOCOPYING');
  const laminatingServices = records.filter((service) => service.category ==='LAMINATING');
  const listedServices = records.filter((service) => service.listed ==='YES');
  const unlistedServices = records.filter((service) => service.listed ==='NO');




  useEffect(() => {
    if(!props.fetched) {
        props.getServices(props.token);
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
            <Tab label="REPAIR" />
            <Tab label="PRINTING" />
            <Tab label="PHOTOCOPYING" />
            <Tab label="LAMINATING" />
            <Tab label="LISTED" />
            <Tab label="UNLISTED" />

          </Tabs>
        </AppBar>
        {value === 0 && <TabContainer><ServiceContainer getServices={props.getServices} records={repairServices}/></TabContainer>}
        {value === 1 && <TabContainer><ServiceContainer getServices={props.getServices} records={printingServices}/></TabContainer>}
        {value === 2 && <TabContainer><ServiceContainer getServices={props.getServices} records={photocopyingServices}/></TabContainer>}
        {value === 3 && <TabContainer><ServiceContainer getServices={props.getServices} records={laminatingServices}/></TabContainer>}
        {value === 4 && <TabContainer><ServiceContainer getServices={props.getServices} records={listedServices}/></TabContainer>}
        {value === 5 && <TabContainer><ServiceContainer getServices={props.getServices} records={unlistedServices}/></TabContainer>}
      </div>
    </ManagementLayout>
  );
}



const mapStateToProps = state => ({
    records: state.services.services,
    token: state.auth.token,

  });



const ServicesMapped = connect(
    mapStateToProps,
    {
      getServices
    }
  )(Services);

export default withStyles(styles)(ServicesMapped);
