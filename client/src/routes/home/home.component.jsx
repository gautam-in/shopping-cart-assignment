import { useState, useEffect } from 'react';

import { get } from '../../utils/apis';
import { selectCategories } from '../../store/categories/categories.selector';
import CategoryCard from '../../components/category-card/category-card.component';
import { HomeContainer } from './home.styles';
import Slider from '../../components/Slider/slider.component';
import { useSelector } from 'react-redux';

const Home = () => {
  const [banners, setBanners] = useState([]);

  const categories = useSelector(selectCategories);

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
