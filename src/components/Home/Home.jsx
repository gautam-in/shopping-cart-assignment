import { useEffect, useState } from 'react';
import CarouselComp from 'src/components/Carousel/Carousel';
import Header from 'src/components/Header/Header';
import Categories from 'src/components/Categories/Categories';
import { apiService } from 'src/utils/service';
import './Home.css';
import Footer from '../Footer/Footer';

const Home = () => {
  const [banners, setBanners] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    apiService('banners')
      .then((res) => setBanners(res))
      .catch((err) => console.error(err));
    apiService('categories')
      .then((res) => {
        res = res
          .sort((a, b) => a.order - b.order)
          .filter((x) => x.order !== -1);
        setCategories(res);
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <>
      <CarouselComp banners={banners} />
      {categories.map((category, index) => (
        <Categories category={category} index={index} />
      ))}
    </>
  );
};

export default Home;
