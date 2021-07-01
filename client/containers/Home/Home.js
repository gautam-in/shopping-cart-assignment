import React, { useState, useEffect } from "react";
import "./Home.scss";
import { useHistory } from "react-router-dom";
import { CATEGORIES_URL, BANNERS_URL } from "../../constants";
import Carousel from "../../components/Carousel/Carousel";

const Home = () => {
  const history = useHistory();
  let [categories, setCategories] = useState(null);
  let [loading, setLoading] = useState(true);
  let [error, setError] = useState(null);
  let [banners, setBanners] = useState(null);

  useEffect(() => {
    fetch(CATEGORIES_URL)
      .then((response) => response.json())
      .then((data) => {
        setCategories(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
    fetch(BANNERS_URL)
      .then((response) => response.json())
      .then((data) => {
        setBanners(data);
      })
      .catch((err) => {
        setError(err);
      });
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
