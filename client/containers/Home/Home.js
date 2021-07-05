import React, { useEffect } from "react";
import "./Home.scss";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchCategories } from "../../redux/categories/categoryActions";
import Carousel from "../../components/Carousel/Carousel";
import { fetchBanners } from "../../redux/banners/bannerActions";

const Home = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.data);
  const loading = useSelector((state) => state.categories.loading);
  const error = useSelector((state) => state.categories.error);
  const banners = useSelector((state) => state.banners.data);

  useEffect(() => {
    dispatch(fetchBanners());
    dispatch(fetchCategories());
  }, []);

  const handleExplore = (categoryId) => {
    history.push(`/products#${categoryId}`);
  };

  return (
    <div className="home">
      {loading ? (
        <div className="no-content">Loading...</div>
      ) : error ? (
        <div className="no-content">Some error occured!</div>
      ) : (
        <>
          {banners && <Carousel data={banners} />}
          <ul className="category-list">
            {categories.map((category) => (
              <li key={category.id} className="category">
                <div className="category-details">
                  <div className="category-title">{category.name}</div>
                  <div className="category-description">
                    {category.description}
                  </div>
                  <button
                    type="button"
                    className="category-explore-button"
                    onClick={() => handleExplore(category.id)}
                    tabIndex={0}
                    disabled={!category.enabled}
                    onKeyPress={() => handleExplore(category.id)}
                  >
                    Explore {category.name}
                  </button>
                </div>
                <div className="category-right">
                  <img
                    className="category-image"
                    src={category.imageUrl}
                    alt={category.name}
                    height="150"
                    width="200"
                  />
                </div>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default Home;
