import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";
import CartItem from "./components/CartItem";
import LowestPrice from "./components/LowestPrice/LowestPrice";
import "./Cart.scss";

const Cart = (props) => {
  const { cartItems = [], handleClose, updateCart } = props;
  const history = useHistory();
  const [list, setList] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [toggleCartWrapper, setToggleCartWrapper] = useState(false);
  const removePropagation = (e) => {
    e.stopPropagation();
  };

  const changeCount = (id, count) => {
    const newList = list.map((item) => {
      if (item.id === id) {
        item.count = count;
      }
      return item;
    });
    setList(newList);
  };

  const handleStartShopping = () => {
    history.push("/login");
    setToggleCartWrapper(!toggleCartWrapper)
  };

  const handleButtonClick = () => {
    updateCart([]);
  };

  const calculateTotalPrice = () => {
    let TPrice = 0;
    list.forEach((item) => {
      TPrice += item.price * item.count;
    });
    console.log("calculate the total price :::", TPrice);
    setTotalPrice(TPrice);
  };

  useEffect(() => {
    calculateTotalPrice();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [list]);

  useEffect(() => {
    const objMap = {};
    const listArr = [];
    cartItems.forEach((item) => {
      if (!objMap[item.id]) {
        objMap[item.id] = 0;
        listArr.push(item);
      }
      objMap[item.id]++;
    });
    listArr.forEach((item) => {
      item.count = objMap[item.id];
    });
    setList(listArr);
  }, [cartItems]);

  return (
    <>
    <section className="section-cart" onClick={removePropagation}>
      <div className={cartItems.length > 0 ? `header` : `header-noitems`}>
        <div className="title">
          My Cart <span>{cartItems.length > 0 ? `(${cartItems.length} items)` : ``}</span>
        </div>
        <div onClick={handleClose} className="close">
          x
        </div>
      </div>
      {cartItems.length === 0 ? (
        <div className="container">
          <div className="empty-cart">
            <h2 className="zero-items">No items in your cart</h2>
            <div>Your favorite items are just a click away</div>
          </div>
          <div className="btn">
            <ButtonPrimary title="Start Shopping" click={handleStartShopping}/>
          </div>
        </div>
      ) : (
        <>
          <div className="cart-body">
            {list.map((item) => (
              <div>
                <CartItem changeCount={changeCount} product={item} />
              </div>
            ))}
            <LowestPrice />
          </div>
          <div className="cart-footer">
            <div className="flex-center">
              Promo code can be applied on payment page
            </div>
            <div className="btn">
              <ButtonPrimary click={handleButtonClick}>
                <div className="btn-secondary cart-checkout">
                  <div className="">Proceed to Checkout</div>
                  <div>
                    {`Rs.${totalPrice}`}
                    <span> {">"} </span>
                  </div>
                </div>
              </ButtonPrimary>
            </div>
          </div>
        </>
      )}
    </section>
  </>
  );
};
export default Cart;
