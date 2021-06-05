import React from 'react';
const Banners = React.lazy(() => import('../organisms/Banners/Banners'));
const Categories = React.lazy(() => import('../organisms/Categories/Categories'));
const Home = () => {
  return (
    <>
      <Banners />
      <Categories />
    </>
  );
};

export default Home;
