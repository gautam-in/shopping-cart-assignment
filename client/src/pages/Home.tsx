import Banners from '../components/global/home/Banners';
import Categories from '../components/global/home/Categories';
import Pager from '../components/global/Pager';

export default function Home() {
  return (
    <Pager className="home">
      <Banners />
      <Categories />
    </Pager>
  );
}
