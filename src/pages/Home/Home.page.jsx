import React, { useEffect, useState } from "react";
import CarouselComponent from "../../components/Carousel/Carousel.component.jsx";
import { HomePageContainer } from "./Home.styled.jsx";

const HomePage = () => {
  const [categories, setCategories] = useState(null);

  const getCategories = () => {
    fetch("http://localhost:5000/categories")
      .then((response) => response.json())
      .then((categories) => setCategories(categories))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getCategories();
    console.log(categories);
  }, []);

  return (
    <HomePageContainer>
      <CarouselComponent />
      {categories &&
        categories.map((item) => {
          <div
            key={item.id}
            style={{
              boxShadow: "0px -12px 28px -28px rgb(0 0 0 / 30%)",
              marginBottom: "4px",
            }}
          >
            <img src={item.imageUrl} />
          </div>;
        })}
    </HomePageContainer>
  );
};

export default HomePage;
