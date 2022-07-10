import React from "react";
import CartOffer from "./CartOffer";
import CartEmpty from "./CartEmpty";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";

const CartItem = ({ data, isEmpty, addToCart, deleteCartItem }) => {
  return (
    <>
      <div className="cart-items-group">
        {isEmpty ? (
          <CartEmpty />
        ) : (
          data.map((item) => {
            return (
              <div className="cart-item mb-3" key={`ct-${item.id}`}>
                <div className="container-fluid py-2 px-3 d-flex justify-content-start align-items-center">
                  <div className="left me-3">
                    <img
                      src={item.imageURL}
                      alt={`${item.sku}`}
                      width={`100px`}
                      height={"100px"}
                    />
                  </div>
                  <div
                    className="right d-flex justify-content-around align-items-start flex-column"
                    style={{ height: "90px", width: "100%" }}
                  >
                    <h1 className="fs-large">{item.name}</h1>
                    <div className="control-wrapper d-flex justify-content-between align-items-center">
                      <div className="controls">
                        <button
                          className="cart-btn"
                          type="button"
                          onClick={() => {
                            deleteCartItem({ data: item });
                          }}
                        >
                          <FontAwesomeIcon icon={faMinus} />
                        </button>
                        <span className="qty mx-2">{item.qty}</span>
                        <button
                          className="cart-btn"
                          type="button"
                          onClick={() => {
                            addToCart({ data: item });
                          }}
                        >
                          <FontAwesomeIcon icon={faPlus} />
                        </button>
                        <span className="mx-3">
                          <FontAwesomeIcon
                            icon={faTimes}
                            style={{ fontSize: "14px" }}
                          />
                          <span className="mx-2">Rs.{item.price}</span>
                        </span>
                      </div>
                      <div className="total">
                        Rs.{parseInt(item.price) * parseInt(item.qty)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        )}
        {!isEmpty && <CartOffer />}
      </div>
    </>
  );
};

export default CartItem;
