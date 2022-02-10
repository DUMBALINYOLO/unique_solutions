import React from 'react';
import ListItem from './ListItem';
import './styles.css';

const List = (props) => {
  console.log(props)
  
  return (

    <div className='list-wrap'>
      {props.list.map((item) => (
        <ListItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default List;
