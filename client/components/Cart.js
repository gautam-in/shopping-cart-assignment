import { CartContainer } from "../styles/CartStyle";
import { useDispatch, useSelector } from "react-redux";
import Router from "next/router";
import { toast } from "react-toastify";

import {
  addCartItem,
  clearCart,
  deleteCartQuantity,
  toggleCart,
} from "../Redux/actions/actions";

const Cart = () => {
  const dispatch = useDispatch();
  const loggedInuser = useSelector((state) => state.user);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const cartQuantity = useSelector((state) => state.cart.cartQuantity);
  const cortTotal = useSelector((state) => state.cart.cartTotal);

  const checkOut = () => {
    if (loggedInuser.email) {
      dispatch(clearCart());
      toast.success("Checkout successfull");
    } else {
      toast.error("Please login to checkout");
      dispatch(toggleCart());
      Router.push(`/signIn?redirect=checkout`);
    }
  };

  return (
    <CartContainer>
      <div className="cartScreen">
        <div className="cartBox">
          <div className="cartHeader">
            <p>
              My Cart {cartQuantity > 0 && <span>{cartQuantity} items</span>}
            </p>
            <p onClick={() => dispatch(toggleCart())}>&#x2716;</p>
          </div>
          <div className="cartContent">
            {cartItems.length < 1 ? (
              <div className="noItem">
                <p>No items in your cart</p>
                <p>your favourite items are just a click away</p>
              </div>
            ) : (
              <div className="cartItems">
                {cartItems.map((item) => (
                  <div className="cartItemRow" key={item.id}>
                    <img src={item.imageURL} alt={item.name} />
                    <div className="cartItemContent">
                      <h4>{item.name}</h4>
                      <div className="cartItemDetail">
                        <div className="cartItemAmount">
                          <button
                            onClick={() => {
                              dispatch(deleteCartQuantity(item));
                            }}
                          >
                            -
                          </button>
                          <span>{item.quantity}</span>
                          <button
                            onClick={() => {
                              dispatch(addCartItem(item));
                            }}
                          >
                            <span>+</span>
                          </button>
                          <span>X</span>
                          <span>Rs.{item.price}</span>
                        </div>
                        <span>Rs.{item.price * item.quantity}</span>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="cartLowestPrice">
                  <img
                    src="./../../static/images/lowest-price.png"
                    alt="lowest price"
                  />
                  <p>You won&apos;t find it cheaper anywhere</p>
                </div>
              </div>
            )}
          </div>
          <div className="cartFooter">
            {cartQuantity > 0 ? (
              <>
                <p>Promo code can be applied on payment page</p>
                <button onClick={checkOut}>
                  <span>Proceed to Checkout</span>
                  <span>Rs.{cortTotal} &nbsp; &gt;</span>
                </button>
              </>
            ) : (
              <>
                <button
                  style={{ justifyContent: "center" }}
                  onClick={() => {
                    dispatch(toggleCart());
                    Router.push("/");
                  }}
                >
                  Start Shopping
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </CartContainer>
  );
};

export default Cart;
