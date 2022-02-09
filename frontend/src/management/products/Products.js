import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import ManagementLayout from '../layout/ManagementLayout';
import VisibleProducts from './VisibleProducts';
import InvisibleProducts from './InVisibleProducts';
import {getProducts} from '../../actions/products';




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

const Products = (props) => {
  const [value, setValue] = useState(0)
  const { classes } = props;

  useEffect(() => {
    if(!props.fetched) {
        props.getProducts(props.token);
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
            <Tab label="VISIBLE PRODUCTS" />
            <Tab label="INVISIBLE PRODUCTS" />
          </Tabs>
        </AppBar>
        {value === 0 && <TabContainer><VisibleProducts getProducts={props.getProducts} records={props.records}/></TabContainer>}
        {value === 1 && <TabContainer><InvisibleProducts getProducts={props.getProducts} records={props.records}/></TabContainer>}

      </div>
    </ManagementLayout>
  );
}



const mapStateToProps = state => ({
    records: state.products.products,
    token: state.auth.token,

  });



const ProductsMapped = connect(
    mapStateToProps,
    {
      getProducts
    }
  )(Products);

export default withStyles(styles)(ProductsMapped);
