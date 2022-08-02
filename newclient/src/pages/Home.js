import React, { useEffect, useState } from "react";
import "./Home.css";
import axios from "axios";
import Dots from "react-carousel-dots";
/*rafce*/
const Home = () => {
  const [banners, setBanners] = useState([]);
  const [bannerSpinner, setBannerSpinner] = useState(true);
  const [categories, setCategories] = useState([]);
  const [categorySpinner, setCategeoriesSpinner] = useState(true);
  const [current, setCurrent] = useState(0);
  const length = banners.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  //Function to fetch banners
  async function getBanners() {
    setBannerSpinner(true);
    await axios
      .get("http://localhost:5000/banners")
      .then((response) => {
        if (response.status === 200) {
          setBannerSpinner(false);
          setBanners(response.data);
        }
      })
      .catch((error) => {
        if (error.response !== undefined) {
          if (error.response.status === 404) {
            console.log(error.response);
          }
        }
      });
  }

  //Function to fetch categories
  async function getCategories() {
    setCategeoriesSpinner(true);
    await axios
      .get("http://localhost:5000/categories")
      .then((response) => {
        if (response.status === 200) {
          setCategeoriesSpinner(false);
          setCategories(response.data);
        }
      })
      .catch((error) => {
        if (error.response !== undefined) {
          if (error.response.status === 404) {
            console.log(error.response);
          }
        }
      });
  }
  useEffect(() => {
    getBanners();
    getCategories();
  }, []);

  return (
    <>
      <div className="slider">
        <button className="left-arrow" onClick={prevSlide}>
          PREV
        </button>
        <button className="right-arrow" onClick={nextSlide}>
          NEXT
        </button>
        {banners.map((banner, index) => {
          return (
            <div
              className={index === current ? "slide active" : "slide"}
              key={index}
            >
              {index === current && (
                <img
                  src={banner.bannerImageUrl}
                  alt={banner.bannerImageAlt}
                  className="image"
                />
              )}
            </div>
          );
        })}
        <div className="dots">
          <Dots length={length} active={current} />
        </div>
      </div>

      <div className="outer">
        {categories.map((category) => {
          return (
            <div className="inner">
              <div className="category">
                <img
                  src={category.imageURL}
                  alt="category image"
                  className="categoryImage"
                />
              </div>

              <div className="categoryDetail">
                <h3 className="ft-16px mr-bt-2rem">{category.name}</h3>
                <p className="categoryDescription mr-bt-2rem">
                  {category.description}
                </p>

                <button href="#" className="btnBuyNow mr-bt-2rem">
                  BUY NOW
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Home;
