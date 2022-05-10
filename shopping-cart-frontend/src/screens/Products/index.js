import { useEffect, useState, memo } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setSelectedCategory } from "../../reducers/productsReducer";
import { getProducts, getCategories } from "../../utils/api";
import { addItemToCart } from "../../reducers/cartReducer";
import "./Products.css";
import ProductCategory from "../../components/ProductCategory";
import ProductCard from "../../components/ProductCard";

const Products = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const selectedCategory = useSelector(
    (state) => state.productsReducer.selectedCategory
  );

  useEffect(() => {
    getCategories((data) => setCategories(data));
    getProducts((data) => {
      setProducts(data);
      setAllProducts(data);
    });
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      let filteredProducts = [...allProducts].filter(
        (e) => e.category === selectedCategory
      );
      setProducts(filteredProducts);
    } else {
      setProducts([...allProducts]);
    }
  }, [allProducts, selectedCategory]);

  const handleCategoryPress = (id) => {
    if (selectedCategory === id) {
      dispatch(setSelectedCategory(""));
    } else {
      dispatch(setSelectedCategory(id));
    }
  };

  const renderProduct = () => {
    return (
      <div className="productsContainer">
        {products.map((product, index) => (
          <div key={index.toString()} className="productContainer">
            <div className="productTitle">{product?.name}</div>
            <div className="productDetails">
              <img
                src={product?.imageURL}
                alt={product?.name}
                className="productImage"
              />
              <div>
                <div className="productDescription">{product?.description}</div>
                <div className="priceBlock">
                  MRP Rs.{product.price}
                  <button
                    className="link-button"
                    onClick={() => dispatch(addItemToCart(product))}
                  >
                    Buy Now
                  </button>
                </div>
                <button
                  className="link-button buyNowBlock"
                  onClick={() => dispatch(addItemToCart(product))}
                >
                  Buy Now @ MRP Rs.{product.price}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div id="container">
      <ProductCategory categories={categories} products={products} />
      <div className="productBlock">{<ProductCard products={products} />}</div>
    </div>
  );
};

export default memo(Products);
