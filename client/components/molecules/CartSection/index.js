import { useCart } from "../../../global/utils/useCart";
import Button from "../../atoms/Button";
import CartItem from "../CartItem";
import {
  CartContainer,
  CartFooter,
  CartHeading,
  CartWrapper,
  Modal,
} from "./CartSection.styles";

const CartSection = () => {
  const {
    cartOpen,
    cartItems,
    closeCart,
    getCartItemsCount,
    getTotalCartAmount,
  } = useCart();
  const cartItemsCount = getCartItemsCount();
  const totalCartAmount = getTotalCartAmount();

  return (
    <Modal cartOpen={cartOpen}>
      <CartWrapper cartOpen={cartOpen} aria-label="Cart section" aria-live>
        <CartHeading>
          <div>
            <h3>My Cart</h3>
            <span>
              ({cartItemsCount} item{cartItemsCount !== 1 && "s"})
            </span>
          </div>
          <button
            id="close-button"
            name="Close cart"
            aria-label="Close cart"
            onClick={closeCart}
            tabIndex={cartOpen ? "0" : "-1"}
          >
            &times;
          </button>
        </CartHeading>
        <CartContainer emptyCart={!cartItems.length}>
          {cartItems?.length ? (
            <>
              {cartItems.map((cartItem) => (
                <CartItem key={cartItem.id} cartItem={cartItem} />
              ))}
            </>
          ) : (
            <>
              <h4>No items in your cart</h4>
              <p>Your favourite items are just a click away.</p>
            </>
          )}
        </CartContainer>
        <CartFooter cartItemsCount={cartItemsCount}>
          {cartItemsCount ? (
            <>
              <p>Promo code can be applied on payment page</p>
              <Button
                title={`Proceed to Checkout @ Rs.${totalCartAmount}`}
                onClick={closeCart}
              >
                <span>Proceed to Checkout</span>{" "}
                <span>Rs. {totalCartAmount}</span>
              </Button>
            </>
          ) : (
            <Button
              title="Start Shopping"
              tabIndex={cartOpen ? "0" : "-1"}
              onClick={closeCart}
            >
              Start Shopping
            </Button>
          )}
        </CartFooter>
      </CartWrapper>
    </Modal>
  );
};

export default CartSection;
