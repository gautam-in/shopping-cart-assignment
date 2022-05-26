import { fetchBanners } from './homeSlice'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from "react";
import Carousel from '../../components/carousel'
import Categories from '../../components/categories'
function Home(props) {
  const dispatch = useDispatch()
  const bannerList = useSelector(state => state.homeReducer.banners);
  useEffect(() => {
    dispatch(fetchBanners())
  }, [])
  return (
    <>
      <div className="fluid_container">
        <Carousel {...{bannerList}}/>
        <Categories />
      </div>
    </>
  );
}

export default Home;
