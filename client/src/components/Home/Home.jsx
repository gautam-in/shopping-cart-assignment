import CarouselSlider from '../Carousel/Carousel';
import Categories from '../Categories/Categories';
import styles from './Home.module.scss';
import useHomeData from './hooks';

const Home = () => {
  const { banners, categories } = useHomeData();
  return (
    <div className={styles['home-container']}>
      {banners.length > 0 && <CarouselSlider banners={banners} />}
      {categories.length > 0 && <Categories data={categories} />}
    </div>
  );
};

export default Home;
