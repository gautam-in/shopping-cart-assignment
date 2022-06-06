import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { updateCategories } from "../../redux/categories/CategoryActions";
import { updateProducts } from "../../redux/products/ProductActions";
import LoadingScreen from "../loadingScreen/LoadingScreen";
import ProductItem from "./ProductItem";
import "./ProductPage.scss";

function ProductPage() {
  const params = useParams();
  const dispatch = useDispatch();
  const { categoryId = "" } = params;
  const categoryList = useSelector((state) => state.categories.data);
  const productList = useSelector((state) => state.products.data);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [loading, setLoading] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    if (productList.length === 0) {
      fetchProducts();
    }
    if (categoryList.length === 0) {
      fetchCategories();
    }
    if (categoryId && !selectedCategory) {
      setSelectedCategory(categoryId);
    }
  }, []);

  const fetchProducts = async () => {
    setLoading(true);
    const products = await fetch(`${process.env.REACT_APP_MAIN_URL}/products`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (products) {
      const data = await products.json();
      setLoading(false);
      dispatch(updateProducts(data));
    }
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
  const productListUI = useMemo(() => {
    let tempProdList = productList;
    if (selectedCategory) {
      tempProdList = productList.filter((e) => e.category === selectedCategory);
    }

    const tempUI = tempProdList.map((product) => {
      return (
        <ProductItem
          product={product}
          key={product.id}
          loading={loading}
          setLoading={setLoading}
        />
      );
    });
    return tempUI;
  }, [productList, selectedCategory]);

  const categoryListUI = useMemo(() => {
    const tempUI = categoryList.map(({ id, name }) => {
      let listStyle = {};
      if (selectedCategory === id) {
        listStyle = { background: "#b0094c", color: "#fff", fontWeight: "600" };
      }
      if (name !== "Seafood") {
        return (
          <li
            key={id}
            style={listStyle}
            onClick={() => {
              if (showDropdown) {
                setShowDropdown(false);
              }
              if (selectedCategory && selectedCategory === id) {
                setSelectedCategory("");
                return;
              }
              setSelectedCategory(id);
            }}
          >
            {name}
          </li>
        );
      }
    });
    return tempUI;
  }, [categoryList, selectedCategory, showDropdown]);

  const selectedCategoryName = useMemo(() => {
    const [tempCategory] = categoryList.filter(
      (e) => e.id === selectedCategory
    );
    return tempCategory?.name;
  }, [selectedCategory, categoryList]);

  return (
    <div className="products-main-container">
      {loading && <LoadingScreen />}
      <div className="product-desktop-sidebar">
        {categoryList.length > 0 && <ul>{categoryListUI}</ul>}
      </div>
      <div className="product-mobile-dropdown">
        <div
          className="mobile-categories-dropdown"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          <span>{!selectedCategory ? "Select" : selectedCategoryName}</span>
          <span id={showDropdown ? "bottomArrow" : "rightArrow"}>&gt;</span>
        </div>
        {showDropdown && <ul>{categoryListUI}</ul>}
      </div>
      <div className="product-desktop-plp-container">
        {productList.length > 0 && (
          <div className="product-items-container">{productListUI}</div>
        )}
      </div>
    </div>
  );
}

export default React.memo(ProductPage);
