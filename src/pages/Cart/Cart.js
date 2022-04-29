import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import BButton from "../../components/UI/Button/Button";
import CartItem from "./CartItem";
import "./Cart.scss";
import { uiActions } from "../../store/uiSlice";
const Cart = () => {
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
            <CartItem key={item.id} product={item} />
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
            <BButton className="proceed-btn">
              <div className="checkout-btn">
                <div className="justify-content-start">Proceed to Checkout</div>
                <span>
                  Rs.{cartTotalPrice} {`>`}
                </span>
              </div>
            </BButton>
          </div>
        </>
      )}
      {!cartItems.length > 0 && (
        <>
          <div className="empty-cart">
            <div>No items in your cart.</div>
            <p className="text">Your favorite items are just a click away</p>
          </div>
          <BButton
            style={{ width: "300px" }}
            onClick={() => {
              navigation("/products");
              dispatch(uiActions.setshowCart({ show: false }));
            }}
          >
            Start Shopping
          </BButton>
        </>
      )}
    </div>
  );
};

export default Cart;
