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


const ProductContainer = (props) => {
  const navigate = useNavigate();
  const {records} = props;
  const [products, setProducts] = useState(records);
  const [filteredProducts, setFilteredProducts] = useState(records);
  const [activeCategory, setActiveCategory] = useState(0);


  const handleClick = id =>{
      navigate(`/products/${id}`)
  }


  return(
    <>
      <Filter
        products={products}
        setFilteredProducts={setFilteredProducts}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      <Grid
        container
        spacing={4}
          style={{paddingTop: '40px'}}
      >
        {
          filteredProducts.map((product) => {
            return (
                <Grid item xs={12} sm={6} md={4} key={product.id}>
                  <Card className="card-transparent bg-royal card-box-hover-rise mb-4">
                    <div className="card-img-wrapper">
                      <div className="card-badges card-badges-bottom">
                        <div className="badge badge-warning badge-pill">${product.price}</div>
                      </div>
                      <img
                        src={product.primary_image}
                        className="card-img-top rounded"
                        alt="..."
                        style={{height: '250px'}}
                      />
                    </div>
                    <div className="card-body text-center">
                      <h5 className="card-title font-weight-bold font-size-lg">
                        {product.name}
                      </h5>
                      <p className="card-text">
                        {product.type}
                      </p>
                      <Button
                        size="small"
                        variant="outlined"
                        color="primary"
                        className="mt-1"
                        onClick={() => handleClick(product.id)}
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
    </>

  );
};


export default ProductContainer;
