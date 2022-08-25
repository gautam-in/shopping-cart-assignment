import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getCarouselData, getCategoriesData } from "./store/actionCreators";
import { selectBanners, selectCategories } from "./store/selectors";
import { Slider } from "../../components/Slider/Slider";
import { CategoryList } from "../../components/Category/CategoryList";
const Home = () => {
  const banners = useSelector(selectBanners);
  const categories = useSelector(selectCategories);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCarouselData());
    dispatch(getCategoriesData());
  }, []);
  return (
    <>
      <Slider data={banners} />
      <CategoryList data={categories} />
    </>
  );
};

export default Home;
