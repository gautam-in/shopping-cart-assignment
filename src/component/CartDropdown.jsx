import {
  selectCount,
  selectBasket,
  selectTotalPrice,
  openCart,
  selectIsCartOpen,
} from "../redux/features/appSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import CartItems from "./CartItems";
import { ReactComponent as NextIcon } from "../Assets/svg/arrow_forward_ios_white_24dp.svg";
import PriceBadge from "../static/images/lowest-price.png";

import "../styles/cart-dropdown.scss";

const CartDropdown = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const basket = useSelector(selectBasket);
  const count = useSelector(selectCount);
  const price = useSelector(selectTotalPrice);
  const cartOpen = useSelector(selectIsCartOpen);

  const handleClose = () => {
    dispatch(openCart(!cartOpen))
    navigate('/')
  };

  const handleProceed = () => {
    alert("We are yet to develope payment feature, stay tuned!")
    navigate('/')
    dispatch(openCart(!cartOpen))
  }
  return (
    <div className="cart-dropdown-container">
      <div className="cart-header">
        <h3>My cart {count > 0 ? `(${count} item)` : ""}</h3>
        <span onClick={handleClose}>&#10005;</span>
      </div>

      {count > 0 ? (
        <>
          <div className="cart-items">
            {basket.map((item) => (
              <CartItems cartItem={item} key={item.id} />
            ))}
          </div>

          <div className="price-badge">
            <img src={PriceBadge} alt="Price-badge" />
            <span>You won't find it cheaper anywhere</span>
          </div>

          <Button buttonType="checkout" onClick={handleProceed}>
            <span className="title">Proceed to cart</span>
            <div className="cart-proceed">
              <span className="title">Rs.{price}</span>
              <NextIcon />
            </div>
          </Button>
        </>
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
  );
};

export default CartDropdown;

