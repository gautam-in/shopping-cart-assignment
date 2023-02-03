import { useMarket } from "context";
import { useMemo } from "react";
import classes from "./cart.module.scss";
import { CartItem } from "./CartItem";

export const Cart = () => {
  const { cart, setIsCartOpen } = useMarket();

  const total = useMemo(() => {
    return cart?.reduce((acc: number, item: Product) => acc + item.price, 0)
  }, [cart])

  return (
    <div className={classes.cart}>
      <div className={classes.cart_header}>
        <p>My Cart</p>
        <button onClick={() => setIsCartOpen(false)}>
          <img src="/static/images/cross.svg" alt="Close Cart drawer" />
        </button>
      </div>

      <div className={classes.cart_content}>
        {cart.length === 0 ? (
          <div className={classes.cart_no_item}>
            <h1>No items in your cart</h1>
            <p>Your favourite items are one click away</p>
          </div>
        ) : (
          <>
            {cart?.map((item: Product) => {
              return <CartItem {...item} />;
            })}
            <div className={classes.lowest_price_banner}>
              <img
                src="/static/images/lowest-price.png"
                alt="lowest price guaranteed"
              />
              <p>You won't find it cheeper anywhere</p>
            </div>
          </>
        )}
      </div>

      <div className={classes.cart_footer}>
        {cart?.length === 0 ? (
          <button
            className={classes.footer_btn}
            onClick={() => setIsCartOpen(false)}
          >
            Start Shopping
          </button>
        ) : (
          <>
            <p>Promo code can be applied on the payment page</p>
            <button
              className={classes.footer_btn_checkout}
              onClick={() => setIsCartOpen(false)}
            >
              <p>Proceed to Checkout</p>
              <p>
                Rs.{total} {">"}
              </p>
            </button>
          </>
        )}
      </div>
    </div>
  );
};
