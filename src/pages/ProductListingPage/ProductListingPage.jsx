import axios from "../../api/axios";
import React, { useEffect, useState } from "react";
import "../ProductListingPage/ProductListingPage.scss";
import ProductCard from "../../components/ProductCard/ProductCard";
import CategorySidebar from "../../components/CategorySidebar/CategorySidebar";
import { useNavigate } from "react-router-dom";

const ProductListingPage = () => {
  const navigate = useNavigate();
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
    category.id === activeCategory
      ? navigate("/products")
      : navigate(`/products/${category.id}`);
  };

  return (
    <div className="productList-container ">
      <div className="categories-container">
        {categories.map((category) =>
          category.enabled ? (
            <CategorySidebar
              active={category.id === activeCategory}
              handleClick={handleCategoryClick}
              key={category.id}
              category={category}
            />
          ) : null
        )}
      </div>
      <div className="products-container">
        {products.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
};

export default ProductListingPage;
