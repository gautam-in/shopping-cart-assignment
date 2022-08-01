import React, { useEffect, useState, useContext } from "react";
import { Carousel, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./home.css";
import { ShopContext } from "../../contexts/shoppingContext";
const Home = () => {
  const navigate = useNavigate();
  const { setShopCategories } = useContext(ShopContext);
  const [categoriesData, setCategoriesData] = useState([]);
  const [bannersData, setBannersData] = useState([]);

  const getBannersAndCategories = async () => {
    await axios
      .get("http://localhost:5000/banners")
      .then(({ data }) => {
        if (data) {
          setBannersData(data);
        }
      })
      .catch((error) => {
        console.log("Error in getting banner data", error);
      });
    await axios
      .get("http://localhost:5000/categories")
      .then(({ data }) => {
        if (data) {
          setCategoriesData(data);
          //dispatch an action to set the category data in the store to access it in the products component
          setShopCategories(data);
        }
      })
      .catch((error) => {
        console.log("Error in getting category data", error);
      });
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
        <div className="rowCategory" key={id}>
          {order % 2 === 0 ? (
            <>
              <div className="category-descriptions">
                <h1>{name}</h1>
                <p className="text-wrap">{description}</p>
                <Button
                  className="categoryButton"
                  onClick={() => exploreCategory()}
                >
                  Explore {name}
                </Button>
              </div>
              <div>
                <img
                  src={process.env.PUBLIC_URL + `${imageUrl}`}
                  alt={"Category" + `${name} `}
                  height="200"
                  width="310"
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
                />
              </div>
              <div className="category-descriptions">
                <h1>{name}</h1>
                <p>{description}</p>
                <Button
                  className="categoryButton"
                  onClick={() => exploreCategory()}
                >
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
                    src={process.env.PUBLIC_URL + `${bannerImageUrl}`}
                    alt={bannerImageAlt}
                    height="200"
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
