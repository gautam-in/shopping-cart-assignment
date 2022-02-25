import React, { useContext, useState, useRef, useEffect } from "react";
import ProductItems from "../../component/ProductItems/ProductItems";
import { useLocation } from "react-router-dom";
import { cartContext } from "../../Context/CartContext";
import CartItems from "../../component/Cart/CartItems/CartItems";
import Category from "../../component/Category/Category";
import "./productListing.css";

const ProductListing = () => {
  const { state } = useLocation();

  const [isToggledOn, setToggle] = useState(true);
  const [idCategory, setIdCategory] = useState(0);
  const prevCountRef = useRef();
  const location = useLocation();

  const clickGetCategoryIdHandler = (id) => {
    prevCountRef.current = idCategory;
    setIdCategory(id);
    if (prevCountRef.current === id) {
      setToggle(!isToggledOn);
    } else {
      setToggle(true);
    }
  };

  useEffect(() => {
    const statedata = state;
    console.log("state");
    console.log(state);
  }, [state]);

  return (
    <div className="product-content container-width">
      <Category
        className="category"
        idCategoryFilter={idCategory}
        clickprops={clickGetCategoryIdHandler}
        toggleElement={isToggledOn}
      />

      <ProductItems
        params={state}
        idCategoryFilter={idCategory}
        toggleElement={isToggledOn}
      />
    </div>
  );
};

export default ProductListing;
