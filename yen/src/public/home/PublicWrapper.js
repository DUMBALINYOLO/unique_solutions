import React from 'react';
import Footer from '../footer/Footer';
import Header from '../header/Header';


const Home = (props) => {
  const {
    children,
  } = props;

  return(
    <>
      <Header/>
        <div>{children}</div>
      <Footer/>

    </>

  );

};

export default Home;
