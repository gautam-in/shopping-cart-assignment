import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "../../global.styles";
import { addItem, removeItem, clearCart } from "../../redux/cart/cart.action";
import { getCartQuantity } from "../../utils/cart.util";
import CartModalHeader from "../CartModalHeader";
import EmptyCart from "../EmptyCart";
import styled from "styled-components";

const Cart = ({ setIsCartVisible }) => {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const quantity = getCartQuantity(cartItems);
  const totalPrice = cartItems.reduce((total, item) => {
    return total + item.quantity * item.price;
  }, 0);
  return (
    <CartContainer>
      {cartItems.length ? (
        <CartModal>
          <CartModalHeader
            quantity={quantity}
            setIsCartVisible={setIsCartVisible}
          />
          <div>
            {cartItems.map((item) => {
              return (
                <div
                  key={item.id}
                  style={{
                    display: "flex",
                    padding: 8,
                    backgroundColor: "#fff",
                    marginTop: 8,
                  }}
                >
                  <img src={item.imageURL} width={80} />
                  <div
                    style={{
                      display: "flex",
                      flex: "1",
                      flexDirection: "column",
                      justifyContent: "center",
                    }}
                  >
                    <span style={{ padding: 8, fontWeight: 700, fontSize: 14 }}>
                      {item.name}
                    </span>
                    <div
                      style={{
                        display: "flex",
                        padding: "0px 8px",
                        alignItems: "center",
                      }}
                    >
                      <CartQuantityButton
                        onClick={() => {
                          dispatch(removeItem(item));
                        }}
                      >
                        -
                      </CartQuantityButton>
                      <span style={{ padding: "0px 8px" }}>
                        {item.quantity}
                      </span>
                      <CartQuantityButton
                        onClick={() => {
                          dispatch(addItem(item));
                        }}
                      >
                        +
                      </CartQuantityButton>
                      <span
                        style={{
                          display: "flex",
                          alignItems: "center",
                          flex: 1,
                          padding: "0 8px",
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          width={24}
                        >
                          <path
                            fillRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>{" "}
                        Rs.{item.price}
                      </span>
                      <span>Rs.{item.price * item.quantity}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div
            style={{
              display: "flex",
              backgroundColor: "#fff",
              alignItems: "center",
              padding: "10px",
              margin: "8px",
            }}
          >
            <img src="static/images/lowest-price.png" height={35} />
            <p style={{ marginLeft: 16 }}>You won't find it cheaper anywhere</p>
          </div>
          <div style={{ flex: "1" }}></div>
          <div
            style={{
              backgroundColor: "#fff",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <p>Promo code can be applied on payment page</p>
            <Button
              onClick={() => {
                console.log(cartItems); // For testing, mock
                dispatch(clearCart());
                setIsCartVisible((prev) => !prev);
              }}
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "95%",
                marginBottom: 8,
              }}
            >
              <span>Proceed to Checkout</span>
              <span>Rs. {totalPrice}</span>
            </Button>
          </div>
        </CartModal>
      ) : (
        <EmptyCart setIsCartVisible={setIsCartVisible} />
      )}
    </CartContainer>
  );
};


const CartContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  justify-content: center;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
`;
const CartModal = styled.div`
  position: fixed;
  height: 85%;
  width: 35%;
  z-index: 100;
  overflow: auto;
  display: flex;
  bottom: 0;
  right: 10%;
  background-color: #ececec;
  flex-direction: column;
`;

const CartQuantityButton = styled.button`
  border: none;
  height: 24px;
  width: 24px;
  color: #fff;
  background-color: #d00256;
  border-radius: 50%;
`;


export default Cart;
