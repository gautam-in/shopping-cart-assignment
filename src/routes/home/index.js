// import Banners from '../../components/banners';
import CategoryList from '../../components/category-list';
import HomeCarousel from '../../components/home-carousel';
import { BannersProvider } from '../../contexts/banners.context';

const Home = () => {

  return (
    <div className='home-container'>
    
    <BannersProvider>
        <HomeCarousel/>
    </BannersProvider>
    <CategoryList />
    </div>
  );
}

export default Home;
