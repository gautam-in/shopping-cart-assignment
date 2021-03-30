import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import { useDispatch, useSelector } from "react-redux";
import { getProductsStart, getAddToCartStart } from "./ProductActions";
import Sidebar from "../Sidebar/Sidebar";
function Products() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const { products = [] } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductsStart());
  }, []);

  const handleCart = (payload) => {
    dispatch(getAddToCartStart(payload));
  };
  const onFilter = (category) => {
    setSelectedCategory(category);
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
