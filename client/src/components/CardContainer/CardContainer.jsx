import React, { useEffect, useState, lazy, Suspense } from "react";
import classes from "./CardContainer.module.scss";
import { useHistory } from "react-router-dom";

import cross from "../../assets/images/WhiteCross.svg";
import LowestLogo from "../../assets/images/lowest-price.png";

import { useDispatch, useSelector } from "react-redux";
import { checkOutAct } from "../../Redux/cartReducer";

const CartCard = lazy(() => import("../CartCard/CartCard"));
export default function CardContainer({ cartState, changeCartToggleState }) {
  const history = useHistory();
  const dispatch = useDispatch();

  let cartInfo = useSelector((state) => state.cartList.cartData);

  const [cartData, setCartData] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    if (cartInfo) {
      setCartData(cartInfo);
    }
  }, [cartInfo]);

  const checkOutHandler = () => {
    dispatch(
      checkOutAct({
        val: "check",
      })
    );
    alert("Order Placed");
    changeCartToggleState();
  };

  useEffect(() => {
    const totalForCurrentProduct = cartInfo.map((item) => {
      return item.count * item.price;
    });
    const totalAddition = totalForCurrentProduct.reduce((acc, val) => {
      return acc + val;
    }, 0);

    setTotalAmount(totalAddition);
  }, [cartInfo]);

  return (
    <div className={cartState ? classes.ContainerClosed : classes.Container}>
      <section className={classes.CartMainContainer}>
        <header className={classes.Header}>
          <ul
            aria-label="menu"
            role="tablist"
            className={classes.HeaderSecondaryContainer}
          >
            <li tabIndex="0" className={classes.Heading}>
              MY Cart
            </li>
            <li
              tabIndex="0"
              role="presentation"
              onClick={changeCartToggleState}
              aria-label="Close"
              className={classes.CloseContainer}
            >
              <img src={cross} alt="Close Icon" />
            </li>
          </ul>
        </header>
        {cartData.length === 0 ? (
          <div className={classes.InformationContainer}>
            <p className={classes.InformationPrimary}>No Item in Cart</p>
            <p className={classes.InformationSecondary}>
              Your Favorite Items are just clicked away
            </p>
          </div>
        ) : (
          <div className={classes.SecondaryContainer}>
            <Suspense fallback={<h1>Loading...</h1>}>
              {cartData.map((item) => (
                <CartCard
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  imageURL={item.imageURL}
                  price={item.price}
                  stock={item.stock}
                  count={item.count}
                />
              ))}
            </Suspense>
            <div className={classes.PromoBanner}>
              <img src={LowestLogo} alt="Promo banner" />
              <p>You won't find it cheaper anywhere</p>
            </div>
          </div>
        )}
        {cartData.length === 0 ? (
          <button
            tabIndex="0"
            onClick={() => {
              changeCartToggleState();
              history.push("/products");
            }}
            className={classes.ShoppingBtnEmpty}
            type="button"
          >
            Start Shopping
          </button>
        ) : (
          <div className={classes.BottomContainer}>
            <p>Promo code can be applied on payment page</p>
            <button
              tabIndex="0"
              onClick={() => {
                checkOutHandler();
              }}
              className={classes.ShoppingBtn}
              type="button"
            >
              <p>Proceed to checkout</p>
              <p>Rs.{totalAmount}</p>
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
