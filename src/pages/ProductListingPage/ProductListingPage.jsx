import axios from "../../api/axios";
import React, { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import CategorySidebar from "../../components/CategorySidebar/CategorySidebar";
import { useNavigate, useParams } from "react-router-dom";
import CategoryDropdown from "../../components/CategoryDropdown/CategoryDropdown";
import "../ProductListingPage/ProductListingPage.scss";
import { useDispatch } from "react-redux";
import { setProducts } from "../../redux/actions/productActions";

const ProductListingPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const categoryID = useParams();

  const [productList, setProductList] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {
    setAllProducts(
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
      setAllProducts(products);
      dispatch(setProducts(products));
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
      <CategoryDropdown
        categories={categories}
        handleCategoryClick={handleCategoryClick}
      />
      <div className="categories-products-container">
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
          {allProducts.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductListingPage;
