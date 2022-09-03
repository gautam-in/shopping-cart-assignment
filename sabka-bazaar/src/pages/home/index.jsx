import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getCarouselData, getCategoriesData } from "./store/actions";
import {
  selectBanners,
  selectBannersError,
  selectCategories,
  selectCategoriesError,
  selectIsBannersLoading,
  selectIsCategoriesLoading,
} from "./store/selectors";
import { Slider } from "../../components/Slider/Slider";
import { CategoryList } from "../../components/Category/CategoryList";
import { Loader } from "../../components/Loader/Loader";
import { ApiError } from "../../ApiError/ApiError";
const Home = () => {
  const banners = useSelector(selectBanners);
  const categories = useSelector(selectCategories);
  const isCategoriesLoading = useSelector(selectIsCategoriesLoading);
  const isBannersLoading = useSelector(selectIsBannersLoading);
  const bannersError = useSelector(selectBannersError);
  const categoriesError = useSelector(selectCategoriesError);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCarouselData());
    dispatch(getCategoriesData());
  }, []);
  return isCategoriesLoading || isBannersLoading ? (
    <Loader />
  ) : bannersError || categoriesError ? (
    <ApiError errorMessage={bannersError || categoriesError} />
  ) : (
    <>
      <Slider data={banners} />
      <CategoryList data={categories} />
    </>
  );
};

export default Home;
