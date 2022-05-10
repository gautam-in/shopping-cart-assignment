import { useEffect, memo } from "react";
import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "@coreui/coreui/dist/css/coreui.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

import "./Home.css";
import {
  fetchBanners,
  fetchCategories,
  setSelectedCategory,
} from "../../reducers/productsReducer";
import CategoryBanner from "../../components/CategoryBanner";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const banners = useSelector((state) => state.productsReducer.banners);
  const categories = useSelector((state) => state.productsReducer.categories);

  useEffect(() => {
    dispatch(fetchBanners());
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <div id="homeContainer">
      <CCarousel controls indicators dark className="shadow">
        {banners?.map((item, index) => (
          <CCarouselItem key={index.toString()}>
            <CImage
              src={item?.bannerImageUrl}
              alt={item.bannerImageAlt}
              className="carouselImg"
            />
          </CCarouselItem>
        ))}
      </CCarousel>
      {categories
        .filter((item) => item.enabled)
        .map((item) => (
          <CategoryBanner
            category={item}
            openCategory={() => {
              dispatch(setSelectedCategory(item?.id));
              navigate("/products");
            }}
          />
        ))}
    </div>
  );
};

export default memo(Home);
