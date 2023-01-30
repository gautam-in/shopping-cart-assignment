import React from "react";

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

  const addQuantity = (id: string) => {
    const tempCartData = cartData.filter((data) => data?.id === id)[0];
    tempCartData.quantity += 1;
    tempCartData.stock -= 1;
    const newCartData = cartData.filter((data) => data?.id === id ? tempCartData : data);
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
    const newCartData = cartData.filter((data) => data?.id === id ? tempCartData : data);
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
        <ul role="list" className="cart__items-wrapper">
          {cartData?.map((item) => {
            let imagePath: string[] =
              item.imageURL !== undefined ? item.imageURL.split("/") : [];
            let imageName =
              imagePath[imagePath?.length - 2] +
              "/" +
              imagePath[imagePath?.length - 1];
            return (
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
                        className="cart__qty-btn"
                        onClick={() => item?.quantity > 0 && removeQuantity(item?.id)}
                      >
                        -
                      </button>
                      <div> {item?.quantity} </div>
                      <button
                        type="button"
                        className="cart__qty-btn"
                        onClick={() => item?.stock > 0 && addQuantity(item?.id)}
                      >
                        +
                      </button>
                      <span>X Rs. {item?.price}</span>
                    </div>
                    <div>Rs. {item?.quantity * item?.price} </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
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
              <div>Start Shopping</div>
            )}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default AddToCart;
