import React from "react";
import { useNavigate } from "react-router-dom";

import Modal from "../basic/Modal";
import { MyGlobalContext } from "../../context/myGLobalContext";

export type ICartData = {
  name: string;
  imageURL: string;
  description: string;
  price: number;
  stock: number;
  category: string;
  sku: string;
  id: string;
  quantity: number;
};

const AddToCart: React.FC = () => {
  const {
    isAddToCartOpen,
    setIsAddToCartOpen,
    cartData,
    setCartData,
    productsData,
  } = React.useContext(MyGlobalContext);

  const navigate = useNavigate();

  const addQuantity = (id: string) => {
    const tempCartData = cartData.filter((data) => data?.id === id)[0];
    tempCartData.quantity += 1;
    tempCartData.stock -= 1;
    const newCartData = cartData.filter((data) =>
      data?.id === id ? tempCartData : data
    );
    setCartData(newCartData);

    const indexForProductsData = productsData.findIndex(
      (obj) => obj?.id === id
    );
    productsData[indexForProductsData].stock -= 1;
  };

  const removeQuantity = (id: string) => {
    const tempCartData = cartData.filter((data) => data?.id === id)[0];
    tempCartData.quantity -= 1;
    tempCartData.stock += 1;
    let newCartData;
    if (tempCartData?.quantity === 0) {
      newCartData = cartData.filter((data) => data?.quantity > 0);
    } else {
      newCartData = cartData.filter((data) =>
        data?.id === id ? tempCartData : data
      );
    }
    setCartData(newCartData);

    const indexForProductsData = productsData.findIndex(
      (obj) => obj?.id === id
    );
    productsData[indexForProductsData].stock += 1;
  };

  const payableAmount = cartData?.reduce((acc, data) => {
    return acc + data?.quantity * data?.price;
  }, 0);

  return (
    <Modal
      headerTitle="My Cart"
      isModalOpen={isAddToCartOpen}
      onCloseHandler={() => setIsAddToCartOpen(false)}
    >
      <div className="cart">
        {cartData?.length > 0 ? (
          <ul className="cart__items-wrapper">
            {cartData?.map((item, index) => {
              let imagePath: string[] =
                item.imageURL !== undefined ? item.imageURL.split("/") : [];
              let imageName =
                imagePath[imagePath?.length - 2] +
                "/" +
                imagePath[imagePath?.length - 1];
              return (
                <>
                  <li className="cart__item">
                    <div className="cart__item__img-container">
                      <img
                        src={require(`../../static/images/products/${imageName}`)}
                        alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
                        className="cart__item__img"
                      />
                    </div>

                    <div className="cart__item__details">
                      <div>
                        <div className="cart__item__price">
                          <h3>{item?.name}</h3>
                        </div>
                      </div>
                      <div className="cart__quantity-container">
                        <div className="cart__btns">
                          <button
                            type="button"
                            className="btn cart__qty-btn"
                            disabled={item?.quantity === 0}
                            onClick={() =>
                              item?.quantity > 0 && removeQuantity(item?.id)
                            }
                          >
                            -
                          </button>
                          <div> {item?.quantity} </div>
                          <button
                            type="button"
                            className="btn cart__qty-btn"
                            disabled={item?.stock === 0}
                            onClick={() =>
                              item?.stock > 0 && addQuantity(item?.id)
                            }
                          >
                            +
                          </button>
                          <span>X Rs. {item?.price}</span>
                          {item?.stock === 0 && (
                            <span className="cart__item__out-of-stock">
                              Out of stock
                            </span>
                          )}
                        </div>
                        <div>Rs. {item?.quantity * item?.price} </div>
                      </div>
                    </div>
                  </li>
                  {index === 0 && (
                    <div className="cart__offer__tag">
                      <img
                        src={require("../../static/images/lowest-price.png")}
                        alt="lowest-price img"
                      />
                      <span>You won't find it cheaper anywhere</span>
                    </div>
                  )}
                </>
              );
            })}
          </ul>
        ) : (
          <div className="cart__no-items__wrapper">
            <h1>No items in your cart</h1>
            <span>Your favourite items are just a click away</span>
          </div>
        )}
      </div>
      <div className="cart__footer">
        {cartData?.length > 0 && (
          <p className="cart__footer__promocode-instruction">
            Promocode can be applied on payment page
          </p>
        )}
        <div>
          <div className="cart__footer__btn">
            {cartData?.length > 0 ? (
              <>
                <div>Proceed to Checkout</div>
                <div>
                  Rs. {payableAmount} {`>`}
                </div>
              </>
            ) : (
              <div
                className="cart__footer__btn__text-center"
                onClick={() => {
                  navigate("/products");
                  setIsAddToCartOpen(false);
                }}
              >
                Start Shopping
              </div>
            )}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default AddToCart;
