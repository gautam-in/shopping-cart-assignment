import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Carousel from "../../components/UI/Carousel/Carousel";
import Category from "../../components/UI/Category/Category";
import { getBannersAction } from "../../store/action";


function Home(props) {
  const dispatch = useDispatch()
  const banners = useSelector(state => state.banners)
  const { categories } = props;
  React.useEffect(() => {
    dispatch(getBannersAction());
  }, []);

  return (
    banners.length > 0 && (
      <main data-test="component-home">
        <Carousel banners={banners} />
        <Category categories={categories} />
      </main>
    )
  );
}

export default Home;
