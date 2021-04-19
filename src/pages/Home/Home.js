import React from 'react';
import Carousel from './Carousel';
import Categories from './Categories';
import './Home.scss';

const Home = () => {
  return (
    <div className='page-wrap'>
      <Carousel />
      <Categories />
    </div>
  );
};

export default Home;
