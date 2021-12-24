function CartItemList(props) {
  const { item, handleOnRemoveItem, handleOnAddItem } = props;
  return (
    <>
      <li className="modal__body_cartList_items d-flex mb-2" key={item.id}>
        <img src={item.imageURL} className="modal__body_cartList_img" alt={item.name} />
        <div className="modal__body_cartList_details">
          <h2 className="modal__body_cartList_name truncate mb-3">{item.name}</h2>
          <button className="modal__body_cartList_buttonIncrementDecrement" onClick={() => handleOnRemoveItem(item)}>
            -
          </button>
          <span className="quantity">{item.quantity}</span>
          <button className="modal__body_cartList_buttonIncrementDecrement" onClick={() => handleOnAddItem(item)}>
            +
          </button>
          <p className="d-inline-block mb-0">X</p>
          <span className="modal__body_cartList_price mx-4 ">
            <span> &#8377;</span> {item.price}
          </span>
          <span className="cart_list-item-total  mx-5 px-5">
            <span> &#8377;</span> {item.quantity * item.price}
          </span>
        </div>
      </li>
    </>
  );
}

export default CartItemList;
