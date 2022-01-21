import Button from "../UI Components/Button/Button";
import "./EmptyCart.scss";

const EmptyCart = () => {
  return (
    <section className="empty-cart">
      <div className="empty-cart__container">
        <h2 className="empty-cart__container__title">No items in your cart</h2>
        <p className="empty-cart__container__text">
          Your favourite items are just a click away
        </p>
      </div>
      <footer className="empty-cart__footer">
        <Button className="empty-cart__footer__button">Start Shopping</Button>
      </footer>
    </section>
  );
};

export default EmptyCart;
