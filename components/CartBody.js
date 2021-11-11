import { faChevronRight, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import CartItem from "./CartItem";

const Cart = styled.div`
  background: #eeeeee;
  border: 1px solid #e5e5e5;
  border-radius: 2px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
  color: #333;
  display: flex;
  flex-direction: column;
  font-size: 15px;
  justify-content: space-between;
  z-index: 1;
  position: absolute;
  right: 0;
  z-index: 9999;
  width: 400px;
  transform: scale(0);
  opacity: 0;
  transition: opacity 0.15s linear;

  @media (max-width: 767px) {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100%;
  }

  .cartItemsWrapper {
    max-height: 60vh;
    overflow-y: auto;

    @media (max-width: 767px) {
      max-height: 80vh;
    }
  }

  &.cartOpen {
    transform: scale(1);
    opacity: 1;
  }
`;

const CardHeader = styled.h2`
  font-weight: bold;
  margin: 0;
  padding: 15px;
  text-align: center;
  background: #222;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;

  .cart-count {
    font-weight: normal;
  }
`;

const LimitedBanner = styled.div`
  background: #fff;
  margin: 0 10px 10px 10px;
  padding: 10px;
  border-radius: 3px;
  display: flex;
  align-items: center;

  img {
    width: 100px;
    margin: 0 20px 0 0;
  }
`;

const CartFooter = styled.div`
  background-color: #fff;
  border-top: 1px solid #e5e5e5;
  padding: 10px;
  text-align: center;

  p {
    margin: 0 0 10px 0;
  }

  .checkout-price {
    display: flex;
    align-items: center;

    svg {
      margin-left: 10px;
    }
  }
`;

const CloseCart = styled.button`
  border: 0;
  background: none;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  padding: 0;
  margin: 0;
  cursor: pointer;
`;

const CheckoutBtn = styled.button`
  background-color: var(--colorPrimary);
  border: 0;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px;
  width: 100%;
`;

export default function CartBody({ toggle, toggleCart, cartItems }) {
  const cartTotal = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.count * item.price;
    });
    return total;
  };

  const handleCheckout = () => {
    if (cartTotal() > 0) {
      alert("Order Placed!");
    } else {
      alert("Please add a product to cart");
    }
  };
  return (
    <Cart className={`${toggle ? "cartOpen" : ""}`}>
      <CardHeader>
        <span>
          My Cart <span className="cart-count">({cartItems.length} Item)</span>
        </span>{" "}
        <CloseCart onClick={toggleCart}>
          <FontAwesomeIcon className="close-btn" icon={faTimes} />
        </CloseCart>
      </CardHeader>
      <div className="cartItemsWrapper">
        {cartItems &&
          cartItems.map((item) => (
            <CartItem
              key={item.id}
              name={item.name}
              imageURL={item.imageURL}
              price={item.price}
              count={item.count}
              id={item.id}
            />
          ))}

        <LimitedBanner>
          <img src="/static/images/lowest-price.png" alt="Lowest" />
          <span className="limited-text">
            You won't find it cheaper anywhere
          </span>
        </LimitedBanner>
      </div>
      <CartFooter>
        <p>Promo code can be applied on payment page</p>
        <CheckoutBtn onClick={handleCheckout}>
          Proceed to Checkout{" "}
          <span className="checkout-price">
            Rs.{cartTotal()} <FontAwesomeIcon size="xs" icon={faChevronRight} />
          </span>
        </CheckoutBtn>
      </CartFooter>
    </Cart>
  );
}
