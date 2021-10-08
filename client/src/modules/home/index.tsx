import Loader from "components/atoms/loader/loader";
import OffersCarousel from "components/molecules/carousel/carousel";
import CategoriesComponent from "components/organisms/home/categoriesComponent";
import { useEffect, ReactElement } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { IState } from "store/interfaces";
import { HomeActions } from "./redux/actions/actions";

const Home = (): ReactElement => {
  let history = useHistory();
  const dispatch = useDispatch();
  const getBannersData = useSelector((state: IState) => state.home.getBannersData);
  const getCategoriesData = useSelector((state: IState) => state.home.getCategoriesData);
  const loading = useSelector((state: IState) => state.home.loading);

  useEffect(() => {
    if (getBannersData.banners.length === 0) dispatch(HomeActions.getBanners());
  }, [getBannersData, dispatch]);

  useEffect(() => {
    if (getCategoriesData.categories.length === 0) dispatch(HomeActions.getCategories());
  }, [getCategoriesData, dispatch]);

  return (
    <div className="home-page">
      {loading.getBanners || loading.getCategories ? (
        <Loader />
      ) : (
        <>
          <div className="offers-carousel">
            <OffersCarousel getBannersData={getBannersData} />
          </div>
          <div className="categories-page">
            <CategoriesComponent getCategoriesData={getCategoriesData} history={history} />
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
