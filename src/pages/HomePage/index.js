import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import _ from "lodash";

import { getBannerList } from "../../redux/actions/bannerListActions";
import { getCategoryList } from "../../redux/actions/categoryListActions";

import BannerCarousel from "../../components/BannerCarousel";
import CategoryCard from "../../components/CategoryCard";

const HomePage = () => {
  const dispatch = useDispatch();
  const bannerList = useSelector((state) => state.banner.bannerList);
  const categoryList = useSelector((state) => state.category.categoryList);

  useEffect(() => {
    dispatch(getBannerList());
    dispatch(getCategoryList());
  }, [dispatch]);
  return (
    <>
    <BannerCarousel banners={bannerList}/>
      {_.sortBy(categoryList, ["order"]).map((category) => {
        if (category.order > 0) {
          return <CategoryCard key={category.id} category={category} />;
        }
      })}
    </>
  );
};

export default HomePage;
