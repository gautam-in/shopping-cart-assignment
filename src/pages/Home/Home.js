import React from 'react';

import Carousel from './Carousel';
import Categories from './Categories';

const Home = () => {
  return (
    <div className='page-wrap'>
      <div className='container'>
        <Carousel />
        <Categories />
      </div>
    </div>
  );
};

export default Home;
