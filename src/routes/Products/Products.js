import React, { useState, useEffect } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useSelector } from "react-redux";
import ProductCard from "../../components/ProductCard/ProductCard";
import "./Products.css";

function Products({}) {
  const productArr = useSelector((state) => state.products.products);
  const windowSize = useSelector((state) => state.user.windowSize);
  const currentCategory = useSelector(
    (state) => state.products.currentCategory
  );
  const [filteredProductArr, setFilteredProductArr] = useState(productArr);

  useEffect(() => {
    if (currentCategory) {
      setFilteredProductArr(
        productArr.filter((product) => product.category === currentCategory)
      );
    }
  }, [currentCategory]);

  return (
    <div className="flex product-window-height overflow-hidden">
      {windowSize > 500 ? <Sidebar /> : null}
      <div
        className={`${
          windowSize > 500 ? "w-5/6" : "w-full"
        } bg-white flex flex-wrap p-2 product-window-height overflow-auto`}
      >
        {filteredProductArr.map((product) => (
          <div className="m-1">
            <ProductCard product={product} key={product.id} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
