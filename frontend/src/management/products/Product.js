import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import ManagementLayout from '../layout/ManagementLayout';
import {getProduct, getProductImages} from '../../actions/products';
import ProductDetail from './ProductDetail';
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


const Product = (props) => {
  const [value, setValue] = useState(0)
  const { classes, records, product, images, getProductImages } = props;
  console.log(product)


  useEffect(() => {
    if(!props.fetched) {
        props.getProduct(props.match.params.id, props.token);
        props.getProductImages(props.match.params.id, props.token);
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
            <Tab label="PRODUCT DETAIL" />
            <Tab label="PRODUCT IMAGES" />
          </Tabs>
        </AppBar>
        {value === 0 && <TabContainer><ProductDetail product={product}/></TabContainer>}
        {value === 1 && <TabContainer><Images images={images} getImages={getProductImages} product={product}/></TabContainer>}


      </div>
    </ManagementLayout>
  );
}



const mapStateToProps = state => ({
    product: state.products.product,
    images: state.products.productimages,
    token: state.auth.token,

  });



const ProductMapped = connect(
    mapStateToProps,
    {
      getProduct,
      getProductImages
    }
  )(Product);

export default withStyles(styles)(ProductMapped);
