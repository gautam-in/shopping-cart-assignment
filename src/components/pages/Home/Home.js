import React from 'react';

import Banners from '../../organisms/Banners';
import Categories from '../../organisms/Categories';

const Home = () => {
  return (
    <div className='container'>
      <Banners />
      <Categories />
    </div>
  );
};

export default Home;
