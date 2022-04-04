import { useState, useEffect } from 'react';
import axios from 'axios';

import { get } from '../../utils/apis';
import CategoryCard from '../../components/category-card/category-card.component';
import { HomeContainer } from './home.styles';
import Slider from '../../components/Slider/slider.component';

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    get('categories').then(({ data }) => {
      setCategories(data);
    });
  }, []);

  useEffect(() => {
    get('banners').then(({ data }) => {
      setBanners(data);
    });
  }, []);

  return (
    <HomeContainer className="home-container">
      <Slider banners={banners} />
      {categories.map((category, index) => {
        return <CategoryCard index={index} {...category} />;
      })}
    </HomeContainer>
  );
};

export default Home;
