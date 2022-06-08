import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateBanners } from "../../redux/banners/BannerActions";
import { updateCategories } from "../../redux/categories/CategoryActions";
import { Link } from "react-router-dom";
import LoadingScreen from "../loadingScreen/LoadingScreen";
import Carousel from "../Carousel/Carousel";
import "./HomePage.scss";

function HomePage() {
  const dispatch = useDispatch();
  const offerList = useSelector((state) => state.banners.data);
  const categoryList = useSelector((state) => state.categories.data);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (offerList.length === 0) {
      fetchOffers();
    }
    if (categoryList.length === 0) {
      fetchCategories();
    }
  }, []);

  const fetchOffers = async () => {
    setLoading(true);
    const offers = await fetch(`${process.env.REACT_APP_MAIN_URL}/offers`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (offers) {
      const data = await offers.json();
      dispatch(updateBanners(data));
    }
    setLoading(false);
  };

  const fetchCategories = async () => {
    const categories = await fetch(
      `${process.env.REACT_APP_MAIN_URL}/categories`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (categories) {
      const data = await categories.json();
      dispatch(updateCategories(data));
    }
  };

  const categoryListUI = useMemo(() => {
    const tempUI = categoryList?.map((category) => {
      const { imageUrl, key, name, description, id } = category;
      if (imageUrl) {
        return (
          <li className="home-category-list-item" key={id}>
            <img src={imageUrl} alt={`${key} category}`} />
            <div>
              <span className="home-category-list-item-name">{name}</span>
              <span className="home-category-list-item-desc">
                {description}
              </span>
              <span className="home-category-list-item-link">
                <Link to={`/products/${id}`}>{`Explore ${name}`}</Link>
              </span>
            </div>
          </li>
        );
      }
    });
    return tempUI;
  }, [categoryList]);

  return (
    <div className="home-category-container">
      {loading && <LoadingScreen />}
      {offerList.length > 0 && <Carousel data={offerList} />}
      {categoryList?.length > 0 && (
        <ul className="home-category-list">{categoryListUI}</ul>
      )}
    </div>
  );
}

export default HomePage;
