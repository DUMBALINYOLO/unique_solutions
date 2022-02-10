import React from 'react';
import './styles.css';

const ListItem = ({
  item: { primary_image, name, price, deliveryFee, serviceTime, rating },
}) => (
  <div className='listItem-wrap card-box-hover-rise'>
    <img src={primary_image} alt='' />
    <header>
      <h4>{name}</h4>
      <span>🌟{rating}</span>
    </header>
    <footer>
      <p>
        <b>{serviceTime}</b> <span> Delivery Fee ${deliveryFee}</span>
      </p>
      <p>
        <b>${price}</b>
      </p>
    </footer>
  </div>
);

export default ListItem;
