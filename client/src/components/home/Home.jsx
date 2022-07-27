import React, { useEffect, useState } from "react";
import { Button, Carousel, Col, Row } from "react-bootstrap";
import "./home.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Home = () => {
  const navigate = useNavigate();
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
      .then(
        ({ data }) => {
          if (data) {
            setCategoriesData(data);
          }
        }
        //dispatch an action to set the category data in the store to access it in the products component
      )
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
        <Row key={id} className="rowCategory mt-1">
          {order % 2 === 0 ? (
            <>
              <Col>
                <h1>{name}</h1>
                <p>{description}</p>
                <Button onClick={() => exploreCategory()} id="categoryButton">
                  Explore {name}
                </Button>
              </Col>
              <Col>
                <img
                  src={process.env.PUBLIC_URL + `${imageUrl}`}
                  alt={"Category" + `${name} `}
                  height="200"
                />
              </Col>
            </>
          ) : (
            <>
              <Col>
                <img
                  src={process.env.PUBLIC_URL + `${imageUrl}`}
                  alt={"Category" + `${name} `}
                  height="200"
                />
              </Col>
              <Col>
                <h1>{name}</h1>
                <p>{description}</p>
                <Button onClick={() => exploreCategory()} id="categoryButton">
                  Explore {name}
                </Button>
              </Col>
            </>
          )}
        </Row>
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
