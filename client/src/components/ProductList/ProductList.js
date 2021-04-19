import React from "react";
import Product from "../Product/Product";
import Sidebar from "../Sidebar/Sidebar";

const ProductList = ({
  products,
  isLoading,
  onFilter,
  handleCart,
  selectedCategory,
}) => {
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
};

export default ProductList;
