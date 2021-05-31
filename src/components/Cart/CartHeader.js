import { Container } from "./CartHeader.styles";
const CartHeader = ({ closeCart, totalItems }) => {
  return (
    <Container>
      <div className="title">
        My Cart{" "}
        <span className="items">
          ({`${totalItems} ${totalItems > 1 ? "items" : "item"}`})
        </span>
      </div>
      <div className="close-cart" onClick={closeCart}>
        &#10006;
      </div>
    </Container>
  );
};

export default CartHeader;
