import React, { useEffect, useState, useContext } from "react";
import { Carousel, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./home.css";
import { ShopContext } from "../../contexts/shoppingContext";
import { getAxiosData } from "../../utils/axiosData";
const Home = () => {
  const navigate = useNavigate();
  const { setShopCategories } = useContext(ShopContext);
  const [categoriesData, setCategoriesData] = useState([]);
  const [bannersData, setBannersData] = useState([]);
  const getBannersAndCategories = async () => {
    const bannerData = await getAxiosData("http://localhost:5000/banners");
    const categoriesData = await getAxiosData(
      "http://localhost:5000/categories"
    );
    if (bannerData) {
      setBannersData(bannerData);
    }
    if (categoriesData) {
      setCategoriesData(categoriesData);
      //dispatch an action to set the category data in the store to access it in the products component
      setShopCategories(categoriesData);
    }
  };
  useEffect(() => {
    getBannersAndCategories();
  }, []);

  const exploreCategory = () => {
    navigate(`/products`);
  };
  const displayCategory = (item) => {
    const { order, id, name, description, imageUrl } = item;
    if (item && order > 0) {
      return (
        <div className="rowCategory mt-3" key={id}>
          {order % 2 === 0 ? (
            <>
              <div className="category-descriptions">
                <h1>{name}</h1>
                <p className="text-wrap">{description}</p>
                <Button className="categoryButton" onClick={exploreCategory}>
                  Explore {name}
                </Button>
              </div>
              <div>
                <img
                  src={process.env.PUBLIC_URL + `${imageUrl}`}
                  alt={"Category" + `${name} `}
                  height="200"
                  width="310"
                  className="category-Image"
                />
              </div>
            </>
          ) : (
            <>
              <div>
                <img
                  src={process.env.PUBLIC_URL + `${imageUrl}`}
                  alt={"Category" + `${name} `}
                  height="200"
                  width="310"
                  className="category-Image"
                />
              </div>
              <div className="category-descriptions">
                <h1>{name}</h1>
                <p>{description}</p>
                <Button className="categoryButton" onClick={exploreCategory}>
                  Explore {name}
                </Button>
              </div>
            </>
          )}
        </div>
      );
    }
    return;
  };
  return (
    <div className="home-container">
      <div className="carosel-container">
        <Carousel variant="dark">
          {bannersData.map(({ id, bannerImageUrl, bannerImageAlt }) => {
            return (
              <Carousel.Item interval={2000}>
                <div key={id}>
                  <img
                    src={bannerImageUrl}
                    alt={bannerImageAlt}
                    height="200"
                    className="carosel-image"
                  />
                </div>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>

      <div className="categories-container">
        {categoriesData.map((item) => {
          return displayCategory(item);
        })}
      </div>
    </div>
  );
};

export default Home;
