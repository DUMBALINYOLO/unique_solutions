import React, {useState, useRef } from "react"
import { Toast } from 'primereact/toast';
import { useHistory } from 'react-router-dom';
import { Search } from "@material-ui/icons";
import SearchService from "./Search";
import ServiceCard from "./ServiceCard";
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
  TextField
} from '@material-ui/core';
import AddService from './AddService';




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





const Services = props => {

  const classes = useStyles();
  const [listView, setListView] = useState('grid')
  const history = useHistory();
  const toast = useRef(null);
  const { records} = props;
  const [serviceDialog, setServiceDialog] = useState(false);



  const openNew = () => {
    setServiceDialog(true);
  }

    const hideDialog = () => {
        setServiceDialog(false);
    }



  const handleSwitchView = (event, value) => {
    setListView(value)
  }

  const handleClick = id =>{
    history.push(`/management/services/${id}`)
  }



  return (
    <>

      <Paper className={classes.pageContent}>
        <Toast ref={toast} />
        <Toolbar>
            <TextField
                label="Search Service"
                value=''
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
        </Toolbar>

            <SearchService
                courseData={records}
                listView={listView}
                handleSwitchView={handleSwitchView}
              />

                <Dialog
                  visible={serviceDialog}
                  style={{ width: '800px' }}
                  header="IMAGE FORM"
                  modal
                  className="p-fluid"
                  onHide={hideDialog}
                  >
                    <AddService
                        getServices ={props.getServices}
                        setServiceDialog={setServiceDialog}
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
                  records.map((service) => {
                    return (
                      <Grid
                        item
                        md={listView === 'list' ? 12 : 3}
                        sm={listView === 'list' ? 12 : 6}
                        xs={12}
                        key={service.id}
                      >
                        <ServiceCard
                          list={listView === 'list'}
                          full_name={service.name}
                          short_name={service.category}
                          thumbnail={service.primary_image}
                          status={service.listed}
                          detailOpen={() => handleClick(service.id)}
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


export default Services;
