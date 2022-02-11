import React from "react";
import SliderComponent from "../Slider/slider.component";
import CategoryBanner from "../Category/category-banner.component";
import '../Home/home.styles.scss';
import { BannerData } from '../../server/banners';
import { CategoriesData } from '../../server/categories';

function Home() {
  return (
    <div className="body-section">
      <SliderComponent banner={BannerData} />
      {CategoriesData.map(
        (item) =>
          item.enabled && <CategoryBanner category={item} key={item.key} />
      )}
    </div>
  );
}

export default Home;