import React, { useState, useEffect } from "react";
import axios from "axios";
import CategorySidebar from "./CategoriesSidebar/CategorySidebar";
import Products from "./Products/Products";
import CategoryDropdown from "./CategoryDropdown/CategoryDropdown";
import "./ProductsPage.scss";
import { withRouter } from "react-router-dom";

const ProductsPage = (props) => {
  const categoryIdFromUrl = props.location.pathname.split("/")[2];
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(categoryIdFromUrl);
  const [width, setWidth] = useState(window.innerWidth);

  //get Categories data from Api
  useEffect(() => {
    axios.get("http://localhost:5000/categories").then((response) => {
      const outputArray = [];
      const indexArray = [];

      for (const key in response.data) {
        if (response.data[key].enabled) {
          indexArray.push(response.data[key].order);
        }
      }
      for (const key in indexArray) {
        for (const newKey in response.data) {
          if (response.data[newKey].order === indexArray[key])
            outputArray[indexArray[key] - 1] = response.data[newKey];
        }
      }
      setCategories(outputArray);
    });
  }, []);

  //get all Products data based on category selected
  useEffect(() => {
    axios.get("http://localhost:5000/products").then((response) => {
      if (selectedCategory) {
        let outputData = response.data;
        let filterData = outputData.filter((product) => {
          return product.category === selectedCategory;
        });
        setProducts(filterData);
      } else {
        setProducts(response.data);
      }
    });
  }, [selectedCategory]);

  //set Category in selectedCategory state from left sidebar
  const categorySelectedHandler = (categoryId) => {
    if (selectedCategory === categoryId) {
      props.history.push("/products/");
      setSelectedCategory(null);
    } else {
      setSelectedCategory(categoryId);
    }
  };

  //set Category in selectedCategory state from Dropdown
  const optionSelected = (e) => {
    let idx = e.target.selectedIndex;
    let categoryId = e.target.options[idx].value;
    props.history.push("/products/" + categoryId);
    setSelectedCategory(categoryId);
  };
  //To update Inner Width
  const updateWidth = () => {
    setWidth(window.innerWidth);
  };
  //Use effect to update state on width resize
  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  });

  return (
    <div className="productspage">
      {width < 732 ? (
        <CategoryDropdown
          categoriesData={categories}
          seletcedCategory={selectedCategory}
          optionSelected={optionSelected}
        />
      ) : (
        <CategorySidebar
          categoriesData={categories}
          categorySelected={categorySelectedHandler}
          seletcedCategory={selectedCategory}
        />
      )}
      <Products productsData={products} addProduct={props.addProduct} />
    </div>
  );
};

export default withRouter(ProductsPage);
