import React, { useEffect, useState } from "react";
import CarouselComponent from "../../components/Carousel/Carousel.component.jsx";
import { selectCategories } from "../../redux/category/category.selector.js";
import { HomePageContainer } from "./Home.styled.jsx";
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

const HomePage = ({ categories }) => {


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

export const mapStateToProps = createStructuredSelector({
  categories: selectCategories,
});

export default connect(mapStateToProps)(HomePage);
