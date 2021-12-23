import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import HomeComponent from './homeComponent';
import { homeActions } from './redux/actions';
import { homeSelectors } from './redux/selectors';

function HomeContainer() {
  const bannerData = useSelector(homeSelectors.getBannerSelectors.selectBannerData);
  const categoriesData = useSelector(homeSelectors.getCategoriesSelectors.selectCategoriesData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(homeActions.getBannerAction.getBannerLoading());
    dispatch(homeActions.getCategoriesAction.getCategoriesLoading());
  }, [dispatch]);

  return (
    <>
      <HomeComponent bannerData={bannerData} categoriesData={categoriesData} />
    </>
  );
}

export default HomeContainer;
