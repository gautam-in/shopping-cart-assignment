import Counter from "../UI Components/Counter/Counter";
import Image from "../UI Components/Image/Image";
import classes from "./CartSection.module.css";

const CartSection = ({ product }) => {
  const totalPrice = product.quantity * product.price;
  return (
    <section className={classes.cart__section}>
      <Image
        source={product.imageURL}
        alt={`Image of ${product.name}`}
        className={classes.cart__section__image}
      />
      <div className={classes.cart__container}>
        <h2 className={classes.cart__section__title}>{product.name}</h2>
        <Counter
          id={product.id}
          quantity={product.quantity}
          price={product.price}
          stock={product.stock}
        />
      </div>
      <p className={classes.cart__section__totalprice}>Rs.{totalPrice}</p>
    </section>
  );
};

export default CartSection;
