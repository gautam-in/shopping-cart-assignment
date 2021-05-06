import React from 'react';

import Banners from '../../organisms/Banners';
import Categories from '../../organisms/Categories';

const Home = () => {
  return (
    <main className='container'>
      <Banners />
      <Categories />
    </main>
  );
};

export default Home;
