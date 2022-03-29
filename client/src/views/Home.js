// react
import React, { useEffect, useState } from 'react';

// components
import Carousel, { CarouselItem } from '../components/general/Carousel';
import Categories from '../components/Home/Categories';

const Home = () => {
  // states
  const [bannersData, setBannersData] = useState([]);
  const [categoriesData, setCategoriesData] = useState([]);

  // api calls
  const fetchBanners = () => {
    fetch('http://localhost:8000/api/banners')
      .then((response) => response.json())
      .then((response) => {
        setBannersData(response);
      })
      .catch((err) => console.error(err));
  };

  const fetchCategories = () => {
    fetch('http://localhost:8000/api/categories')
      .then((response) => response.json())
      .then((response) => processAndSetCategoriesDataToState(response))
      .catch((err) => console.error(err));
  };

  const processAndSetCategoriesDataToState = (data) => {
    const visibleCategoriesInOrder = [];
    data.forEach((e) => {
      if (e.order > 0) {
        visibleCategoriesInOrder[e.order] = e;
      }
    });
    setCategoriesData(visibleCategoriesInOrder);
  };

  // call apis at page load
  useEffect(() => {
    fetchBanners();
    fetchCategories();
  }, []);

  return (
    <div className="home">
      <Carousel>
        {bannersData?.map((e, index) => (
          <CarouselItem key={index}>
            <img src={e.bannerImageUrl} alt={e.bannerImageAlt} />
          </CarouselItem>
        ))}
      </Carousel>
      <Categories categoriesData={categoriesData} />
    </div>
  );
};

export default Home;
