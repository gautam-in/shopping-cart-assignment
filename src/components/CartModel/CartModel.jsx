import React from "react";
import "../CartModel/CartModel.scss";
import Button from "../Button/Button";
import { MdNavigateNext } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCartTotalPrice,
  selectCartItems,
  selectCartTotalCount,
} from "../../redux/selectors/cardSelector";
import {
  decrementItemsFromCart,
  incrementItemsFromCart,
} from "../../redux/actions/cartActions";

const CartModel = ({ handleCartOpen }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const totalPrice = useSelector(selectCartTotalPrice);
  const totalCount = useSelector(selectCartTotalCount);

  return (
    <div className="CartModel-container">
      <div className="cartModel">
        <header className="cartModel-header-container">
          <div className="cartModel-header-left">
            My Cart <span>({totalCount} item(s))</span>
          </div>
          <div className="cartModel-header-right" onClick={handleCartOpen}>
            x
          </div>
        </header>
        {totalCount > 0 ? (
          <>
            <div className="cartModel-items-banner-container">
              {cartItems &&
                cartItems.map((product) => (
                  <div key={product.id} className="cartModel-items-container">
                    <img
                      className="cartModel-items-image"
                      src={product.imageURL}
                      alt="product"
                    />
                    <div className="cartModel-name-price-container">
                      <div className="cartModel-items-name">{product.name}</div>
                      <div className="cartModel-items-price">
                        <div className="cartModel-items-price-calculator">
                          <button
                            className="cartModel-price-button"
                            onClick={() =>
                              dispatch(
                                decrementItemsFromCart(cartItems, product)
                              )
                            }
                          >
                            -
                          </button>
                          {product.quantity}
                          <button
                            className="cartModel-price-button"
                            onClick={() =>
                              dispatch(
                                incrementItemsFromCart(cartItems, product)
                              )
                            }
                          >
                            +
                          </button>
                          <span>x</span>
                          Rs{product.price}
                        </div>
                        <span>Rs{product.quantity * product.price}</span>
                      </div>
                    </div>
                  </div>
                ))}
              <div className="cartModel-priceBanner">
                <img
                  src="/static/images/lowest-price.png"
                  alt="lowest-price png"
                />
                <p>You won't find it cheaper anywhere</p>
              </div>
            </div>
            <div className="cartModel-checkout-container">
              <span className="promo">
                Promo code can be applied on payment page.
              </span>
              <Button type="checkout">
                <span>Proceed to cart</span>
                <div className="cart-proceed">
                  <span>Rs.{totalPrice}</span>
                  <MdNavigateNext />
                </div>
              </Button>
            </div>
          </>
        ) : (
          <div className="cartModel-empty-container">
            <div>
              <h2>No Items in your Cart</h2>
              <span>Your favourite items are just a click away</span>
            </div>
            <Button type="sign" onClick={handleCartOpen}>
              Start Shopping
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartModel;
