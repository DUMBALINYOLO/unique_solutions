import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EmptyView from './EmptyView';
import FilterPanel from './FilterPanel';
import List from './List';
import SearchBar from './SearchBar';
import { dataList } from './constants';
import Corporate from '../../containers/Templates/Operate';
import {getProducts} from '../../actions/products';
import { connect } from 'react-redux';
import './styles.css';






const PublicProducts = () => {

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedRating, setSelectedRating] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState([1000, 5000]);
  const [list, setList] = useState([]);
  const [products, setProducts] = useState([]);

  const [cuisines, setCuisines] = useState([
    { id: 1, checked: false, label: 'American' },
    { id: 2, checked: false, label: 'Chinese' },
    { id: 3, checked: false, label: 'Italian' },
  ]);



  useEffect(() => {
   const fetchData = async () => {
       try {
           const res = await axios.get(`http://127.0.0.1:8000/api/products/products`);

           setList(res.data);
           setProducts(res.data);
           console.log('prodlist', list)
       }
       catch (err) {

       }
   }

       fetchData();
   }, []);




  const [resultsFound, setResultsFound] = useState(true);
  const [searchInput, setSearchInput] = useState('');

  const handleSelectCategory = (event, value) =>
    !value ? null : setSelectedCategory(value);

  const handleSelectRating = (event, value) =>
    !value ? null : setSelectedRating(value);

  const handleChangeChecked = (id) => {
    const cusinesStateList = cuisines;
    const changeCheckedCuisines = cusinesStateList.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setCuisines(changeCheckedCuisines);
  };

  const handleChangePrice = (event, value) => {
    setSelectedPrice(value);
  };




  const applyFilters = () => {
    let updatedList = dataList;
    console.log(updatedList)

    // Rating Filter
    if (selectedRating) {
      updatedList = updatedList.filter(
        (item) => parseInt(item.rating) === parseInt(selectedRating)
      );
    }

    // Category Filter
    if (selectedCategory) {
      updatedList = updatedList.filter(
        (item) => item.type === selectedCategory
      );
    }

    // Cuisine Filter
    const cuisinesChecked = cuisines
      .filter((item) => item.checked)
      .map((item) => item.label.toLowerCase());

    if (cuisinesChecked.length) {
      updatedList = updatedList.filter((item) =>
        cuisinesChecked.includes(item.cuisine)
      );
    }

    // Search Filter
    if (searchInput) {
      updatedList = updatedList.filter(
        (item) =>
          item.name.search(searchInput.toLowerCase().trim()) !==
          -1
      );
    }

    // Price Filter
    const minPrice = selectedPrice[0];
    const maxPrice = selectedPrice[1];

    updatedList = updatedList.filter(
      (item) => item.price >= minPrice && item.price <= maxPrice
    );

    setList(updatedList);

    !updatedList.length ? setResultsFound(false) : setResultsFound(true);
  };

  useEffect(() => {

    applyFilters();
  }, [selectedRating, selectedCategory, cuisines, searchInput, selectedPrice]);

  return (
    <Corporate>

      <div className='home'>
        {/* Search Bar */}
        <SearchBar
          value={searchInput}
          changeInput={(e) => setSearchInput(e.target.value)}
        />
        <div className='home_panelList-wrap'>
          {/* Filter Panel */}
          <div className='home_panel-wrap'>
            <FilterPanel
              selectedCategory={selectedCategory}
              selectCategory={handleSelectCategory}
              selectedRating={selectedRating}
              selectedPrice={selectedPrice}
              selectRating={handleSelectRating}
              cuisines={cuisines}
              changeChecked={handleChangeChecked}
              changePrice={handleChangePrice}
            />
          </div>
          {/* List & Empty View */}
          <div className='home_list-wrap'>
            {resultsFound ? <List list={list} /> : <EmptyView />}
          </div>
        </div>
      </div>
    </Corporate>
  );
};




export default PublicProducts;
