import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getBanner } from "../../Action/HomeBanner.js";
import { getCategory } from "../../Action/HomeCategory.js";
import "./index.scss";

const Home = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [activeIndex, setActiveIndex] = useState(0);

  const banner = useSelector((state) => state.banner.data);
  const Category = useSelector((state) => state.category.data);
  const banner_loading = useSelector((state) => state.banner.loading);
  const banner_error = useSelector((state) => state.banner.error);
  const Category_error = useSelector((state) => state.category.error);
  const Category_loading = useSelector((state) => state.category.loading);

  useEffect(() => {
    dispatch(getBanner());
  }, []);

  useEffect(() => {
    dispatch(getCategory());
  }, []);

  const handleExplore = (categoryId) => {
    history.push(`/products/${categoryId}`);
  };

  const onPrev = () => {
    setActiveIndex(activeIndex === 0 ? banner.length - 1 : activeIndex - 1);
  };

  const onNext = () => {
    setActiveIndex(activeIndex === banner.length - 1 ? 0 : activeIndex + 1);
  };

  return (
    <div className="home">
      {banner_loading || Category_loading ? (
        <div className="no-content">Loading...</div>
      ) : Category_error || banner_error ? (
        <div className="no-content">Some error occured!</div>
      ) : (
        <>
          {banner && (
            <div className="carousel">
              <button
                type="button"
                className="prev"
                onClick={onPrev}
                onKeyPress={onPrev}
                tabIndex={0}
              >
                PREV
              </button>
              <img
                className="banner-image"
                src={
                  banner_loading === false
                    ? banner[activeIndex].bannerImageUrl
                    : ""
                }
                alt={
                  banner_loading === false
                    ? banner[activeIndex].bannerImageAlt
                    : ""
                }
              />

              <div className="banner-dots">
                {banner.map((item) => (
                  <div
                    key={item.id}
                    className={
                      item.id === banner[activeIndex].id
                        ? "banner-dot active"
                        : "banner-dot"
                    }
                  />
                ))}
              </div>
              <button
                type="button"
                className="next"
                onClick={onNext}
                onKeyPress={onNext}
                tabIndex={0}
              >
                NEXT
              </button>
            </div>
          )}
          <ul className="category-list">
            {Category &&
              Category.map((category) => (
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
