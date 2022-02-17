import React from 'react';
import './styles.css';
import gifs from './empty.gif';

const EmptyView = () => (
  <div className='emptyView-wrap'>
    <img src={gifs} alt='' />
  </div>
);

export default EmptyView;
