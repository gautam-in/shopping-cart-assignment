import Low from "static/images/lowest-price.png";
import { Container, CartProduct, LowPrice } from "./CartBody.styles";

import { demoItem } from "./demo";
import TempImg from "static/images/products/fruit-n-veg/apple.jpg";

const CartBody = () => {
  console.log({ demoItem });
  return (
    <Container>
      {demoItem.map((item) => (
        <CartProduct key={item.id}>
          <img src={TempImg} alt={item.name} />

          <div className="details">
            <div className="item-name">{item.name}</div>
            <div className="item-quantity">
              <button className="quantity-btn">-</button>
              <span className="total-item">{item.totalItem}</span>
              <button className="quantity-btn">+</button>
              <span className="times">&#10006;</span>
              <span className="price">Rs.{item.price}</span>
            </div>
          </div>

          <div className="total-price">Rs.{item.totalItem * item.price}</div>
        </CartProduct>
      ))}
      <LowPrice>
        <img className="low-img" src={Low} alt="low-price" />
        <span>You won&apos;t find it cheaper anywhere</span>
      </LowPrice>
    </Container>
  );
};

export default CartBody;
