import {
  selectCartItems,
  selectCartTotal,
  selectCartCount,
  selectIsCartOpen,
} from "../store/slices/cart/cart.selector";
import { setIsCartOpen } from "../store/slices/cart/cart.action";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "./Button";
import CartItems from "./CartItems";
import { ReactComponent as NextIcon } from "../Assets/svg/arrow_forward_ios_white_24dp.svg";
import PriceBadge from "../static/images/lowest-price.png";
import "../styles/cart-dropdown.scss";
import { useNavigate } from "react-router-dom";

const CartDropdown = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const basket = useSelector(selectCartItems);
  const count = useSelector(selectCartCount);
  const price = useSelector(selectCartTotal);
  const isCartOpen = useSelector(selectIsCartOpen);

  const handleClose = () => {
    if (window.screen.width >= 992) {
      dispatch(setIsCartOpen(!isCartOpen));
    } else {
      navigate("/products");
    }
  };

  const handleProceed = () => {
    alert("We are yet to develope payment feature, stay tuned!");
    dispatch(setIsCartOpen(!isCartOpen));
  };

  return (
    <Fragment>
      <div className="cart-dropdown-container">
        <div className="cart-header">
          <h3 className="cart-header-title">
            My cart {count > 0 ? `(${count} item)` : ""}
          </h3>
          <span onClick={handleClose}>&#10005;</span>
        </div>

        {count > 0 ? (
          <Fragment>
            <div className="cart-items">
              {basket &&
                basket.map((item) => (
                  <CartItems cartItem={item} key={item.id} />
                ))}
            </div>

            <div className="price-badge">
              <img src={PriceBadge} alt={"Price-badge"} />
              <span>You won't find it cheaper anywhere</span>
            </div>

            <Button buttonType="checkout" onClick={handleProceed}>
              <span className="title">Proceed to cart</span>
              <div className="cart-proceed">
                <span className="title">Rs.{price}</span>
                <NextIcon />
              </div>
            </Button>
          </Fragment>
        ) : (
          <div>
            <div className="empty-cart-items">
              <h2>No Items in your Cart</h2>
              <span>Your favourite items are just a click away</span>
            </div>
            <Button buttonType="max" onClick={handleClose}>
              Start Shopping
            </Button>
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default CartDropdown;
