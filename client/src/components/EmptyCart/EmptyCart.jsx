import Button from "../UI Components/Button/Button";
import classes from "./EmptyCart.module.css";

const EmptyCart = () => {
  return (
    <section className={classes.empty__cart}>
      <div className={classes.empty__cart__container}>
        <h2 className={classes.empty__cart__container__title}>
          No items in your cart
        </h2>
        <p className={classes.empty__cart__container__text}>
          Your favourite items are just a click away
        </p>
      </div>
      <footer className={classes.empty__cart__footer}>
        <Button className={classes.empty__cart__footer__button}>
          Start Shopping
        </Button>
      </footer>
    </section>
  );
};

export default EmptyCart;
