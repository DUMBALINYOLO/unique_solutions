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
    products,
    setFilteredProducts,
    activeCategory,
    setActiveCategory,
    selectedPrice,
    changePrice,
    setResultsFound
  } = props;

  useEffect(() => {
    if (activeCategory === 'all'){
      setFilteredProducts(products);
      return;
    }

    const filtered = products.filter((product) => product.type===activeCategory)
    setFilteredProducts(filtered);

    !filtered.length ? setResultsFound(false) : setResultsFound(true);


  }, [activeCategory]);


  useEffect(() => {

    const minPrice = selectedPrice[0];
    const maxPrice = selectedPrice[1];
    const updatedList = products.filter(
      (item) => item.price >= minPrice && item.price <= maxPrice
    );

    console.log(updatedList)
    setFilteredProducts(updatedList);
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
        <MenuItem onClick={() => setActiveCategory('art')}>
          <ListItemIcon >
            <FcGenealogy  />
          </ListItemIcon>

          <h4 style={{fontSize : '10px',}}>ART</h4>
        </MenuItem>
        <MenuItem onClick={() => setActiveCategory('automative')}>
          <ListItemIcon >
            <FcAutomotive  />
          </ListItemIcon>

          <h4 style={{fontSize : '10px',}}>AUTOMATIVE</h4>
        </MenuItem>
        <MenuItem onClick={() => setActiveCategory('computer')}>
          <ListItemIcon >
            <FiAirplay  />
          </ListItemIcon>

          <h4 style={{fontSize : '10px',}}>COMPUTER</h4>
        </MenuItem>
        <MenuItem onClick={() => setActiveCategory('electronic')}>
          <ListItemIcon >
            <FcElectronics  />
          </ListItemIcon>

          <h4 style={{fontSize : '10px',}}>ELECTRONIC</h4>
        </MenuItem>
        <MenuItem onClick={() => setActiveCategory('fashion')}>
          <ListItemIcon >
            <FcVoicemail  />
          </ListItemIcon>

          <h4 style={{fontSize : '10px',}}>FASHION</h4>
        </MenuItem>
        <MenuItem onClick={() => setActiveCategory('industrial_and_scientific')}>
          <ListItemIcon >
            <FcScatterPlot />
          </ListItemIcon>
          <h4 style={{fontSize : '10px',}}>INDUSTRIAL & SCIENTIFIC</h4>

        </MenuItem>
        <MenuItem onClick={() => setActiveCategory('video_game')}>
          <ListItemIcon >
            <FcCamcorderPro  />
          </ListItemIcon>
          <h4 style={{fontSize : '10px',}}>VIDEO GAME</h4>

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
