// import Banners from '../../components/banners';
import CategoryList from '../../components/category-list';
import HomeCarousel from '../../components/home-carousel';

const Home = () => {

  return (
    <div className='home-container'>
        <HomeCarousel/>
        <CategoryList />
    </div>
  );
}

export default Home;
