import React from "react";
import {
  addItemToCart,
  getProducts,
  getSelectedCategory,
} from "../../../store/entities/items";
import { useDispatch, useSelector } from "react-redux";

import "./productsSection.scss";
import { isMobile } from "../../../utils";
import Footer from "../../common/footer/footer";

function ProductsSection() {
  const dispatch = useDispatch();
  const selectedCategory = useSelector(getSelectedCategory);
  const products = useSelector(getProducts);
  const filteredProducts =
    selectedCategory === null
      ? products
      : products.filter((item) => item.category === selectedCategory);

  return (
    <>
      <div className="productsContainer">
        {filteredProducts?.map((prd, index) => (
          <div className="eachProduct" key={prd?.id}>
            <div className="productName">{prd?.name}</div>
            <div className="imgDescSection">
              <div className="productImg">
                <img
                  variant="top"
                  src={prd?.imageURL}
                  className="imgStyle"
                  alt={prd.name}
                />
              </div>
              <div className="mobBelowSec">
                <div className="desc">{prd?.description}</div>
                {isMobile && (
                  <div className="belowSec">
                    <div>MRP Rs. {prd?.price}</div>
                    <button
                      onClick={() => dispatch(addItemToCart(prd))}
                      className="buyBtn"
                    >
                      Buy Now
                    </button>
                  </div>
                )}
              </div>
            </div>
            {!isMobile && (
              <div className="belowSec">
                <div>MRP Rs. {prd?.price}</div>
                <button
                  onClick={() => dispatch(addItemToCart(prd))}
                  className="buyBtn"
                >
                  Buy Now
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default ProductsSection;
