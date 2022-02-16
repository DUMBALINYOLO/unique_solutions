import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@mui/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import PublicWrapper from './PublicWrapper';
import AOS from "aos";
import 'aos/dist/aos.css';
import Products from './products/Products';
import Services from './services/Services';






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
    paddingTop: '40px',
    backgroundColor: theme.palette.background.paper,
  },
  tabs:{
    backgroundColor: theme.palette.background.paper
  }
});




const Invoices = (props) => {
  const [value, setValue] = useState(0)
  const { classes} = props;



  useEffect(() =>{
    AOS.init({duration : 2000})

  }, []);



  const handleChange = (event, value) => {
    setValue(value);
  };


  return (

        <PublicWrapper>
          <div
            data-aos="fade-right"
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
                className={classes.tabs}
              >
                <Tab label="PRODUCTS" />
                <Tab label="SERVICES" />

              </Tabs>
            </AppBar>
            {value === 0 && <TabContainer><Products /></TabContainer>}
            {value === 1 && <TabContainer><Services /></TabContainer>}

          </div>
        </PublicWrapper>
  );
}



export default withStyles(styles)(Invoices);
