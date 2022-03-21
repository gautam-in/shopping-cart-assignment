import React, { useEffect } from "react";
import CategoryBar from "../../Component/CategoryBar/categorybar-component";
import Carousal from "../../Component/OfferCarousal/offercarousal.component";
import "./home.styles.scss";

function Home(props) {
  const { setCategoryId, history, getCategory, category, getOffers } = props;
  const { categories, bannerData } = category;

  useEffect(() => {
    getCategory();
    getOffers();
  }, []);

  const onClickCategory = (e) => {
    setCategoryId(e);
    history.push("/product");
  };

  return (
    <div className="home-container">
      <Carousal offers={bannerData} />
      {categories &&
        categories.map((cate) => (
          <CategoryBar
            key={cate.id}
            className="category-container"
            imageURL={cate.imageUrl}
            name={cate.name}
            id={cate.id}
            desc={cate.description}
            onClick={() => onClickCategory(cate.id)}
          />
        ))}
    </div>
  );
}

export default Home;
