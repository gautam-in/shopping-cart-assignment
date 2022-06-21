import axios from "../../api/axios";
import React, { useEffect, useState } from "react";
import "../ProductListingPage/ProductListingPage.scss";
import Button from "../../components/Button/Button";

const ProductListingPage = () => {
  const [productList, setProductList] = useState([]);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {
    setProducts(
      activeCategory !== "all"
        ? productList.filter((product) => product.category === activeCategory)
        : productList
    );
  }, [activeCategory, categories, productList]);

  useEffect(() => {
    (async () => {
      const fetchproducts = await axios.get("/products");
      const products = await fetchproducts.data;
      console.log(products);
      setProductList(products);
      setProducts(products);
      const fetchCategory = await axios.get("/categories");
      const categoryList = await fetchCategory.data;
      setCategories(categoryList);
    })();
  }, []);

  const handleCategoryClick = (category) => {
    category.id === activeCategory
      ? setActiveCategory("all")
      : setActiveCategory(category.id);
  };

  return (
    <div className="productList-container ">
      <div className="categories-container">
        {categories.map((category) =>
          category.enabled ? (
            <div
              className="category"
              onClick={() => handleCategoryClick(category)}
              key={category.id}
            >
              {category.name}
            </div>
          ) : null
        )}
      </div>
      <div className="products-container">
        {products.map((product) => {
          return (
            <div className="product-container" key={product.id}>
              <div>{product.name}</div>
              <div>
                <img
                  style={{ width: "200px", height: "150px" }}
                  src={product.imageURL}
                  alt="product"
                />
              </div>
              <div className="product-description">{product.description}</div>
              <div className="price-button-container">
                <div>MRP Rs{product.price}</div>
                <Button type="sm">Buy now</Button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductListingPage;
