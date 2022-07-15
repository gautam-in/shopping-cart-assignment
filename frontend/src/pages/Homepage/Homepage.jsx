import React from 'react';

import HomeBanner from '../../components/HomeBanner/HomeBanner';
import CategoryList from '../../components/CategoryList/CategoryList';

import './Homepage.scss';

const HomePage = () => {
  
  return (<main className='homepage'>
    <HomeBanner />
    <CategoryList />

  </main>)
};

export default HomePage;
