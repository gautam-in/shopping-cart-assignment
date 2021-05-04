import React from 'react';

import Banners from '../../molecules/Banners';
import Categories from '../../molecules/Categories';

const Home = () => {
  return (
    <div className='container'>
      <Banners />
      <Categories />
    </div>
  );
};

export default Home;
