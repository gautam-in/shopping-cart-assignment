import "./cart-row.styles.scss";

const CartRow = ({ item, addItemToCart, removeItemFromCart }) => {
  return (
    <div className="cart-item">
      <div className="cart-image-desc d-flex">
        <img className="cart-image " src={item.imageURL} alt={item.name} />
        <div>
          <div className="cart-item-title">{item.name}</div>
          <div className="d-flex">
            <div
              className="control-button"
              onClick={() => removeItemFromCart(item)}
            >
              -
            </div>
            <div className="mx-2">{item.quantity}</div>
            <div className="control-button" onClick={() => addItemToCart(item)}>
              +
            </div>
            <div className="mx-2"> ✖</div>
            <span>Rs.{item.price}</span>
          </div>
        </div>
      </div>
      <div className="align-self-end pb-3">Rs.{item.quantity * item.price}</div>
    </div>
  );
};

export default CartRow;
