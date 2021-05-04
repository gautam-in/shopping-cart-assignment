import React from 'react';

import Banners from '../../molecules/Banners';
import Categories from '../../molecules/Categories';

const Home = () => {
  return (
    <main className='container'>
      <Banners />
      <Categories />
    </main>
  );
};

export default Home;
