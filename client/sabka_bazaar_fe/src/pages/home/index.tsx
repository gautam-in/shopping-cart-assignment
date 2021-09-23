import Loader from "components/atoms/loader/loader";
import { BannerList, CategoryList } from "models/home";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { bindActionCreators, Dispatch } from "redux";
import { IState } from "store/interfaces";
import CategoriesPage from "../../components/organisms/home/categoriesPage";
import OffersCarousel from "../../components/organisms/home/offersCarousel";
import "./home.scss";
import { HomeActions } from "./redux/actions/actions";
import { IHomeLoading } from "./redux/reducers/reducer";
import { HomeSelectors } from "./redux/selectors/selectors";

interface IProps {
  getBannersData: BannerList;
  getCategoriesData: CategoryList;
  loading: IHomeLoading;
  getBanners: Function;
  getCategories: Function;
}

function Index(props: IProps): React.ReactElement {
  const { getBannersData, getCategoriesData, loading, getBanners, getCategories } = props;
  let history = useHistory();

  useEffect(() => {
    if (getBannersData.banners.length === 0) getBanners();
  }, [getBannersData, getBanners]);

  useEffect(() => {
    if (getCategoriesData.categories.length === 0) getCategories();
  }, [getCategoriesData, getCategories]);

  return (
    <div className="home-page">
      {loading.getBanners || loading.getCategories ? (
        <Loader message="Loading" />
      ) : (
        <>
          <div className="offers-carousel">
            <OffersCarousel getBannersData={getBannersData} />
          </div>
          <div className="categories-page">
            <CategoriesPage getCategoriesData={getCategoriesData} history={history} />
          </div>
        </>
      )}
    </div>
  );
}

const mapStateToProps = (state: IState) => {
  return {
    getBannersData: HomeSelectors.selectBanners(state),
    getCategoriesData: HomeSelectors.selectCategories(state),
    loading: HomeSelectors.selectLoading(state)
  };
};
const mapDispatchToProps = (dispatch: Dispatch) => {
  return { ...bindActionCreators(HomeActions, dispatch) };
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
