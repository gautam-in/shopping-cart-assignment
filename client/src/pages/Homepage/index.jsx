import React, { useEffect, useState } from 'react';

import Banner from '../../components/Banner';
import Explore from '../../components/Explore';
import { StyledHomepage } from './Homepage.styled';
import { getCategories } from '../../services/ApiService';
import { unwrapResult } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

const Homepage = () => {
  const dispatch = useDispatch();
  const [homePageCategories, setHomePageCategories] = useState([]);

  useEffect(() => {
    dispatch(getCategories())
      .then(unwrapResult)
      .then((categoryData) => {
        const menuList = categoryData?.filter((menuItem) => menuItem.order > 0);
        setHomePageCategories(menuList);
      })
      .catch((error) => error);
  }, [dispatch]);

  return (
    <StyledHomepage>
      <Banner />
      <main>
        {homePageCategories.map((homepage_category) => (
          <Explore
            isEnabled={homepage_category.enabled}
            key={homepage_category.id}
            exploreCategoryClass={homepage_category.key}
            categorySrc={homepage_category.imageUrl}
            categoryTitle={homepage_category.name}
            categoryInfo={homepage_category.description}
            categoryCTA={`Explore ${homepage_category.key}`}
            categoryId={homepage_category.id}
            categoryOrder={homepage_category.order}
          />
        ))}
      </main>
    </StyledHomepage>
  );
};

export default Homepage;
