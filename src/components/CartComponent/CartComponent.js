import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ButtonComponent from "../../components/CustomComponent/ButtonComponent/ButtonComponent";
import CartItemComponent from "./CartItemComponent";
import "./CartComponent.scss";

import { uiActions } from "../../store/uiSlice";
const CartComponent = () => {
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartReducer.cartItems);
  const cartTotalQty = useSelector((state) => state.cartReducer.totalQty);
  const cartTotalPrice = useSelector((state) => state.cartReducer.totalPrice);
  const isMobile = useSelector((state) => state.uiReducer.isMobile);
  const isTablet = useSelector((state) => state.uiReducer.isTablet);
  //console.log(cartItems)
  return (
    <div className="cart">
      {(isMobile || isTablet) && (
        <>
          <div style={{ height: "30px" }}></div>
          <div className=" heading l-text">
            My Cart{" "}
            {cartTotalQty
              ? cartTotalQty > 1
                ? `(${cartTotalQty} items)`
                : `(${cartTotalQty} item)`
              : ""}
          </div>
        </>
      )}
      <div style={{ height: "20px" }}></div>
      {cartItems.length > 0 && (
        <>
          {cartItems.map((item) => (
            <CartItemComponent key={item.id} product={item} />
          ))}
          <div style={{ height: "30px" }}></div>
          <div className="cart-item-row">
            <img
              src={`/static/images/lowest-price.png`}
              alt="guaranteed banner"
            />
            <div className=" text" style={{ paddingLeft: "20px" }}>
              You won't find it cheaper anywhere
            </div>
          </div>
          <div className="checkout text">
            <div style={{ backgroundColor: "white", textAlign: "center" }}>
              Promo code can be applied on payment
            </div>
            <ButtonComponent className="proceed-btn">
              <div className="checkout-btn">
                <div className="justify-content-start">Proceed to Checkout</div>
                <span>
                  Rs.{cartTotalPrice} {`>`}
                </span>
              </div>
            </ButtonComponent>
          </div>
        </>
      )}
      {!cartItems.length > 0 && (
        <>
          <div className="empty-cart">
            <div>No items in your cart.</div>
            <p className="text">Your favorite items are just a click away</p>
          </div>
          <ButtonComponent
            style={{ width: "300px" }}
            onClick={() => {
              navigation("/products");
              dispatch(uiActions.setshowCart({ show: false }));
            }}
          >
            Start Shopping
          </ButtonComponent>
        </>
      )}
    </div>
  );
};

export default CartComponent;