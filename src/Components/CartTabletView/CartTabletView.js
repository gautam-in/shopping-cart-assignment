import { useEffect, useState } from "react";
import CartSection from "../CartSection/CartSection";
import EmptyCart from "../EmptyCart/EmptyCart";
import Button from "../UI Components/Button/Button";
import Image from "../UI Components/Image/Image";
import "./CartTabletView.scss";

const CartTabletView = ({ className = "", count, products }) => {
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(
      Object.values(products).reduce(
        (acc, current) => acc + current.quantity * current.price,
        0
      )
    );
  }, [products]);

  return (
    <div className={`${className} cart-tablet`}>
      {count > 0 ? (
        <>
          <section className="cart-tablet__section-wrapper">
            {Object.values(products).map((product) => {
              return <CartSection key={product?.id} product={product} />;
            })}

            <div className="cart-tablet__discount">
              <Image
                source="/images/lowest-price.png"
                alt={"Discounted Image"}
                className={"cart-tablet__discount__img"}
              />
              <p className="cart-tablet__discount__text">
                You won't find it cheaper anywhere
              </p>
            </div>
          </section>

          <footer className="cart-tablet__footer">
            <p className="cart-tablet__footer__text">
              Promo code can be applied on payment page
            </p>
            <Button className={"cart-tablet__footer__buyout-button"}>
              <span>Proceed to Checkout</span>
              <span>Rs.{totalAmount} &#10095;</span>
            </Button>
          </footer>
        </>
      ) : (
        <EmptyCart />
      )}
    </div>
  );
};

export default CartTabletView;
