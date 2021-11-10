import React from 'react';

import Layout from '../../components/Layout';
import Carousel from './Carousel';
import CategoryList from './CategoryList';

const Home = () => {
    
  return ( 
    <Layout title="Home" description="This is the Home page" >
      <div>
        <Carousel />
        <CategoryList />
      </div>
    </Layout>
  );
};
 
export default Home;