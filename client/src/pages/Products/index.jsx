import CategoryListingSideBar from "components/CategoryListingSideBar";
import { connect } from "react-redux";
import { useNavigate, useParams } from "react-router";
import React, { useEffect, useState } from "react";
import CategoryListingContext from "components/contexts/categoryListing";
import "./Products.scss";
import {
  initiateGetProducts,
  filterProductByCategory,
  resetFilteredProducts,
} from "redux/modules/products";
import { updateCartItem, CART_ACTIONS } from "redux/modules/cart";
import ProductTile from "components/ProductTile";

function Products({
  categories,
  initiateGetProducts,
  filteredProducts,
  filterProductByCategory,
  products,
  resetFilteredProducts,
  updateCartItem,
}) {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("");
  const { categoryId } = useParams();

  useEffect(() => {
    if (categoryId) filterProductByCategory(categoryId);
    setSelectedCategory(categoryId);
  }, [categoryId]);

  useEffect(() => {
    if (!products.length) initiateGetProducts();

    return resetFilteredProducts;
  }, []);

  return (
    <div className="Products">
      <CategoryListingContext
        value={{
          onClickCategory: (category) => navigate(`/products/${category}`),
          selectedCategory,
        }}
      >
        <div className="Products__category-container">
          <CategoryListingSideBar
            categories={categories}
            onCategoryClick={(category) => setSelectedCategory(category)}
          />
        </div>
      </CategoryListingContext>

      <div className="Products__container">
        {filteredProducts.length
          ? filteredProducts.map((product) => (
              <ProductTile
                key={product.id}
                product={product}
                onClickBuy={(product) => {
                  updateCartItem(product, CART_ACTIONS.ADD);
                  alert("Item added to cart successfully!");
                }}
              />
            ))
          : "No Products in this category!!"}
      </div>
    </div>
  );
}

export default connect(
  ({ category: { categories }, products: { filteredProducts, products } }) => ({
    categories,
    filteredProducts,
    products,
  }),
  {
    initiateGetProducts,
    filterProductByCategory,
    resetFilteredProducts,
    updateCartItem,
  }
)(Products);
