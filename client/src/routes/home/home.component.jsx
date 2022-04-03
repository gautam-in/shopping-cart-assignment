import { useState, useEffect } from 'react';
import axios from 'axios';

import { get } from '../../utils/apis';
import CategoryCard from '../../components/category-card/category-card.component';
import { HomeContainer } from './home.styles';

const Home = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    get('categories').then(({ data }) => {
      setCategories(data);
    });
  }, []);
  console.log({ categories });
  return (
    <HomeContainer className="home-container">
      <div>Slider</div>
      {categories.map((category, index) => {
        return <CategoryCard index={index} {...category} />;
      })}
    </HomeContainer>
  );
};

export default Home;
