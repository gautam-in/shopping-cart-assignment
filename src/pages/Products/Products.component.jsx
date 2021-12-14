import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import Card from "../../components/card/card.component";
import { Productnavbar } from "../../components/ProductNavBar/Productnavbar.component";
import { selectCategories } from "../../redux/category/category.selector";
import { setItems } from "../../redux/category/categoryActions";
import { ProductPageContainer } from "./Products.styled";

const Products = ({ setItems }) => {
  const [categories, setCategories] = useState([]);

  const getCategory = () => {
    fetch("http://localhost:5000/categories")
      .then((response) => response.json())
      .then((categories) => {
        setCategories(categories);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getCategory();
    setItems(categories);
    console.log(categories);

  }, []);
  return (
    <ProductPageContainer>
      <Productnavbar categories={categories}></Productnavbar>
      <Card />
    </ProductPageContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  categories: selectCategories,
});

const mapDispatchToProps = (dispatch) => ({
  setItems: (items) => dispatch(setItems(items)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);
