import Counter from "../UI Components/Counter/Counter";
import Image from "../UI Components/Image/Image";
import "./CartSection.scss";

const CartSection = ({ product }) => {
  const totalPrice = product.quantity * product.price;
  return (
    <section className="cart-section">
      <Image
        source={product.imageUrl}
        alt={`Image of ${product.name}`}
        className="cart-section__image"
      />
      <h2 className="cart-section__title">{product.name}</h2>
      <Counter
        id={product.id}
        quantity={product.quantity}
        price={product.price}
        stock={product.stock}
      />
      <p className="cart-section__totalprice">Rs.{totalPrice}</p>
    </section>
  );
};

export default CartSection;
