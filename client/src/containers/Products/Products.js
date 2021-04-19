import React, { useEffect, useState } from "react";
import Product from "../../components/Product/Product";
import { useDispatch, useSelector } from "react-redux";
import { getProductsStart, getAddToCartStart } from "./ProductActions";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useLocation } from "react-router";
function Products() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const { products = [] } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  // const location = useLocation();

  useEffect(() => {
    dispatch(getProductsStart());
  }, []);
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const category = params.get("category");
    if (category) {
      setSelectedCategory(category);
    }
  }, [location.pathname]);

  const handleCart = (payload) => {
    dispatch(getAddToCartStart(payload));
  };
  const onFilter = (e) => {
    setSelectedCategory(e.target.id);
  };
  return (
    <div className="products-container">
      <Sidebar filter={onFilter} selectedcategory={selectedCategory} />

      <div className="products">
        {products &&
          products.length > 0 &&
          products
            .filter((item) =>
              selectedCategory ? item.category === selectedCategory : true
            )
            .map((product) => (
              <Product
                product={product}
                key={product.id}
                handlecart={handleCart}
              />
            ))}
      </div>
    </div>
  );
}

export default Products;
