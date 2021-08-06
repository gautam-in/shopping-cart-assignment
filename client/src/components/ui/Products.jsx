import React, { useContext, useEffect, useState } from "react";
import FontAwesome from "react-fontawesome";
import ProductCard from "./ProductCard";
import { Context as ProductsContext } from "../../context/ProductsContext";

import { filterProudcts } from "../../util/Util";
function Products({ location }) {
  const { getBanners, getProducts, getCategories, state } =
    useContext(ProductsContext);
  const [productCategoieres, setProductCategoires] = useState([
    {
      id: "all",
      name: "All Product",
    },
  ]);

  const [selectedProductCategory, setSelectedProductCategory] = useState({
    id: "all",
    name: "All Product",
  });

  const [dropMenu, setDropMenu] = useState(false);
  const [products, setProucts] = useState([]);
  const handleClick = (category) => {
    setSelectedProductCategory(category);
    const newProductList = filterProudcts(category, state.products);
    setProucts(newProductList);
  };

  useEffect(() => {
    getBanners();
    getCategories();
    getProducts();
  }, []);
  useEffect(() => {
    const { state: locationState } = location
    if (locationState != null) {
      const { product_category } = locationState
      setSelectedProductCategory(product_category)
      const newList = filterProudcts(product_category, state.products)
      setProucts(newList);
    }
    else
      setProucts(state.products);
  }, [state, location])

  useEffect(() => {

    setProductCategoires((prevState) => {
      let newArray = [];
      newArray.push(prevState[0]);
      newArray = newArray.concat(state.categories);
      return newArray;
    });
  }, [state]);
  return (
    <>
      <div className="products-menu">
        <ul>
          {productCategoieres.map((item) => (
            <li style={{ fontWeight: "bold", color: item.id === selectedProductCategory.id && "#d00155", fontSize: "1.2rem" }} key={item.id} tabIndex="0" onClick={() => handleClick(item)}>
              {item.name}
            </li>
          ))}
        </ul>
      </div>

      <div className="drop-menu">
        <ul>
          <li
            style={{ display: "flex", justifyContent: "space-evenly", fontWeight: "bolder", fontSize: "1.5rem" }}
            tabIndex="0"
            onClick={() => {
              setDropMenu((prevState) => !prevState);
            }}
          >
            {selectedProductCategory.name}
            {dropMenu ? (
              <FontAwesome name="angle-up" size="2x" />
            ) : (
              <FontAwesome name="angle-down" size="2x" />
            )}
          </li>

          {dropMenu &&
            productCategoieres.map(
              (item) =>
                item.id !== selectedProductCategory.id && (
                  <li
                    key={item.id}
                    style={{ fontWeight: "bold" }}
                    tabIndex="0"
                    onClick={() => {
                      handleClick(item);
                      setDropMenu((prevState) => !prevState);
                    }}
                  >
                    {item.name}
                  </li>
                )
            )}
        </ul>
      </div>

      <div className="products-container">
        {products.map((product) => (
          <ProductCard key={product.id} productInfo={product} />
        ))}
      </div>
    </>
  );
}

export default Products;
