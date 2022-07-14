import React, { useEffect, useState } from "react";
import { Button, Carousel, Col, Row, Container } from "react-bootstrap";
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
      .then(({ data }) => {
        if (data) {
          setCategoriesData(data);
        }
      })
      .catch((error) => {
        console.log("Error in getting category data", error);
      });
  };
  useEffect(() => {
    getBannersAndCategories();
  }, []);

  const exploreCategory = (categoryId) => {
    navigate(`/products/${categoryId}`);
  };
  const displayCategory = (item) => {
    if (item && item.order > 0) {
      return (
        <Row key={item.id} className="rowCategory mt-1">
          {item.order % 2 === 0 ? (
            <>
              <Col>
                <h1>{item.name}</h1>
                <p>{item.description}</p>
                <Button
                  onClick={() => exploreCategory(item.id)}
                  id="categoryButton"
                >
                  Explore {item.name}
                </Button>
              </Col>
              <Col>
                <img
                  src={process.env.PUBLIC_URL + `${item.imageUrl}`}
                  alt={"Category" + `${item.name} `}
                  height="200"
                />
              </Col>
            </>
          ) : (
            <>
              <Col>
                <img
                  src={process.env.PUBLIC_URL + `${item.imageUrl}`}
                  alt={"Category" + `${item.name} `}
                  height="200"
                />
              </Col>
              <Col>
                <h1>{item.name}</h1>
                <p>{item.description}</p>
                <Button
                  onClick={() => exploreCategory(item.id)}
                  id="categoryButton"
                >
                  Explore {item.name}
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
    <Container>
      <Carousel>
        {bannersData.map((data) => {
          return (
            <Carousel.Item>
              <div key={data.id}>
                <img
                  src={process.env.PUBLIC_URL + `${data.bannerImageUrl}`}
                  alt={data.bannerImageAlt}
                  height="200"
                />
              </div>
            </Carousel.Item>
          );
        })}
      </Carousel>

      {categoriesData.map((item) => {
        return displayCategory(item);
      })}
    </Container>
  );
};

export default Home;
