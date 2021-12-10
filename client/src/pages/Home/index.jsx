import React, { useEffect } from "react";
import { connect } from "react-redux";
import { initiateAddBanners } from "redux/modules/banners";

import OfferCarousel from "components/OfferCarousel";
import CategoryTile from "components/CategoryTile";

import "./Home.scss";

function Home({ categories = [], initiateAddBanners, banners }) {
  useEffect(() => {
    initiateAddBanners();
  }, []);

  return (
    <div>
      <OfferCarousel banners={banners} />
      {categories.map((category, index) => (
        <CategoryTile
          category={category}
          imageOrder={index % 2 !== 0 ? 1 : 0}
          key={category.id}
        />
      ))}
    </div>
  );
}

export default connect(
  ({ category: { categories }, banners: { banners } }) => ({
    categories,
    banners,
  }),
  { initiateAddBanners }
)(Home);
