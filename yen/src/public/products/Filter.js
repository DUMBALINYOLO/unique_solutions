import React, {useEffect} from 'react';
import './styles.css';


const Filter = (props) => {
  const {
    products,
    setFilteredProducts,
    activeCategory,
    setActiveCategory,
  } = props;

  useEffect(() => {
    if (activeCategory === 'all'){
      setFilteredProducts(products);
      return;
    }

    const filtered = products.filter((product) => product.type===activeCategory)
    setFilteredProducts(filtered);

  }, [activeCategory]);

  return(
    <div className='filterContainer'>
      <button onClick={() => setActiveCategory('all')}>ALL</button>
      <button onClick={() => setActiveCategory('art')}>ART</button>
      <button onClick={() => setActiveCategory('automative')}>AUTOMATIVE</button>
      <button onClick={() => setActiveCategory('computer')}>COMPUTER</button>
      <button onClick={() => setActiveCategory('electronic')}>ELECTRONIC</button>
      <button onClick={() => setActiveCategory('fashion')}>FASHION</button>
      <button onClick={() => setActiveCategory('industrial_and_scientific')}>INDUSTRIAL & SCIENTIFIC</button>
      <button onClick={() => setActiveCategory('video_game')}>VIDEO GAME</button>
    </div>

  );

};


export default Filter;
