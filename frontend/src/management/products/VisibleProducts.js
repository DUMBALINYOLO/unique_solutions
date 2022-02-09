import React, {useState, useRef } from "react"
import { Toast } from 'primereact/toast';
import { useHistory } from 'react-router-dom';
import { Search } from "@material-ui/icons";
import SearchProduct from "./Search";
import ProductCard from "./ProductCard";
import { Dialog } from 'primereact/dialog';
import {
  Grid,
  Box,
  Typography,
  Tabs,
  Tab,
  Card,
  CardContent,
  Button,
  Paper,
  Toolbar,
  makeStyles,
  InputAdornment,
} from '@material-ui/core';
import AddProduct from './AddProduct';
import TextField from '@mui/material/TextField';



const useStyles = makeStyles(theme => ({
  pageContent: {
      margin: theme.spacing(5),
      padding: theme.spacing(3)
  },
  searchInput: {
      width: '75%'
  },
  newButton: {
      position: 'absolute',
      right: '10px'
  }
}))





const Products = props => {

  const classes = useStyles();
  const [listView, setListView] = useState('grid')
  const history = useHistory();
  const toast = useRef(null);
  const { records} = props;
  const [productDialog, setProductDialog] = useState(false);



  const openNew = () => {
    setProductDialog(true);
    }

    const hideDialog = () => {
        setProductDialog(false);
    }






  const handleSwitchView = (event, value) => {
    setListView(value)
  }

  const handleClick = id =>{
    history.push(`/managementdashboard/products/${id}`)
  }



  return (
    <>

      <Paper className={classes.pageContent}>
        <Toast ref={toast} />
        <Toolbar>
            <TextField
                label="Search Finished Course"
                value={query}
                className={classes.searchInput}
                InputProps={{
                    startAdornment: (<InputAdornment position="start">
                        <Search />
                    </InputAdornment>)
                }}
            />
            <Button
              size="small"
              variant="contained"
              onClick={openNew}
              color="primary">
              ADD NEW PRODUCT
            </Button>
            />
        </Toolbar>

            <SearchProduct
                courseData={records}
                listView={listView}
                handleSwitchView={handleSwitchView}
              />

                <Dialog
                  visible={productDialog}
                  style={{ width: '800px' }}
                  header="IMAGE FORM"
                  modal
                  className="p-fluid"
                  onHide={hideDialog}
                  >
                    <AddProduct
                        getProducts ={props.getProducts}
                        setProductDialog={setProductDialog}
                    />
              </Dialog>


              <Grid
                container
                alignItems="flex-start"
                justify="flex-start"
                direction="row"
                spacing={3}
              >
                {
                  records.map((product) => {
                    return (
                      <Grid
                        item
                        md={listView === 'list' ? 12 : 3}
                        sm={listView === 'list' ? 12 : 6}
                        xs={12}
                        key={product.id}
                      >
                        <ProductCard
                          list={listView === 'list'}
                          full_name={product.name}
                          short_name={product.visibility}
                          thumbnail={product.primary_image}
                          status={product.digital}
                          detailOpen={() => handleClick(product.id)}
                        />
                      </Grid>
                    );
                  })
                }
              </Grid>
        </Paper>

    </>
  );
};


export default Products;
