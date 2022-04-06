import { useState, useEffect } from 'react';

import { selectCategories } from '../../store/categories/categories.selector';
import CategoryCard from '../../components/category-card/category-card.component';
import { HomeContainer } from './home.styles';
import Slider from '../../components/Slider/slider.component';
import { useSelector } from 'react-redux';
import ApiRequestService from './../../services/api.service';

const Home = () => {
  const [banners, setBanners] = useState([]);

  const categories = useSelector(selectCategories);

  const fetchBanners = async () => {
    const { data } = await ApiRequestService.getApi('banners');
    setBanners(data);
  };

  useEffect(() => {
    fetchBanners();
  }, []);
  return (
    <HomeContainer className="home-container">
      <Slider banners={banners} />
      {categories.map((category, index) => (
        <CategoryCard index={index} {...category} />
      ))}
    </HomeContainer>
  );
};

export default Home;
