import { useEffect, useState } from "react";
import CartSection from "../CartSection/CartSection";
import EmptyCart from "../EmptyCart/EmptyCart";
import Button from "../UI Components/Button/Button";
import Image from "../UI Components/Image/Image";
import classes from "./CartTableView.module.css";

const CartTableView = ({ className = "", count, products }) => {
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
    <div className={`${className} ${classes.cart__table}`}>
      {count > 0 ? (
        <>
          <section className={classes.cart__tablet__section__wrapper}>
            {Object.values(products).map((product) => {
              return <CartSection key={product?.id} product={product} />;
            })}

            <div className={classes.cart__tablet__discount}>
              <Image
                source="static/images/lowest-price.png"
                alt={"Discounted Image"}
                className={classes.cart__tablet__discount__img}
              />
              <p className={classes.cart__tablet__discount__text}>
                You won't find it cheaper anywhere
              </p>
            </div>
          </section>

          <footer className={classes.cart__tablet__footer}>
            <p className={classes.cart__tablet__footer__text}>
              Promo code can be applied on payment page
            </p>
            <Button className={classes.cart__tablet__footer__buyout__button}>
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

export default CartTableView;
