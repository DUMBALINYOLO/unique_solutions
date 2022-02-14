import React, {useEffect} from 'react';
import './styles.css';
import { Button } from 'primereact/button';
import ExitToApp from '@mui/icons-material/ExitToApp';
import ListItemText from '@mui/material/ListItemText';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import {
  BsFillBasketFill,
  BsFillEaselFill
} from "react-icons/bs";
import {
  GiAbstract088
} from "react-icons/gi";
import {
  FiAirplay,
  FiCommand
} from "react-icons/fi";
import {
  FcAutomotive,
  FcElectronics,
  FcVoicemail,
  FcCamcorderPro,
  FcScatterPlot,
  FcRadarPlot,
  FcGenealogy
} from "react-icons/fc";

import PriceFilter from "./PriceFilter";




const Filter = (props) => {
  const {
    services,
    setFilteredServices,
    activeCategory,
    setActiveCategory,
    selectedPrice,
    changePrice,
    setResultsFound
  } = props;

  useEffect(() => {
    if (activeCategory === 'all'){
      setFilteredServices(services);
      return;
    }

    const filtered = services.filter((service) => service.category ===activeCategory)
    setFilteredServices(filtered);

    !filtered.length ? setResultsFound(false) : setResultsFound(true);


  }, [activeCategory]);


  useEffect(() => {

    const minPrice = selectedPrice[0];
    const maxPrice = selectedPrice[1];
    const updatedList = services.filter(
      (item) => item.fee >= minPrice && item.fee <= maxPrice
    );

    console.log(updatedList)
    setFilteredServices(updatedList);
    !updatedList.length ? setResultsFound(false) : setResultsFound(true);


  }, [selectedPrice]);




  return(
    <>
      <div className='filterContainer'>
        <div style={{padding: '5px'}}>
          <Button label="FILTER WITH CATEGORIES" className="p-button-info" />
        </div>
        <MenuItem onClick={() => setActiveCategory('all')}>
          <ListItemIcon >
            <FcRadarPlot />
          </ListItemIcon>

          <h4 style={{fontSize : '10px',}}>ALL</h4>
        </MenuItem>
        <MenuItem onClick={() => setActiveCategory('REPAIR')}>
          <ListItemIcon >
            <FcGenealogy  />
          </ListItemIcon>

          <h4 style={{fontSize : '10px',}}>REPAIR</h4>
        </MenuItem>
        <MenuItem onClick={() => setActiveCategory('PRINTING')}>
          <ListItemIcon >
            <FcAutomotive  />
          </ListItemIcon>

          <h4 style={{fontSize : '10px',}}>PRINTING</h4>
        </MenuItem>
        <MenuItem onClick={() => setActiveCategory('PHOTOCOPYING')}>
          <ListItemIcon >
            <FiAirplay  />
          </ListItemIcon>

          <h4 style={{fontSize : '10px',}}>PHOTOCOPYING</h4>
        </MenuItem>
        <MenuItem onClick={() => setActiveCategory('LAMINATING')}>
          <ListItemIcon >
            <FcElectronics  />
          </ListItemIcon>

          <h4 style={{fontSize : '10px',}}>LAMINATING</h4>
        </MenuItem>
        <div style={{padding: '5px'}}>
          <Button label="FILTER WITH PRICE" className="p-button-info" />
        </div>
      </div>
      <div style={{padding: '30px'}}>
        <PriceFilter value={selectedPrice} changePrice={changePrice} />
      </div>
    </>

  );

};


export default Filter;
