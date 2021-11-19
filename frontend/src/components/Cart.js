import { useContext } from 'react';
import { CartContext } from '../store/cart-context';
import CartItem from './CartItem';
import { ModalContext } from '../store/modal-context';
import { CartModalStyles, Backdrop } from './styles/modalStyles';
import { Link } from 'react-router-dom';

export default function Cart(props) {
  const ctx = useContext(CartContext);
  const ctxModal = useContext(ModalContext);
  const cartItemRemoveHandler = (id) => {
    ctx.removeItem(id);
  }
  const cartItemAddHandler = (item) => {
    ctx.addItem({ ...item, amount: 1 });
  }
  const cartItems = (
    <div className="cart-container">
      <div className="cart-header"><p>Cart {ctx.totalItemsCount}</p><span onClick={ctxModal.hideCart}>&times;</span></div>
      <ul className="cart-items">
        {ctx.items.length ? ctx.items.map(item => (
          <CartItem
            key={item.id}
            name={item.name}
            image={item.imageURL}
            price={item.price}
            amount={item.amount}
            onRemove={cartItemRemoveHandler.bind(this, item.id)}
            onAdd={cartItemAddHandler.bind(this, item)}
          />
        )) :
          (
            <div>
              <p>No Items in cart</p>
              <Link to="/products" onClick={ctxModal.hideCart}>Click here to start Shopping</Link>
            </div>
          )}
      </ul>
      <article>add boxxxx</article>
      <div className="checkout">
        <p>You can apply Promo Code on Checkout🤑</p>
        <Link to={`/checkout`} onClick={ctxModal.hideCart}><span>checkout-Total💸</span> <span>{ctx.totalAmount}</span></Link>
      </div>
    </div>
  );

  return (
    <CartModalStyles>
      <Backdrop></Backdrop>
      {ctxModal.cartIsShown && cartItems}
    </CartModalStyles>
  )
}