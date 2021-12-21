import { useEffect } from "react";
import HomeComponent from "./homeComponent";
import { useSelector, useDispatch } from "react-redux";
import { homeActions } from "./redux/actions";
import { homeSelectors } from "./redux/selectors";

function HomeContainer() {
  const bannerData = useSelector(
    homeSelectors.getBannerSelectors.selectBannerData
  );
  const categoriesData = useSelector(
    homeSelectors.getCategoriesSelectors.selectCategoriesData
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(homeActions.getBannerAction.getBannerLoading());
    dispatch(homeActions.getCategoriesAction.getCategoriesLoading());
  }, [dispatch]);

  return (
    <div style={{ height: "200vh" }}>
      <HomeComponent bannerData={bannerData} categoriesData={categoriesData} />
    </div>
  );
}

export default HomeContainer;
