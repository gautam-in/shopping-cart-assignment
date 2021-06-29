import _ from "lodash";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

const BannerCarousel = React.lazy(() =>
  import(
    /* webpackChunkName: "HomePageBannerCarouselComponent" */ "../../components/BannerCarousel"
  )
);
const CategoryCard = React.lazy(() =>
  import(
    /* webpackChunkName: "HomePageCategoryCardComponent" */ "../../components/CategoryCard"
  )
);

import { getBannerList } from "../../redux/actions/bannerListActions";
import { getCategoryList } from "../../redux/actions/categoryListActions";

const HomePage = () => {
  const dispatch = useDispatch();
  const bannerList = useSelector((state) => state.banner.bannerList);
  const categoryList = useSelector((state) => state.category.categoryList);
  useEffect(() => {
    dispatch(getBannerList());
    dispatch(getCategoryList());
  }, [dispatch]);
  return (
    <section className="homepage-section">
      <BannerCarousel banners={bannerList} />
      {_.sortBy(categoryList, ["order"]).map((category) => {
        if (category.enabled) {
          return <CategoryCard key={category.id} category={category} />;
        }
      })}
    </section>
  );
};

export default HomePage;
